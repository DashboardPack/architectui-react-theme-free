import React, { Component, Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import ChartsLiquidGaugeExample from "./Examples/liquidGauge";

export default class ChartsGauges extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Gauges"
          subheading="Create wonderful animated gauges that can be used in combination with other ArchitectUI elements."
          icon="pe-7s-car icon-gradient bg-warm-flame"/>
        <ChartsLiquidGaugeExample />
      </Fragment>
    );
  }
}
