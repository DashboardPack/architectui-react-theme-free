import React, { Fragment } from "react";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

// Examples

import FormNumberPicker from "./Examples/NumberPicker";
import FormNumbericInput from "./Examples/NumericInput";

class FormsNumberPickerExamples extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Input Number Spinners"
          subheading="Add incrementing numbers buttons to form inputs."
          icon="pe-7s-signal icon-gradient bg-malibu-beach"/>
        <FormNumberPicker />
        <FormNumbericInput />
      </Fragment>
    );
  }
}

export default FormsNumberPickerExamples;
