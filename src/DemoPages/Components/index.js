import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options

import ThemeOptions from "../../Layout/ThemeOptions/";

// Components

import Accordion from "./Accordion/";
import Tabs from "./Tabs/";
import Notifications from "./Notifications/";
import Modal from "./Modal/";
import ProgressBar from "./ProgressBar/";
import TooltipsPopovers from "./TooltipsPopovers/";
import Carousel from "./Carousel/";
import Calendar from "./Calendar/";
import Pagination from "./Pagination/";
import TreeView from "./TreeView/";
import Ratings from "./Ratings/";
import ImageCropper from "./ImageCropper/";
import StickyElements from "./StickyElements/";
import ScrollableElements from "./ScrollableElements/";
import CountUp from "./CountUp/";
import GuidedTours from "./GuidedTours/";
import Maps from "./Maps/";
import BlockLoading from "./BlockLoading/";

const Components = () => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Routes>
            <Route path="notifications" element={<Notifications />} />
            <Route path="accordion" element={<Accordion />} />
            <Route path="tabs" element={<Tabs />} />
            <Route path="modal" element={<Modal />} />
            <Route path="progress-bar" element={<ProgressBar />} />
            <Route path="tooltips-popovers" element={<TooltipsPopovers />} />
            <Route path="carousel" element={<Carousel />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="pagination" element={<Pagination />} />
            <Route path="tree-view" element={<TreeView />} />
            <Route path="ratings" element={<Ratings />} />
            <Route path="image-crop" element={<ImageCropper />} />
            <Route path="sticky-elements" element={<StickyElements />} />
            <Route path="scrollable-elements" element={<ScrollableElements />} />
            <Route path="count-up" element={<CountUp />} />
            <Route path="guided-tours" element={<GuidedTours />} />
            <Route path="maps" element={<Maps />} />
            <Route path="loading-overlay" element={<BlockLoading />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Components;
