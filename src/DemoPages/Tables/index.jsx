import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../../Layout/AppMain/SuspenseFallback';

const RegularTables = lazy(() => import('./RegularTables'));
const DataTables = lazy(() => import('./DataTables'));

const Tables = () => (
  <Fragment>
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="regular-tables" element={<RegularTables />} />
        <Route path="datatables" element={<DataTables />} />
      </Routes>
    </Suspense>
  </Fragment>
);

export default Tables;
