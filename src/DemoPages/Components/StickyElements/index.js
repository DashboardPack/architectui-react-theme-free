import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import StickyElements from "./Examples/index";

export default class StickyElementsExamples extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Sticky Elements"
          subheading="Create stunning UIs for your pages with this React sticky plugin."
          icon="pe-7s-power icon-gradient bg-mixed-hopes"/>
        <StickyElements />
      </Fragment>
    );
  }
}
