import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Form Elements

import FormElementsControls from "./Elements/Controls/";
import FormElementsLayouts from "./Elements/Layouts/";
import FormElementsValidation from "./Elements/Validation/";
import FormElementsSticky from "./Elements/StickyHeaders/";
// import FormElementsKitchen from "./Elements/KitchenSink/";

// Form Components

// import FormComponentsDatepicker from "./Components/DatePicker/";
// import FormComponentsTimepicker from "./Components/TimePicker/";
import FormComponentsRangeslider from "./Components/RangeSlider/";
import FormComponentsDropzone from "./Components/DropZone/";
import FormComponentsTypeahead from "./Components/Typeahead/";
import FormComponentsToggleSwitch from "./Components/ToggleSwitch/";
import FormComponentsWysiwygEditor from "./Components/WysiwygEditor/";
// import FormComponentsMultiselect from "./Components/MultiSelect/";
import FormComponentsClipboard from "./Components/Clipboard/";
// import FormComponentsInputSelect from "./Components/InputSelect/";
// import FormComponentsNumbericInput from "./Components/NumbericInput/";
import FormComponentsInputMask from "./Components/InputMask/";
// import FormComponentsDropdown from "./Components/Dropdown/";

const Forms = () => (
  <Fragment>
    <Routes>
      {/* Form Elements */}
      <Route path="controls" element={<FormElementsControls />} />
      <Route path="layouts" element={<FormElementsLayouts />} />
      <Route path="validation" element={<FormElementsValidation />} />
      <Route path="sticky-headers" element={<FormElementsSticky />} />
      {/* <Route path="kitchen-sink" element={<FormElementsKitchen />} /> */}

      {/* Form Components */}
      {/* <Route path="datepicker" element={<FormComponentsDatepicker />} /> */}
      {/* <Route path="timepicker" element={<FormComponentsTimepicker />} /> */}
      <Route path="rangeslider" element={<FormComponentsRangeslider />} />
      <Route path="dropzone" element={<FormComponentsDropzone />} />
      <Route path="typeahead" element={<FormComponentsTypeahead />} />
      <Route
        path="toggle-switch"
        element={<FormComponentsToggleSwitch />}
      />
      <Route
        path="wysiwyg-editor"
        element={<FormComponentsWysiwygEditor />}
      />
      {/* <Route path="multiselect" element={<FormComponentsMultiselect />} /> */}
      <Route path="clipboard" element={<FormComponentsClipboard />} />
      {/* <Route path="input-select" element={<FormComponentsInputSelect />} /> */}
      {/* <Route
        path="numberic-input"
        element={<FormComponentsNumbericInput />}
      /> */}
      <Route path="input-mask" element={<FormComponentsInputMask />} />
      {/* <Route path="dropdown" element={<FormComponentsDropdown />} /> */}
    </Routes>
  </Fragment>
);

export default Forms;
