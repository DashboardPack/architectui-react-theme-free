import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// DASHBOARD WIDGETS

import ChartBoxes from "./ChartBoxes/";
import ChartBoxes2 from "./ChartBoxes2/";
import ChartBoxes3 from "./ChartBoxes3/";
import ProfileBoxes from "./ProfileBoxes/";
import ContentBoxes from "./ContentBoxes/";

const Widgets = () => (
  <Fragment>
    <Routes>
      <Route path="dashboard-boxes" element={<ChartBoxes />} />
      <Route path="chart-boxes-2" element={<ChartBoxes2 />} />
      <Route path="chart-boxes-3" element={<ChartBoxes3 />} />
      <Route path="profile-boxes" element={<ProfileBoxes />} />
      <Route path="content-boxes" element={<ContentBoxes />} />
    </Routes>
  </Fragment>
);

export default Widgets;
