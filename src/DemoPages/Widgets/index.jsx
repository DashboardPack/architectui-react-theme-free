import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../../Layout/AppMain/SuspenseFallback';

const ChartBoxes = lazy(() => import('./ChartBoxes/'));
const ChartBoxes2 = lazy(() => import('./ChartBoxes2/'));
const ChartBoxes3 = lazy(() => import('./ChartBoxes3/'));
const ProfileBoxes = lazy(() => import('./ProfileBoxes/'));
const ContentBoxes = lazy(() => import('./ContentBoxes/'));

const Widgets = () => (
  <Fragment>
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="dashboard-boxes" element={<ChartBoxes />} />
        <Route path="chart-boxes-2" element={<ChartBoxes2 />} />
        <Route path="chart-boxes-3" element={<ChartBoxes3 />} />
        <Route path="profile-boxes" element={<ProfileBoxes />} />
        <Route path="content-boxes" element={<ContentBoxes />} />
      </Routes>
    </Suspense>
  </Fragment>
);

export default Widgets;
