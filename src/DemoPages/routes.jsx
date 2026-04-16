import { Suspense, lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';
import SuspenseFallback from '../Layout/AppMain/SuspenseFallback';

// Every demo section is code-split so only the routes a user visits pay the
// bundle cost. When you're starting a new project, delete this file (and the
// entire `DemoPages/` folder) and pass your own `<Route>` children into
// `<AppMain>` from your own routes module.

const UserPages = lazy(() => import('./UserPages'));
const Applications = lazy(() => import('./Applications'));
const Dashboards = lazy(() => import('./Dashboards'));
const Widgets = lazy(() => import('./Widgets'));
const Elements = lazy(() => import('./Elements'));
const Components = lazy(() => import('./Components'));
const Charts = lazy(() => import('./Charts'));
const Forms = lazy(() => import('./Forms'));
const Tables = lazy(() => import('./Tables'));

const lazyRoute = (Component, type = 'ball-pulse-rise') => (
  <Suspense fallback={<SuspenseFallback type={type} />}>
    <Component />
  </Suspense>
);

export default function demoRoutes() {
  return (
    <>
      <Route path="/components/*" element={lazyRoute(Components)} />
      <Route path="/forms/*" element={lazyRoute(Forms)} />
      <Route path="/charts/*" element={lazyRoute(Charts, 'ball-rotate')} />
      <Route path="/tables/*" element={lazyRoute(Tables)} />
      <Route path="/elements/*" element={lazyRoute(Elements, 'line-scale')} />
      <Route path="/widgets/*" element={lazyRoute(Widgets, 'ball-pulse-sync')} />
      <Route path="/pages/*" element={lazyRoute(UserPages, 'line-scale-party')} />
      <Route path="/apps/*" element={lazyRoute(Applications, 'ball-pulse')} />
      <Route path="/dashboards/*" element={lazyRoute(Dashboards, 'ball-grid-cy')} />
      <Route path="/" element={<Navigate to="/dashboards/crm" replace />} />
    </>
  );
}
