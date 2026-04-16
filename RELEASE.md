# Release v4.3.0

## ArchitectUI React Dashboard v4.3.0

**Release Date:** April 16, 2026

This release is a focused developer-experience upgrade: a working test harness, a CI pipeline, env-driven Vite config, an overrides audit that unblocks `npm install`, and new contributor docs. There are **no user-facing UI changes** — upgrading is safe for anyone already on v4.2.0.

---

## Highlights

- **`npm install` now finishes in ~1 minute** (was stalling indefinitely) after pruning 11 of 18 React 19 compatibility overrides whose upstream packages have since caught up.
- **Vitest 4 + React Testing Library** wired in with a jsdom environment, shared setup, and initial tests across reducer, store, and a layout component.
- **GitHub Actions CI** runs `lint`, `vitest run`, and `build` on every push and pull request.
- **Env-driven dev server and build base path** via `VITE_PORT` and `VITE_BASE` — no more editing `vite.config.js` for alternate ports or subdirectory deploys.
- **CONTRIBUTING.md** with the full developer workflow (scripts, env vars, testing, commit style, PR checklist).

---

## What's Changed

### Overrides Audit

The React 19 migration (v4.1.0) shipped with a defensive `overrides` block that force-pinned `react`/`react-dom` into 18 different sub-dependency trees. By the time this release was cut, upstream maintainers had updated most of those packages' peer ranges to cover React 19 — so the overrides were no longer load-bearing, and npm's `arborist` resolver was hanging trying to reconcile them against the full dep graph on fresh installs.

Each override was audited against the current published `peerDependencies.react`:

**Dropped (upstream now accepts React 19):**

`rc-slider`, `rc-tooltip`, `rc-util`, `rc-motion`, `@rc-component/trigger`, `@rc-component/portal`, `rc-resize-observer`, `react-copy-to-clipboard`, `styled-components`, `react-resize-detector`, `react-intersection-observer`

**Kept (upstream still caps at ≤18):**

`ckeditor4-react`, `react-anime`, `react-popper`, `react-responsive-tabs`, `react-simple-maps`, `react-table`, `reactour`

Net effect: clean `npm install --legacy-peer-deps` completes in ~1 minute instead of hanging.

### Testing

A first-class Vitest 4 + React Testing Library setup:

- `vitest.config.js` — jsdom environment, `src` alias, coverage exclusions for assets / polyfills / service worker
- `vitest.setup.js` — `@testing-library/jest-dom` matchers, RTL auto-cleanup, `matchMedia` / `ResizeObserver` shims
- Initial tests: `ThemeOptions` reducer, `configureAppStore`, `<AppFooter />` render smoke

Scripts:

| Command                   | Description                                      |
| ------------------------- | ------------------------------------------------ |
| `npm test`                | Vitest in watch mode                             |
| `npm test -- --run`       | Single run (same mode CI uses)                   |
| `npm run test:ui`         | Open the Vitest UI                               |
| `npm run test:coverage`   | Single run with v8 coverage report               |

### Continuous Integration

New workflow at [.github/workflows/ci.yml](.github/workflows/ci.yml):

- Runs on every push to `master` / `main` / `feature/**` and on every PR
- Steps: `npm ci --legacy-peer-deps` → `npm run lint` → `npx vitest run` → `npm run build`
- Node version from `.nvmrc` (Node 22 LTS)
- Concurrency cancels stale runs on the same ref

### Environment Variables

`vite.config.js` now reads env vars via Vite's `loadEnv`. Supported keys are documented in [.env.example](.env.example):

| Key           | Default | Effect                                                       |
| ------------- | ------- | ------------------------------------------------------------ |
| `VITE_PORT`   | `3001`  | Dev server port                                              |
| `VITE_BASE`   | `./`    | Public base path for the build (e.g. `"/architectui/"`)      |

Copy `.env.example` to `.env.local` and adjust — tracked config stays untouched.

### Contributor Documentation

New [CONTRIBUTING.md](CONTRIBUTING.md) covers:

- Prerequisites (Node version from `.nvmrc`, `--legacy-peer-deps` rationale)
- Full script table
- Environment variable reference
- Project layout
- Code style expectations
- Testing guidance
- Commit conventions (`Phase X.Y:` prefix for upgrade work)
- Pull request checklist

### Quality & Security

- `jsx-a11y/label-has-associated-control` downgraded from error to warning in `eslint.config.js` — the demo forms intentionally render labels without associated inputs, and blocking CI on them added no signal. Other jsx-a11y rules remain active.
- Remaining `http://` URLs in demo content switched to `https://` (Leaflet SRTM & Stamen attributions, Guided Tours CodePen link). The SVG XML namespace URI is intentionally left as HTTP — it's a spec-mandated identifier, not a fetchable URL.
- Defensive `.gitignore` + ESLint ignore patterns for `.node_modules*` and `node_modules_*` so local package-manager experiments can't trip up lint or `git status` later.

---

## Upgrade from v4.2.0

1. Pull the latest code.
2. Delete `node_modules` and `package-lock.json`.
3. `npm install --legacy-peer-deps` — should finish in ~1 minute.
4. Optional: copy `.env.example` to `.env.local` if you want a different `VITE_PORT` or `VITE_BASE`.
5. Run the usual sanity checks: `npm run lint`, `npm test -- --run`, `npm run build`.

No code changes are required in consumer projects.

---

## Tech Stack

| Category     | Technology                          | Version  |
| ------------ | ----------------------------------- | -------- |
| Framework    | React                               | 19.2     |
| Build Tool   | Vite                                | 8        |
| Test Runner  | Vitest + React Testing Library      | 4 / 16   |
| Linting      | ESLint 9 (flat config) + Prettier 3 | —        |
| UI Framework | Bootstrap                           | 5.3.8    |
| Components   | Reactstrap                          | 9.2.3    |
| State        | Redux Toolkit                       | 2.11     |
| Routing      | React Router                        | 7.14     |
| Animations   | Framer Motion                       | 12.38    |
| Charts       | ApexCharts, Chart.js, Recharts      | 5.10 / 4.5 / 3.8 |
| Maps         | Leaflet, react-simple-maps          | 1.9 / 3.0 |
| Styling      | Sass                                | 1.99     |

---

## Security

**0 vulnerabilities** — clean `npm audit` after the overrides audit and dependency refresh.

---

## Links

- **Live Demo**: [ArchitectUI React Demo](https://demo.dashboardpack.com/architectui-react-free)
- **PRO Version**: [Get PRO](https://dashboardpack.com/theme-details/architectui-dashboard-react-pro)
- **Report Issues**: [GitHub Issues](https://github.com/DashboardPack/architectui-react-theme-free/issues)

---

## Full Changelog

See [Changelog.md](Changelog.md) for complete version history.

**Full Changelog**: <https://github.com/DashboardPack/architectui-react-theme-free/compare/v4.2.0...v4.3.0>

---

**Made with care by [DashboardPack](https://dashboardpack.com/)**
