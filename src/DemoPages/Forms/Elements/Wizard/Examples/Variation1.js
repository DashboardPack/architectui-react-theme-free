import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
  ListGroupItem,
  ListGroup,
  Button,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Dropdown,
  Input
} from "reactstrap";

import MultiStep from "../Wizard";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step4 from "./Steps/Step4";

import avatar2 from "../../../../../assets/utils/images/avatars/2.jpg";
import PageTitle from "../../../../../Layout/AppMain/PageTitle";

import {
  faTrashAlt,
  faCheck,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const steps = [
  { name: "Account Information", component: <Step1 /> },
  { name: "Payment Information", component: <Step2 /> },
  { name: "Finish Wizard", component: <Step4 /> },
];

export default class FormWizardVar1 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      cSelected: [],
      dropdownOpen: false,
    };

    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <PageTitle heading="Forms Wizard"
                subheading="Easily create beautiful form multi step wizards!"
                icon="lnr-map text-info"/>
              <Row>
                <Col md="12" lg="8">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <MultiStep showNavigation={true} steps={steps} />
                    </CardBody>
                  </Card>
                </Col>
                <Col md="12" lg="4">
                  <Card className="main-card mb-3">
                    <CardHeader>ToDo List</CardHeader>
                    <ListGroup className="todo-list-wrapper" flush>
                      <ListGroupItem>
                        <div className="todo-indicator bg-warning" />
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-2 ms-2">
                              <Input type="checkbox" className="form-check-input-custom" id="exampleCustomCheckbox12" label="&nbsp;"/>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Wash the car
                                <div className="badge bg-danger ms-2">
                                  Rejected
                                </div>
                              </div>
                              <div className="widget-subheading">
                                <i>Written by Bob</i>
                              </div>
                            </div>
                            <div className="widget-content-right widget-content-actions">
                              <Button className="border-0 btn-transition" outline color="success">
                                <FontAwesomeIcon icon={faCheck} />
                              </Button>
                              <Button className="border-0 btn-transition" outline color="danger">
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="todo-indicator bg-focus" />
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-2 ms-2">
                              <Input type="checkbox" className="form-check-input-custom" id="exampleCustomCheckbox1" label="&nbsp;"/>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Task with hover dropdown menu
                              </div>
                              <div className="widget-subheading">
                                <div>
                                  By Johnny
                                  <div className="badge rounded-pill bg-info ms-2">
                                    NEW
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-right widget-content-actions">
                              <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
                                isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle color="link" className="border-0 btn-transition">
                                  <FontAwesomeIcon icon={faEllipsisH} />
                                </DropdownToggle>
                                <DropdownMenu end>
                                  <DropdownItem header>Header</DropdownItem>
                                  <DropdownItem disabled>Action</DropdownItem>
                                  <DropdownItem>Another Action</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="todo-indicator bg-primary" />
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-2 ms-2">
                              <Input type="checkbox" className="form-check-input-custom" id="exampleCustomCheckbox4" label="&nbsp;"/>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">
                                Badge on the right task
                              </div>
                              <div className="widget-subheading">
                                This task has show on hover actions!
                              </div>
                            </div>
                            <div className="widget-content-right widget-content-actions">
                              <Button className="border-0 btn-transition" outline color="success">
                                <FontAwesomeIcon icon={faCheck} />
                              </Button>
                            </div>
                            <div className="widget-content-right ms-3">
                              <div className="badge rounded-pill bg-success">
                                Latest Task
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="todo-indicator bg-info" />
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-2 ms-2">
                              <Input type="checkbox" className="form-check-input-custom" id="exampleCustomCheckbox2" label="&nbsp;"/>
                            </div>
                            <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={42} className="rounded" src={avatar2} alt="" />
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Go grocery shopping
                              </div>
                              <div className="widget-subheading">
                                A short description for this todo item
                              </div>
                            </div>
                            <div className="widget-content-right widget-content-actions">
                              <Button className="border-0 btn-transition" outline color="success">
                                <FontAwesomeIcon icon={faCheck} />
                              </Button>
                              <Button className="border-0 btn-transition" outline color="danger">
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="todo-indicator bg-success" />
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-2 ms-2">
                              <Input type="checkbox" className="form-check-input-custom" id="exampleCustomCheckbox3" label="&nbsp;"/>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">
                                Development Task
                              </div>
                              <div className="widget-subheading">
                                Finish React ToDo List App
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="badge bg-warning me-2">69</div>
                            </div>
                            <div className="widget-content-right">
                              <Button className="border-0 btn-transition" outline color="success">
                                <FontAwesomeIcon icon={faCheck} />
                              </Button>
                              <Button className="border-0 btn-transition" outline color="danger">
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                    <CardFooter className="d-block text-end">
                      <Button size="sm" className="me-2" color="link">
                        Cancel
                      </Button>
                      <Button size="lg" color="success">
                        Save
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
