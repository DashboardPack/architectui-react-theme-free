import { Fragment } from 'react';
import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import demoRoutes from '../../DemoPages/routes';

/**
 * App content area. Renders the route tree and a toast container.
 *
 * The demo routes live in `src/DemoPages/routes.jsx` so this shell stays
 * framework-only — if you're starting a project from this template, replace
 * the `demoRoutes()` call with your own `<Route>` children (see STARTER.md).
 */
const AppMain = () => (
  <Fragment>
    <Routes>{demoRoutes()}</Routes>
    <ToastContainer />
  </Fragment>
);

export default AppMain;
