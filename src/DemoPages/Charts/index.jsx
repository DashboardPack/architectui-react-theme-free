import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Charts

import ChartsSparklines1 from "./Sparklines1/";
import ChartsSparklines2 from "./Sparklines2/";
import ChartsChartJs from "./ChartJs/";
import ChartsGauges from "./Gauges/";
import ApexCharts from "./ApexCharts/";

const Charts = () => (
  <Fragment>
    <Routes>
      <Route path="sparklines-1" element={<ChartsSparklines1 />} />
      <Route path="sparklines-2" element={<ChartsSparklines2 />} />
      <Route path="chartjs" element={<ChartsChartJs />} />
      <Route path="gauges" element={<ChartsGauges />} />
      <Route path="apexcharts" element={<ApexCharts />} />
    </Routes>
  </Fragment>
);

export default Charts;
