import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Sticky from "react-stickynode";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  UncontrolledButtonDropdown,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import { faCog } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IoIosAnalytics } from "react-icons/io";

export default class FormStickyBasic extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <Card className="main-card mb-3">
                <Sticky enabled={true} top=".app-header" innerZ="15" activeClass="sticky-active-class">
                  <CardHeader className="card-header-lg">
                    <div className="card-header-title font-size-lg text-capitalize fw-normal">
                      Sticky Page Headers
                    </div>
                    <div className="btn-actions-pane-right">
                      <Button size="lg" color="warning" className="me-2" onClick={this.toggleCalendar}>
                        <span className="me-2 opacity-8">
                          <IoIosAnalytics color="#333333" fontSize="1.2rem" />
                        </span>
                        Dummy Button
                      </Button>
                      <UncontrolledButtonDropdown>
                        <Button size="lg" color="primary">
                          <span className="me-2 opacity-6">
                            <FontAwesomeIcon icon={faCog} />
                          </span>
                          Actions
                        </Button>
                        <DropdownToggle className="dropdown-toggle-split" caret size="lg" color="primary"/>
                        <DropdownMenu end>
                          <DropdownItem>Menus</DropdownItem>
                          <DropdownItem>Settings</DropdownItem>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Actions</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Dividers</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                  </CardHeader>
                </Sticky>
                <CardBody className="pt-4">
                  <Col md="8" className="mx-auto">
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label for="exampleAddress">Address</Label>
                      <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleAddress2">Address 2</Label>
                      <Input type="text" name="address2"id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                    </FormGroup>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleCity">City</Label>
                          <Input type="text" name="city" id="exampleCity" />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="exampleState">State</Label>
                          <Input type="text" name="state" id="exampleState" />
                        </FormGroup>
                      </Col>
                      <Col md={2}>
                        <FormGroup>
                          <Label for="exampleZip">Zip</Label>
                          <Input type="text" name="zip" id="exampleZip" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label for="exampleCheckbox">Checkboxes</Label>
                      <div>
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
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleCheckbox">Radios</Label>
                      <div>
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
                      </div>
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
                      <Label for="exampleCustomFileBrowser">
                        File Browser Disabled
                      </Label>
                      <Input type="file" id="exampleCustomFileBrowser" name="customFile" disabled/>
                    </FormGroup>
                  </Col>
                </CardBody>
                <CardFooter className="d-block text-center">
                  <Button size="sm" className="me-2" color="link">
                    Cancel
                  </Button>
                  <Button size="lg" color="success">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
