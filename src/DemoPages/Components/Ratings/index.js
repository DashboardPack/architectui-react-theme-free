import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import RatingsBasicExample from "./Examples/Basic";

export default class RatingsExample extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Ratings"
          subheading="Display beautiful ratings with custom icons, stars and colors."
          icon="pe-7s-diamond icon-gradient bg-warm-flame"/>
        <RatingsBasicExample />
      </Fragment>
    );
  }
}
