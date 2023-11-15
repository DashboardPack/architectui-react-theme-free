import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import BasicExample from "./Examples/Basic";

export default class WidgetsContentBoxes extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Content Boxes"
          subheading="These boxes are usually used for building dashboards elements centered around content."
          icon="pe-7s-bluetooth icon-gradient bg-happy-fisher"/>
        <BasicExample />
      </Fragment>
    );
  }
}
