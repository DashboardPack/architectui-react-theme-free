import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Forms

import FormElementsLayouts from "./Elements/Layouts/";
import FormElementsControls from "./Elements/Controls/";
import FormElementsValidation from "./Elements/Validation/";

import FormWizardVar1 from "./Elements/Wizard/Examples/Variation1";
import FormWizardVar2 from "./Elements/Wizard/Examples/Variation2";
import FormWizardVar3 from "./Elements/Wizard/Examples/Variation3";

import FormElementsSticky from "./Elements/StickyHeaders/";

import FormDatePicker from "./Components/DatePicker/";
import FormRangeSlider from "./Components/RangeSlider/";
import FormWysiwygEditor from "./Components/WysiwygEditor/";
import FormToggleSwitch from "./Components/ToggleSwitch/";
import FormMultiSelect from "./Components/MultiSelect/";
import FormDropdown from "./Components/Dropdown/";
import FormInputMask from "./Components/InputMask/";
import FormDropZone from "./Components/DropZone/";
import FormTypeahead from "./Components/Typeahead/";
import FormClipboard from "./Components/Clipboard/";
import FormTextareaAutosize from "./Components/TextareaAutosize/";
import FormsNumberPickerExamples from "./Components/NumberPicker/";
import FormColorPicker from "./Components/ColorPicker/";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options

import ThemeOptions from "../../Layout/ThemeOptions/";

const Forms = () => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Routes>
            <Route path="controls" element={<FormElementsControls />} />
            <Route path="layouts" element={<FormElementsLayouts />} />
            <Route path="validation" element={<FormElementsValidation />} />
            <Route path="wizard-1" element={<FormWizardVar1 />} />
            <Route path="wizard-2" element={<FormWizardVar2 />} />
            <Route path="wizard-3" element={<FormWizardVar3 />} />
            <Route path="sticky-headers" element={<FormElementsSticky />} />

            <Route path="datepicker" element={<FormDatePicker />} />
            <Route path="toggle-switch" element={<FormToggleSwitch />} />
            <Route path="range-slider" element={<FormRangeSlider />} />
            <Route path="wysiwyg-editor" element={<FormWysiwygEditor />} />
            <Route path="input-selects" element={<FormMultiSelect />} />
            <Route path="dropdown" element={<FormDropdown />} />
            <Route path="input-mask" element={<FormInputMask />} />
            <Route path="dropzone" element={<FormDropZone />} />
            <Route path="typeahead" element={<FormTypeahead />} />
            <Route path="clipboard" element={<FormClipboard />} />
            <Route path="textarea-autosize" element={<FormTextareaAutosize />} />
            <Route path="numberspinners" element={<FormsNumberPickerExamples />} />
            <Route path="color-picker" element={<FormColorPicker />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Forms;
