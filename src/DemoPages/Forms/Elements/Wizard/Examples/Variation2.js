import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
  CardFooter,
  Input,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import PerfectScrollbar from "react-perfect-scrollbar";

import MultiStep from "../Wizard";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step4 from "./Steps/Step4";

import avatar2 from "../../../../../assets/utils/images/avatars/2.jpg";
import avatar1 from "../../../../../assets/utils/images/avatars/1.jpg";
import avatar6 from "../../../../../assets/utils/images/avatars/2.jpg";

import bg1 from "../../../../../assets/utils/images/dropdown-header/abstract1.jpg";

import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../../../../../Layout/AppMain/PageTitle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const steps = [
  { name: "Account Information", component: <Step1 /> },
  { name: "Payment Information", component: <Step2 /> },
  { name: "Finish Wizard", component: <Step4 /> },
];

export default class FormWizardVar2 extends React.Component {
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
                <Col md="12" lg="5">
                  <Card className="main-card mb-3">
                    <CardHeader>Chat Box</CardHeader>
                    <div className="scroll-area-sm">
                      <PerfectScrollbar>
                        <div className="chat-wrapper p-1">
                          <div className="chat-box-wrapper">
                            <div>
                              <div className="avatar-icon-wrapper me-1">
                                <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                                <div className="avatar-icon avatar-icon-lg rounded">
                                  <img src={avatar1} alt="" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="chat-box">
                                But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain was
                                born and I will give you a complete account of the
                                system.
                              </div>
                              <small className="opacity-6">
                                <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                                11:01 AM | Yesterday
                              </small>
                            </div>
                          </div>
                          <div className="float-end">
                            <div className="chat-box-wrapper chat-box-wrapper-right">
                              <div>
                                <div className="chat-box">
                                  Expound the actual teachings of the great
                                  explorer of the truth, the master-builder of
                                  human happiness.
                                </div>
                                <small className="opacity-6">
                                  <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                                  11:01 AM | Yesterday
                                </small>
                              </div>
                              <div>
                                <div className="avatar-icon-wrapper ms-1">
                                  <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon avatar-icon-lg rounded">
                                    <img src={avatar1} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat-box-wrapper">
                            <div>
                              <div className="avatar-icon-wrapper me-1">
                                <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                                <div className="avatar-icon avatar-icon-lg rounded">
                                  <img src={avatar1} alt="" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="chat-box">
                                But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain was
                                born and I will give you a complete account of the
                                system.
                              </div>
                              <small className="opacity-6">
                                <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                                11:01 AM | Yesterday
                              </small>
                            </div>
                          </div>
                          <div className="float-end">
                            <div className="chat-box-wrapper chat-box-wrapper-right">
                              <div>
                                <div className="chat-box">
                                  Denouncing pleasure and praising pain was born
                                  and I will give you a complete account.
                                </div>
                                <small className="opacity-6">
                                  <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                                  11:01 AM | Yesterday
                                </small>
                              </div>
                              <div>
                                <div className="avatar-icon-wrapper ms-1">
                                  <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon avatar-icon-lg rounded">
                                    <img src={avatar2} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="float-end">
                            <div className="chat-box-wrapper chat-box-wrapper-right">
                              <div>
                                <div className="chat-box">
                                  The master-builder of human happiness.
                                </div>
                                <small className="opacity-6">
                                  <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                                  11:01 AM | Yesterday
                                </small>
                              </div>
                              <div>
                                <div className="avatar-icon-wrapper ms-1">
                                  <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon avatar-icon-lg rounded">
                                    <img src={avatar2} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </PerfectScrollbar>
                    </div>
                    <CardFooter>
                      <Input bsSize="lg" type="text" placeholder="Write here and hit enter to send..."/>
                    </CardFooter>
                  </Card>
                  <Card className="card-shadow-primary card-border mb-3">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-info">
                        <div className="menu-header-image opacity-2"
                          style={{
                            backgroundImage: "url(" + bg1 + ")",
                          }}/>
                        <div className="menu-header-content btn-pane-right">
                          <div className="avatar-icon-wrapper me-2 avatar-icon-xl">
                            <div className="avatar-icon rounded">
                              <img src={avatar6} alt="Avatar 5" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">Jessica Walberg</h5>
                          </div>
                          <div className="menu-header-btn-pane">
                          </div>
                        </div>
                      </div>
                    </div>
                    <ListGroup flush>
                      <ListGroupItem>
                        <div className="widget-content">
                          <div className="text-center">
                            <h5 className="widget-heading opacity-4">
                              March Totals
                            </h5>
                            <h5>
                              <span className="pe-2">
                                <b className="text-danger">12</b> new leads,
                              </span>
                              <span>
                                <b className="text-success">$56.24</b> in sales
                              </span>
                            </h5>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className="p-0">
                        <div className="grid-menu grid-menu-2col">
                          <Row className="g-0">
                            <Col sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                View Profile
                              </Button>
                            </Col>
                            <Col sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                <i className="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                Leads Generated
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
                <Col md="12" lg="7">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <div className="forms-wizard-alt">
                        <MultiStep showNavigation={true} steps={steps} />
                      </div>
                    </CardBody>
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
