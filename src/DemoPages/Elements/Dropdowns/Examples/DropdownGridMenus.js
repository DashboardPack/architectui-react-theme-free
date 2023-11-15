import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import PerfectScrollbar from "react-perfect-scrollbar";

import bg1 from "../../../../assets/utils/images/dropdown-header/abstract1.jpg";
import bg2 from "../../../../assets/utils/images/dropdown-header/abstract2.jpg";
import bg3 from "../../../../assets/utils/images/dropdown-header/abstract3.jpg";
import bg4 from "../../../../assets/utils/images/dropdown-header/abstract4.jpg";
import bg5 from "../../../../assets/utils/images/dropdown-header/abstract5.jpg";
import bg6 from "../../../../assets/utils/images/dropdown-header/abstract6.jpg";
import bg7 from "../../../../assets/utils/images/dropdown-header/abstract7.jpg";
import bg8 from "../../../../assets/utils/images/dropdown-header/abstract8.jpg";
import bg9 from "../../../../assets/utils/images/dropdown-header/abstract9.jpg";
import bg10 from "../../../../assets/utils/images/dropdown-header/abstract10.jpg";
import bg11 from "../../../../assets/utils/images/dropdown-header/city1.jpg";
import bg12 from "../../../../assets/utils/images/dropdown-header/city2.jpg";
import bg13 from "../../../../assets/utils/images/dropdown-header/city3.jpg";
import bg14 from "../../../../assets/utils/images/dropdown-header/city4.jpg";
import bg15 from "../../../../assets/utils/images/dropdown-header/city5.jpg";

export default class DropdownGridMenus extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
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

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Nav Menus</CardTitle>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Dropdown Basic
                        </DropdownToggle>
                        <DropdownMenu>
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
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="primary" className="mb-2 me-2">
                          Dropdown Example
                        </DropdownToggle>
                        <DropdownMenu>
                          <Nav vertical>
                            <NavItem className="nav-item-header">
                              Activity
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">
                                <i className="nav-link-icon pe-7s-chat"> </i>
                                <span>Chat</span>
                                <div className="ms-auto badge rounded-pill bg-info">
                                  8
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">
                                <i className="nav-link-icon pe-7s-wallet"> </i>
                                <span>Recover Password</span>
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item-header">
                              My Account
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">
                                <i className="nav-link-icon pe-7s-config"> </i>
                                <span>Settings</span>
                                <div className="ms-auto badge bg-success">
                                  New
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">
                                <i className="nav-link-icon pe-7s-coffee"> </i>
                                <span>Messages</span>
                                <div className="ms-auto badge bg-warning">
                                  512
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">
                                <i className="nav-link-icon pe-7s-box2"> </i>
                                <span>Logs</span>
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item-divider" />
                            <NavItem className="nav-item-btn text-end">
                              <Button size="sm" className="btn-pill" color="success">
                                Save
                              </Button>
                            </NavItem>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Dropdown Large
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
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
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="primary" className="mb-2 me-2">
                          Dropdown Extra Large
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Scrollable Dropdown Menus</CardTitle>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Bottom Header Buttons
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-primary">
                              <div
                                className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg1 + ")",
                                }}
                              />
                              <div className="menu-header-content">
                                <div>
                                  <h5 className="menu-header-title">Settings</h5>
                                  <h6 className="menu-header-subtitle">
                                    Manage all of your options
                                  </h6>
                                </div>
                                <div className="menu-header-btn-pane">
                                  <Button size="sm" color="dark" className="me-2">
                                    Settings
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                                    <i className="pe-7s-config btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="scroll-area-xs">
                            <PerfectScrollbar>
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
                            </PerfectScrollbar>
                          </div>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="success" className="mb-2 me-2">
                          Left Aligned Header
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-success">
                              <div
                                className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg3 + ")",
                                }}
                              />
                              <div className="menu-header-content text-start">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                                <div className="menu-header-btn-pane">
                                  <Button size="sm" color="dark" className="me-2">
                                    Settings
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                                    <i className="pe-7s-config btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="scroll-area-xs"
                            style={{
                              height: "150px",
                            }}>
                            <PerfectScrollbar>
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
                              </Nav>
                            </PerfectScrollbar>
                          </div>
                          <Nav vertical>
                            <NavItem className="nav-item-divider" />
                            <NavItem className="nav-item-btn">
                              <Button size="sm" className="btn-wide btn-shadow" color="danger">
                                Cancel
                              </Button>
                            </NavItem>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="secondary" className="mb-2 me-2">
                          Left Aligned Header Buttons
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-secondary">
                              <div
                                className="menu-header-image opacity-5"
                                style={{
                                  backgroundImage: "url(" + bg2 + ")",
                                }}/>
                              <div className="menu-header-content btn-pane-right">
                                <div>
                                  <h5 className="menu-header-title">Settings</h5>
                                  <h6 className="menu-header-subtitle">
                                    Manage all of your options
                                  </h6>
                                </div>
                                <div className="menu-header-btn-pane">
                                  <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                                    <i className="pe-7s-config btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="scroll-area-xs">
                            <PerfectScrollbar>
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
                                <NavItem>
                                  <NavLink href="#">Logs</NavLink>
                                </NavItem>
                              </Nav>
                            </PerfectScrollbar>
                          </div>
                          <Nav vertical>
                            <NavItem className="nav-item-divider" />
                            <NavItem className="nav-item-btn">
                              <Button size="sm" className="btn-wide btn-shadow" color="danger">
                                Cancel
                              </Button>
                            </NavItem>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Extra Large Menu without Subtitles</CardTitle>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Primary
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-primary">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg11 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
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
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="secondary" className="mb-2 me-2">
                          Secondary
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-secondary">
                              <div
                                className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg12 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="success" className="mb-2 me-2">
                          Success
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-success">
                              <div className="menu-header-image opacity-2"
                                style={{
                                  backgroundImage: "url(" + bg13 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="info" className="mb-2 me-2">
                          Info
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-info">
                              <div
                                className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg14 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="warning" className="mb-2 me-2">
                          Warning
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-warning">
                              <div
                                className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg15 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="danger" className="mb-2 me-2">
                          Danger
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-danger">
                              <div className="menu-header-image opacity-3"
                                style={{
                                  backgroundImage: "url(" + bg1 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="focus" className="mb-2 me-2">
                          Focus
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-focus">
                              <div className="menu-header-image opacity-8"
                                style={{
                                  backgroundImage: "url(" + bg2 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="alternate" className="mb-2 me-2">
                          Alt
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-alternate">
                              <div className="menu-header-image opacity-2"
                                style={{
                                  backgroundImage: "url(" + bg3 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="light" className="mb-2 me-2">
                          Light
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-light">
                              <div
                                className="menu-header-image opacity-5"
                                style={{
                                  backgroundImage: "url(" + bg4 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content text-dark">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="dark" className="mb-2 me-2">
                          Dark
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-dark">
                              <div className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg5 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="link" className="mb-2 me-2">
                          White
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-link">
                              <div className="menu-header-image opacity-3"
                                style={{
                                  backgroundImage: "url(" + bg6 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content text-dark">
                                <h5 className="menu-header-title">Settings</h5>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Dropdown Menu Headers</CardTitle>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Primary
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-primary">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg1 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
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
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="secondary" className="mb-2 me-2">
                          Secondary
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-secondary">
                              <div className="menu-header-image opacity-5"
                                style={{
                                  backgroundImage: "url(" + bg2 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="success" className="mb-2 me-2">
                          Success
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-success">
                              <div
                                className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg3 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="info" className="mb-2 me-2">
                          Info
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-info">
                              <div className="menu-header-image opacity-5"
                                style={{
                                  backgroundImage: "url(" + bg4 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="warning" className="mb-2 me-2">
                          Warning
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-warning">
                              <div className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg5 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="danger" className="mb-2 me-2">
                          Danger
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-danger">
                              <div
                                className="menu-header-image opacity-3"
                                style={{
                                  backgroundImage: "url(" + bg6 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="focus" className="mb-2 me-2">
                          Focus
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-focus">
                              <div className="menu-header-image opacity-8"
                                style={{
                                  backgroundImage: "url(" + bg7 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="alternate" className="mb-2 me-2">
                          Alt
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-alternate">
                              <div
                                className="menu-header-image opacity-3"
                                style={{
                                  backgroundImage: "url(" + bg8 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="light" className="mb-2 me-2">
                          Light
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-light">
                              <div
                                className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg9 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content text-dark">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="dark" className="mb-2 me-2">
                          Dark
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-dark">
                              <div
                                className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg10 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="link" className="mb-2 me-2">
                          White
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-link">
                              <div
                                className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg11 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content text-dark">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Dropdown Menu Header Buttons</CardTitle>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Bottom Header Buttons
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-primary">
                              <div
                                className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg1 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <div>
                                  <h5 className="menu-header-title">Settings</h5>
                                  <h6 className="menu-header-subtitle">
                                    Manage all of your options
                                  </h6>
                                </div>
                                <div className="menu-header-btn-pane">
                                  <Button size="sm" color="dark" className="me-2">
                                    Settings
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                                    <i className="pe-7s-config btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
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
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="success" className="mb-2 me-2">
                          Left Aligned Header
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-success">
                              <div className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg3 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content text-start">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                                <div className="menu-header-btn-pane">
                                  <Button size="sm" color="dark" className="me-2">
                                    Settings
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                                    <i className="pe-7s-config btn-icon-wrapper">
                                      {" "}
                                    </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret color="secondary" className="mb-2 me-2">
                          Left Aligned Header Buttons
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-secondary">
                              <div className="menu-header-image opacity-5"
                                style={{
                                  backgroundImage: "url(" + bg2 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content btn-pane-right">
                                <div>
                                  <h5 className="menu-header-title">Settings</h5>
                                  <h6 className="menu-header-subtitle">
                                    Manage all of your options
                                  </h6>
                                </div>
                                <div className="menu-header-btn-pane">
                                  <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                                    <i className="pe-7s-config btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-chat"> </i>
                                  <span>Chat</span>
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-config"> </i>
                                  <span>Settings</span>
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-coffee"> </i>
                                  <span>Messages</span>
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-box2"> </i>
                                  <span>Logs</span>
                                </NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Dropdown Standard Menu with Headers</CardTitle>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Basic
                        </DropdownToggle>
                        <DropdownMenu>
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-success">
                              <div className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg3 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content text-start">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                                <div className="menu-header-btn-pane">
                                  <Button size="sm" color="dark" className="me-2">
                                    Settings
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                                    <i className="pe-7s-config btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Menus</DropdownItem>
                          <DropdownItem>Settings</DropdownItem>
                          <DropdownItem>Actions</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Dividers</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
                        isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret color="primary" className="mb-2 me-2">
                          Hover Open
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-primary">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg1 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Rounded
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-rounded dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-secondary">
                              <div className="menu-header-image opacity-5"
                                style={{
                                  backgroundImage: "url(" + bg2 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Menus</DropdownItem>
                          <DropdownItem>Settings</DropdownItem>
                          <DropdownItem>Actions</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Dividers</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Shadow
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-shadow">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-success">
                              <div className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg3 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Menus</DropdownItem>
                          <DropdownItem>Settings</DropdownItem>
                          <DropdownItem>Actions</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Dividers</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Hover Link
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-hover-link dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-info">
                              <div className="menu-header-image opacity-5"
                                style={{
                                  backgroundImage: "url(" + bg4 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Menus</DropdownItem>
                          <DropdownItem>Settings</DropdownItem>
                          <DropdownItem>Actions</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Dividers</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Hover Background
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-hover-primary dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-warning">
                              <div
                                className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg5 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Menus</DropdownItem>
                          <DropdownItem>Settings</DropdownItem>
                          <DropdownItem>Actions</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Dividers</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Icons
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-hover-link">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-focus">
                              <div className="menu-header-image opacity-8"
                                style={{
                                  backgroundImage: "url(" + bg7 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-inbox"> </i>
                            <span>Menus</span>
                          </DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-file-empty"> </i>
                            <span>Settings</span>
                          </DropdownItem>
                          <DropdownItem>
                            <i className="dropdown-icon lnr-book"> </i>
                            <span>Actions</span>
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            <i className="dropdown-icon lnr-picture"> </i>
                            <span>Dividers</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2" color="primary">
                          Right aligned
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-right dropdown-menu-rounded">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-dark">
                              <div className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg10 + ")",
                                }}>
                              </div>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Menus</DropdownItem>
                          <DropdownItem>Settings</DropdownItem>
                          <DropdownItem>Actions</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Dividers</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Dropdown Grid Menus</CardTitle>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Three Column Grid Menu
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-love-kiss">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg12 + ")",
                                }}/>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="grid-menu grid-menu-3col">
                            <Row className="g-0">
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-transition" outline color="primary">
                                  <i className="lnr-license btn-icon-wrapper"> {" "} </i>
                                  Primary
                                </Button>
                              </Col>
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-transition" outline color="secondary">
                                  <i className="lnr-map btn-icon-wrapper"> </i>
                                  Secondary
                                </Button>
                              </Col>
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-transition" outline color="success">
                                  <i className="lnr-music-note btn-icon-wrapper"> {" "} </i>
                                  Success
                                </Button>
                              </Col>
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-transition" outline color="info">
                                  <i className="lnr-heart btn-icon-wrapper"> </i>
                                  Info
                                </Button>
                              </Col>
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-transition" outline color="warning">
                                  <i className="lnr-magic-wand btn-icon-wrapper">
                                    {" "}
                                  </i>
                                  Warning
                                </Button>
                              </Col>
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-transition" outline color="danger">
                                  <i className="lnr-lighter btn-icon-wrapper">
                                    {" "}
                                  </i>
                                  Danger
                                </Button>
                              </Col>
                            </Row>
                          </div>
                          <Nav vertical>
                            <NavItem className="nav-item-divider" />
                            <NavItem className="nav-item-btn text-center">
                              <Button size="sm" className="btn-shadow" color="primary">
                                Submit
                              </Button>
                            </NavItem>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Three Column Bigger Menu
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-sunny-morning">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg13 + ")",
                                }}/>
                              <div className="menu-header-content text-dark">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="grid-menu grid-menu-xl grid-menu-3col">
                            <Row className="g-0">
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                  <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                  Primary
                                </Button>
                              </Col>
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                  <i className="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                  Secondary
                                </Button>
                              </Col>
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-square btn-transition" outline color="link" >
                                  <i className="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                  Success
                                </Button>
                              </Col>
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                  <i className="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                  Info
                                </Button>
                              </Col>
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                  <i className="lnr-magic-wand btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                  Warning
                                </Button>
                              </Col>
                              <Col xl="4" sm="6">
                                <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                  <i className="lnr-lighter btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                  Danger
                                </Button>
                              </Col>
                            </Row>
                          </div>
                          <Nav vertical>
                            <NavItem className="nav-item-divider" />
                            <NavItem className="nav-item-btn text-center">
                              <Button size="sm" className="btn-shadow" color="primary">
                                Submit
                              </Button>
                            </NavItem>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Two Column Grid Menu
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-happy-itmeo">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg14 + ")",
                                }}/>
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="grid-menu grid-menu-2col">
                            <Row className="g-0">
                              <Col sm="6">
                                <Button className="btn-icon-vertical btn-transition" outline color="primary">
                                  <i className="lnr-license btn-icon-wrapper"> {" "}</i>
                                  Primary
                                </Button>
                              </Col>
                              <Col sm="6">
                                <Button className="btn-icon-vertical btn-transition" outline color="secondary">
                                  <i className="lnr-map btn-icon-wrapper"> </i>
                                  Secondary
                                </Button>
                              </Col>
                              <Col sm="6">
                                <Button className="btn-icon-vertical btn-transition" outline color="success">
                                  <i className="lnr-music-note btn-icon-wrapper"> {" "} </i>
                                  Success
                                </Button>
                              </Col>
                              <Col sm="6">
                                <Button className="btn-icon-vertical btn-transition" outline color="info">
                                  <i className="lnr-heart btn-icon-wrapper"> </i>
                                  Info
                                </Button>
                              </Col>
                            </Row>
                          </div>
                          <Nav vertical>
                            <NavItem className="nav-item-divider" />
                            <NavItem className="nav-item-btn text-center">
                              <Button size="sm" className="btn-shadow" color="primary">
                                Submit
                              </Button>
                            </NavItem>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="mb-2 me-2" color="primary">
                          Two Column Bigger Menu
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-night-fade">
                              <div className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg15 + ")",
                                }}/>
                              <div className="menu-header-content text-dark">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="grid-menu grid-menu-xl grid-menu-2col">
                            <Row className="g-0">
                              <Col sm="6">
                                <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                  <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                  Primary
                                </Button>
                              </Col>
                              <Col sm="6">
                                <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                  <i className="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                  Secondary
                                </Button>
                              </Col>
                              <Col sm="6">
                                <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                  <i className="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                  Success
                                </Button>
                              </Col>
                              <Col sm="6">
                                <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                  <i className="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                  Info
                                </Button>
                              </Col>
                            </Row>
                          </div>
                          <Nav vertical>
                            <NavItem className="nav-item-divider" />
                            <NavItem className="nav-item-btn text-center">
                              <Button size="sm" className="btn-shadow" color="primary">
                                Submit
                              </Button>
                            </NavItem>
                          </Nav>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
