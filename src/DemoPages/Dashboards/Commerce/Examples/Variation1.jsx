import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React, { Fragment, Component } from "react";
import LiquidFillGauge from "react-liquid-gauge";
import {
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  Card,
  CardBody,
  CardTitle,
  NavLink,
  Container,
  Table,
  CardHeader,
  CardFooter,
  ButtonGroup,
  Popover,
  PopoverBody,
  ListGroupItem,
  ListGroup,
} from "reactstrap";

import bg1 from "../../../../assets/utils/images/dropdown-header/abstract1.jpg";
import bg2 from "../../../../assets/utils/images/dropdown-header/abstract2.jpg";
import bg3 from "../../../../assets/utils/images/dropdown-header/abstract3.jpg";

import classnames from "classnames";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../../assets/utils/images/avatars/4.jpg";

import IncomeReport from "./Components/IncomeReport";

import {
  faAngleUp,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Sparklines, SparklinesBars, SparklinesLine } from "react-sparklines";

function boxMullerRandom() {
  let phase = true,
    x1,
    x2,
    w;

  return (function () {
    if (phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(10);

export default class CommerceDashboard1 extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.togglePop1 = this.togglePop1.bind(this);
    this.togglePop2 = this.togglePop2.bind(this);
    this.togglePop3 = this.togglePop3.bind(this);
    this.togglePop4 = this.togglePop4.bind(this);

    this.state = {
      activeTab: "1",
      popoverOpen1: false,
      popoverOpen2: false,
      popoverOpen3: false,
      popoverOpen4: false,
      value: 45,
      value2: 72,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  togglePop1() {
    this.setState({
      popoverOpen1: !this.state.popoverOpen1,
    });
  }

  togglePop2() {
    this.setState({
      popoverOpen2: !this.state.popoverOpen2,
    });
  }

  togglePop3() {
    this.setState({
      popoverOpen3: !this.state.popoverOpen3,
    });
  }

  togglePop4() {
    this.setState({
      popoverOpen4: !this.state.popoverOpen4,
    });
  }

  startColor = "#6495ed"; // cornflowerblue
  endColor = "#dc143c"; // crimson

  render() {
    const radius = 107;
    const interpolate = interpolateRgb(this.startColor, this.endColor);
    const fillColor = interpolate(this.state.value / 100);
    const gradientStops = [
      {
        key: "0%",
        stopColor: color(fillColor).darker(0.5).toString(),
        stopOpacity: 1,
        offset: "0%",
      },
      {
        key: "50%",
        stopColor: fillColor,
        stopOpacity: 0.75,
        offset: "50%",
      },
      {
        key: "100%",
        stopColor: color(fillColor).brighter(0.5).toString(),
        stopOpacity: 0.5,
        offset: "100%",
      },
    ];

    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col lg="12" xl="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Income Report</CardTitle>
                  <IncomeReport />
                </CardBody>
              </Card>
            </Col>
            <Col lg="12" xl="6">
              <Card className="main-card mb-3">
                <div className="grid-menu grid-menu-2col">
                  <Row className="g-0">
                    <Col sm="6">
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-primary" />
                          <i className="lnr-cog text-primary" />
                        </div>
                        <div className="widget-numbers">45.8k</div>
                        <div className="widget-subheading">Total Views</div>
                        <div className="widget-description text-success">
                          <FontAwesomeIcon icon={faAngleUp} />
                          <span className="ps-1">175.5%</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-info" />
                          <i className="lnr-graduation-hat text-info" />
                        </div>
                        <div className="widget-numbers">63.2k</div>
                        <div className="widget-subheading">Bugs Fixed</div>
                        <div className="widget-description text-info">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1">175.5%</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="widget-chart widget-chart-hover">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-danger" />
                          <i className="lnr-laptop-phone text-danger" />
                        </div>
                        <div className="widget-numbers">5.82k</div>
                        <div className="widget-subheading">
                          Reports Submitted
                        </div>
                        <div className="widget-description text-primary">
                          <span className="pe-1">54.1%</span>
                          <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="widget-chart widget-chart-hover br-br">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-success" />
                          <i className="lnr-screen" />
                        </div>
                        <div className="widget-numbers">17.2k</div>
                        <div className="widget-subheading">Profiles</div>
                        <div className="widget-description text-warning">
                          <span className="pe-1">175.5%</span>
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardHeader>
                  Active Users
                  <div className="btn-actions-pane-right">
                    <ButtonGroup size="sm">
                      <Button caret="true" color="focus" className={"active"}>
                        Last Week
                      </Button>
                      <Button caret="true" color="focus">
                        All Month
                      </Button>
                    </ButtonGroup>
                  </div>
                </CardHeader>
                <Table responsive hover striped borderless className="align-middle mb-0">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Name</th>
                      <th className="text-center">City</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Sales</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center text-muted">#345</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">John Doe</div>
                              <div className="widget-subheading opacity-7">
                                Web Developer
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">Madrid</td>
                      <td className="text-center">
                        <div className="badge bg-warning">Pending</div>
                      </td>
                      <td className="text-center" style={{ width: "150px" }}>
                        <Sparklines height={60} data={sampleData}>
                          <SparklinesLine
                            style={{
                              strokeWidth: 3,
                              stroke: "#545cd8",
                              fill: "none",
                            }}/>
                        </Sparklines>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Details
                        </Button>
                        <Popover className="popover-custom rm-pointers" placement="auto" isOpen={this.state.popoverOpen1}
                          target={"PopoverCustomT-1"} toggle={this.togglePop1}>
                          <PopoverBody>
                            <div className="dropdown-menu-header">
                              <div
                                className={classnames(
                                  "dropdown-menu-header-inner bg-focus"
                                )}>
                                <div className="menu-header-image"
                                  style={{
                                    backgroundImage: "url(" + bg1 + ")",
                                  }}/>
                                <div className="menu-header-content">
                                  <h5 className="menu-header-title">
                                    Settings
                                  </h5>
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
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-center">
                                <Button size="sm" className="btn-wide btn-shadow" color="danger">
                                  Cancel
                                </Button>
                              </NavItem>
                            </Nav>
                          </PopoverBody>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">#347</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar1} alt=""/>
                              </div>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">
                                Ruben Tillman
                              </div>
                              <div className="widget-subheading opacity-7">
                                Etiam sit amet orci eget
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">Berlin</td>
                      <td className="text-center">
                        <div className="badge bg-success">Completed</div>
                      </td>
                      <td className="text-center" style={{ width: "150px" }}>
                        <Sparklines height={60} data={sampleData}>
                          <SparklinesBars
                            style={{
                              stroke: "none",
                              fill: "#3ac47d",
                              fillOpacity: ".5",
                            }}/>
                        </Sparklines>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-2"} onClick={this.togglePop2}>
                          Details
                        </Button>
                        <Popover className="popover-custom rm-pointers" placement="auto" isOpen={this.state.popoverOpen2}
                          target={"PopoverCustomT-2"} toggle={this.togglePop2}>
                          <PopoverBody>
                            <div className="dropdown-menu-header">
                              <div
                                className={classnames(
                                  "dropdown-menu-header-inner bg-danger"
                                )}>
                                <div className="menu-header-image"
                                  style={{
                                    backgroundImage: "url(" + bg1 + ")",
                                  }}/>
                                <div className="menu-header-content">
                                  <h5 className="menu-header-title">
                                    Settings
                                  </h5>
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
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-end">
                                <Button size="sm" className="btn-wide btn-shadow" color="success">
                                  Save
                                </Button>
                              </NavItem>
                            </Nav>
                          </PopoverBody>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">#321</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar3} alt=""/>
                              </div>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Elliot Huber</div>
                              <div className="widget-subheading opacity-7">
                                Lorem ipsum dolor sic
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">London</td>
                      <td className="text-center">
                        <div className="badge bg-danger">In Progress</div>
                      </td>
                      <td className="text-center" style={{ width: "150px" }}>
                        <Sparklines height={60} data={sampleData}>
                          <SparklinesBars
                            style={{
                              stroke: "none",
                              fill: "#d92550",
                              fillOpacity: ".5",
                            }}/>
                        </Sparklines>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-3"} onClick={this.togglePop3}>
                          Details
                        </Button>
                        <Popover  className="popover-custom rm-pointers" placement="auto" isOpen={this.state.popoverOpen3}
                          target={"PopoverCustomT-3"} toggle={this.togglePop3}>
                          <PopoverBody>
                            <div className="dropdown-menu-header">
                              <div
                                className={classnames(
                                  "dropdown-menu-header-inner bg-focus"
                                )}>
                                <div className="menu-header-image"
                                  style={{
                                    backgroundImage: "url(" + bg1 + ")",
                                  }}/>
                                <div className="menu-header-content">
                                  <h5 className="menu-header-title">
                                    Settings
                                  </h5>
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
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-center">
                                <Button size="sm" className="btn-wide btn-shadow" color="danger">
                                  Cancel
                                </Button>
                              </NavItem>
                            </Nav>
                          </PopoverBody>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">#55</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar4} alt=""/>
                              </div>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">
                                Vinnie Wagstaff
                              </div>
                              <div className="widget-subheading opacity-7">
                                UI Designer
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">Amsterdam</td>
                      <td className="text-center">
                        <div className="badge bg-info">On Hold</div>
                      </td>
                      <td className="text-center" style={{ width: "150px" }}>
                        <Sparklines height={60} data={sampleData}>
                          <SparklinesLine
                            style={{
                              strokeWidth: 3,
                              stroke: "#f7b924",
                              fill: "#f7b924",
                              fillOpacity: ".2",
                            }}/>
                        </Sparklines>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-4"} onClick={this.togglePop4}>
                          Details
                        </Button>
                        <Popover className="popover-custom rm-pointers" placement="auto" isOpen={this.state.popoverOpen4}
                          target={"PopoverCustomT-4"} toggle={this.togglePop4}>
                          <PopoverBody>
                            <div className="dropdown-menu-header">
                              <div
                                className={classnames(
                                  "dropdown-menu-header-inner bg-focus"
                                )}>
                                <div className="menu-header-image"
                                  style={{
                                    backgroundImage: "url(" + bg1 + ")",
                                  }}/>
                                <div className="menu-header-content">
                                  <h5 className="menu-header-title">
                                    Settings
                                  </h5>
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
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-center">
                                <Button size="sm" className="btn-wide btn-shadow" color="danger">
                                  Cancel
                                </Button>
                              </NavItem>
                            </Nav>
                          </PopoverBody>
                        </Popover>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="d-block text-center">
                  <Button className="me-2 btn-icon btn-icon-only" outline color="danger">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="btn-wide" color="success">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <div className="text-center mb-3">
            <h5 className="menu-header-title text-capitalize mb-3 fsize-3">
              Top Sellers Cards
            </h5>
            <ButtonGroup size="lg" className="mb-3">
              <Button color="primary"
                className={
                  "btn-shadow " +
                  classnames({ active: this.state.activeTab === "1" })
                }
                onClick={() => {
                  this.toggle("1");
                }}>
                Hour
              </Button>
              <Button color="primary"
                className={
                  "btn-shadow " +
                  classnames({ active: this.state.activeTab === "2" })
                }
                onClick={() => {
                  this.toggle("2");
                }}>
                Day
              </Button>
              <Button color="primary"
                className={
                  "btn-shadow " +
                  classnames({ active: this.state.activeTab === "3" })
                }
                onClick={() => {
                  this.toggle("3");
                }}>
                Week
              </Button>
              <Button color="primary"
                className={
                  "btn-shadow " +
                  classnames({ active: this.state.activeTab === "4" })
                }
                onClick={() => {
                  this.toggle("4");
                }}>
                Month
              </Button>
            </ButtonGroup>
          </div>

          <Row>
            <Col sm="12" lg="6" xl="4">
              <Card className="mb-3 profile-responsive">
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-dark">
                    <div className="menu-header-image opacity-2"
                      style={{
                        backgroundImage: "url(" + bg1 + ")",
                      }}/>
                    <div className="menu-header-content btn-pane-right">
                      <div className="avatar-icon-wrapper me-3 avatar-icon-xl btn-hover-shine">
                        <div className="avatar-icon rounded">
                          <img src={avatar1} alt="Avatar 5" />
                        </div>
                      </div>
                      <div>
                        <h5 className="menu-header-title">Jeff Walberg</h5>
                        <h6 className="menu-header-subtitle">
                          Lead UX Developer
                        </h6>
                      </div>
                      <div className="menu-header-btn-pane">
                        <Button color="success">View Profile</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <ListGroup flush>
                  <ListGroupItem>
                    <div className="widget-content pt-1 ps-0 pe-0">
                      <div className="text-center">
                        <h5 className="widget-heading opacity-4 mb-0">
                          Month Totals
                        </h5>
                        <h6 className="mt-3 mb-3">
                          <span className="pe-2">
                            <b className="text-danger">12</b> new leads,
                          </span>
                          <span>
                            <b className="text-success">$56.24</b> in sales
                          </span>
                        </h6>
                        <Button color="primary" className="btn-wide btn-pill" outline>
                          Full Report
                        </Button>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="p-0">
                    <div className="grid-menu grid-menu-2col">
                      <Row className="g-0">
                        <Col sm="6">
                          <Button className="btn-icon-vertical btn-square btn-transition br-bl"outline color="link">
                            <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                            View Profile
                          </Button>
                        </Col>
                        <Col sm="6">
                          <Button className="btn-icon-vertical btn-square btn-transition br-br" outline color="link">
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
            <Col sm="12" lg="6" xl="4">
              <Card className="mb-3 profile-responsive">
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-dark">
                    <div className="menu-header-image opacity-4"
                      style={{
                        backgroundImage: "url(" + bg2 + ")",
                      }}/>
                    <div className="menu-header-content btn-pane-right">
                      <div className="avatar-icon-wrapper me-3 avatar-icon-xl btn-hover-shine">
                        <div className="avatar-icon rounded">
                          <img src={avatar2} alt="Avatar 5" />
                        </div>
                      </div>
                      <div>
                        <h5 className="menu-header-title">John Rosenberg</h5>
                        <h6 className="menu-header-subtitle">
                          Short profile description
                        </h6>
                      </div>
                      <div className="menu-header-btn-pane">
                        <Button type="button" color="warning" className="btn-wide btn-shadow btn-pill"
                          onClick={() => {
                            this.setState({ value: Math.random() * 100 });
                          }}>
                          Refresh
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <ListGroup flush>
                  <ListGroupItem className="p-0">
                    <div className="widget-content">
                      <div className="text-center">
                        <h5 className="widget-heading opacity-4">
                          Total Sales
                        </h5>
                        <h5>
                          <LiquidFillGauge style={{ margin: "0 auto" }} width={radius} height={radius}
                            value={this.state.value} percent="" textSize={1} textOffsetX={0} textOffsetY={0}
                            textRenderer={(props) => {
                              const value = Math.round(props.value);
                              const radius = Math.min(
                                props.height / 2,
                                props.width / 2
                              );
                              const textPixels = (props.textSize * radius) / 2;
                              const valueStyle = {
                                fontSize: textPixels,
                              };
                              const percentStyle = {
                                fontSize: textPixels * 0.6,
                              };

                              return (
                                <tspan>
                                  <tspan className="value" style={valueStyle}>
                                    {value}
                                  </tspan>
                                  <tspan style={percentStyle}>
                                    {props.percent}
                                  </tspan>
                                </tspan>
                              );
                            }}
                            riseAnimation waveAnimation waveFrequency={5} waveAmplitude={3} gradient
                            gradientStops={gradientStops}
                            circleStyle={{
                              fill: fillColor,
                            }}
                            waveStyle={{
                              fill: fillColor,
                            }}
                            textStyle={{
                              fill: color("#989fa4").toString(),
                            }}
                            waveTextStyle={{
                              fill: color("#fff").toString(),
                            }}
                            onClick={() => {
                              this.setState({ value: Math.random() * 100 });
                            }}/>
                        </h5>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="p-0">
                    <div className="grid-menu grid-menu-2col">
                      <Row className="g-0">
                        <Col sm="6">
                          <div className="p-1">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="focus">
                              <i className="lnr-sun text-primary opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              View Profile
                            </Button>
                          </div>
                        </Col>
                        <Col sm="6">
                          <div className="p-1">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="focus">
                              <i className="lnr-magic-wand text-primary opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              View Leads
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col sm="12" lg="12" xl="4">
              <Card className="mb-3 profile-responsive">
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-dark">
                    <div className="menu-header-image opacity-1"
                      style={{
                        backgroundImage: "url(" + bg3 + ")",
                      }}/>
                    <div className="menu-header-content btn-pane-right">
                      <div className="avatar-icon-wrapper me-3 avatar-icon-xl btn-hover-shine">
                        <div className="avatar-icon rounded">
                          <img src={avatar3} alt="Avatar 5" />
                        </div>
                      </div>
                      <div>
                        <h5 className="menu-header-title">Ruben Tillman</h5>
                        <h6 className="menu-header-subtitle">
                          Etiam sit amet orci eget
                        </h6>
                      </div>
                      <div className="menu-header-btn-pane">
                        <Button color="success">View Profile</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <ListGroup flush>
                  <ListGroupItem>
                    <div className="widget-content pt-4 pb-4 pe-1 ps-1">
                      <div className="text-center">
                        <h5 className="mb-0">
                          <span className="pe-1">
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
                          <div className="p-1">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="dark">
                              <i className="lnr-lighter text-dark opacity-7 btn-icon-wrapper mb-2">
                                {" "}
                              </i>
                              Automation
                            </Button>
                          </div>
                        </Col>
                        <Col sm="6">
                          <div className="p-1">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="danger">
                              <i className="lnr-construction text-danger opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Reports
                            </Button>
                          </div>
                        </Col>
                        <Col sm="6">
                          <div className="p-1">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="success">
                              <i className="lnr-bus text-success opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Activity
                            </Button>
                          </div>
                        </Col>
                        <Col sm="6">
                          <div className="p-1">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="focus">
                              <i className="lnr-gift text-focus opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Settings
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
