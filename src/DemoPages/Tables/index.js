import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Tables

import DataTableBasic from "./DataTables/Examples/Basic";
import DataTableFixedHeader from "./DataTables/Examples/FixedHeader";
import DataTablePivoting from "./DataTables/Examples/Pivoting";
import RegularTables from "./RegularTables";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options

import ThemeOptions from "../../Layout/ThemeOptions/";

const Tables = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Tables */}

          <Route path={`${match.url}/data-tables`} component={DataTableBasic} />
          <Route path={`${match.url}/datatables-fixed-header`} component={DataTableFixedHeader}/>
          <Route path={`${match.url}/datatables-selectable-rows`} component={DataTablePivoting}/>
          <Route path={`${match.url}/regular-tables`} component={RegularTables}/>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Tables;
