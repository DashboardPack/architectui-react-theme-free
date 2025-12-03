import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import AccordionsBasicExample from "./Examples/Basic";

export default class AccordionExample extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Accordions"
          subheading="Accordions represent collapsable component with extended functionality."
          icon="pe-7s-diamond icon-gradient bg-warm-flame"/>
        <AccordionsBasicExample />
      </Fragment>
    );
  }
}
