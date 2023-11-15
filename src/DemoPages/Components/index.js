import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// COMPONENTS

// Tabs

import TabExample from "./Tabs/";

// Accordeon

import AccordionExample from "./Accordion/";

// Notifications

import NotificationsExamples from "./Notifications/";

// Block Loading

import BlockLoadingExample from "./BlockLoading/";

// Progress Bar

import ProgressBarsExamples from "./ProgressBar/";

// Tooltips & Popovers

import TooltipsPopoversExample from "./TooltipsPopovers/";

// Modals

import ModalsExample from "./Modal/";

// Ratings

import RatingsExample from "./Ratings/";

// Image Crop

import ImageCropExample from "./ImageCropper/";

// Carousel

import CarouselExample from "./Carousel/";

// Count Up

import CountUpExample from "./CountUp/";

// Sticky Elements

import StickyElements from "./StickyElements/";

// Scrollable Elements

import ScrollableElements from "./ScrollableElements/";

// Tree View

import TreeView from "./TreeView/";

// Guided Tours

import GuidedToursExample from "./GuidedTours/";

// Maps

import MapsExample from "./Maps/";

// Pagination

import PaginationExamples from "./Pagination";

// Calendar

import CalendarExample from "./Calendar";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options

import ThemeOptions from "../../Layout/ThemeOptions/";

const Components = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Components */}

          {/* Tabs */}

          <Route path={`${match.url}/tabs`} component={TabExample} />

          {/* Accordion*/}

          <Route path={`${match.url}/accordions`} component={AccordionExample}/>

          {/* Notifications */}

          <Route path={`${match.url}/notifications`} component={NotificationsExamples}/>

          {/* Block Loading */}

          <Route path={`${match.url}/loading-blocks`} component={BlockLoadingExample}/>

          {/* Tooltips & Popovers */}

          <Route path={`${match.url}/tooltips-popovers`} component={TooltipsPopoversExample}/>

          {/* Progress Bar */}

          <Route path={`${match.url}/progress-bar`} component={ProgressBarsExamples}/>

          {/* Count Up */}

          <Route path={`${match.url}/count-up`} component={CountUpExample} />

          {/* Sticky Elements */}

          <Route path={`${match.url}/sticky-elements`} component={StickyElements}/>

          {/* Scrollable Elements */}

          <Route path={`${match.url}/scrollable-elements`} component={ScrollableElements}/>

          {/* Carousel */}

          <Route path={`${match.url}/carousel`} component={CarouselExample} />

          {/* Calendar */}

          <Route path={`${match.url}/calendar`} component={CalendarExample} />

          {/* Modals */}

          <Route path={`${match.url}/modals`} component={ModalsExample} />

          {/* Maps */}

          <Route path={`${match.url}/maps`} component={MapsExample} />

          {/* Image Crop */}

          <Route path={`${match.url}/image-crop`} component={ImageCropExample}/>

          {/* Guided Tours */}

          <Route path={`${match.url}/guided-tours`} component={GuidedToursExample}/>

          {/* Pagination */}

          <Route path={`${match.url}/pagination`} component={PaginationExamples}/>

          {/* Ratings */}

          <Route path={`${match.url}/ratings`} component={RatingsExample} />

          {/* Tree View */}

          <Route path={`${match.url}/tree-view`} component={TreeView} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Components;
