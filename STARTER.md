# Starting a new project from this template

ArchitectUI ships with ~150 demo pages so you can see every component in context. When you start a real project, you want the shell — header, sidebar, footer, theme system, persistence, error boundary, CI — without the demos.

This guide explains exactly what to keep, what to delete, and the three edits you need to make afterwards.

## TL;DR

```bash
rm -rf src/DemoPages
# Then: edit src/Layout/AppMain/index.jsx, src/Layout/AppSidebar/AppNav/NavItems.js,
# and src/Layout/AppHeader/Components/UserBox/tabs (or swap those folders for your own).
```

Everything else is framework and is safe to keep.

## What each top-level folder does

| Folder                  | Keep? | Purpose                                                     |
| ----------------------- | ----- | ----------------------------------------------------------- |
| `src/Layout/`           | ✅     | App shell (header, sidebar, footer, theme panel). **Keep.** |
| `src/reducers/`         | ✅     | Redux `ThemeOptions` slice.                                 |
| `src/config/`           | ✅     | Store setup + localStorage persistence helper.              |
| `src/hooks/`            | ✅     | `useDarkModeSync`, `useInView`, any project hooks.          |
| `src/components/`       | ✅     | Shared components (`ErrorBoundary`, `Loader`, `CircleProgress`). |
| `src/utils/`            | ✅     | `TransitionWrapper`, `TabsWrapper`, `LoadingOverlay`.       |
| `src/assets/`           | ✅     | SCSS entry, themes, icon fonts, images.                     |
| `src/index.jsx`         | ✅     | App entry — mounts `<ErrorBoundary>`, `<Provider>`, `<HashRouter>`. |
| `src/DemoPages/`        | ❌     | Every demo page and the route map that wires them. **Delete.** |
| `public/fonts/`         | ✅     | Linearicons font files referenced from SCSS.                |
| `public/favicon.ico`    | ✅     | Replace with your own favicon.                              |

## After `rm -rf src/DemoPages/`

You'll see three import errors. Fix them in this order:

### 1. `src/Layout/AppMain/index.jsx` — swap the route list

`AppMain` currently imports `demoRoutes` from `src/DemoPages/routes.jsx`. Replace it with your own routes:

```jsx
import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SuspenseFallback from './SuspenseFallback';

const Dashboard = lazy(() => import('../../pages/Dashboard'));
const Settings = lazy(() => import('../../pages/Settings'));

const lazyRoute = (Component) => (
  <Suspense fallback={<SuspenseFallback />}>
    <Component />
  </Suspense>
);

const AppMain = () => (
  <Fragment>
    <Routes>
      <Route path="/dashboard" element={lazyRoute(Dashboard)} />
      <Route path="/settings" element={lazyRoute(Settings)} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
    <ToastContainer />
  </Fragment>
);

export default AppMain;
```

### 2. `src/Layout/AppSidebar/AppNav/NavItems.js` — swap the sidebar menu

The sidebar navigation entries are defined here as a plain JS array. Replace the demo entries with your own — the shape is documented in the file header.

### 3. `src/Layout/AppHeader/Components/UserBox/tabs` — swap or delete the user-box dropdown tabs

The user-box dropdown contains demo content (recent messages, system examples, timeline). Either:

- **Delete the tabs folder** and simplify `UserBox/index.jsx` to render just a user menu, or
- **Replace each tab component** (`Messages`, `Timeline`, `System`) with your own content.

## Things to verify after trimming

```bash
npm run lint       # 0 errors expected
npm run build      # should finish in ~3–4 s
npm test -- --run  # unit tests still green (Redux + error boundary + persist layer)
```

The 24-route Playwright smoke test (`npm run test:e2e`) will fail after you delete `DemoPages/` because the routes no longer exist. Either delete `e2e/routes.spec.js` and replace it with tests for your own routes, or update the `routes` array at the top of the file to point at your new paths.

## Where `src/Layout/*` still knows about demos

The layout shell is almost entirely framework, but two places still reach for demo content for decoration:

- **`src/Layout/AppMain/PageTitle.jsx`** and siblings — these are the dashboard page headers with icon / subheading. The breadcrumb text is hard-coded per page type. They're generic enough to keep; change the text to match your app.
- **`src/Layout/AppHeader/Components/UserBox/`** — ships with demo avatar / messages / timeline content. See item 3 above.

Nothing in `src/Layout/` imports from `src/DemoPages/` outside the two swap points listed above, so you can grep your codebase with `grep -r DemoPages src/` after the trim to confirm everything is gone.

## Keeping the theme features

The four reliability features added in v4.3.0 / v4.4.0 survive the trim automatically — they're all in `src/components/`, `src/config/`, or `src/hooks/`:

- **ErrorBoundary** wraps your app via `src/index.jsx`.
- **Theme persistence** (localStorage) runs from `src/config/configureStore.jsx`.
- **Dark mode sync** runs from `src/DemoPages/Main/index.jsx` — move the `useDarkModeSync()` call into your new shell entry, or just keep importing it wherever you mount `<AppHeader>`.
- **Bootstrap 5.3 `data-bs-theme` toggle UI** is in `src/Layout/ThemeOptions/index.jsx`. If you don't want the configurator panel in production, render `<ThemeOptions />` conditionally (`{import.meta.env.DEV && <ThemeOptions />}`).

## Suggested structure after the trim

```
src/
├── Layout/                    # unchanged
├── components/                # unchanged
├── config/                    # unchanged
├── hooks/                     # unchanged
├── reducers/                  # add your app slices here
├── pages/                     # your app's actual pages
│   ├── Dashboard.jsx
│   ├── Settings.jsx
│   └── ...
├── App.jsx                    # replaces DemoPages/Main/index.jsx
├── index.jsx                  # unchanged
└── assets/                    # unchanged (drop themes you won't use)
```

## Minimum starter checklist

- [ ] `rm -rf src/DemoPages`
- [ ] Replace `src/Layout/AppMain/index.jsx` routes with your own
- [ ] Replace `src/Layout/AppSidebar/AppNav/NavItems.js` menu with your own
- [ ] Trim or replace `src/Layout/AppHeader/Components/UserBox/tabs`
- [ ] Replace or delete `e2e/routes.spec.js` for your routes
- [ ] `npm run lint && npm run build` pass
- [ ] Swap `public/favicon.ico` and `public/index.html` `<title>` / `<meta description>` for your brand

You're done. The template's reliability floor (CI, ErrorBoundary, persistence, dark mode, accessibility basics) carries over unchanged.
