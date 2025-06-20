import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

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

const Widgets = () => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Routes>
            <Route path="chart-boxes" element={<WidgetsChartBoxes />} />
            <Route path="chart-boxes-2" element={<WidgetsChartBoxes2 />} />
            <Route path="chart-boxes-3" element={<WidgetsChartBoxes3 />} />
            <Route path="profile-boxes" element={<WidgetsProfileBoxes />} />
            <Route path="content-boxes" element={<WidgetsContentBoxes />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Widgets;
