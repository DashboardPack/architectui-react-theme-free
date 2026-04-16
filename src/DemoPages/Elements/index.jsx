import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../../Layout/AppMain/SuspenseFallback';

const Buttons = lazy(() => import('./Button/Icons'));
const Dropdowns = lazy(() => import('./Dropdowns'));
const BadgesLabels = lazy(() => import('./BadgesLabels'));
const Icons = lazy(() => import('./Icons'));
const Cards = lazy(() => import('./Cards'));
const ListGroup = lazy(() => import('./ListGroup'));
const Navs = lazy(() => import('./Navs'));
const Utilities = lazy(() => import('./Utilities'));
const Timeline = lazy(() => import('./Timeline'));
const ScreenVisibility = lazy(() => import('./ScreenVisibility'));
const Loaders = lazy(() => import('./Loaders'));
const ButtonsStandard = lazy(() => import('./Button/Standard'));
const ButtonsPill = lazy(() => import('./Button/Pill'));
const ButtonsShadow = lazy(() => import('./Button/Shadow'));
const ButtonsSquare = lazy(() => import('./Button/Square'));

const Elements = () => (
  <Fragment>
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="buttons-standard" element={<ButtonsStandard />} />
        <Route path="buttons-square" element={<ButtonsSquare />} />
        <Route path="buttons-pills" element={<ButtonsPill />} />
        <Route path="buttons-shadow" element={<ButtonsShadow />} />
        <Route path="buttons-icons" element={<Buttons />} />
        <Route path="dropdowns" element={<Dropdowns />} />
        <Route path="badges-labels" element={<BadgesLabels />} />
        <Route path="icons" element={<Icons />} />
        <Route path="cards" element={<Cards />} />
        <Route path="list-group" element={<ListGroup />} />
        <Route path="navigation" element={<Navs />} />
        <Route path="utilities" element={<Utilities />} />
        <Route path="timelines" element={<Timeline />} />
        <Route path="visibility-sensor" element={<ScreenVisibility />} />
        <Route path="loaders" element={<Loaders />} />
      </Routes>
    </Suspense>
  </Fragment>
);

export default Elements;
