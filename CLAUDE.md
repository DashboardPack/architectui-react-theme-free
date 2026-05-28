# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

ArchitectUI is a free React 19 + Bootstrap 5.3 admin dashboard template. It ships as both a working demo (~150 demo pages under `src/DemoPages/`) and a reusable app shell; see `STARTER.md` for stripping the demos out to start a real project.

## Commands

```bash
npm install --legacy-peer-deps   # REQUIRED flag — React 19 peer-dep conflicts otherwise
npm start                        # dev server, port 3001 (alias: npm run dev)
npm run build                    # production build → build/
npm run build:analyze            # build + open Rollup bundle visualizer
npm run preview                  # serve the production build (port 4173)

npm run lint                     # ESLint (flat config)
npm run lint:fix
npm run format                   # Prettier write
npm run format:check

npm test                         # Vitest watch mode
npm test -- --run                # single run (what CI uses)
npm run test:coverage            # v8 coverage → coverage/
npm run test:ui                  # Vitest UI

npm run test:e2e:install         # once: install Playwright's Chromium
npm run test:e2e                 # Playwright route smoke test (builds + previews internally)
```

Run a single unit test: `npm test -- --run src/config/configureStore.test.jsx` (or pass `-t "name"` to filter by test name). Node >= 20 (`.nvmrc`).

CI (`.github/workflows/ci.yml`) runs, in order: `npm ci --legacy-peer-deps` → lint → `vitest run` → build → Playwright. Match this locally before pushing.

## Architecture

**Build stack:** Vite 8 + `@vitejs/plugin-react`. This was migrated off Create React App — `config-overrides.js` is a dead `react-app-rewired`/webpack artifact, not referenced by anything; ignore it.

**Routing is two-level and hash-based.** `src/index.jsx` mounts `<ErrorBoundary><Provider><HashRouter><Main/>`. `HashRouter` (not BrowserRouter) is deliberate so the `./`-relative build works on static hosts. `Main` (`src/DemoPages/Main/index.jsx`) is the layout shell; it renders `<AppMain>` which renders `demoRoutes()` from `src/DemoPages/routes.jsx`. Top-level routes are section prefixes (`/components/*`, `/forms/*`, …), and each section's own `index.jsx` (e.g. `src/DemoPages/Components/index.jsx`) declares a nested `<Routes>` for its leaf pages. Every section is `lazy()`-loaded, so code-splitting is per-section. `/` redirects to `/dashboards/crm`.

**State: Redux Toolkit, one slice (`ThemeOptions`).** Written in the classic action-constants + action-creators + `switch` reducer style (`src/reducers/ThemeOptions.jsx`), NOT `createSlice` — follow that style when editing it. The store (`src/config/configureStore.jsx`) preloads a localStorage-persisted subset merged *over* the reducer defaults (so new fields always get a default). Persistence is a whitelist (`PERSISTED_FIELDS` in `src/config/persistThemeOptions.js`) wired via a store subscription — add a field there to make it survive refresh; leave it out to keep it in-memory only.

**Layout shell** (`Main`): composes `<ThemeOptions>` (the config side-panel), `<AppHeader>`, `<AppSidebar>`, `<AppMain>`, `<AppFooter>`. The `app-container` className string is built from `ThemeOptions` state plus a live `useResizeDetector` width (below 992px forces mobile sidebar behavior regardless of toggles). Sidebar menu entries are a plain array in `src/Layout/AppNav/NavItems.jsx`.

**Dark mode** uses Bootstrap 5.3's `data-bs-theme` on `<html>`, driven by `ThemeOptions.darkMode` (`'auto' | 'light' | 'dark'`). `src/hooks/useDarkModeSync.js` (called once in `Main`) applies it and re-reacts to OS `prefers-color-scheme` changes while on `'auto'`.

**Styling:** single SCSS entry `src/assets/base.scss` imports Bootstrap *source* from `node_modules` via legacy `@import`, then custom partials under `src/assets/{layout,elements,components,widgets,pages,themes,utils}`. Bootstrap variable overrides must go in `themes/layout-variables` (imported before Bootstrap's `variables`). Color schemes are `app-theme-{name}` classes; theme variables live in `src/assets/themes/`.

## React 19 compatibility (non-obvious, spread across files)

This template predates React 19 and pulls in many older libraries. Several mechanisms keep them working — touch these when a dependency breaks at build or runtime:

- **`package.json` `overrides`** force React 19 across transitive deps (and per-package overrides for `react-popper` and `react-simple-maps`).
- **`vite.config.js` `cjsInteropPlugin`** rewrites `import X from 'pkg'` for the handful of CommonJS packages listed in `cjsInteropPackages` whose default/named export shape doesn't survive Vite's esbuild interop. If a `react-*` import resolves to `undefined` or "Element type is invalid", add the package to that list rather than changing the import syntax.
- **Vite aliases**: `react-loaders` → local `src/components/Loader.jsx` (drops a stale 2018 UMD dep); `internmap` → its `dist/` UMD (fixes "InternMap is not a constructor" from recharts/d3 under Vite's lazy ESM wrapping).
- **Local replacements for abandoned packages** live in `src/components/` (`Sparklines/`, `ResponsiveTabs/`, `LiquidGauge.jsx`, `Rating.jsx`, `Sticky.jsx`) — small dependency-free reimplementations that preserve the old package's API/markup. Prefer extending these over re-adding the original packages.
- **`patch-finddomnode.js`** is a manual helper that strips `findDOMNode` (removed in React 19) from `react-onclickoutside` / `react-widgets`. The `postinstall: patch-package` hook currently no-ops (no `patches/` dir); run the findDOMNode script by hand only if those packages throw.

## Testing

- **Unit/component** (Vitest + React Testing Library): tests are colocated as `*.test.jsx`. Shared setup (jest-dom matchers, RTL cleanup, `matchMedia`/`ResizeObserver`/`localStorage` shims) is in `vitest.setup.js`; config in `vitest.config.js`.
- **E2E** (Playwright, `e2e/routes.spec.js`): walks 24 demo routes against `npm run preview` and fails on any uncaught page error or "Element type is invalid" / "not a constructor" console error — this is the guard for the React 19 interop hacks above. Update the `routes` array there if you change the route map.

## Conventions

- Components are `.jsx`; one feature per file. Section folders use an `index.jsx` barrel.
- ESLint flat config (`eslint.config.js`): `prop-types` and several a11y interaction rules are off; `no-unused-vars` allows `_`-prefixed; `console` allows only `warn`/`error`/`info`. jsx-a11y recommended rules are on — the template maintains accessibility basics (skip link, landmarks, `:focus-visible`, ARIA on icon buttons).
- Env vars are `VITE_`-prefixed only (`VITE_PORT`, `VITE_BASE`); copy `.env.example` to `.env.local`. `VITE_BASE` sets the production base path for subdirectory deploys.
