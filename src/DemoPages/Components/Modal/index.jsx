import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import ModalsExample from "./Examples";

export default function ModalsExamples() {
  console.log('Modal component rendering - full version');
  
  return (
    <Fragment>
      <PageTitle 
        heading="Modals"
        subheading="Wide selection of modal dialogs styles and animations available."
        icon="pe-7s-phone icon-gradient bg-premium-dark"
      />
      <ModalsExample />
    </Fragment>
  );
}
