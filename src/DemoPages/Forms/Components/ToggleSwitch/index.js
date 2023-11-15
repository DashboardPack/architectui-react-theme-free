import React, { Fragment } from "react";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

// Examples

import FormToggleSwitchExample from "./Examples/Basic/";

class FormToggleSwitch extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Toggle Switch"
          subheading="Instead of regular checkboxes, use these toggle widgets for a better UX."
          icon="pe-7s-news-paper icon-gradient bg-grow-early"/>
        <FormToggleSwitchExample />
      </Fragment>
    );
  }
}

export default FormToggleSwitch;
