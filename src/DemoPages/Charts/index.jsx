import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import SuspenseFallback from '../../Layout/AppMain/SuspenseFallback';

const ChartsSparklines1 = lazy(() => import('./Sparklines1/'));
const ChartsSparklines2 = lazy(() => import('./Sparklines2/'));
const ChartsChartJs = lazy(() => import('./ChartJs/'));
const ChartsGauges = lazy(() => import('./Gauges/'));
const ChartJsAdvanced = lazy(() => import('./ChartJsAdvanced/'));

const Charts = () => (
  <Fragment>
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="sparklines-1" element={<ChartsSparklines1 />} />
        <Route path="sparklines-2" element={<ChartsSparklines2 />} />
        <Route path="chartjs" element={<ChartsChartJs />} />
        <Route path="gauges" element={<ChartsGauges />} />
        <Route path="chartjs-advanced" element={<ChartJsAdvanced />} />
        {/* Old URL of this page, kept so existing links and bookmarks still work */}
        <Route path="apexcharts" element={<Navigate to="../chartjs-advanced" replace />} />
      </Routes>
    </Suspense>
  </Fragment>
);

export default Charts;
