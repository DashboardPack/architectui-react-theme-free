import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import Basic3Example from "./Examples/Basic";

export default class WidgetsContentBoxes extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Chart Boxes III"
          subheading="Highly configurable boxes best used for showing numbers in an user friendly way."
          icon="pe-7s-wallet icon-gradient bg-plum-plate"/>
        <Basic3Example />
      </Fragment>
    );
  }
}
