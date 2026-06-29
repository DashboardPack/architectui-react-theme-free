# Release v4.7.0

## ArchitectUI React Dashboard v4.7.0

**Release Date:** June 29, 2026

The security-refresh release. A month after the 4.6.0 modernization pass, new advisories landed against `react-router`, `vite`, and three transitive packages — this release clears all six and pulls every dependency back up to its latest version. Verified green through lint (0 errors), 23 unit tests, the production build, and the 24-route Playwright smoke test.

---

## Highlights

- **6 `npm audit` vulnerabilities → 0** (was 4 high, 1 moderate, 1 low).
- **`react-router` 7.18.0 and `vite` 8.1.0** patch the two high-severity direct-dependency advisories.
- **`react-easy-crop` 5 → 6** and **`@babel/runtime` 7 → 8** — the two major bumps, both no-impact (details below).
- **~40 packages refreshed** to their latest in-range releases via a lockfile update.
- **No breaking changes to the template's own API.** Same layout shell, theming, and starter workflow.

---

## What's Changed

### Security

`npm audit` is clean again. The fixes, by advisory:

| Package                             | Severity | Fixed in | Issue                                                                   |
| ----------------------------------- | -------- | -------- | ----------------------------------------------------------------------- |
| `react-router` / `react-router-dom` | high     | 7.18.0   | `turbo-stream` constructor RCE, `__manifest` DoS, PUT/PATCH/DELETE CSRF |
| `vite`                              | high     | 8.1.0    | `server.fs.deny` bypass (Windows), `launch-editor` NTLMv2 disclosure    |
| `undici` (transitive)               | high     | 7.28.0   | TLS validation bypass, Set-Cookie injection, +5 more                    |
| `js-yaml` (transitive)              | moderate | 4.3.0    | quadratic-complexity DoS in merge-key handling                          |
| `@babel/core` (transitive)          | low      | 7.29.7   | arbitrary file read via `sourceMappingURL`                              |

### Changed — major bumps

- **`react-easy-crop` 5 → 6** — v6 only modernizes the package's own build/test tooling; there is no runtime API change. The Image Cropper demo uses the stable core props (`image`, `crop`, `zoom`, `aspect`, `onCropChange`, `onZoomChange`, `onCropComplete`) and is unaffected.
- **`@babel/runtime` 7 → 8** — a vestigial direct dependency (nothing in `src/` imports it). Transitive 7.x is still deduped wherever libraries require it.

### Changed — lockfile refresh

The `^` ranges already tracked latest, so `npm update` pulled the newest in-range releases without package.json edits. Notable: `react` / `react-dom` 19.2.7, `apexcharts` 5.15.2, `recharts` 3.9.0, `framer-motion` 12.42.0, `@reduxjs/toolkit` 2.12.0, `react-redux` 9.3.0, `sass` 1.101.0, `vitest` 4.1.9, `@playwright/test` 1.61.1, `prettier` 3.9.1, `date-fns` 4.4.0.

### Fixed

- **`src/components/Rating.jsx`** — `eslint-plugin-react-hooks` 7.1 promoted `set-state-in-effect` to an error, flagging the component's prop-syncing `useEffect`. Rewrote it as React's recommended adjust-state-during-render pattern: same parent-driven reset behaviour, one fewer render pass.

### Kept deliberately

- **`eslint` / `@eslint/js` held at 9.x** (latest 9.39.4) rather than 10.x. `eslint-plugin-react` and `eslint-plugin-jsx-a11y` do not yet declare ESLint 10 peer support — ESLint 10 removed deprecated context APIs they rely on — and 9.x carries no open advisories, so there is no reason to rush. Revisit once both plugins ship `^10` support.
- **`react-simple-maps` (v3)** — still on its latest major and not abandoned.

---

## Upgrade from v4.6.0

Pure forward compatibility for consumers of the template UI.

1. Pull and reinstall: `npm install --legacy-peer-deps` (the lockfile was refreshed).
2. Nothing in the layout shell, theming, persistence, dark mode, or accessibility layer changed. No call-site changes are required for the `react-easy-crop` or `@babel/runtime` bumps.

---

## Tech Stack

| Category     | Technology                          | Version          |
| ------------ | ----------------------------------- | ---------------- |
| Framework    | React                               | 19.2             |
| Build Tool   | Vite                                | 8.1              |
| Test Runners | Vitest + React Testing Library      | 4 / 16           |
|              | Playwright                          | 1.61             |
| Linting      | ESLint 9 (flat config) + Prettier 3 | —                |
| UI Framework | Bootstrap 5.3 (dark-mode ready)     | 5.3.8            |
| Components   | Reactstrap                          | 9.2.3            |
| State        | Redux Toolkit                       | 2.12             |
| Routing      | React Router                        | 7.18             |
| Charts       | ApexCharts, Chart.js, Recharts      | 5.15 / 4.5 / 3.9 |
| Maps         | Leaflet, react-simple-maps          | 1.9 / 3.0        |
| Editor       | react-simple-wysiwyg                | 3.4              |
| Styling      | Sass                                | 1.101            |

---

## Security

**0 vulnerabilities** — clean `npm audit` after upgrading `react-router-dom` and `vite` and refreshing the transitive `undici` / `js-yaml` / `@babel/core` packages.

---

## Links

- **Live Demo**: [ArchitectUI React Demo](https://demo.dashboardpack.com/architectui-react-free)
- **PRO Version**: [Get PRO](https://dashboardpack.com/theme-details/architectui-dashboard-react-pro)
- **Report Issues**: [GitHub Issues](https://github.com/DashboardPack/architectui-react-theme-free/issues)
- **Starter Guide**: [STARTER.md](STARTER.md)

---

## Full Changelog

See [Changelog.md](Changelog.md) for complete version history.

**Full Changelog**: <https://github.com/DashboardPack/architectui-react-theme-free/compare/v4.6.0...v4.7.0>

---

**Made with care by [DashboardPack](https://dashboardpack.com/)**
