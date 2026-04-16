import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const analyze = process.env.ANALYZE === 'true';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.VITE_PORT) || 3001;
  const base = env.VITE_BASE || './';

  return {
    plugins: [
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
      },
      dedupe: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
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
            if (/[\\/]node_modules[\\/](framer-motion|react-animations|react-anime|animejs)[\\/]/.test(id))
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
