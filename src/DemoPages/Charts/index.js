import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Charts

import ChartsSparklines1 from "./Sparklines1/";
import ChartsSparklines2 from "./Sparklines2/";
import ChartsChartJs from "./ChartJs/";
import ChartsGauges from "./Gauges/";
import ApexCharts from "./ApexCharts/";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options

import ThemeOptions from "../../Layout/ThemeOptions/";

const Charts = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Charts */}

          <Route path={`${match.url}/sparklines-1`} component={ChartsSparklines1}/>
          <Route path={`${match.url}/sparklines-2`} component={ChartsSparklines2}/>
          <Route path={`${match.url}/chartjs`} component={ChartsChartJs} />
          <Route path={`${match.url}/gauges`} component={ChartsGauges} />
          <Route path={`${match.url}/apexcharts`} component={ApexCharts} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Charts;
