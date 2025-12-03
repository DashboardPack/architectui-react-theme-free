import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  Container,
  NavItem,
} from "reactstrap";

import bg1 from "../../../../../assets/utils/images/dropdown-header/abstract1.jpg";

class ButtonsVerticalIcons extends Component {
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
        <Container fluid>
          <Row>
            <Col xl="6" lg="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Solid P7 Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="primary" >
                    <i className="pe-7s-tools btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="secondary">
                    <i className="pe-7s-gym btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="success">
                    <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="info">
                    <i className="pe-7s-science btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="warning">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="danger">
                    <i className="pe-7s-video btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="focus">
                    <i className="pe-7s-upload btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="alternate">
                    <i className="pe-7s-piggy btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="light">
                    <i className="pe-7s-photo btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="dark">
                    <i className="pe-7s-helm btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="link">
                    <i className="pe-7s-settings btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Color Transition P7 Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline color="primary">
                    <i className="pe-7s-tools btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline color="secondary">
                    <i className="pe-7s-gym btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline color="success">
                    <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline
                    color="info">
                    <i className="pe-7s-science btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline color="warning">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline color="danger">
                    <i className="pe-7s-video btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline color="focus">
                    <i className="pe-7s-upload btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline color="alternate">
                    <i className="pe-7s-piggy btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline color="light">
                    <i className="pe-7s-photo btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline color="dark">
                    <i className="pe-7s-helm btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition" outline color="link">
                    <i className="pe-7s-settings btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Outline P7 Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon-vertical" outline color="primary">
                    <i className="pe-7s-tools btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" outline color="secondary">
                    <i className="pe-7s-gym btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button  className="mb-2 me-2 btn-icon-vertical" outline color="success">
                    <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" outline color="info">
                    <i className="pe-7s-science btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" outline color="warning">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" outline color="danger">
                    <i className="pe-7s-video btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" outline color="focus">
                    <i className="pe-7s-upload btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" outline color="alternate">
                    <i className="pe-7s-piggy btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" outline color="light">
                    <i className="pe-7s-photo btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" outline color="dark">
                    <i className="pe-7s-helm btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" outline color="link">
                    <i className="pe-7s-settings btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Shadow Dashed P7 Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="primary">
                    <i className="pe-7s-tools btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="secondary">
                    <i className="pe-7s-gym btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="success">
                    <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="info">
                    <i className="pe-7s-science btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="warning">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="danger">
                    <i className="pe-7s-video btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="focus">
                    <i className="pe-7s-upload btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="alternate">
                    <i className="pe-7s-piggy btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="light">
                    <i className="pe-7s-photo btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="dark">
                    <i className="pe-7s-helm btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-dashed" outline color="link">
                    <i className="pe-7s-settings btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Block Level</CardTitle>
                  <Button block className="mb-2 me-2 btn-icon-vertical" size="lg" color="primary">
                    <i className="lnr-picture btn-icon-wrapper"> </i>
                    Block Large
                  </Button>
                  <Button block className="mb-2 me-2 btn-icon-vertical" color="primary">
                    <i className="lnr-crop btn-icon-wrapper"> </i>
                    Block Normal
                  </Button>
                  <Button block className="mb-2 me-2 btn-icon-vertical" size="sm" color="primary">
                    <i className="lnr-paperclip btn-icon-wrapper"> </i>
                    Block Small
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Sizing</CardTitle>
                  <div className="text-center">
                    <Button className="btn-wide mb-2 me-2 btn-icon-vertical" size="lg" color="primary">
                      <i className="pe-7s-science btn-icon-wrapper"> </i>
                      Large
                    </Button>
                    <Button className="btn-wide mb-2 me-2 btn-icon-vertical" color="primary">
                      <i className="pe-7s-volume btn-icon-wrapper"> </i>
                      Normal
                    </Button>
                    <Button className="btn-wide mb-2 me-2 btn-icon-vertical" size="sm" color="primary">
                      <i className="pe-7s-tools btn-icon-wrapper"> </i>
                      Small
                    </Button>
                  </div>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Bottom Icon</CardTitle>
                  <div className="text-center">
                    <Button className="btn-wide mb-2 me-2 btn-icon-vertical btn-icon-bottom" size="lg" color="warning">
                      Large
                      <i className="pe-7s-science btn-icon-wrapper"> </i>
                    </Button>
                    <Button className="btn-wide mb-2 me-2 btn-icon-vertical btn-icon-bottom btn-shadow" outline
                      color="success">
                      Normal
                      <i className="pe-7s-volume btn-icon-wrapper"> </i>
                    </Button>
                    <Button className="btn-wide mb-2 me-2 btn-icon-vertical btn-icon-bottom btn-dashed" outline size="sm" color="danger">
                      Small
                      <i className="pe-7s-tools btn-icon-wrapper"> </i>
                    </Button>
                  </div>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Grid Menu Bigger</CardTitle>
                  <div className="grid-menu grid-menu-3col">
                    <Row className="g-0">
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                          <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> {" "}</i>
                          Primary
                        </Button>
                      </Col>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                          <i className="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> {" "}</i>
                          Secondary
                        </Button>
                      </Col>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                          <i className="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3">{" "} </i>
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
                          <i className="lnr-magic-wand btn-icon-wrapper btn-icon-lg mb-3"> {" "}</i>
                          Warning
                        </Button>
                      </Col>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                          <i className="lnr-lighter btn-icon-wrapper btn-icon-lg mb-3"> {" "}</i>
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
                                <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> {" "}</i>
                                Primary
                              </Button>
                            </Col>
                            <Col xl="4" sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                <i className="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> {" "}</i>
                                Secondary
                              </Button>
                            </Col>
                            <Col xl="4" sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                <i className="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> {" "}</i>
                                Success
                              </Button>
                            </Col>
                            <Col xl="4" sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                <i className="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"> {" "}</i>
                                Info
                              </Button>
                            </Col>
                            <Col xl="4" sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                <i className="lnr-magic-wand btn-icon-wrapper btn-icon-lg mb-3"> {" "}</i>
                                Warning
                              </Button>
                            </Col>
                            <Col xl="4" sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                <i className="lnr-lighter btn-icon-wrapper btn-icon-lg mb-3"> {" "}</i>
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
                  <CardTitle>Linecons Icons Square Buttons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="primary">
                    <i className="lnr-license btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="secondary">
                    <i className="lnr-map btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="success">
                    <i className="lnr-music-note btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="info">
                    <i className="lnr-heart btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="warning">
                    <i className="lnr-magic-wand btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="danger">
                    <i className="lnr-lighter btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="focus">
                    <i className="lnr-dice btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="alternate">
                    <i className="lnr-apartment btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="light">
                    <i className="lnr-database btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="dark">
                    <i className="lnr-location btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-square" color="link">
                    <i className="lnr-inbox btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>
                    Linecons Transition Buttons without Borders
                  </CardTitle>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="primary">
                    <i className="lnr-license btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="secondary">
                    <i className="lnr-map btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="success">
                    <i className="lnr-music-note btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="info">
                    <i className="lnr-heart btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="warning">
                    <i className="lnr-magic-wand btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="danger">
                    <i className="lnr-lighter btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="focus">
                    <i className="lnr-dice btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="alternate">
                    <i className="lnr-apartment btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="light">
                    <i className="lnr-database btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="dark">
                    <i className="lnr-location btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-transition border-0" outline color="link">
                    <i className="lnr-inbox btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Outline 2x Shadow Linecons Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="primary">
                    <i className="lnr-store btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="secondary">
                    <i className="lnr-book btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="success">
                    <i className="lnr-user btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="info">
                    <i className="lnr-paperclip btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="warning">
                    <i className="lnr-screen btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="danger">
                    <i className="lnr-smartphone btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="focus">
                    <i className="lnr-phone btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="alternate">
                    <i className="lnr-keyboard btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="light">
                    <i className="lnr-dinner btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="dark">
                    <i className="lnr-earth btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical btn-shadow btn-outline-2x" outline color="link">
                    <i className="lnr-car btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Solid Pills Linecons Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="primary">
                    <i className="lnr-hand btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="secondary">
                    <i className="lnr-funnel btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="success">
                    <i className="lnr-crop btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="info">
                    <i className="lnr-drop btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="warning">
                    <i className="lnr-enter btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="danger">
                    <i className="lnr-eye btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="focus">
                    <i className="lnr-graduation-hat btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="alternate">
                    <i className="lnr-file-empty btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="light">
                    <i className="lnr-camera btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="dark">
                    <i className="lnr-picture btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon-vertical" color="link">
                    <i className="lnr-book btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
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
                            <div
                              className="menu-header-image"
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
                                <i className="lnr-music-note btn-icon-wrapper">  {" "}</i>
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
                                <i className="lnr-magic-wand btn-icon-wrapper"> {" "}</i>
                                Warning
                              </Button>
                            </Col>
                            <Col xl="4" sm="6">
                              <Button className="btn-icon-vertical btn-transition" outline color="danger">
                                <i className="lnr-lighter btn-icon-wrapper"> {" "}</i>
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
                            <div
                              className="menu-header-image"
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
                                <i className="lnr-heart btn-icon-wrapper"> </i>
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
        </Container>
      </Fragment>
    );
  }
}

export default ButtonsVerticalIcons;
