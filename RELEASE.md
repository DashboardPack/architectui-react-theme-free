# Release v4.6.0

## ArchitectUI React Dashboard v4.6.0

**Release Date:** May 28, 2026

The dependency-modernization release. Every dependency is now at its latest version, the `npm audit` report is clean (**0 vulnerabilities**, down from 5), and sixteen abandoned or unused packages are gone — the ones still in use replaced by maintained libraries or small in-repo components so no demo loses functionality. Every step was verified green through lint (0 errors), 23 unit tests, the production build, and the Playwright route smoke test.

---

## Highlights

- **0 `npm audit` vulnerabilities** (was 5: 2 high, 3 moderate).
- **16 packages removed** — 9 dead (zero source imports) plus 7 abandoned ones replaced. 45 packages pruned from `node_modules` in total.
- **13 abandoned packages replaced** with maintained libraries or local components — same demos, same behaviour.
- **`react-data-table-component` 7 → 8** — the only dependency a major version behind.
- **End-of-life `ckeditor4` removed** — swapped for the maintained, lightweight `react-simple-wysiwyg`.
- **No breaking changes to the template's own API.** Same layout shell, theming, and starter workflow.

---

## What's Changed

### Security

`npm audit` is now clean. The `uuid` advisory came in through the unused `react-validation`; removing it plus a non-breaking `npm audit fix` (transitive `brace-expansion`, `fast-uri`, `tmp`) cleared everything.

### Removed — unused (zero source imports)

`react-validation`, `react-form-validator-core`, `react-table`, `react-image-crop`, `react-on-screen`, `react-animations`, `aphrodite`, and the now-unused `sweetalert` (v2).

### Replaced — abandoned → maintained library

| Old (last published)                     | New                   |
| ---------------------------------------- | --------------------- |
| `react-input-mask` (2022)                | `@react-input/mask`   |
| `react-color` (2022)                     | `@uiw/react-color`    |
| `react-bootstrap-sweetalert` (2022)      | `sweetalert2`         |
| `react-numeric-input` (2022)             | `rc-input-number`     |
| `react-cropper` (2023)                   | `react-easy-crop`     |
| `reactour` v1 (2024)                     | `@reactour/tour` v3   |
| `ckeditor4` / `ckeditor4-react` (**EOL**)| `react-simple-wysiwyg`|
| `moment` (maintenance-mode)              | `date-fns` (already a dependency) |

### Replaced — abandoned → local component

Small, dependency-free reimplementations under `src/components/` that preserve the original package's API and markup:

| Package                  | Replacement                          |
| ------------------------ | ------------------------------------ |
| `react-sparklines`       | `src/components/Sparklines/`         |
| `react-responsive-tabs`  | `src/components/ResponsiveTabs/` (same `RRT__*` classes the SCSS targets) |
| `react-liquid-gauge`     | `src/components/LiquidGauge.jsx` (animated SVG wave fill) |
| `react-rating`           | `src/components/Rating.jsx` (keeps the per-position custom-symbol API) |
| `react-sticky-el`        | `src/components/Sticky.jsx` (native CSS `position: sticky`) |

### Changed

- `react-data-table-component` bumped to v8 — no call-site changes needed.
- `moment` usages migrated to `date-fns`: `dateFnsLocalizer` for the big-calendar demo, `isAfter` for the date-range pickers.

### Kept deliberately

- `react-simple-maps` (v3) — still on its latest major and not abandoned; reimplementing its d3-geo projection/zoom stack would add risk with no security or maintenance benefit.

### Infrastructure

- `vite.config.js`: trimmed the CJS-interop list to the five packages that still need it, removed the dead `vendor-ckeditor` manualChunk and the stale `d3-array` optimizeDeps entry, and dropped `react-table` / `reactour` / `react-responsive-tabs` / `ckeditor4-react` from `overrides`.

---

## Upgrade from v4.5.0

Pure forward compatibility for consumers of the template UI.

1. Pull and reinstall: `npm install --legacy-peer-deps` (the lockfile was refreshed).
2. If your fork imported any removed package **directly**, switch to the replacement above. The local components (`Sparklines`, `ResponsiveTabs`, `LiquidGauge`, `Rating`, `Sticky`) live in `src/components/` and keep the original prop API.
3. Nothing in the layout shell, theming, persistence, dark mode, or accessibility layer changed.

---

## Tech Stack

| Category     | Technology                          | Version          |
| ------------ | ----------------------------------- | ---------------- |
| Framework    | React                               | 19.2             |
| Build Tool   | Vite                                | 8                |
| Test Runners | Vitest + React Testing Library      | 4 / 16           |
|              | Playwright                          | 1.59             |
| Linting      | ESLint 9 (flat config) + Prettier 3 | —                |
| UI Framework | Bootstrap 5.3 (dark-mode ready)     | 5.3.8            |
| Components   | Reactstrap                          | 9.2.3            |
| State        | Redux Toolkit                       | 2.12             |
| Routing      | React Router                        | 7.15             |
| Charts       | ApexCharts, Chart.js, Recharts      | 5.13 / 4.5 / 3.8 |
| Maps         | Leaflet, react-simple-maps          | 1.9 / 3.0        |
| Editor       | react-simple-wysiwyg                | 3.4              |
| Styling      | Sass                                | 1.99             |

---

## Security

**0 vulnerabilities** — clean `npm audit` after removing `react-validation` (the `uuid` advisory source) and applying the non-breaking transitive fixes.

---

## Links

- **Live Demo**: [ArchitectUI React Demo](https://demo.dashboardpack.com/architectui-react-free)
- **PRO Version**: [Get PRO](https://dashboardpack.com/theme-details/architectui-dashboard-react-pro)
- **Report Issues**: [GitHub Issues](https://github.com/DashboardPack/architectui-react-theme-free/issues)
- **Starter Guide**: [STARTER.md](STARTER.md)

---

## Full Changelog

See [Changelog.md](Changelog.md) for complete version history.

**Full Changelog**: <https://github.com/DashboardPack/architectui-react-theme-free/compare/v4.5.0...v4.6.0>

---

**Made with care by [DashboardPack](https://dashboardpack.com/)**
