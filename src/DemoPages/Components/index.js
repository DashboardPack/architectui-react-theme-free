import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Components

import Tabs from "./Tabs/";
import Notifications from "./Notifications/";
import TooltipsPopovers from "./TooltipsPopovers/";
import Carousel from "./Carousel/";
import Maps from "./Maps/";
import Ratings from "./Ratings/";
import ImageCropper from "./ImageCropper/";
import GuidedTours from "./GuidedTours/";
import Calendar from "./Calendar/";
import Accordion from "./Accordion/";
import BlockLoading from "./BlockLoading/";
import CountUp from "./CountUp/";
import Modal from "./Modal/";
import Pagination from "./Pagination/";
import ProgressBar from "./ProgressBar/";
import ScrollableElements from "./ScrollableElements/";
import StickyElements from "./StickyElements/";
import TreeView from "./TreeView/";

const Components = () => (
  <Fragment>
    <Routes>
      <Route path="tabs" element={<Tabs />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="tooltips-popovers" element={<TooltipsPopovers />} />
      <Route path="carousel" element={<Carousel />} />
      <Route path="maps" element={<Maps />} />
      <Route path="ratings" element={<Ratings />} />
      <Route path="image-cropper" element={<ImageCropper />} />
      <Route path="guided-tours" element={<GuidedTours />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="accordion" element={<Accordion />} />
      <Route path="block-loading" element={<BlockLoading />} />
      <Route path="count-up" element={<CountUp />} />
      <Route path="modals" element={<Modal />} />
      <Route path="pagination" element={<Pagination />} />
      <Route path="progress-bar" element={<ProgressBar />} />
      <Route
        path="scrollable-elements"
        element={<ScrollableElements />}
      />
      <Route path="sticky-elements" element={<StickyElements />} />
      <Route path="tree-view" element={<TreeView />} />
    </Routes>
  </Fragment>
);

export default Components;
