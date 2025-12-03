import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import CalendarBasic from "./Examples/Basic";

export default class CalendarExample extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Calendar"
          subheading="Calendars are used in a lot of apps. We thought to include one for React."
          icon="pe-7s-car icon-gradient bg-warm-flame"/>
        <CalendarBasic />
      </Fragment>
    );
  }
}
