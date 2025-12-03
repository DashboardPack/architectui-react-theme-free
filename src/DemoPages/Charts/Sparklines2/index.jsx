import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import ChartsSparklines2 from "./Examples/index";

export default class Sparklines2Examples extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Sparklines 2"
          subheading="All kind of sparkliness charts are available, from lines to bar charts."
          icon="pe-7s-plane icon-gradient bg-tempting-azure"/>
        <ChartsSparklines2 />
      </Fragment>
    );
  }
}
