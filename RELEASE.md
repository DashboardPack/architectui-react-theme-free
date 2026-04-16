# Release v4.5.0

## ArchitectUI React Dashboard v4.5.0

**Release Date:** April 16, 2026

The "exceptional polish" release. Real dark mode, accessibility basics, four more unmaintained dependencies gone, and a proper starter-mode guide for consumers who want to turn the template into their own project. Eight commits on top of 4.4.0 — every one green through lint, unit tests, build, and the 24-route Playwright smoke test.

---

## Highlights

- **Real Bootstrap 5.3 dark mode** — `auto` / `light` / `dark` on the ThemeOptions panel, persisted, reactive to `prefers-color-scheme`.
- **Accessibility basics** — skip link, semantic landmarks (`<header>`, `<nav>`, `<main>`), `:focus-visible` rings, ARIA on icon-only buttons.
- **Three more unmaintained deps removed** — `react-anime` (unused), `react-visibility-sensor` (→ local IntersectionObserver hook), `react-loaders` (→ local component + existing `loaders.css`). Total since the start of the migration: four.
- **Starter-mode guide** ([STARTER.md](STARTER.md)) — step-by-step instructions for stripping to a starter project. Demo routes moved out of `Layout/AppMain` so the shell is framework-only.
- **Sparkline widget bug fix** — eight dashboard cards in CRM Dashboard 2 and Analytics were rendering their sparkline in a 9/12 column, leaving ~25% empty on the right.

---

## What's Changed

### Dark mode

New `darkMode` field on the `ThemeOptions` slice with three values:

- `'auto'` — follows `prefers-color-scheme`. Reacts live when the OS theme flips.
- `'light'` — force light regardless of system.
- `'dark'` — force dark regardless of system.

Persisted via the existing `localStorage` subscriber. `src/hooks/useDarkModeSync.js` resolves the preference into the concrete `'light' | 'dark'` value Bootstrap expects and writes it to `<html data-bs-theme>`. Bootstrap 5.3's native dark palette kicks in across reactstrap, cards, forms, tables, typography, and every utility-styled surface. Custom widgets with hard-coded colours still inherit correctly because they use `var(--bs-*)` tokens.

A three-button `Auto / Light / Dark` control lives at the top of the ThemeOptions side panel, with `aria-pressed` indicating the active choice.

### Accessibility pass

First real sweep. Nothing lint-counted was broken (lint warnings were mostly `no-unused-vars` in demo code), but the template wasn't actually usable by keyboard-only or screen-reader users:

| Addition                                       | Purpose                                               |
| ---------------------------------------------- | ----------------------------------------------------- |
| `<a class="skip-link" href="#main-content">`   | Tab-to-skip past the fixed sidebar and header         |
| `<header role="banner">`                       | Primary landmark for the app header                   |
| `<div role="navigation" id="app-sidebar">`     | Primary-nav landmark + target for `aria-controls`     |
| `<main id="main-content" tabIndex={-1}>`       | Content landmark + skip-link target                   |
| `:focus-visible` fallback ring                 | Keyboard-only highlight on custom widget classes      |
| `aria-label` on cog, hamburger, overflow btns  | Screen readers announce meaning, not "button"         |
| Keyboard activation on mobile overlay scrim    | Enter/Space/Escape close the mobile sidebar           |

Opt-out for components with their own focus styling: `data-focus-visible-self` on the element.

### Three more dependencies dropped

Phase 12 (in 4.4.0) removed `react-sweet-progress`. This release removes three more:

| Package                   | Reason                                               | Replaced by                                               |
| ------------------------- | ---------------------------------------------------- | --------------------------------------------------------- |
| `react-anime`             | Zero source imports; 17.x peer pin                   | Deleted outright                                          |
| `react-visibility-sensor` | Last released 2020; class component, render-prop     | `src/hooks/useInView.js` (IntersectionObserver, ~25 LOC)  |
| `react-loaders`           | Last released 2018; webpack-UMD with brittle interop | `src/components/Loader.jsx` (uses existing `loaders.css`) |

The local `<Loader>` is aliased to the `react-loaders` specifier so the five consumer imports stay as `from 'react-loaders'` — zero source-level churn on the demo pages.

### Layout / DemoPages separation

Before this release `Layout/AppMain/index.jsx` owned nine `DemoPages/*` lazy imports. After, it's a 15-line shell that imports `demoRoutes()` from `src/DemoPages/routes.jsx`. For consumers starting a new project:

- `rm -rf src/DemoPages/` produces exactly one import error (in `Layout/AppMain`).
- [STARTER.md](STARTER.md) walks through the three edits you need after the delete, with full code examples.
- Everything else — the shell, theme persistence, dark mode, error boundary, accessibility, CI, Playwright — is framework and survives the trim unchanged.

### Sparkline width fix

Eight widget cards (four in CRM Dashboard 2, four in Analytics) were rendering their sparkline SVG in `<Col md="9">` inside `<Row className="widget-chart-wrapper">`. There was no sibling column — the 9/12 was purely a leftover from an old layout — so the charts visibly stopped at 75% of card width. Now `md="12"`; SVGs stretch edge to edge.

---

## Upgrade from v4.4.0

Pure forward compatibility. No consumer code changes.

1. Pull, `npm install --legacy-peer-deps` (if you want the slimmer tree), run the usual sanity checks.
2. First load on 4.5.0 gets `darkMode: 'auto'` as a default (persisted state merges over reducer defaults, so any prefs users had keep working).
3. If you had forks that used `react-anime` or `react-visibility-sensor` directly: neither package ships anymore. `react-loaders` is aliased locally and preserves the `{ Loader, Types }` import shape.

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
| State        | Redux Toolkit                       | 2.11             |
| Routing      | React Router                        | 7.14             |
| Animations   | Framer Motion                       | 12.38            |
| Charts       | ApexCharts, Chart.js, Recharts      | 5.10 / 4.5 / 3.8 |
| Maps         | Leaflet, react-simple-maps          | 1.9 / 3.0        |
| Styling      | Sass                                | 1.99             |

---

## Security

**0 vulnerabilities** — clean `npm audit` after the four dependency removals across 4.4.0 + 4.5.0.

---

## Links

- **Live Demo**: [ArchitectUI React Demo](https://demo.dashboardpack.com/architectui-react-free)
- **PRO Version**: [Get PRO](https://dashboardpack.com/theme-details/architectui-dashboard-react-pro)
- **Report Issues**: [GitHub Issues](https://github.com/DashboardPack/architectui-react-theme-free/issues)
- **Starter Guide**: [STARTER.md](STARTER.md)

---

## Full Changelog

See [Changelog.md](Changelog.md) for complete version history.

**Full Changelog**: <https://github.com/DashboardPack/architectui-react-theme-free/compare/v4.4.0...v4.5.0>

---

**Made with care by [DashboardPack](https://dashboardpack.com/)**
