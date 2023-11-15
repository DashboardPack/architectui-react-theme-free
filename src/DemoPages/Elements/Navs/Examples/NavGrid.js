import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";

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

export default class NavsHGrid extends React.Component {
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
                <Col xl="6" lg="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Grid Menu Hover Color</CardTitle>
                      <div className="grid-menu grid-menu-3col">
                        <Row className="g-0">
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="primary">
                              <i className="lnr-license btn-icon-wrapper"> </i>
                              Primary
                            </Button>
                          </Col>
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="secondary">
                              <i className="lnr-map btn-icon-wrapper"> </i>
                              Secondary
                            </Button>
                          </Col>
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="success">
                              <i className="lnr-music-note btn-icon-wrapper"> </i>
                              Success
                            </Button>
                          </Col>
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="info">
                              <i className="lnr-heart btn-icon-wrapper"> </i>
                              Info
                            </Button>
                          </Col>
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="warning">
                              <i className="lnr-magic-wand btn-icon-wrapper"> </i>
                              Warning
                            </Button>
                          </Col>
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="danger">
                              <i className="lnr-lighter btn-icon-wrapper"> </i>
                              Danger
                            </Button>
                          </Col>
                        </Row>
                      </div>
                      <div className="divider" />
                      <div className="text-center">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle caret className="mb-2 me-2" color="primary">
                            Grid Menu Inside Dropdown
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-lg">
                            <div className="dropdown-menu-header">
                              <div className="dropdown-menu-header-inner bg-primary">
                                <div className="menu-header-image"
                                  style={{
                                    backgroundImage: "url(" + bg1 + ")",
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
                                    <i className="lnr-heart btn-icon-wrapper"> {" "} </i>
                                    Info
                                  </Button>
                                </Col>
                                <Col xl="4" sm="6">
                                  <Button className="btn-icon-vertical btn-transition" outline color="warning">
                                    <i className="lnr-magic-wand btn-icon-wrapper"> {" "} </i>
                                    Warning
                                  </Button>
                                </Col>
                                <Col xl="4" sm="6">
                                  <Button className="btn-icon-vertical btn-transition" outline color="danger">
                                    <i className="lnr-lighter btn-icon-wrapper"> {" "} </i>
                                    Danger
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                            <Nav vertical>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl="6" lg="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Grid Menu Two Columns</CardTitle>
                      <div className="grid-menu grid-menu-2col">
                        <Row className="g-0">
                          <Col sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="primary">
                              <i className="lnr-license btn-icon-wrapper"> </i>
                              Primary
                            </Button>
                          </Col>
                          <Col sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="secondary">
                              <i className="lnr-map btn-icon-wrapper"> </i>
                              Secondary
                            </Button>
                          </Col>
                          <Col sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="success">
                              <i className="lnr-music-note btn-icon-wrapper"> </i>
                              Success
                            </Button>
                          </Col>
                          <Col sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="info">
                              <i className="lnr-heart btn-icon-wrapper"> </i>
                              Info
                            </Button>
                          </Col>
                        </Row>
                      </div>
                      <div className="divider" />
                      <div className="text-center">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle caret className="mb-2 me-2" color="primary">
                            Grid Menu Inside Dropdown
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-lg">
                            <div className="dropdown-menu-header">
                              <div className="dropdown-menu-header-inner bg-primary">
                                <div className="menu-header-image"
                                  style={{
                                    backgroundImage: "url(" + bg1 + ")",
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
                                    <i className="lnr-license btn-icon-wrapper"> {" "} </i>
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
                                    <i className="lnr-heart btn-icon-wrapper"> {" "} </i>
                                    Info
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                            <Nav vertical>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl="6" lg="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Grid Menu Bigger</CardTitle>
                      <div className="grid-menu grid-menu-3col">
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
                            <Button className="btn-icon-vertical btn-square btn-transition" outline  color="link">
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
                      <div className="divider" />
                      <div className="text-center">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle caret className="mb-2 me-2" color="primary">
                            Grid Menu Inside Dropdown
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-xl">
                            <div className="dropdown-menu-header">
                              <div className="dropdown-menu-header-inner bg-primary">
                                <div className="menu-header-image"
                                  style={{
                                    backgroundImage: "url(" + bg1 + ")",
                                  }}/>
                                <div className="menu-header-content">
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
                                    <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3">  {" "} </i>
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
                                  <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
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
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl="6" lg="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Grid Menu Bigger Two Columns</CardTitle>
                      <div className="grid-menu grid-menu-2col">
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
                      <div className="divider" />
                      <div className="text-center">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle caret className="mb-2 me-2" color="primary">
                            Grid Menu Inside Dropdown
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-xl">
                            <div className="dropdown-menu-header">
                              <div className="dropdown-menu-header-inner bg-primary">
                                <div className="menu-header-image"
                                  style={{
                                    backgroundImage: "url(" + bg1 + ")",
                                  }}/>
                                <div className="menu-header-content">
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
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-pill" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle className="pb-3">Menu Headers</CardTitle>
                      <Row>
                        <Col md="3">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-primary">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg1 + ")",
                                }}/>
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
                          </Nav>
                        </Col>
                        <Col md="3">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-danger">
                              <div className="menu-header-image opacity-2"
                                style={{
                                  backgroundImage: "url(" + bg2 + ")",
                                }}/>
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
                            </Nav>
                          </Nav>
                        </Col>
                        <Col md="3">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-success">
                              <div className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg3 + ")",
                                }}/>
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
                            </Nav>
                          </Nav>
                        </Col>
                        <Col md="3">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-dark">
                              <div className="menu-header-image opacity-1"
                                style={{
                                  backgroundImage: "url(" + bg10 + ")",
                                }}/>
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
                            </Nav>
                          </Nav>
                        </Col>
                      </Row>
                      <div className="divider" />
                      <div className="text-center">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle caret  className="mb-2 me-2" color="primary">
                            Primary
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-lg">
                            <div className="dropdown-menu-header">
                              <div className="dropdown-menu-header-inner bg-primary">
                                <div className="menu-header-image"
                                  style={{
                                    backgroundImage: "url(" + bg1 + ")",
                                  }}/>
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
                                <Button size="sm" className="btn-wide btn-shadow"  color="danger">
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
                                  }}/>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                                <div className="menu-header-image opacity-1"
                                  style={{
                                    backgroundImage: "url(" + bg3 + ")",
                                  }}/>
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
                                    <i className="nav-link-icon pe-7s-wallet">
                                      {" "}
                                    </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config">  {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                                <div className="menu-header-image opacity-5" style={{
                                    backgroundImage: "url(" + bg4 + ")",
                                  }}/>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                                  }}/>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                                <div className="menu-header-image opacity-3"
                                  style={{
                                    backgroundImage: "url(" + bg6 + ")",
                                  }}/>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                                  }}/>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee">  {" "} </i>
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
                                <div className="menu-header-image opacity-3"
                                  style={{
                                    backgroundImage: "url(" + bg8 + ")",
                                  }}/>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                                <div className="menu-header-image"
                                  style={{
                                    backgroundImage: "url(" + bg9 + ")",
                                  }}/>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                                <div className="menu-header-image opacity-1"
                                  style={{
                                    backgroundImage: "url(" + bg10 + ")",
                                  }}/>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                                <div className="menu-header-image opacity-1"
                                  style={{
                                    backgroundImage: "url(" + bg11 + ")",
                                  }}/>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle className="pb-3">
                        Menu Header Buttons Solid Backgrounds
                      </CardTitle>
                      <Row>
                        <Col md="4">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-warning">
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
                                  <Button size="sm" className="btn-icon btn-icon-only" color="primary">
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
                              <NavItem>
                                <NavLink href="#">
                                  <i className="nav-link-icon pe-7s-wallet"> </i>
                                  <span>Recover Password</span>
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
                            </Nav>
                          </Nav>
                        </Col>
                        <Col md="4">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-focus">
                              <div className="menu-header-content text-start">
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                                <div className="menu-header-btn-pane">
                                  <Button size="sm" color="primary" className="me-2">
                                    Settings
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="danger">
                                    <i className="pe-7s-config btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Nav vertical>
                            <Nav vertical>
                              <Nav vertical>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                              </Nav>
                            </Nav>
                          </Nav>
                        </Col>
                        <Col md="4">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-light">
                              <div className="menu-header-content text-dark btn-pane-right">
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
                            </Nav>
                          </Nav>
                        </Col>
                      </Row>
                      <div className="divider" />
                      <div className="text-center">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle caret className="mb-2 me-2" color="primary">
                            Bottom Header Buttons
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-lg">
                            <div className="dropdown-menu-header">
                              <div className="dropdown-menu-header-inner bg-primary">
                                <div className="menu-header-content">
                                  <div>
                                    <h5 className="menu-header-title">
                                      Settings
                                    </h5>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                                <div className="menu-header-content btn-pane-right">
                                  <div>
                                    <h5 className="menu-header-title">
                                      Settings
                                    </h5>
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
                                    <i className="nav-link-icon pe-7s-wallet"> {" "} </i>
                                    <span>Recover Password</span>
                                  </NavLink>
                                </NavItem>
                                <NavItem className="nav-item-header">
                                  My Account
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-config"> {" "} </i>
                                    <span>Settings</span>
                                    <div className="ms-auto badge bg-success">
                                      New
                                    </div>
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#">
                                    <i className="nav-link-icon pe-7s-coffee"> {" "} </i>
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
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle className="pb-3">
                        Headers Gradient Background with Images
                      </CardTitle>
                      <Row>
                        <Col md="3">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-mean-fruit">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg2 + ")",
                                }}/>
                              <div className="menu-header-content">
                                <div>
                                  <h5 className="menu-header-title">Settings</h5>
                                  <h6 className="menu-header-subtitle">
                                    Manage all of your options
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md="3">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-amy-crisp">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg3 + ")",
                                }}/>
                              <div className="menu-header-content">
                                <div>
                                  <h5 className="menu-header-title">Settings</h5>
                                  <h6 className="menu-header-subtitle">
                                    Manage all of your options
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md="3">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-arielle-smile">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg4 + ")",
                                }}/>
                              <div className="menu-header-content">
                                <div>
                                  <h5 className="menu-header-title">Settings</h5>
                                  <h6 className="menu-header-subtitle">
                                    Manage all of your options
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md="3">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-grow-early">
                              <div className="menu-header-image"
                                style={{
                                  backgroundImage: "url(" + bg5 + ")",
                                }}/>
                              <div className="menu-header-content">
                                <div>
                                  <h5 className="menu-header-title">Settings</h5>
                                  <h6 className="menu-header-subtitle">
                                    Manage all of your options
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
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
