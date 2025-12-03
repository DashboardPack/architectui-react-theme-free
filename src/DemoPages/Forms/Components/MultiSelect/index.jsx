import React, { Fragment } from "react";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

// Examples

import FormMultiSelectBasic from "./Examples/ReactSelect/";
import FormDropdownSelectBasic from "./Examples/DropdownSelect/";
import FormMultiSelectWidget from "./Examples/Multiselect/";
import FormSelectListBasic from "./Examples/SelectList/";
import FormComboBoxBasic from "./Examples/ComboBox/";

class FormMultiSelect extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Input Selects"
          subheading="Create fancy multi select dropdown menus for a better user experience."
          icon="pe-7s-gift icon-gradient bg-mixed-hopes"/>
        <FormMultiSelectWidget />
        <FormDropdownSelectBasic />
        <FormMultiSelectBasic />
        <FormSelectListBasic />
        <FormComboBoxBasic />
      </Fragment>
    );
  }
}

export default FormMultiSelect;
