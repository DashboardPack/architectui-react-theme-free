import React, { Component, Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import ChartsSparklines1 from "./Examples";

export default class Sparklines1Examples extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Sparklines 1"
          subheading="Use these Sparklines charts inside other components or on their own."
          icon="pe-7s-pendrive icon-gradient bg-mean-fruit"/>
        <ChartsSparklines1 />
      </Fragment>
    );
  }
}
