import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import ScrollableElements from "./Examples/index";

export default class ScrollableExamples extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Scrollable Elements"
          subheading="Add scrolling areas to any elements with custom scrollbars or default browser ones."
          icon="pe-7s-radio icon-gradient bg-strong-bliss"/>
        <ScrollableElements />
      </Fragment>
    );
  }
}
