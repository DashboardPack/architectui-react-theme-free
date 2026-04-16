import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../../Layout/AppMain/SuspenseFallback';

// Form Elements
const FormElementsControls = lazy(() => import('./Elements/Controls/'));
const FormElementsLayouts = lazy(() => import('./Elements/Layouts/'));
const FormElementsValidation = lazy(() => import('./Elements/Validation/'));
const FormElementsSticky = lazy(() => import('./Elements/StickyHeaders/'));

// Form Components
const FormComponentsRangeslider = lazy(() => import('./Components/RangeSlider/'));
const FormComponentsDropzone = lazy(() => import('./Components/DropZone/'));
const FormComponentsTypeahead = lazy(() => import('./Components/Typeahead/'));
const FormComponentsToggleSwitch = lazy(() => import('./Components/ToggleSwitch/'));
const FormComponentsWysiwygEditor = lazy(() => import('./Components/WysiwygEditor/'));
const FormComponentsClipboard = lazy(() => import('./Components/Clipboard/'));
const FormComponentsInputMask = lazy(() => import('./Components/InputMask/'));

const Forms = () => (
  <Fragment>
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="controls" element={<FormElementsControls />} />
        <Route path="layouts" element={<FormElementsLayouts />} />
        <Route path="validation" element={<FormElementsValidation />} />
        <Route path="sticky-headers" element={<FormElementsSticky />} />
        <Route path="rangeslider" element={<FormComponentsRangeslider />} />
        <Route path="dropzone" element={<FormComponentsDropzone />} />
        <Route path="typeahead" element={<FormComponentsTypeahead />} />
        <Route path="toggle-switch" element={<FormComponentsToggleSwitch />} />
        <Route path="wysiwyg-editor" element={<FormComponentsWysiwygEditor />} />
        <Route path="clipboard" element={<FormComponentsClipboard />} />
        <Route path="input-mask" element={<FormComponentsInputMask />} />
      </Routes>
    </Suspense>
  </Fragment>
);

export default Forms;
