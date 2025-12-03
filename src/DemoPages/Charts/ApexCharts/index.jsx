import React, { Component, Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import ApexChartsBasic from "./Examples/Basic/";
import ApexChartsSparklines from "./Examples/Sparklines/";

export default class ApexCharts extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Apex Charts"
          subheading="Wonderful animated charts built as a ReactJS component."
          icon="pe-7s-graph2 icon-gradient bg-happy-green"/>
        <ApexChartsBasic />
        <ApexChartsSparklines />
      </Fragment>
    );
  }
}
