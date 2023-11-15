import React, { Fragment, Component } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  Col,
  Button,
  FormGroup,
  Card,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  Input,
  UncontrolledButtonDropdown,
  DropdownToggle,
} from "reactstrap";

import cx from "classnames";
import { Elastic } from "react-burgers";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../assets/utils/images/avatars/4.jpg";
import avatar5 from "../../../assets/utils/images/avatars/5.jpg";
import avatar6 from "../../../assets/utils/images/avatars/8.jpg";
import avatar7 from "../../../assets/utils/images/avatars/9.jpg";
import avatar8 from "../../../assets/utils/images/avatars/10.jpg";

import {
  faCog,
  faCalendarAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Chat extends Component {
  constructor() {
    super();

    var exampleItems = [...Array(150).keys()].map((i) => ({
      id: i + 1,
      name: "Item " + (i + 1),
    }));
    this.onChangePage = this.onChangePage.bind(this);

    this.state = {
      exampleItems,
      pageOfItems: [],
      active: false,
    };
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems });
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <div className={cx("app-inner-layout chat-layout", {
                  "open-mobile-menu": this.state.active,
                })}>
                <div className="app-inner-layout__header text-white bg-premium-dark">
                  <PageTitle heading="Chat Example"
                    subheading="Build chat layouts or any other kind of layout easily with ArchitectUI."
                    icon="pe-7s-umbrella icon-gradient bg-sunny-morning"/>
                </div>
                <div className="app-inner-layout__wrapper">
                  <Card className="app-inner-layout__content">
                    <div className="table-responsive">
                      <div className="app-inner-layout__top-pane">
                        <div className="pane-left">
                          <div className="mobile-app-menu-btn">
                            <Elastic width={26} lineHeight={2} lineSpacing={5} color="#6c757d" active={this.state.active}
                              onClick={() =>
                                this.setState({ active: !this.state.active })
                              }/>
                          </div>
                          <div className="avatar-icon-wrapper me-2">
                            <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                            <div className="avatar-icon avatar-icon-xl rounded">
                              <img width={82} src={avatar2} alt="" />
                            </div>
                          </div>
                          <h4 className="mb-0 text-nowrap">
                            Chad Evans
                            <div className="opacity-7">
                              Last Seen Online:{" "}
                              <span className="opacity-8">10 minutes ago</span>
                            </div>
                          </h4>
                        </div>
                        <div className="pane-right">
                          <UncontrolledButtonDropdown>
                            <DropdownToggle caret color="primary" className="ms-2">
                              <span className="opacity-7 me-1">
                                <FontAwesomeIcon icon={faCog} />
                              </span>
                              Actions
                            </DropdownToggle>
                            <DropdownMenu end>
                              <Nav vertical>
                                <NavItem className="nav-item-header">
                                  Activity
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    Chat
                                    <div className="ms-auto badge rounded-pill bg-info">
                                      8
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">Recover Password</NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    Settings
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    Messages
                                    <div className="ms-auto badge bg-warning">
                                      512
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">Logs</NavLink>
                                </NavItem>
                                <NavItem className="nav-item-divider" />
                                <NavItem className="nav-item-btn">
                                  <Button size="sm" className="btn-wide btn-shadow" color="danger">
                                    Cancel
                                  </Button>
                                </NavItem>
                              </Nav>
                            </DropdownMenu>
                          </UncontrolledButtonDropdown>
                        </div>
                      </div>
                      <div className="chat-wrapper">
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
                              But I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
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
                                Expound the actual teachings of the great explorer
                                of the truth, the master-builder of human
                                happiness.
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
                              But I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
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
                                Denouncing pleasure and praising pain was born and
                                I will give you a complete account.
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
                              Born and I will give you a complete account of the
                              system.
                            </div>
                            <small className="opacity-6">
                              <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                              11:01 AM | Yesterday
                            </small>
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
                              Mistaken idea of denouncing pleasure and praising
                              pain was born and I will give you
                            </div>
                            <small className="opacity-6">
                              <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                              11:01 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="app-inner-layout__bottom-pane d-block text-center">
                        <FormGroup className="mb-0" row>
                          <Col sm={12}>
                            <Input bsSize="lg" type="text" placeholder="Write here and hit enter to send..."/>
                          </Col>
                        </FormGroup>
                      </div>
                    </div>
                  </Card>
                  <Card className="app-inner-layout__sidebar">
                    <div className="app-inner-layout__sidebar-header">
                      <Nav vertical>
                        <NavItem className="pt-4 ps-3 pe-3 pb-3">
                          <InputGroup>
                            <div className="input-group-text">
                              <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <Input placeholder="Search..." />
                          </InputGroup>
                        </NavItem>
                        <NavItem className="nav-item-header">
                          Friends Online
                        </NavItem>
                      </Nav>
                    </div>
                    <Nav vertical>
                      <NavItem>
                        <DropdownItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <div className="avatar-icon-wrapper">
                                  <div className="badge badge-bottom bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon">
                                    <img src={avatar1} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Alina Mcloughlin
                                </div>
                                <div className="widget-subheading">
                                  Aenean vulputate eleifend tellus.
                                </div>
                              </div>
                            </div>
                          </div>
                        </DropdownItem>
                      </NavItem>
                      <NavItem>
                        <DropdownItem active>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <div className="avatar-icon-wrapper">
                                  <div className="badge badge-bottom bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon">
                                    <img src={avatar2} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">Chad Evans</div>
                                <div className="widget-subheading">
                                  Vivamus elementum semper nisi.
                                </div>
                              </div>
                            </div>
                          </div>
                        </DropdownItem>
                      </NavItem>
                      <NavItem>
                        <DropdownItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <div className="avatar-icon-wrapper">
                                  <div className="badge badge-bottom bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon">
                                    <img src={avatar3} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Ella-Rose Henry
                                </div>
                                <div className="widget-subheading">
                                  Etiam sit amet orci eget eros faucibus
                                </div>
                              </div>
                            </div>
                          </div>
                        </DropdownItem>
                      </NavItem>
                      <NavItem>
                        <DropdownItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <div className="avatar-icon-wrapper">
                                  <div className="badge badge-bottom bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon">
                                    <img src={avatar4} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Ruben Tillman
                                </div>
                                <div className="widget-subheading">
                                  Lorem ipsum dolor sit amet, consectetuer
                                </div>
                              </div>
                            </div>
                          </div>
                        </DropdownItem>
                      </NavItem>
                      <NavItem>
                        <DropdownItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <div className="avatar-icon-wrapper">
                                  <div className="badge badge-bottom bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon">
                                    <img src={avatar3} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Ella-Rose Henry
                                </div>
                                <div className="widget-subheading">
                                  Etiam sit amet orci eget eros faucibus
                                </div>
                              </div>
                            </div>
                          </div>
                        </DropdownItem>
                      </NavItem>
                      <NavItem>
                        <DropdownItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <div className="avatar-icon-wrapper">
                                  <div className="badge badge-bottom bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon">
                                    <img src={avatar4} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Ruben Tillman
                                </div>
                                <div className="widget-subheading">
                                  Lorem ipsum dolor sit amet, consectetuer
                                </div>
                              </div>
                            </div>
                          </div>
                        </DropdownItem>
                      </NavItem>
                    </Nav>
                    <div className="app-inner-layout__sidebar-footer pb-3">
                      <Nav vertical>
                        <NavItem className="nav-item-divider" />
                        <NavItem className="nav-item-header">
                          Offline Friends
                        </NavItem>
                        <NavItem className="text-center p-2">
                          <div className="avatar-wrapper avatar-wrapper-overlap">
                            <div className="avatar-icon-wrapper">
                              <div className="badge badge-bottom bg-danger badge-dot badge-dot-lg" />
                              <div className="avatar-icon rounded">
                                <img src={avatar1} alt="" />
                              </div>
                            </div>
                            <div className="avatar-icon-wrapper">
                              <div className="badge badge-bottom bg-danger badge-dot badge-dot-lg" />
                              <div className="avatar-icon rounded">
                                <img src={avatar2} alt="" />
                              </div>
                            </div>
                            <div className="avatar-icon-wrapper">
                              <div className="badge badge-bottom bg-danger badge-dot badge-dot-lg" />
                              <div className="avatar-icon rounded">
                                <img src={avatar3} alt="" />
                              </div>
                            </div>
                            <div className="avatar-icon-wrapper">
                              <div className="badge badge-bottom bg-danger badge-dot badge-dot-lg" />
                              <div className="avatar-icon rounded">
                                <img src={avatar4} alt="" />
                              </div>
                            </div>
                            <div className="avatar-icon-wrapper">
                              <div className="badge badge-bottom bg-danger badge-dot badge-dot-lg" />
                              <div className="avatar-icon rounded">
                                <img src={avatar5} alt="" />
                              </div>
                            </div>
                            <div className="avatar-icon-wrapper">
                              <div className="badge badge-bottom bg-danger badge-dot badge-dot-lg" />
                              <div className="avatar-icon rounded">
                                <img src={avatar6} alt="" />
                              </div>
                            </div>
                            <div className="avatar-icon-wrapper">
                              <div className="badge badge-bottom bg-danger badge-dot badge-dot-lg" />
                              <div className="avatar-icon rounded">
                                <img src={avatar7} alt="" />
                              </div>
                            </div>
                            <div className="avatar-icon-wrapper">
                              <div className="badge badge-bottom bg-danger badge-dot badge-dot-lg" />
                              <div className="avatar-icon rounded">
                                <img src={avatar8} alt="" />
                              </div>
                            </div>
                            <div className="avatar-icon-wrapper avatar-icon-add">
                              <div className="avatar-icon rounded">
                                <i>+</i>
                              </div>
                            </div>
                          </div>
                        </NavItem>
                        <NavItem className="nav-item-btn text-center">
                          <Button size="sm" className="btn-wide btn-pill" color="success">
                            Offline Group Conversation
                          </Button>
                        </NavItem>
                      </Nav>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
