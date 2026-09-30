# Release v4.9.0

## ArchitectUI React Dashboard v4.9.0

**Release Date:** October 1, 2026

The charts release. From version 5.2 onwards ApexCharts is published under a proprietary licence that does not allow redistribution inside templates, so this release moves every chart to **Chart.js 4.5 (MIT)**. No demo loses a chart. Verified green through lint (0 errors), 23 unit tests, the production build and the Playwright route smoke test.

---

## Highlights

- **Chart.js 4.5 (MIT) replaces ApexCharts** everywhere, through `react-chartjs-2` (MIT). Zooming uses `chartjs-plugin-zoom` (MIT, with `hammerjs`, MIT).
- **Chart.js Advanced page** (`#/charts/chartjs-advanced`) replaces the ApexCharts page with the same examples. The old `#/charts/apexcharts` URL redirects there.
- **Minimal dashboards 1 and 2** rebuilt on Chart.js.
- **One shared chart theme** in `src/config/chartTheme.js`: fonts and colours come from the Bootstrap CSS variables, and charts follow the dark-mode switch.
- **~216 kB less gzipped JavaScript** in the production build.
- **`npm ci` works again** — a lockfile entry was missing its version.

---

## What's Changed

### Charts

| Page                | Before (ApexCharts)                   | Now (Chart.js)                                             |
| ------------------- | ------------------------------------- | ---------------------------------------------------------- |
| Chart.js Advanced   | area chart with zoom toolbar          | `line` with gradient fill + `ZoomableChart` (zoom / reset) |
|                     | radialBar                             | `doughnut` progress ring with centre label                 |
|                     | donut                                 | `doughnut` with percentage labels                          |
|                     | horizontal bar                        | `bar` with `indexAxis: 'y'`                                |
|                     | area / bar / line sparklines          | `line` / `bar` sparklines (no axes, legend or points)      |
| Minimal dashboard 1 | column + line, two y axes             | mixed `bar` + `line` with a second y axis                  |
|                     | 270° gradient radialBar               | 270° `doughnut` gauge with a gradient arc                  |
|                     | population pyramid, column sparklines | stacked horizontal `bar`, grouped `bar` sparklines         |
| Minimal dashboard 2 | column + bar + line with zoom         | mixed `bar` + `line` in `ZoomableChart`                    |
|                     | column sparkline, population pyramid  | grouped `bar` sparkline, stacked horizontal `bar`          |

- **Shared theme** — `src/config/chartTheme.js` registers Chart.js, sets `Chart.defaults` (body font, colours from `--bs-*` variables, subtle horizontal gridlines, rounded bars, dot legend markers, dark tooltips) and refreshes charts on the page when `data-bs-theme` changes. It also exports `chartColors()`, `alpha()`, `verticalGradient()`, `horizontalGradient()`, `gaugeColors()`, `sparklineOptions()`, `centerTextPlugin` and `arcPercentPlugin`. Import it instead of `chart.js/auto`.
- **`src/components/ZoomableChart`** — a chart with drag / Ctrl + wheel / pinch zooming, Shift + drag panning, and zoom in / out / reset buttons.
- **Removed**: `apexcharts`, `react-apexcharts`, the `.apexcharts-*` styles and their build chunk.

### Bundle size

| Production build (gzipped) | v4.8.0   | v4.9.0   |
| -------------------------- | -------- | -------- |
| All JavaScript             | 1,344 kB | 1,128 kB |
| Chart library chunks       | 301 kB   | 80 kB    |

### Fixed

- **`npm ci` failed with "Invalid Version"** because `package-lock.json` listed the `@rolldown/binding-android-arm64` platform binding without a version. The entry is complete now, so clean installs and CI work again.
- **Minimal dashboards logged a console error** (reactstrap's `bsSize` warning) from the page-title period selector. It now uses `bsSize`; the markup is unchanged.

---

## Upgrade from v4.8.0

1. Pull and reinstall: `npm install --legacy-peer-deps`.
2. If you built custom pages with ApexCharts, rebuild them with Chart.js (`react-chartjs-2`) and import `src/config/chartTheme.js`. `src/DemoPages/Charts/ChartJsAdvanced/` has a Chart.js version of each former ApexCharts example.
3. Links to `#/charts/apexcharts` keep working; they redirect to `#/charts/chartjs-advanced`.

---

## Tech Stack

| Category     | Technology                           | Version    |
| ------------ | ------------------------------------ | ---------- |
| Framework    | React                                | 19.2       |
| Build Tool   | Vite                                 | 8.2        |
| Test Runners | Vitest + React Testing Library       | 4 / 16     |
|              | Playwright                           | 1.62       |
| Linting      | ESLint 9 (flat config) + Prettier 3  | —          |
| UI Framework | Bootstrap 5.3 (dark-mode ready)      | 5.3.8      |
| Components   | Reactstrap                           | 9.2.3      |
| State        | Redux Toolkit                        | 2.12       |
| Routing      | React Router                         | 8.3        |
| Charts       | Chart.js (react-chartjs-2), Recharts | 4.5 / 3.10 |
| Maps         | Leaflet, react-simple-maps           | 1.9 / 3.0  |
| Editor       | react-simple-wysiwyg                 | 3.4        |
| Styling      | Sass                                 | 1.102      |

---

## Links

- **Live Demo**: [ArchitectUI React Demo](https://demo.dashboardpack.com/architectui-react-free)
- **PRO Version**: [Get PRO](https://dashboardpack.com/theme-details/architectui-dashboard-react-pro)
- **Report Issues**: [GitHub Issues](https://github.com/DashboardPack/architectui-react-theme-free/issues)
- **Starter Guide**: [STARTER.md](STARTER.md)

---

## Full Changelog

See [Changelog.md](Changelog.md) for complete version history.

**Full Changelog**: <https://github.com/DashboardPack/architectui-react-theme-free/compare/v4.8.0...v4.9.0>

---

**Made with care by [DashboardPack](https://dashboardpack.com/)**
