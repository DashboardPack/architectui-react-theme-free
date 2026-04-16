# Release v4.4.0

## ArchitectUI React Dashboard v4.4.0

**Release Date:** April 16, 2026

The "every page actually works" release. Seven distinct runtime bugs latent on the Vite migration branch since v4.2.0 are fixed; the largest JS chunk drops ~86%; a new Playwright route smoke test prevents a repeat.

Upgrading from v4.3.0 is **zero code changes** in consumer projects.

---

## Highlights

- **86% smaller FontAwesome chunk.** Biggest single initial-load win in the template: `vendor-fontawesome` went from 668 kB / 259 kB gzip down to 94 kB / 29.5 kB.
- **Top-level `<ErrorBoundary>`** renders a recoverable card instead of blanking the app when any demo page throws.
- **Theme preferences persist across reloads.** Color scheme / fixed-header / fixed-sidebar / fixed-footer / background / page-title toggles all survive refresh via a whitelisted `localStorage` subscriber.
- **Playwright route smoke test** runs in CI on every push — 24 demo routes must render without uncaught errors or `Element type is invalid` / `not a constructor` console errors.
- **Seven runtime regressions fixed** across CJS-interop edge cases, React 19 symbol drift, and a d3-array lazy-init hazard. Cards Advanced, CRM Dashboard 2, all four dashboard variants, and every Suspense fallback now render.
- **`jsconfig.json` + JSDoc types** on the critical hand-off points so editors can catch import mistakes without a full TypeScript migration.
- **One less unmaintained dependency** — `react-sweet-progress` is out, replaced by a local SVG implementation of the same API.

---

## What's Changed

### Runtime reliability — seven fixes in one

Phase 5 / 6 released v4.3.0 without a runtime-level validation of every demo page, because the previous CI pipeline only exercised lint / unit tests / build. v4.4.0 adds that validation and, in the process, lands fixes for every bug it surfaced:

| Symptom                                               | Root cause                                                                          | Fix                                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Cards Advanced: "Element type is invalid: got object" | Vite wraps `react-responsive-tabs` CJS as `export default require_X()`              | `cjsInteropPlugin` rewrites consumer-side `import`s                 |
| CRM Dashboard 2: same                                 | `react-data-table-component`                                                        | Same plugin                                                         |
| Every Suspense fallback: "got: undefined"             | `import { Loader }` from `react-loaders` (CJS, no named re-exports)                 | Same plugin                                                         |
| All dashboards: "InternMap is not a constructor"      | Rolldown wraps `internmap` ESM in `__esmMin(cb)` without the trailing `()`          | Alias `internmap` → its synchronous UMD dist                        |
| Sales dashboard: "A React Element from older React"   | `react-sweet-progress` inlines `Symbol.for('react.element')` in its Babel JSX shim  | Drop the dep; use local `<Progress>` in `src/components/`           |
| Mixed `react-is` versions rendering old-React elements| `prop-types`, `hoist-non-react-statics`, `reactour` all pulled `react-is@16.13.1`   | Pin `react-is: ^19.2.5` via `overrides`                             |
| `/elements/navigation` missing `lnr-*` glyphs         | SCSS `url('linearicons/...')` not rebased through Vite's `@import`                  | Move fonts to `public/fonts/linearicons/`, use absolute URLs        |

### Bundle: `vendor-fontawesome` 668 kB → 94 kB

The FontAwesome demo imported `fab` (the whole brand-icons namespace, ~500 icons) to render just two brand icons. Switched to named imports for `faFontAwesome` and `faInternetExplorer`. Solid icons and everything else already used named imports, so no other page is affected.

| Chunk                   | Before    | After    | Delta    |
| ----------------------- | --------- | -------- | -------- |
| `vendor-fontawesome.js` | 668.09 kB | 94.50 kB | **−86%** |
| gzip                    | 259.30 kB | 29.51 kB | **−89%** |

### Top-level ErrorBoundary

Wraps `<Provider>` and the `<HashRouter>` in `src/index.jsx`. On a thrown render, swaps the broken subtree for a card that includes:

- The error message.
- The full component stack (dev only).
- A "Reload page" button.

Dev logs still go through `console.error` so Vite's overlay still surfaces crashes. Production only shows the card.

### ThemeOptions persistence

New `src/config/persistThemeOptions.js` exposes `loadPersistedThemeOptions()` and `subscribeThemeOptionsPersistence(store)`. A 15-field whitelist controls what gets written. Writes dedupe on-change, so non-persisted slice updates don't touch storage. Quota / disabled-storage / private-mode errors are swallowed silently.

Hydration merges the persisted subset over the reducer's defaults, so any field added to the slice since the user's last visit falls back to its current default instead of coming back `undefined`.

### Playwright smoke test

[e2e/routes.spec.js](e2e/routes.spec.js) walks 24 curated demo routes against `npm run preview`:

- Every dashboard variant (analytics, crm, commerce, sales, minimal-dashboard-1).
- Apps: mailbox, chat, FAQ section.
- Component demos: accordion, modals, calendar, maps.
- Elements: cards, icons, navigation.
- Forms, tables, charts.
- User pages: login, register, forgot-password.
- Widgets: chart-boxes-3.

Each test navigates, asserts the body contains page-identifying text, and hard-fails on any uncaught page error, `Element type is invalid`, `not a constructor`, or `ChunkLoadError` console error.

Wired into CI after `build`. Failing runs upload the Playwright HTML report as a 7-day artifact.

### JSDoc + jsconfig

Zero-cost editor tooling without a TypeScript migration. `jsconfig.json` declares `src/*` path mapping, `vite/client` / `vitest/globals` / `node` types, and `allowJs`. JSDoc `@typedef` / `@param` / `@returns` annotations cover:

- `configureAppStore` — returns `EnhancedStore`.
- `PersistedThemeOptions` typedef + the three persist helpers' signatures.
- `ErrorBoundary` class shape.

Autocomplete, go-to-definition, and hover type info all work in VS Code etc. `checkJs` stays off — the Playwright smoke test catches the class of bug a full type-check would.

### Dependency removed

`react-sweet-progress@1.1.2` — unmaintained since 2021, built with an old `@babel/preset-react` that inlined `Symbol.for('react.element')` into its `createElement` helper (React 19 rejects). Local drop-in at `src/components/CircleProgress.jsx` matches the public API.

### Interop plugin

`cjsInteropPlugin` in `vite.config.js` rewrites `import` statements for 13 Babel-compiled CJS packages into a namespace-destructure that handles both `module.exports = X` and `__esModule + exports.default = X` shapes. Source files keep natural import syntax; the plugin applies in both dev and the production build. The explicit list:

`react-bootstrap-sweetalert`, `react-copy-to-clipboard`, `react-countup`, `react-data-table-component`, `react-input-mask`, `react-liquid-gauge`, `react-loaders`, `react-perfect-scrollbar`, `react-responsive-tabs`, `react-slick`, `react-sparklines`, `react-sticky-el`, `react-visibility-sensor`.

---

## Upgrade from v4.3.0

1. Pull the latest code.
2. Delete `node_modules` and `package-lock.json`.
3. `npm install --legacy-peer-deps` — still needed for React 19 / older lib peer ranges.
4. `npm run test:e2e:install` — one-off, installs the Chromium browser Playwright uses.
5. Sanity check: `npm run lint`, `npm test -- --run`, `npm run build`, `npm run test:e2e`.

No consumer code changes.

If you have a custom `<Progress>` component wrapping `react-sweet-progress`, check the local `CircleProgress.jsx` — it covers the 95% case (`type`, `percent`, `theme.active.color`, `theme.active.trailColor`) but deliberately doesn't reimplement every edge case.

---

## Tech Stack

| Category     | Technology                          | Version          |
| ------------ | ----------------------------------- | ---------------- |
| Framework    | React                               | 19.2             |
| Build Tool   | Vite                                | 8                |
| Test Runners | Vitest + React Testing Library      | 4 / 16           |
|              | Playwright                          | 1.59             |
| Linting      | ESLint 9 (flat config) + Prettier 3 | —                |
| UI Framework | Bootstrap                           | 5.3.8            |
| Components   | Reactstrap                          | 9.2.3            |
| State        | Redux Toolkit                       | 2.11             |
| Routing      | React Router                        | 7.14             |
| Animations   | Framer Motion                       | 12.38            |
| Charts       | ApexCharts, Chart.js, Recharts      | 5.10 / 4.5 / 3.8 |
| Maps         | Leaflet, react-simple-maps          | 1.9 / 3.0        |
| Styling      | Sass                                | 1.99             |

---

## Security

**0 vulnerabilities** — clean `npm audit` after the dependency refresh.

---

## Links

- **Live Demo**: [ArchitectUI React Demo](https://demo.dashboardpack.com/architectui-react-free)
- **PRO Version**: [Get PRO](https://dashboardpack.com/theme-details/architectui-dashboard-react-pro)
- **Report Issues**: [GitHub Issues](https://github.com/DashboardPack/architectui-react-theme-free/issues)

---

## Full Changelog

See [Changelog.md](Changelog.md) for complete version history.

**Full Changelog**: <https://github.com/DashboardPack/architectui-react-theme-free/compare/v4.3.0...v4.4.0>

---

**Made with care by [DashboardPack](https://dashboardpack.com/)**
