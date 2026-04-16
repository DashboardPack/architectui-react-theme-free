import { Suspense, lazy, Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SuspenseFallback from './SuspenseFallback';

const UserPages = lazy(() => import('../../DemoPages/UserPages'));
const Applications = lazy(() => import('../../DemoPages/Applications'));
const Dashboards = lazy(() => import('../../DemoPages/Dashboards'));
const Widgets = lazy(() => import('../../DemoPages/Widgets'));
const Elements = lazy(() => import('../../DemoPages/Elements'));
const Components = lazy(() => import('../../DemoPages/Components'));
const Charts = lazy(() => import('../../DemoPages/Charts'));
const Forms = lazy(() => import('../../DemoPages/Forms'));
const Tables = lazy(() => import('../../DemoPages/Tables'));

const lazyRoute = (Component, type = 'ball-pulse-rise') => (
  <Suspense fallback={<SuspenseFallback type={type} />}>
    <Component />
  </Suspense>
);

const AppMain = () => (
  <Fragment>
    <Routes>
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
    </Routes>
    <ToastContainer />
  </Fragment>
);

export default AppMain;
