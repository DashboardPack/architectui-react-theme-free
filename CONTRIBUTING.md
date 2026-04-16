# Contributing

Thanks for your interest in improving ArchitectUI React. This guide covers the day-to-day workflow for contributors.

## Prerequisites

- **Node.js** — use the version pinned in [.nvmrc](.nvmrc) (Node 22 LTS). `nvm use` will pick it up automatically.
- **npm** — ships with Node.

## Getting Started

```bash
git clone https://github.com/DashboardPack/architectui-react-theme-free.git
cd architectui-react-theme-free
npm install --legacy-peer-deps
```

`--legacy-peer-deps` is required because a handful of older component libraries declare `react@^18` peers while we ship on React 19. The `overrides` block in [package.json](package.json) covers the runtime side.

## Scripts

| Command                     | Purpose                                          |
| --------------------------- | ------------------------------------------------ |
| `npm start` / `npm run dev` | Start the Vite dev server (default port `3001`). |
| `npm run build`             | Production build to `build/`.                    |
| `npm run build:analyze`     | Build and open the Rollup bundle visualizer.     |
| `npm run preview`           | Serve the built `build/` locally.                |
| `npm run lint`              | Run ESLint over the project.                     |
| `npm run lint:fix`          | Run ESLint and auto-fix what it can.             |
| `npm run format`            | Run Prettier (write).                            |
| `npm run format:check`      | Run Prettier in check-only mode (same as CI).    |
| `npm test`                  | Run Vitest in watch mode.                        |
| `npm test -- --run`         | Run Vitest once (same mode used in CI).          |
| `npm run test:ui`           | Open the Vitest UI.                              |
| `npm run test:coverage`     | Run Vitest once with v8 coverage.                |

## Environment

Copy [.env.example](.env.example) to `.env.local` and tweak values as needed. Supported keys:

| Key           | Default | Effect                                  |
| ------------- | ------- | --------------------------------------- |
| `VITE_PORT`   | `3001`  | Dev server port.                        |
| `VITE_BASE`   | `./`    | Public base path used by the build.     |

## Project Layout

```text
src/
├── DemoPages/     demo screens (lazy-loaded per route in AppMain.jsx)
├── Layout/        AppHeader / AppSidebar / AppFooter / AppMain
├── assets/        SCSS entry + images + themes
├── components/    shared components
├── config/        Redux store setup
├── reducers/      Redux slices (ThemeOptions)
└── utils/         small shared helpers
```

The build system is Vite. Manual vendor chunking lives in [vite.config.js](vite.config.js); keep related libraries in the same chunk so the cached bundle stays stable between releases.

## Coding Standards

- **ESLint + Prettier** are enforced. Run `npm run lint` and `npm run format` before committing.
- **Function components + hooks** only. No class components, no `connect()`.
- **Guard clauses** for missing DOM nodes (`if (!el) return;`).
- **No `any`**-style escape hatches — this is a JavaScript project, but we avoid disabling lint rules inline. If a rule is wrong for a file, raise it in a PR.
- **Accessibility** rules from `eslint-plugin-jsx-a11y` are advisory; prefer fixing the warning over silencing it.

## Testing

Tests live next to the code under test as `*.test.jsx` and use Vitest + React Testing Library. The entry point is [vitest.config.js](vitest.config.js); shared setup (matchers, RTL cleanup, `matchMedia` / `ResizeObserver` shims) lives in [vitest.setup.js](vitest.setup.js).

```bash
npm test              # watch mode
npm test -- --run     # single run, same as CI
npm run test:ui       # Vitest UI
npm run test:coverage # single run with v8 coverage
```

When you write new tests:

- **Prefer behavior-level tests.** Render via RTL, assert on what the user sees.
- **Keep unit tests pure.** Reducers and helpers get plain-JS tests — no DOM.

CI runs `lint`, `vitest run`, and `build` on every push and PR — see [.github/workflows/ci.yml](.github/workflows/ci.yml).

## Commits

- One logical change per commit.
- Subject in imperative mood, present tense (`Add hero carousel`, not `Added`).
- Reference the upgrade phase when relevant (`Phase 5.1: add Vitest smoke test`).

## Pull Requests

1. Fork the repo and create a feature branch (`feature/<short-name>`).
2. Make sure `npm run lint`, `npm test -- --run`, and `npm run build` all pass locally — same checks CI runs.
3. Open a PR against `master`. Include screenshots or a short recording when UI changes are user-visible.
4. Keep PRs small and focused — reviewers merge faster.

## Reporting Issues

Use [GitHub Issues](https://github.com/DashboardPack/architectui-react-theme-free/issues) with:

- A clear reproduction (steps or a minimal repo).
- Expected vs. actual behavior.
- Browser and Node versions.

## License

By contributing you agree that your contributions will be licensed under the [MIT License](LICENSE).
