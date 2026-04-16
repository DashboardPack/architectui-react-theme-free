import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const analyze = process.env.ANALYZE === 'true';

// CommonJS packages in the tree whose `exports.default = Component` +
// `__esModule: true` shape doesn't round-trip cleanly through Vite/esbuild's
// auto-interop. `import X from 'pkg'` hands back the whole namespace object
// and `import { Y } from 'pkg'` resolves to undefined, because the optimised
// bundle only emits `export default require_X()` with no named re-exports.
//
// Listing them here enables the rewrite plugin below, which converts every
// `import X from 'pkg'` and `import { Y } from 'pkg'` at the consumer side
// into a namespace-destructure that handles both the plain-CJS
// (`module.exports = X`) and Babel-CJS (`exports.default = X`) shapes
// uniformly. Source files stay authored with the natural import syntax.
const cjsInteropPackages = [
  'react-bootstrap-sweetalert',
  'react-copy-to-clipboard',
  'react-countup',
  'react-data-table-component',
  'react-input-mask',
  'react-liquid-gauge',
  'react-perfect-scrollbar',
  'react-responsive-tabs',
  'react-slick',
  'react-sparklines',
  'react-sticky-el',
];

const cjsInteropPlugin = (pkgs) => {
  const specifierSet = new Set(pkgs);
  const nsVar = (spec) => `__cjsns_${spec.replace(/[^a-z0-9]/gi, '_')}`;
  const modVar = (spec) => `__cjsmod_${spec.replace(/[^a-z0-9]/gi, '_')}`;
  // Matches:
  //   import Foo from 'pkg';
  //   import { A, B as C } from 'pkg';
  //   import Foo, { A } from 'pkg';
  const re = /^import\s+([^;]+?)\s+from\s+['"]([^'"]+)['"];?/gm;
  return {
    name: 'architectui:cjs-interop',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('/node_modules/')) return null;
      if (!/\.(jsx?|tsx?)$/.test(id.split('?')[0])) return null;
      if (!pkgs.some((p) => code.includes(p))) return null;
      let out = '';
      let lastIndex = 0;
      let hit = false;
      re.lastIndex = 0;
      for (const m of code.matchAll(re)) {
        const [full, clause, spec] = m;
        if (!specifierSet.has(spec)) continue;
        hit = true;
        const start = m.index;
        out += code.slice(lastIndex, start);
        const ns = nsVar(spec);
        // `mod` covers the unwrapped CJS shape for default-import resolution
        // (import X from 'pkg' → X = exports.default ?? module.exports). For
        // named-import resolution we spread ns.default into ns so both the
        // Vite-wrapped CJS case (`ns = { default: { foo, bar } }`) and a
        // mixed-exports ESM case (`ns = { foo, default: Comp }`) produce the
        // right value for `{ foo } = ...`.
        const mod = modVar(spec);
        const namedSrc = `__cjsnamed_${spec.replace(/[^a-z0-9]/gi, '_')}`;
        const parts = [
          `import * as ${ns} from '${spec}';`,
          `const ${mod} = ${ns} && ${ns}.default !== undefined ? ${ns}.default : ${ns};`,
          `const ${namedSrc} = Object.assign({}, ${mod}, ${ns});`,
        ];
        const trimmed = clause.trim();
        // Split default + named parts: `Foo` / `{ A, B }` / `Foo, { A, B }`
        let defaultName = null;
        let named = null;
        const braceIdx = trimmed.indexOf('{');
        if (braceIdx === -1) {
          defaultName = trimmed;
        } else {
          const defaultPart = trimmed.slice(0, braceIdx).replace(',', '').trim();
          if (defaultPart) defaultName = defaultPart;
          const end = trimmed.indexOf('}', braceIdx);
          named = trimmed.slice(braceIdx + 1, end).trim();
        }
        if (defaultName) {
          parts.push(
            `const ${defaultName} = ${mod} && ${mod}.__esModule && ${mod}.default !== undefined ? ${mod}.default : ${mod};`
          );
        }
        if (named) {
          // Handle `A as B` → `A: B`
          const rewritten = named
            .split(',')
            .map((n) => n.trim())
            .filter(Boolean)
            .map((n) => {
              const asMatch = n.match(/^(\w+)\s+as\s+(\w+)$/);
              return asMatch ? `${asMatch[1]}: ${asMatch[2]}` : n;
            })
            .join(', ');
          parts.push(`const { ${rewritten} } = ${namedSrc};`);
        }
        out += parts.join('\n');
        lastIndex = start + full.length;
      }
      if (!hit) return null;
      out += code.slice(lastIndex);
      return { code: out, map: null };
    },
  };
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.VITE_PORT) || 3001;
  const base = env.VITE_BASE || './';

  return {
    plugins: [
      cjsInteropPlugin(cjsInteropPackages),
      react(),
      analyze &&
        visualizer({
          filename: 'build/stats.html',
          open: true,
          gzipSize: true,
          brotliSize: true,
          template: 'treemap',
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        // `react-loaders` (3.0.1, last published 2018) is a webpack-bundled UMD
        // that produces default + named exports in a shape the optimised
        // ESM output can't re-export cleanly. Its only job is to emit the
        // DOM shape `loaders.css` animations expect, which is maybe twenty
        // lines of JSX. Route the package specifier to a local component
        // that does exactly that so the dep can drop out of the tree.
        'react-loaders': path.resolve(__dirname, './src/components/Loader.jsx'),
        // Vite 8 / rolldown wraps internmap's ESM `export class InternMap` in a
        // lazy `__esmMin(cb)` initializer but d3-array's `ordinal.js` runs
        // `new InternMap()` eagerly inside another wrapper — the lazy cb never
        // fires before use, so production throws "InternMap is not a
        // constructor". The dist/ UMD build defines the class synchronously
        // and avoids the wrapping.
        internmap: path.resolve(__dirname, './node_modules/internmap/dist/internmap.js'),
      },
      dedupe: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        // Force a proper bundle so the `InternMap` class doesn't get wrapped
        // in a lazy initializer that leaves it undefined at the point
        // recharts calls `new InternMap()`.
        'internmap',
        'd3-array',
      ],
    },
    server: {
      port,
      host: true,
      open: true,
    },
    build: {
      outDir: 'build',
      sourcemap: true,
      target: 'es2020',
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (!id.includes('node_modules')) return;
            if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id))
              return 'vendor-react';
            if (/[\\/]node_modules[\\/](@reduxjs|redux|react-redux|immer|reselect)[\\/]/.test(id))
              return 'vendor-redux';
            if (/[\\/]node_modules[\\/](reactstrap|react-bootstrap|bootstrap|@restart)[\\/]/.test(id))
              return 'vendor-bootstrap';
            if (/[\\/]node_modules[\\/]@fortawesome[\\/]/.test(id)) return 'vendor-fontawesome';
            if (/[\\/]node_modules[\\/](apexcharts|react-apexcharts)[\\/]/.test(id))
              return 'vendor-apexcharts';
            if (/[\\/]node_modules[\\/](chart\.js|react-chartjs-2)[\\/]/.test(id))
              return 'vendor-chartjs';
            if (/[\\/]node_modules[\\/]recharts[\\/]/.test(id)) return 'vendor-recharts';
            if (/[\\/]node_modules[\\/](leaflet|react-leaflet)[\\/]/.test(id)) return 'vendor-leaflet';
            if (/[\\/]node_modules[\\/](d3|d3-[^\\/]+)[\\/]/.test(id)) return 'vendor-d3';
            if (/[\\/]node_modules[\\/](moment|date-fns|date-arithmetic)[\\/]/.test(id))
              return 'vendor-dates';
            if (/[\\/]node_modules[\\/](framer-motion|react-animations)[\\/]/.test(id))
              return 'vendor-motion';
            if (/[\\/]node_modules[\\/]styled-components[\\/]/.test(id)) return 'vendor-styled';
            if (/[\\/]node_modules[\\/](ckeditor|ckeditor4|ckeditor4-react)[\\/]/.test(id))
              return 'vendor-ckeditor';
          },
        },
      },
    },
    base,
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['import', 'global-builtin'],
        },
      },
    },
  };
});
