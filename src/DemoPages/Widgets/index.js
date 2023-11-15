import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// CHART BOXES

// CONTENT BOXES

// PROFILE BOXES

// Dashboard Widgets

import WidgetsProfileBoxes from "./ProfileBoxes/";

import WidgetsChartBoxes from "./ChartBoxes/";
import WidgetsChartBoxes2 from "./ChartBoxes2/";
import WidgetsChartBoxes3 from "./ChartBoxes3/";

import WidgetsContentBoxes from "./ContentBoxes/";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const Widgets = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Dashboard Widgets */}

          <Route path={`${match.url}/chart-boxes`} component={WidgetsChartBoxes}/>
          <Route path={`${match.url}/chart-boxes-2`} component={WidgetsChartBoxes2}/>
          <Route path={`${match.url}/chart-boxes-3`} component={WidgetsChartBoxes3}/>
          <Route path={`${match.url}/profile-boxes`} component={WidgetsProfileBoxes}/>
          <Route path={`${match.url}/content-boxes`} component={WidgetsContentBoxes}/>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Widgets;
