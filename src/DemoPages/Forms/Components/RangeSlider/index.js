import React, { Fragment } from "react";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

// Examples

import FormRangeSliderBasic from "./Examples/Basic/";
import FormRangeSliderStyles from "./Examples/Styles/";
import FormRangeSliderVertical from "./Examples/Vertical/";

class FormRangeSlider extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Range Slider"
          subheading="Create sliders and range sliders with these React form widgets."
          icon="pe-7s-lintern icon-gradient bg-strong-bliss"/>
        <FormRangeSliderBasic />
        <FormRangeSliderStyles />
        <FormRangeSliderVertical />
      </Fragment>
    );
  }
}

export default FormRangeSlider;
