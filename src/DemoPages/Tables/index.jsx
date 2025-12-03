import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Tables

import RegularTables from "./RegularTables";
import DataTables from "./DataTables";

const Tables = () => (
  <Fragment>
    <Routes>
      <Route path="regular-tables" element={<RegularTables />} />
      <Route path="datatables" element={<DataTables />} />
    </Routes>
  </Fragment>
);

export default Tables;
