import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// DASHBOARDS

import AnalyticsDashboard from "./Analytics/";
import SalesDashboard from "./Sales/";
import CommerceDashboard from "./Commerce/";
import CRMDashboard from "./CRM/";
import MinimalDashboard1 from "./Minimal/Variation1";
import MinimalDashboard2 from "./Minimal/Variation2";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const Dashboards = () => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Routes>
            <Route path="analytics" element={<AnalyticsDashboard />} />
            <Route path="sales" element={<SalesDashboard />} />
            <Route path="commerce" element={<CommerceDashboard />} />
            <Route path="crm" element={<CRMDashboard />} />
            <Route path="minimal-dashboard-1" element={<MinimalDashboard1 />} />
            <Route path="minimal-dashboard-2" element={<MinimalDashboard2 />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
