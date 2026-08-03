# Changelog

## [4.8.0] - 2026-08-03

Security and dependency-refresh release, prompted by the Dependabot **PostCSS path traversal** advisory. Clears all five outstanding advisories and pulls every dependency to its latest resolvable version. Verified green through lint (0 errors), 23 unit tests, and the production build.

### Security

- **5 `npm audit` vulnerabilities → 0** (all high):
  - **`postcss`** → **8.5.25**: [GHSA-r28c-9q8g-f849](https://github.com/advisories/GHSA-r28c-9q8g-f849) — path traversal in previous-source-map auto-loading (`sourceMappingURL`) leading to arbitrary `.map` file disclosure. This is the advisory Dependabot flagged.
  - **`react-router`** → **8.3.0**: RSC-mode CSRF bypass allowing action execution before a 400 response ([GHSA-qwww-vcr4-c8h2](https://github.com/advisories/GHSA-qwww-vcr4-c8h2)). The whole `7.12.0 – 8.2.0` range is affected, so no 7.x release fixes it — see the migration note below.
  - **`brace-expansion`** (transitive): DoS via exponential-time expansion and unbounded expansion length.
  - **`fast-uri`** → **3.1.5** (transitive): host confusion via literal backslash authority delimiter and failed IDN canonicalization.

### Changed

- **`react-router-dom` 7.18.0 → `react-router` 8.3.0 (breaking upstream, transparent here).** `react-router-dom` is discontinued at 7.18.2 and pins `react-router` to the matching vulnerable 7.x release, so the advisory cannot be cleared on the 7.x line. In v7 `react-router-dom` was already a thin re-export of `react-router`, so the migration is an import swap: the 13 files importing `HashRouter`, `Link`, `Navigate`, `Route`, `Routes` and `useLocation` now import them from `react-router`. No routing behaviour, API or markup changed.
  - **If you have custom pages**, update your imports: `from 'react-router-dom'` → `from 'react-router'`.
- **`react-dropzone` 15 → 20** — the render-prop `<Dropzone>` default export is unchanged; the Dropzone demo is unaffected.
- **`apexcharts` 5 → 6** — `react-apexcharts` declares `apexcharts: >=5.10.1`, so the peer is satisfied; chart demos verified in the build.
- **`@testing-library/jest-dom` 6 → 7** and **`jsdom` 29 → 30** — test tooling only; all 23 tests pass.
- **`engines.node` raised to `>=22`** — required by `react-dropzone` 20 and `@testing-library/jest-dom` 7.
- **React 19.2.8**, `recharts` 3.10.1, `framer-motion` 12.43.0, `styled-components` 6.4.4, `react-data-table-component` 8.8.0, `react-easy-crop` 6.2.3, `react-icons` 5.7.0, FontAwesome 7.3.1, `vite` 8.2.0, `vitest` 4.1.10, `sass` 1.102.0, `prettier` 3.9.6, `@playwright/test` 1.62.1.
- **`overrides` now use npm's `$name` reference syntax** for `react`, `react-dom`, `@types/react` and `postcss`, so they track the direct dependency automatically instead of drifting out of sync and failing installs with `EOVERRIDE`.

### Kept deliberately

- **`eslint` / `@eslint/js` held at 9.x** (latest 10.8.0). `eslint-plugin-react` (7.37.5) and `eslint-plugin-jsx-a11y` (6.10.2) still cap their peer range at ESLint 9, and neither has shipped a v10-compatible release. 9.x has no open advisories.
- **`@vitejs/plugin-react` held at 6.0.3** (latest 6.0.5). 6.0.5 pulls `@rolldown/plugin-babel`, whose optional peer resolves `@babel/plugin-transform-runtime` 8 and then demands `@babel/core` ^8, conflicting with the tree. Dev-only, patch-level, no security impact.

## [4.7.0] - 2026-06-29

Security and dependency-refresh release. A month after 4.6.0, fresh advisories landed against `react-router`, `vite`, and three transitive packages; this pass clears all of them and pulls every dependency back up to its latest version. Verified green through lint (0 errors), 23 unit tests, the production build, and the 24-route Playwright smoke test.

### Security

- **6 `npm audit` vulnerabilities → 0** (was 4 high, 1 moderate, 1 low):
  - **`react-router` / `react-router-dom`** (high) → **7.18.0**: vendored `turbo-stream` arbitrary-constructor RCE, DoS via unbounded `__manifest` path expansion, and CSRF via PUT/PATCH/DELETE document requests.
  - **`vite`** (high) → **8.1.0**: `server.fs.deny` bypass via Windows alternate paths and `launch-editor` NTLMv2 hash disclosure.
  - **`undici`** (high, transitive) → **7.28.0**: seven advisories incl. TLS validation bypass and Set-Cookie injection.
  - **`@babel/core`** (low, transitive) → **7.29.7**: arbitrary file read via `sourceMappingURL`.
  - **`js-yaml`** (moderate, transitive) → **4.3.0**: quadratic-complexity DoS in merge-key handling.

### Changed

- **`react-easy-crop` 5 → 6** — major bump; v6 only modernizes the package's build/test tooling, no runtime API change. The Image Cropper demo (core `image`/`crop`/`zoom`/`aspect`/`onCropChange`/`onZoomChange`/`onCropComplete` props) is unaffected.
- **`@babel/runtime` 7 → 8** — major bump of a vestigial direct dependency (no `src/` import; transitive 7.x is still deduped where libraries require it).
- **Lockfile refreshed to latest across ~40 packages.** The `^` ranges already tracked latest, so `npm update` pulled the newest in-range releases without package.json edits — notably `react` / `react-dom` 19.2.7, `apexcharts` 5.15.2, `recharts` 3.9.0, `framer-motion` 12.42.0, `@reduxjs/toolkit` 2.12.0, `react-redux` 9.3.0, `sass` 1.101.0, `vite` 8.1.0, `vitest` 4.1.9, `@playwright/test` 1.61.1, `prettier` 3.9.1, `date-fns` 4.4.0.

### Fixed

- **`src/components/Rating.jsx`** — `eslint-plugin-react-hooks` 7.1 promoted `set-state-in-effect` to an error, which flagged the component's prop-syncing `useEffect`. Rewrote it as React's recommended adjust-state-during-render pattern, preserving the parent-driven reset behaviour while dropping an extra render pass.

### Kept deliberately

- **`eslint` / `@eslint/js` held at 9.x** (latest 9.39.4) rather than 10.x. `eslint-plugin-react` and `eslint-plugin-jsx-a11y` do not yet declare ESLint 10 peer support (ESLint 10 removed deprecated context APIs they rely on), and 9.x has no open advisories — so there is no security reason to rush. Revisit once both plugins ship `^10` support.

## [4.6.0] - 2026-05-28

Dependency modernization pass. Every dependency is at its latest version, all `npm audit` vulnerabilities are gone (now **0**, was 5), and sixteen abandoned or unused packages were removed — the still-used ones replaced by maintained libraries or small local components so no demo loses functionality. Verified green through lint (0 errors), 23 unit tests, the production build, and the 24-route Playwright smoke test (plus a 10-route smoke pass over every swapped page).

### Security

- **0 `npm audit` vulnerabilities** (was 5: 2 high, 3 moderate). The `uuid` advisory came in through the unused `react-validation`; removing it plus a non-breaking `npm audit fix` (transitive `brace-expansion`, `fast-uri`, `tmp`) cleared the rest.

### Changed

- **`react-data-table-component` 7 → 8** — the only dependency a major version behind. No call-site changes needed.
- All other ranges already tracked latest; the lockfile was refreshed.

### Removed (unused — zero source imports)

- `react-validation`, `react-form-validator-core`, `react-table`, `react-image-crop`, `react-on-screen`, `react-animations`, `aphrodite`, plus the now-unused `sweetalert` (v2) and the briefly-added `@smastrom/react-rating`.

### Replaced (abandoned → maintained library or local component)

- `react-input-mask` (2022) → **`@react-input/mask`**
- `react-color` (2022) → **`@uiw/react-color`**
- `react-bootstrap-sweetalert` (2022) → **`sweetalert2`**
- `react-numeric-input` (2022) → **`rc-input-number`** (same `rc-*` family as the existing slider/tooltip)
- `react-cropper` (2023) → **`react-easy-crop`**
- `reactour` v1 (2024) → **`@reactour/tour`** v3 (hook-based `TourProvider` / `useTour`)
- `ckeditor4` / `ckeditor4-react` (**end-of-life** software) → **`react-simple-wysiwyg`**
- `react-rating` (2022) → local **`src/components/Rating.jsx`** (keeps the per-position custom-symbol API the demo relies on)
- `react-sparklines` (2022) → local **`src/components/Sparklines/`** (faithful reimplementation of the same component API and point math)
- `react-responsive-tabs` (2022) → local **`src/components/ResponsiveTabs/`** (emits the same `RRT__*` class structure the SCSS targets)
- `react-sticky-el` (2024) → local **`src/components/Sticky.jsx`** (native CSS `position: sticky`)
- `react-liquid-gauge` (2022) → local **`src/components/LiquidGauge.jsx`** (animated SVG wave fill; also drops the undeclared `d3-interpolate` import)
- `moment` (maintenance-mode) → **`date-fns`** (already a dependency): `dateFnsLocalizer` for the big-calendar demo, `isAfter` for the date-range pickers

### Kept deliberately

- **`react-simple-maps`** (v3, 2023) — still on its latest major and not abandoned; reimplementing its d3-geo projection/zoom stack as custom code would add risk with no security or maintenance benefit.

### Infrastructure

- `vite.config.js`: trimmed the CJS-interop list to the five packages that still need it, removed the dead `vendor-ckeditor` manualChunk, and dropped `react-table` / `reactour` / `react-responsive-tabs` / `ckeditor4-react` from `overrides`.

## [4.5.0] - 2026-04-16

Phase 14–17. The "exceptional" polish pass: real dark mode, accessibility basics, four more unmaintained dependencies gone, and a clear path for consumers to turn the template into their own project. Eight commits since 4.4.0, every one independently green through lint + unit + build + Playwright.

### Added

- **Real dark mode.** New `darkMode` field on the `ThemeOptions` slice (`'auto' | 'light' | 'dark'`), persisted to `localStorage` alongside the other theme prefs. `src/hooks/useDarkModeSync.js` writes the resolved value to `<html data-bs-theme>` so Bootstrap 5.3's native dark palette kicks in across reactstrap, cards, forms, tables, and everything else styled with Bootstrap utilities. `'auto'` follows `prefers-color-scheme` and reacts live to OS changes; explicit choices override it. Three-button Auto/Light/Dark control at the top of the ThemeOptions side panel, wired with `aria-pressed` for AT.
- **Accessibility primitives.** Top-level `<a class="skip-link" href="#main-content">` jumps keyboard users past the sidebar/header. `<header role="banner">`, `<div role="navigation" id="app-sidebar" aria-label="Primary">`, and `<main id="main-content" tabIndex={-1}>` landmarks so screen readers announce the shell correctly. `:focus-visible` fallback ring for every keyboard-interactive element the template's custom classes wouldn't otherwise highlight.
- **ARIA on icon-only buttons.** Layout-configurator cog, mobile hamburger, and mobile-overflow button all get `aria-label`, `aria-expanded`/`aria-pressed`, `aria-controls` where they reference other landmarks, and proper `type="button"` attributes. The mobile overlay scrim gets keyboard activation (Enter/Space/Escape).
- **`src/hooks/useInView.js`** — a ~25-line `IntersectionObserver` hook replacing the `react-visibility-sensor` render-prop pattern.
- **`src/components/Loader.jsx`** — a local `<Loader>` + `Types` dictionary matching the old `react-loaders` API, wired to the existing `loaders.css` animations.
- **`src/DemoPages/routes.jsx`** — demo routes are now defined in the demo folder instead of `Layout/AppMain`, so `Layout/` is framework-only.
- **`STARTER.md`** — step-by-step guide for stripping the template down to a starter: what to keep, what to delete, the three edits you need after `rm -rf src/DemoPages`, and how the reliability features (ErrorBoundary, persistence, dark mode, a11y) survive the trim automatically.

### Changed

- **Layout primitives are now semantic.** `Layout/AppHeader` renders as a `<header>`, `Layout/AppSidebar` as a `<nav>`-equivalent `div role="navigation"`, `DemoPages/Main`'s page-content slot as `<main>`. Same visual layout, usable tree for assistive tech.
- **Dashboard sparkline widgets span the full card width** in CRM Dashboard 2 and Analytics (eight `<Col md="9">` → `md="12"`). The previous columns left ~25% of each card empty on the right.
- **`persistThemeOptions` whitelist** extended to include `darkMode`. Existing stored state upgrades cleanly — the load path merges persisted keys over the reducer defaults so first-time visits to 4.5.0 get `'auto'`.

### Removed

- **`react-anime`** (peer-pinned to 17.x, zero source imports). Dropped from `dependencies` and from the nested override block. Also pruned `react-anime|animejs` from the `vendor-motion` manualChunks rule.
- **`react-visibility-sensor`** (unmaintained since 2020). Replaced by `useInView` + a rewritten `DemoPages/Elements/ScreenVisibility/Examples/Fade.jsx` that uses it.
- **`react-loaders`** (last published 2018). Replaced by the local `<Loader>` component via `resolve.alias`; the five consumer files still import from `'react-loaders'` for zero source-level churn.
- Three entries from the Phase 7 CJS interop list (`react-loaders`, `react-visibility-sensor`, and indirectly the vendor-motion chunk entries) — they're not CJS packages anymore, they're local modules.

### Infrastructure

- New test files: `src/hooks/useDarkModeSync.test.jsx` (5 tests), extended `src/reducers/ThemeOptions.test.jsx` with a `darkMode` case. Total unit suite: 23 tests across 6 files (was 16/5).
- `vitest.setup.js` already handles the `matchMedia` mock used by the new hook's tests.
- CI workflow, Playwright suite, and all other scaffolding from 4.3.0 / 4.4.0 carry over unchanged.

### Upgrade notes from 4.4.0

Pure forward compatibility. Users who already had `ThemeOptions` prefs in `localStorage` get `'auto'` for `darkMode` on first load (defaults merge over persisted state). Nothing else changes on disk.

If you were using `react-anime`, `react-visibility-sensor`, or `react-loaders` directly in your fork: the first two are gone; the third is aliased to the local `src/components/Loader.jsx` which preserves the `<Loader>` + `Types` surface. Custom loader types or deep configuration of the old packages won't carry over — the local component only does what `loaders.css` can do (which is every animation the template actually uses).

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
