import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// BUTTONS

// Standard

import ButtonsStandard from "./Button/Standard/";

// Pills

import ButtonsPill from "./Button/Pill/";

// Shadows

import ButtonsShadow from "./Button/Shadow/";

// Square

import ButtonsSquare from "./Button/Square/";

// Icons

import ButtonsIcons from "./Button/Icons/";

// DROPDOWNS

import DropdownExamples from "./Dropdowns/";

// BADGES & LABELS

import BadgesLabels from "./BadgesLabels/";

// ICONS

import IconsExamples from "./Icons/";

// CARDS

import CardsExamples from "./Cards/";

// LOADERS

import LoadersExample from "../Elements/Loaders/";

// LIST GROUP

import ListGroupExample from "../Elements/ListGroup/";

// TIMELINE

import TimelineExample from "../Elements/Timeline/";

// NAVIGATION

import NavigationExample from "./Navs/";

// DRAG & DROP

import ScreenVisibilityExamples from "./ScreenVisibility/";

// UTILITIES

import UtilitiesExamples from "../Elements/Utilities/";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options

import ThemeOptions from "../../Layout/ThemeOptions/";

const Elements = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Buttons */}
          <Route path={`${match.url}/buttons-standard`} component={ButtonsStandard}/>
          <Route path={`${match.url}/buttons-square`} component={ButtonsSquare} />
          <Route path={`${match.url}/buttons-pills`} component={ButtonsPill} />
          <Route path={`${match.url}/buttons-shadow`} component={ButtonsShadow}/>
          <Route path={`${match.url}/buttons-icons`} component={ButtonsIcons} />

          {/* Dropdowns */}

          <Route path={`${match.url}/dropdowns`} component={DropdownExamples} />

          {/* Badges & Labels */}

          <Route path={`${match.url}/badges-labels`} component={BadgesLabels} />

          {/* Icons */}

          <Route path={`${match.url}/icons`} component={IconsExamples} />

          {/* Cards */}

          <Route path={`${match.url}/cards`} component={CardsExamples} />

          {/* Loaders */}

          <Route path={`${match.url}/loaders`} component={LoadersExample} />

          {/* List Group */}

          <Route path={`${match.url}/list-group`} component={ListGroupExample}/>

          {/* Timeline */}

          <Route path={`${match.url}/timelines`} component={TimelineExample} />

          {/* Navs */}

          <Route path={`${match.url}/navigation`} component={NavigationExample}/>

          {/* Screen Visibility */}

          <Route path={`${match.url}/visibility-sensor`} component={ScreenVisibilityExamples}/>

          {/* Utilities */}

          <Route path={`${match.url}/utilities`} component={UtilitiesExamples}/>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Elements;
