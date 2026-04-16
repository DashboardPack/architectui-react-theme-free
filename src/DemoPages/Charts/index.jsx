import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../../Layout/AppMain/SuspenseFallback';

const ChartsSparklines1 = lazy(() => import('./Sparklines1/'));
const ChartsSparklines2 = lazy(() => import('./Sparklines2/'));
const ChartsChartJs = lazy(() => import('./ChartJs/'));
const ChartsGauges = lazy(() => import('./Gauges/'));
const ApexCharts = lazy(() => import('./ApexCharts/'));

const Charts = () => (
  <Fragment>
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="sparklines-1" element={<ChartsSparklines1 />} />
        <Route path="sparklines-2" element={<ChartsSparklines2 />} />
        <Route path="chartjs" element={<ChartsChartJs />} />
        <Route path="gauges" element={<ChartsGauges />} />
        <Route path="apexcharts" element={<ApexCharts />} />
      </Routes>
    </Suspense>
  </Fragment>
);

export default Charts;
