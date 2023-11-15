import React, { Fragment } from "react";
import { FormGroup, Label, Input } from "reactstrap";

export default class WizardStep2 extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="form-wizard-content">
          <h3 className="form-heading pt-3 pb-3">
            Account Information
            <p>Enter your user informations below</p>
          </h3>
          <FormGroup>
            <Label for="exampleCheckbox">Checkboxes</Label>
            <FormGroup check>
              <Input id="checkbox2" type="checkbox"/>
              {' '}
              <Label check>
                Check this custom checkbox
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input id="checkbox2" type="checkbox"/>
              {' '}
              <Label check>
                Or this one
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input id="checkbox2" type="checkbox" disabled/>
              {' '}
              <Label check>
               But not this disabled one
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">Radios</Label>
            <FormGroup check>
                <Input name="radio2" type="radio"/>
                {' '}
                <Label check>
                  Select this custom radio
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio2" type="radio"/>
                {' '}
                <Label check>
                 Or this one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input disabled name="radio2" type="radio"/>
                {' '}
                <Label check>
                  But not this disabled one
                </Label>
              </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">Inline</Label>
            <div>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>
                  An inline custom input
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>
                  and another one
                </Label>
              </FormGroup>
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomSelect">Custom Select</Label>
            <Input type="select" id="exampleCustomSelect" name="customSelect">
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomMutlipleSelect">
              Custom Multiple Select
            </Label>
            <Input type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomSelectDisabled">
              Custom Select Disabled
            </Label>
            <Input type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomMutlipleSelectDisabled">
              Custom Multiple Select Disabled
            </Label>
            <Input type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple disabled>
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomFileBrowser">File Browser</Label>
            <Input type="file" id="exampleCustomFileBrowser" name="customFile"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomFileBrowser">
              File Browser with Custom Label
            </Label>
            <Input type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
            <Input type="file" id="exampleCustomFileBrowser" name="customFile" disabled/>
          </FormGroup>
        </div>
      </Fragment>
    );
  }
}
