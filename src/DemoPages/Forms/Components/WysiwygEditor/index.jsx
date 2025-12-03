import React, { Fragment } from "react";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

// Examples

import FormCkEditorEditor from "./Examples/CkEditor";

export default class FormWysiwygEditor extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="WYSIWYG Editors"
          subheading="Need to add formatting to your forms? Use these React widgets."
          icon="pe-7s-like icon-gradient bg-love-kiss"/>
        <div className="mb-3">
          <FormCkEditorEditor />
        </div>
      </Fragment>
    );
  }
}
