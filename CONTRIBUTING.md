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

The Vitest harness is wired up — config in [vitest.config.js](vitest.config.js), setup in [vitest.setup.js](vitest.setup.js), tests live next to the code under test as `*.test.jsx` (see [src/reducers/ThemeOptions.test.jsx](src/reducers/ThemeOptions.test.jsx) and friends).

The runner itself is **not yet installed** in `package.json`. The current `npm install` resolution stalls when the React 19 `overrides` block is reconciled with the new dev dependencies, so the test deps were held back to keep `npm install` working for everyone. Until the override audit lands, install Vitest manually if you want to run the suite locally:

```bash
pnpm add -D vitest @vitest/ui @vitest/coverage-v8 \
  @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
npx vitest run
```

When you write new tests:

- **Prefer behavior-level tests.** Render via RTL, assert on what the user sees.
- **Keep unit tests pure.** Reducers and helpers get plain-JS tests — no DOM.

CI runs `lint` and `build` on every push and PR — see [.github/workflows/ci.yml](.github/workflows/ci.yml). The test step will be re-enabled once the override audit lets `npm install` complete cleanly with the Vitest devDeps in place.

## Commits

- One logical change per commit.
- Subject in imperative mood, present tense (`Add hero carousel`, not `Added`).
- Reference the upgrade phase when relevant (`Phase 5.1: add Vitest smoke test`).

## Pull Requests

1. Fork the repo and create a feature branch (`feature/<short-name>`).
2. Make sure `npm run lint` and `npm run build` pass locally (and `npx vitest run` if you have the test deps installed).
3. Open a PR against `master`. Include screenshots or a short recording when UI changes are user-visible.
4. Keep PRs small and focused — reviewers merge faster.

## Reporting Issues

Use [GitHub Issues](https://github.com/DashboardPack/architectui-react-theme-free/issues) with:

- A clear reproduction (steps or a minimal repo).
- Expected vs. actual behavior.
- Browser and Node versions.

## License

By contributing you agree that your contributions will be licensed under the [MIT License](LICENSE).
