# Changelog

## [4.4.0] - 2026-04-16

The "every page actually works" release. Phases 7–12 fix seven distinct runtime bugs latent on the Vite migration since v4.2.0, halve the largest JS chunk, add persistence and crash recovery, and wire in a route smoke test that prevents a repeat.

### Added

- **Top-level `<ErrorBoundary>`** at the app root. A crash in any demo page now renders a friendly card (title, error message, component stack in dev, reload button) instead of blanking the app. Covers the exact class of failure this branch was masking — invalid React elements from CJS-interop mismatches.
- **Theme preferences persist across reloads.** `src/config/persistThemeOptions.js` whitelists 15 `ThemeOptions` fields (color scheme, fixed header/sidebar/footer toggles, background image + opacity, page-title toggles, …) and hydrates them from `localStorage` on startup. Writes dedupe on-change so non-persisted slice updates don't touch storage; quota / disabled / private-mode exceptions are swallowed silently.
- **Playwright route smoke test** (`e2e/routes.spec.js`). Spins up `npm run preview`, walks 24 curated demo routes against the production build, fails on any uncaught page error, "Element type is invalid" / "not a constructor" / "ChunkLoadError" console error, or missing page copy. Wired into CI after `build`; failing runs upload the Playwright report as an artifact. Scripts: `npm run test:e2e`, `npm run test:e2e:install`.
- **`jsconfig.json` + JSDoc types** on the Redux store factory, the theme-persistence helpers, and `ErrorBoundary`. Editors get autocomplete + go-to-definition on the hand-off points where type errors cascade the furthest, without the cost of a full TypeScript migration (`checkJs: false`).
- **CJS-import interop plugin** (`cjsInteropPlugin` in `vite.config.js`). Rewrites consumer-side `import X from 'pkg'` / `import { Y } from 'pkg'` for 13 Babel-compiled CJS packages into a namespace-destructure that handles both `module.exports = X` and `__esModule + exports.default = X` shapes. Fixes the "got object" / "got undefined" element-type errors on CRM Dashboard 2, Cards Advanced, and the Suspense fallback.
- **Route-level bundle test coverage.** Every dashboard, app, component demo, forms, tables, charts, user page, and widget entry point now has at least one automated render check. 24 tests total, ~17s wall clock in CI.

### Changed

- **Bundle size: `vendor-fontawesome` 668 kB → 94 kB (gzip 259 kB → 29.5 kB).** The FontAwesome demo page imported the whole `fab` brand set (~500 icons) to show two; switched to named imports for `faFontAwesome` and `faInternetExplorer`. ~86% off the chunk on disk, ~89% off the wire. Biggest initial-load win available in the template right now.
- **`internmap` pinned to `^2.0.3` + aliased to its UMD dist.** Rolldown wraps the ESM `export class InternMap` in a lazy `__esmMin(cb)` initializer, but `d3-array/ordinal.js` calls `new InternMap()` eagerly inside another wrapper — the lazy `cb` never fires before use, so every production-build dashboard using recharts scales threw `TypeError: InternMap is not a constructor`. The UMD dist defines the class synchronously.
- **`react-is` pinned to `^19.2.5`** via `overrides`. Hoisted `react-is@16.13.1` copies (inside `prop-types`, `hoist-non-react-statics`, `reactour`) use the pre-React-19 `Symbol.for('react.element')` and rendered elements React 19 rejected as "older". Dedupes the tree to 19.2.5.
- **Relocated linearicons fonts to `public/fonts/linearicons/`.** SCSS now references them as absolute URLs (`/fonts/linearicons/...`) so they resolve identically in dev and the production build — Vite doesn't rebase CSS URLs that come from `@import`-ed SCSS partials, which silently broke every `lnr-*` glyph.
- **HTTPS-only demo links** in the Leaflet maps demo (SRTM, Stamen) and the Guided Tours demo (CodePen).

### Fixed

- **CRM Dashboard 2 renders** (was "Element type is invalid: got object" — `react-data-table-component` default-import namespace leak, via the Phase 7 interop plugin).
- **Cards Advanced renders** (same class of bug via `react-responsive-tabs`).
- **Every `<Suspense fallback>` renders** (same class via `react-loaders`' named import).
- **Sales / Analytics / CRM / Commerce dashboards render** (combined internmap + react-is + react-sweet-progress fixes).
- **`lnr-*` icons on /elements/navigation** (linearicons font path).

### Removed

- **`react-sweet-progress@1.1.2` dependency.** The old `@babel/preset-react` output inlined `Symbol.for('react.element')` directly into its `createElement` helper; every `<Progress>` it produced arrived at React 19 with the pre-19 `$$typeof`. Replaced by a local drop-in at `src/components/CircleProgress.jsx` that matches the public API (`<Progress type="circle|line" percent theme={{ active: { color, trailColor } }} />`). The previously needed `resolve.alias` hop is gone too.

### Infrastructure

- **CI workflow** (`.github/workflows/ci.yml`) extended with `npx playwright install --with-deps chromium` and the route smoke test step. Playwright report uploads on failure with 7-day retention.
- **`.gitignore`** additions for `/test-results`, `/playwright-report`, `/playwright/.cache`.

### Upgrade notes from 4.3.0

No code changes in consumer projects. If you're deploying:

1. Pull latest, delete `node_modules` and `package-lock.json`.
2. `npm install --legacy-peer-deps` (still needed for the React 19 / older lib peer ranges).
3. Run `npm run test:e2e:install` once to fetch the Chromium browser Playwright uses.
4. Sanity-check with `npm run lint`, `npm test -- --run`, `npm run build`, `npm run test:e2e`.

If you have a custom `<Progress>` usage, check the `CircleProgress.jsx` API — it covers the 95% case (`type`, `percent`, `theme.active.color`, `theme.active.trailColor`) but deliberately doesn't reimplement every edge of the original.

## [4.3.0] - 2026-04-16

First release focused purely on developer experience around the template — no user-facing UI changes. If you're upgrading from 4.2.0: delete `node_modules` and `package-lock.json`, then `npm install --legacy-peer-deps`; `npm install` now finishes in ~1 minute instead of stalling.

### Added

- **Vitest + React Testing Library test harness.** `vitest.config.js` (jsdom env, `src` alias, coverage exclusions for assets/polyfills/serviceWorker) and `vitest.setup.js` (`@testing-library/jest-dom` matchers, RTL cleanup, `matchMedia` / `ResizeObserver` shims). Scripts: `npm test` (watch), `npm test -- --run` (single), `npm run test:ui`, `npm run test:coverage` (v8). Initial tests cover the `ThemeOptions` reducer, `configureAppStore`, and `<AppFooter />`.
- **GitHub Actions CI workflow** (`.github/workflows/ci.yml`) runs `npm ci --legacy-peer-deps`, `npm run lint`, `npx vitest run`, and `npm run build` on every push to `master`/`main`/`feature/**` and on every PR. Node version comes from `.nvmrc`; concurrency cancels stale runs on the same ref.
- **CONTRIBUTING.md** covering prerequisites, scripts, env vars, project layout, code style, testing, commits, and PR expectations.
- **`.env.example`** documenting `VITE_PORT` and `VITE_BASE`.
- **Env-driven dev server and public base path.** `vite.config.js` now reads `VITE_PORT` and `VITE_BASE` via Vite's `loadEnv`, so deploys behind a subdirectory (or on a different dev port) no longer require editing the config.

### Changed

- **Pruned the `overrides` block.** Dropped 11 of 18 nested React 19 overrides whose upstream packages already declare React 19 in their peer deps (`rc-slider`, `rc-tooltip`, `rc-util`, `rc-motion`, `@rc-component/trigger`, `@rc-component/portal`, `rc-resize-observer`, `react-copy-to-clipboard`, `styled-components`, `react-resize-detector`, `react-intersection-observer`). The 7 still pinned (`ckeditor4-react`, `react-anime`, `react-popper`, `react-responsive-tabs`, `react-simple-maps`, `react-table`, `reactour`) genuinely cap their React peer at ≤18 and still need the override. Net effect: npm's dependency resolver no longer hangs — `npm install --legacy-peer-deps` now finishes in ~1 minute on a clean tree.
- **HTTPS-only demo links.** Switched remaining `http://` URLs in the Leaflet map demo (SRTM, Stamen) and the Guided Tours demo (CodePen) to `https://`. The SVG XML namespace URI (`http://www.w3.org/2000/svg`) is intentionally left as HTTP — it's a spec-mandated identifier, not a fetchable URL.
- **`jsx-a11y/label-has-associated-control` downgraded from error to warning** in `eslint.config.js` so the demo forms (which intentionally render labels without associated inputs) don't fail CI's lint step. Awareness preserved as a warning, consistent with the project's existing jsx-a11y stance.

### Fixed

- **Stale / renamed `node_modules*` directories no longer pollute lint and git scans.** `.gitignore` and `eslint.config.js` now both ignore `.node_modules*` and `node_modules_*` patterns, so local debris from package-manager experiments (e.g. a renamed `.node_modules_obsolete`) can't silently wedge `npm run lint` or `git status`.

## [4.2.0] - 2025-12-03

### Changed

- **Migrated from Create React App to Vite:** Complete build system migration from CRA to Vite 7.2.6 for significantly faster development server startup and hot module replacement (HMR). Build times reduced from ~30s to ~3s.
- **Renamed all .js files to .jsx:** Converted 348 JavaScript files to use the .jsx extension for better tooling support and Vite compatibility.
- **Replaced Google Maps with Leaflet/OpenStreetMap:** Removed dependency on Google Maps API key. Interactive maps now use free OpenStreetMap tiles via react-leaflet with multiple map styles (Standard, Dark, Satellite, Topographic, Watercolor).
- **Enhanced Vector Maps:** Completely redesigned vector maps with proper sizing, interactive hover effects, zoom/pan functionality, and city markers with tooltips showing population data.

### Added

- **Vite Configuration:** New `vite.config.js` with Node.js polyfills, React plugin, and optimized settings.
- **Custom LoadingOverlay Component:** Created React 19 compatible loading overlay component using Framer Motion to replace deprecated `react-loading-overlay-ts`.
- **Custom TabsWrapper Component:** Created `src/utils/TabsWrapper.jsx` to replace rc-tabs with a React 19 compatible implementation.
- **Custom TransitionWrapper Component:** Created `src/utils/TransitionWrapper.jsx` to replace react-transition-group with Framer Motion.

### Fixed

- **React 19 Compatibility:** Resolved "A React Element from an older version of React was rendered" errors by adding comprehensive npm overrides for packages with pre-bundled older React versions.
- **SCSS Import Paths:** Removed tilde (~) prefix from all SCSS imports for Vite compatibility.

### Removed

- **Create React App:** Removed react-scripts, react-app-rewired, and config-overrides.js.
- **Deprecated Packages:** Removed `react-loading-overlay-ts`, `google-map-react`, `rc-tabs`, `react-transition-group`.

### Security

- **0 Vulnerabilities:** Clean security audit with all dependencies updated.

## [4.1.0] - 2025-12-03

### Changed

- **Upgraded to React 19.2.0:** Updated from React 19.1.0 to the latest React 19.2.0 release.
- **Comprehensive Dependency Update:** Updated all 100+ dependencies to their latest versions, including major version upgrades:
  - `@fortawesome/*` packages: 6.7.2 → 7.1.0
  - `@fortawesome/react-fontawesome`: 0.2.2 → 3.1.1
  - `apexcharts`: 4.7.0 → 5.3.6
  - `recharts`: 2.13.3 → 3.5.1
  - `framer-motion`: 12.19.1 → 12.23.25
  - `react-router-dom`: 7.6.2 → 7.9.6
  - `typescript`: 5.7.2 → 5.9.3
  - `bootstrap`: 5.3.7 → 5.3.8
  - And many more minor/patch updates
- **Dependency Cleanup:** Removed 22 unused dependencies, reducing total packages from 1,908 to 1,807 (~100 packages removed including transitive dependencies).

### Removed

- **Testing Libraries:** Removed `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event` (no test files in project)
- **Unused UI Components:** Removed `chartist`, `jquery`, `rc-tree`, `react-compound-slider`, `react-dnd`, `react-dnd-html5-backend`, `react-map-gl`, `react-outside-click-handler`, `react-scroll`, `react-sizeme`, `react-syntax-highlighter`
- **Unused Redux Packages:** Removed `redux-form`, `redux-logger`, `redux-thunk` (using @reduxjs/toolkit instead)
- **Duplicate/Unused Packages:** Removed `dropzone` (using react-dropzone), `globalize`, `install`, `web-vitals`, `@types/markerclustererplus`

### Fixed

- **Replaced namor with browser-compatible solution:** The `namor` package v3 is not browser-compatible (uses Node.js fs module). Replaced with inline name generator arrays for demo data tables.

## [4.0.0] - 2025-06-24

### Changed

- **Upgraded to React 19.1.0:** Migrated the entire project to `react@^19.1.0` and `react-dom@^19.1.0`.
- **Comprehensive Dependency Update:** Updated numerous packages, including `framer-motion`, and resolved complex dependency conflicts.
- **Modernized SCSS:** Replaced deprecated Sass functions (`map-merge`, `nth`) with their modern module-based equivalents (`map.merge`, `list.nth`).
- **Webpack 5 Polyfills:** Integrated necessary polyfills (`crypto-browserify`, `stream-browserify`, etc.) for Node.js core modules no longer included in modern webpack.
- **Build Configuration:** Implemented a robust `config-overrides.js` to manage webpack fallbacks and suppress excessive console warnings from third-party libraries.
- **Bootstrap 5 Compatibility:** Updated all components and classes to be fully compatible with Bootstrap 5 (e.g., `text-bg-*` badges, `me/ms` spacing).

### Fixed

- **Fixed Collapsed Sidebar Alignment:** Resolved persistent icon alignment issues in the collapsed sidebar for both static and hover states, ensuring pixel-perfect centering.
- **Fixed User Profile Dropdown:** Corrected the positioning of the user profile dropdown to prevent it from rendering off-screen on larger viewports.
- **Fixed `reactstrap` Components:** Refactored `Form` and `FormGroup` components to remove the deprecated `inline` prop, aligning them with React 19 and Bootstrap 5 standards.
- **Fixed Vector Maps Component:** Resolved a critical data fetching error by replacing a dead URL with a local data source.

## [3.0.0] - 2023-11-20

### Changed

- Migrated to React v18.
- Import SCSS files from `node_modules` by using the sass-loader instead of relative paths like `../../node_modules`.
- Upgraded all dependencies to latest versions.

### Fixed

- Fixed SCSS bugs.

## [2.1.0] - 2022-08-19

### Changed

- Updated Libraries

## [2.0.0] - 2022-03-03

### Changed

- Updated to React 17
- Added react-app-rewired
- Updated to Bootstrap 5
- Updated to Reactstrap 9
- Updated all Libraries

## [1.1.0] - 2021-05-17

### Changed

- Updated Libraries

## [1.1.0] - 2021-04-06

### Changed

- Updated Libraries

## [1.0.0] - 2019-03-05

### Added

- Initial Release

[3.0.0]: https://github.com/DashboardPack/architectui-react-theme-free/releases/tag/v3.0.0
