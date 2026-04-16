import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../../Layout/AppMain/SuspenseFallback';

const Tabs = lazy(() => import('./Tabs/'));
const Notifications = lazy(() => import('./Notifications/'));
const TooltipsPopovers = lazy(() => import('./TooltipsPopovers/'));
const Carousel = lazy(() => import('./Carousel/'));
const Maps = lazy(() => import('./Maps/'));
const Ratings = lazy(() => import('./Ratings/'));
const ImageCropper = lazy(() => import('./ImageCropper/'));
const GuidedTours = lazy(() => import('./GuidedTours/'));
const Calendar = lazy(() => import('./Calendar/'));
const Accordion = lazy(() => import('./Accordion/'));
const BlockLoading = lazy(() => import('./BlockLoading/'));
const CountUp = lazy(() => import('./CountUp/'));
const Modal = lazy(() => import('./Modal/'));
const Pagination = lazy(() => import('./Pagination/'));
const ProgressBar = lazy(() => import('./ProgressBar/'));
const ScrollableElements = lazy(() => import('./ScrollableElements/'));
const StickyElements = lazy(() => import('./StickyElements/'));
const TreeView = lazy(() => import('./TreeView/'));

const Components = () => (
  <Fragment>
    <Suspense fallback={<SuspenseFallback />}>
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
        <Route path="scrollable-elements" element={<ScrollableElements />} />
        <Route path="sticky-elements" element={<StickyElements />} />
        <Route path="tree-view" element={<TreeView />} />
      </Routes>
    </Suspense>
  </Fragment>
);

export default Components;
