import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../../Layout/AppMain/SuspenseFallback';

const AnalyticsDashboard = lazy(() => import('./Analytics/'));
const SalesDashboard = lazy(() => import('./Sales/'));
const CommerceDashboard = lazy(() => import('./Commerce/'));
const CRMDashboard = lazy(() => import('./CRM/'));
const MinimalDashboard1 = lazy(() => import('./Minimal/Variation1'));
const MinimalDashboard2 = lazy(() => import('./Minimal/Variation2'));

const Dashboards = () => (
  <Fragment>
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="analytics" element={<AnalyticsDashboard />} />
        <Route path="sales" element={<SalesDashboard />} />
        <Route path="commerce" element={<CommerceDashboard />} />
        <Route path="crm" element={<CRMDashboard />} />
        <Route path="minimal-dashboard-1" element={<MinimalDashboard1 />} />
        <Route path="minimal-dashboard-2" element={<MinimalDashboard2 />} />
      </Routes>
    </Suspense>
  </Fragment>
);

export default Dashboards;
