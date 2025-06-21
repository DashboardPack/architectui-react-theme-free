import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Elements
import Buttons from "./Button/Icons";
import Dropdowns from "./Dropdowns";
import BadgesLabels from "./BadgesLabels";
import Icons from "./Icons";
import Cards from "./Cards";
import ListGroup from "./ListGroup";
import Navs from "./Navs";
import Utilities from "./Utilities";
import Timeline from "./Timeline";
import ScreenVisibility from "./ScreenVisibility";
import Loaders from "./Loaders";
import ButtonsStandard from "./Button/Standard";
import ButtonsPill from "./Button/Pill";
import ButtonsShadow from "./Button/Shadow";
import ButtonsSquare from "./Button/Square";

const Elements = () => (
  <Fragment>
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
  </Fragment>
);

export default Elements;
