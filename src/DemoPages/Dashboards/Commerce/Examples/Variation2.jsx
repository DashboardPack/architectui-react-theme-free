import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React, { Fragment, Component } from "react";
import LiquidFillGauge from "react-liquid-gauge";
import {
  Row,
  Col,
  Button,
  Nav,
  Container,
  NavItem,
  Card,
  CardBody,
  NavLink,
  Progress,
  Table,
  CardHeader,
  CardFooter,
  ButtonGroup,
  Popover,
  PopoverBody,
  ListGroupItem,
  ListGroup,
} from "reactstrap";

import { IoIosKeypad } from "react-icons/io";
import Slider from "react-slick";

import CountUp from "react-countup";

import IncomeReport2 from "./Components/IncomeReport2";

import classnames from "classnames";

import {
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  LineChart,
  Line,
  BarChart,
  Bar,
  Area,
} from "recharts";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../../assets/utils/images/avatars/4.jpg";
import avatar5 from "../../../../assets/utils/images/avatars/5.jpg";
import avatar6 from "../../../../assets/utils/images/avatars/8.jpg";
import avatar7 from "../../../../assets/utils/images/avatars/9.jpg";

import bg2 from "../../../../assets/utils/images/dropdown-header/abstract3.jpg";
import bg1 from "../../../../assets/utils/images/dropdown-header/abstract2.jpg";

import {
  faAngleUp,
  faAngleDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import PerfectScrollbar from "react-perfect-scrollbar";

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

const data55 = [
  { name: "Audi", uv: 4000, pv: 2400, amt: 2400 },
  { name: "BMW", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mercedes", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Renault", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Opel", uv: 1890, pv: 4800, amt: 2181 },
];

const data222 = [
  { name: "Jan", Sales: 4000, Downloads: 2400, amt: 2400 },
  { name: "Feb", Sales: 3000, Downloads: 1398, amt: 2210 },
  { name: "Mar", Sales: 2000, Downloads: 5800, amt: 2290 },
  { name: "Apr", Sales: 2780, Downloads: 3908, amt: 2000 },
  { name: "Jun", Sales: 1890, Downloads: 4800, amt: 2181 },
  { name: "Jul", Sales: 2390, Downloads: 3800, amt: 2500 },
  { name: "Aug", Sales: 3000, Downloads: 1398, amt: 2210 },
  { name: "Sep", Sales: 2000, Downloads: 5800, amt: 2290 },
  { name: "Oct", Sales: 2780, Downloads: 3908, amt: 2000 },
  { name: "Nov", Sales: 1890, Downloads: 4800, amt: 2181 },
  { name: "Dec", Sales: 4000, Downloads: 2400, amt: 2400 },
];

const data2 = [
  { name: "Page A", uv: 5400, pv: 5240, amt: 1240 },
  { name: "Page B", uv: 7300, pv: 4139, amt: 3221 },
  { name: "Page C", uv: 8200, pv: 7980, amt: 5229 },
  { name: "Page D", uv: 6278, pv: 4390, amt: 3200 },
  { name: "Page E", uv: 3189, pv: 7480, amt: 6218 },
  { name: "Page D", uv: 9478, pv: 6790, amt: 2200 },
  { name: "Page E", uv: 1289, pv: 1980, amt: 7218 },
  { name: "Page F", uv: 3139, pv: 2380, amt: 5150 },
  { name: "Page G", uv: 5349, pv: 3430, amt: 3210 },
];

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export default class CommerceDashboard2 extends Component {
  constructor(props) {
    super(props);

    this.togglePop1 = this.togglePop1.bind(this);
    this.togglePop2 = this.togglePop2.bind(this);
    this.togglePop3 = this.togglePop3.bind(this);
    this.togglePop4 = this.togglePop4.bind(this);

    this.state = {
      popoverOpen1: false,
      popoverOpen2: false,
      popoverOpen3: false,
      popoverOpen4: false,
      value: 45,
      value2: 72,
    };
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

  startColor = "#6495ed";
  endColor = "#dc143c";

  render() {
    const settings = {
      className: "",
      centerMode: false,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      dots: true,
    };

    const radius = 124;
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
            <Col md="12" lg="6" xl="7">
              <Card className="main-card mb-3">
                <IncomeReport2 />
              </Card>
            </Col>
            <Col md="12" lg="6" xl="5">
              <Card className="main-card mb-3">
                <CardBody>
                  <h6 className="text-muted text-uppercase font-size-md opacity-7 mb-3 fw-normal">
                    Highlights
                  </h6>
                  <Card className="border-light card-border scroll-area-sm">
                    <PerfectScrollbar>
                      <ListGroup flush>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img  width={38}  className="rounded-circle" src={avatar1} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Beck Collier
                                </div>
                                <div className="widget-subheading mt-1 opacity-10">
                                  <div className="badge rounded-pill bg-primary">
                                    $152
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="fsize-2 text-success">
                                  <small className="opacity-5 pe-1">$</small>
                                  <CountUp start={0} end={752} separator="" decimals={0}
                                    decimal="." prefix="" duration="10"/>
                                  <small className="text-success ps-2">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={38} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Angelo Hume
                                </div>
                                <div className="widget-subheading mt-1 opacity-10">
                                  <div className="badge rounded-pill bg-primary">
                                    $53
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="fsize-2 text-success">
                                  <small className="opacity-5 pe-1">$</small>
                                  <CountUp start={0} end={543} separator="" decimals={0}
                                    decimal="." prefix="" duration="10"/>
                                  <small className="text-danger ps-2">
                                    <FontAwesomeIcon icon={faAngleUp} />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={38} className="rounded-circle" src={avatar3} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Saim Melendez
                                </div>
                                <div className="widget-subheading mt-1 opacity-10">
                                  <div className="badge rounded-pill bg-primary">
                                    $239
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="fsize-2 text-success">
                                  <small className="opacity-5 pe-1">$</small>
                                  <CountUp start={0} end={876} separator="" decimals={0}
                                    decimal="." prefix="" duration="10"/>
                                  <small className="text-warning ps-2">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={38} className="rounded-circle" src={avatar4} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Primrose Navarro
                                </div>
                                <div className="widget-subheading mt-1 opacity-10">
                                  <div className="badge rounded-pill bg-primary">
                                    $21
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="fsize-2 text-success">
                                  <small className="opacity-5 pe-1">$</small>
                                  348
                                  <small className="text-muted ps-2">
                                    <FontAwesomeIcon icon={faAngleUp} />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={38} className="rounded-circle" src={avatar5} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Finnlay Barton
                                </div>
                                <div className="widget-subheading mt-1 opacity-10">
                                  <div className="badge rounded-pill bg-primary">
                                    $381
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="fsize-2 text-success">
                                  <small className="opacity-5 pe-1">$</small>
                                  692
                                  <small className="text-muted ps-2">
                                    <FontAwesomeIcon icon={faAngleUp} />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={38} className="rounded-circle" src={avatar6} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Johan Corbett
                                </div>
                                <div className="widget-subheading mt-1 opacity-10">
                                  <div className="badge rounded-pill bg-primary">
                                    $74
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="fsize-2 text-success">
                                  <small className="opacity-5 pe-1">$</small>
                                  395
                                  <small className="text-muted ps-2">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem className="border-bottom-0">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={38} className="rounded-circle" src={avatar7} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">Kaja Wolfe</div>
                                <div className="widget-subheading mt-1 opacity-10">
                                  <div className="badge rounded-pill bg-primary">
                                    $7
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="fsize-2 text-success">
                                  <small className="opacity-5 pe-1">$</small>
                                  619
                                  <small className="text-muted ps-2">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </PerfectScrollbar>
                  </Card>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardHeader className="rm-border">
                  <div>
                    <h6 className="menu-header-title text-capitalize text-primary">
                      Monthly Statistics
                    </h6>
                  </div>
                </CardHeader>
                <div className="ps-3 pe-3 pb-2 slick-slider-md slick-slider-hover">
                  <Slider {...settings}>
                    <div>
                      <div className="widget-chart widget-chart2 text-start p-0">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content">
                            <div className="widget-chart-flex">
                              <div className="widget-numbers">
                                <div className="widget-chart-flex">
                                  <div>
                                    <small className="opacity-5">$</small>
                                    <CountUp start={0} end={628} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                  </div>
                                  <div className="widget-title ms-2 opacity-5 font-size-lg text-muted">
                                    Total Expenses Today
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                            <ResponsiveContainer height="100%">
                              <BarChart data={data222}>
                                <Bar barGap="12" dataKey="Sales" stackId="a" fill="#545cd8"/>
                                <Bar barGap="12" dataKey="Downloads" fillOpacity=".2" stackId="a" fill="#545cd8"/>
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="widget-chart widget-chart2 text-start p-0">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content">
                            <div className="widget-chart-flex">
                              <div className="widget-numbers">
                                <div className="widget-chart-flex">
                                  <div>
                                    <small className="opacity-5 text-success">
                                      +
                                    </small>
                                    76
                                  </div>
                                  <div className="widget-title ms-md-2 opacity-5 font-size-lg text-muted">
                                    Revenue Increased this Quarter
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                            <ResponsiveContainer height="100%">
                              <LineChart data={data55}
                                margin={{
                                  top: 5,
                                  right: 10,
                                  left: 10,
                                  bottom: 0,
                                }}>
                                <Line type="monotone" dataKey="pv" stroke="#3ac47d" strokeWidth={3}/>
                                <Tooltip />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="widget-chart widget-chart2 text-start p-0">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content">
                            <div className="widget-chart-flex">
                              <div className="widget-numbers">
                                <div className="widget-chart-flex">
                                  <div>
                                    <small className="opacity-5">$</small>
                                    1545
                                  </div>
                                  <div className="widget-title ms-2 opacity-5 font-size-lg text-muted">
                                    Total Sales this Month
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                            <ResponsiveContainer height="100%">
                              <AreaChart data={data55}
                                margin={{
                                  top: -10,
                                  right: 0,
                                  left: 0,
                                  bottom: 0,
                                }}>
                                <Tooltip />
                                <Area type="monotoneX" dataKey="uv" strokeWidth={0} fill="#f7b924" fillOpacity=".4"/>
                              </AreaChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </Card>
            </Col>
          </Row>
          <Card className="main-card mb-3">
            <CardHeader>
              <div>
                <h5 className="menu-header-title text-capitalize text-primary">
                  Simple Table
                </h5>
              </div>
              <div className="btn-actions-pane-right">
                <ButtonGroup size="sm">
                  <Button caret="true" outline color="dark" className={"active"}>
                    Last Week
                  </Button>
                  <Button caret="true" outline color="dark">
                    All Month
                  </Button>
                </ButtonGroup>
              </div>
            </CardHeader>
            <Table responsive hover striped borderless className="align-middle mb-0">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Status</th>
                  <th>Name</th>
                  <th className="text-center">Progress</th>
                  <th className="text-center">Sales</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center text-muted">#345</td>
                  <td className="text-center">
                    <div className="badge rounded-pill ps-2 pe-2 bg-warning">
                      Pending
                    </div>
                  </td>
                  <td>
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left me-3">
                          <div className="widget-content-left">
                            <img width={32} className="rounded" src={avatar2} alt=""/>
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
                  <td className="text-center">
                    <Progress className="progress-bar-xs" color="success" value="76"/>
                  </td>
                  <td className="text-center">
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
                    <Button size="sm" className="btn-icon btn-icon-only" color="light"
                      id="PopoverCustomT-1" type="button">
                      <IoIosKeypad color="#484d52" />
                    </Button>
                    <Popover className="popover-custom rm-pointers" placement="auto" isOpen={this.state.popoverOpen1}
                      target="PopoverCustomT-1" toggle={this.togglePop1}>
                      <PopoverBody>
                        <div className="dropdown-menu-header">
                          <div className={classnames(
                              "dropdown-menu-header-inner bg-focus"
                            )}>
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
                  <td className="text-center">
                    <div className="badge rounded-pill ps-2 pe-2 bg-success">
                      Completed
                    </div>
                  </td>
                  <td>
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left me-3">
                          <div className="widget-content-left">
                            <img width={32} className="rounded" src={avatar1} alt=""/>
                          </div>
                        </div>
                        <div className="widget-content-left flex2">
                          <div className="widget-heading">Ruben Tillman</div>
                          <div className="widget-subheading opacity-7">
                            Etiam sit amet orci eget
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Progress className="progress-bar-xs" color="danger" value="23"/>
                  </td>
                  <td className="text-center">
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
                    <Button size="sm" className="btn-icon btn-icon-only" color="light" id="PopoverCustomT-2" type="button">
                      <IoIosKeypad color="#484d52" />
                    </Button>
                    <Popover className="popover-custom rm-pointers" placement="auto" isOpen={this.state.popoverOpen2}
                      target="PopoverCustomT-2" toggle={this.togglePop2}>
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
                          <NavItem className="nav-item-divider" />
                          <NavItem className="nav-item-btn d-block text-center">
                            <Button size="sm" className="btn-wide" color="link">
                              View All
                            </Button>
                          </NavItem>
                        </Nav>
                      </PopoverBody>
                    </Popover>
                  </td>
                </tr>
                <tr>
                  <td className="text-center text-muted">#321</td>
                  <td className="text-center">
                    <div className="badge rounded-pill ps-2 pe-2 bg-danger">
                      In Progress
                    </div>
                  </td>
                  <td>
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left me-3">
                          <div className="widget-content-left">
                            <img width={32} className="rounded" src={avatar3} alt=""/>
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
                  <td className="text-center">
                    <Progress className="progress-bar-xs" color="warning" value="43"/>
                  </td>
                  <td className="text-center">
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
                    <Button size="sm" className="btn-icon btn-icon-only" color="light" id="PopoverCustomT-3" type="button">
                      <IoIosKeypad color="#484d52" />
                    </Button>
                    <Popover className="popover-custom rm-pointers" placement="auto" isOpen={this.state.popoverOpen3}
                      target="PopoverCustomT-3" toggle={this.togglePop3}>
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
                  <td className="text-center">
                    <div className="badge rounded-pill ps-2 pe-2 bg-info">
                      On Hold
                    </div>
                  </td>
                  <td>
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left me-3">
                          <div className="widget-content-left">
                            <img width={32} className="rounded" src={avatar4} alt=""/>
                          </div>
                        </div>
                        <div className="widget-content-left flex2">
                          <div className="widget-heading">Vinnie Wagstaff</div>
                          <div className="widget-subheading opacity-7">
                            UI Designer
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Progress className="progress-bar-xs" color="primary" value="67"/>
                  </td>
                  <td className="text-center">
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
                    <Button size="sm" className="btn-icon btn-icon-only" color="light"
                      id="PopoverCustomT-4" type="button">
                      <IoIosKeypad color="#484d52" />
                    </Button>
                    <Popover className="popover-custom rm-pointers" placement="auto" isOpen={this.state.popoverOpen4}
                      target="PopoverCustomT-4" toggle={this.togglePop4}>
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
            <CardFooter className="d-block clearfix">
              <div className="float-start">
                <Button size="sm" className="me-2 btn-icon btn-icon-only" outline color="danger">
                  Delete
                </Button>
              </div>
              <div className="float-end">
                <Button size="sm" className="btn-wide" color="link">
                  View All
                </Button>
                <Button size="sm" className="btn-wide btn-shadow" color="primary">
                  Add New Entry
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Row>
            <Col md="12" lg="6">
              <div className="card mb-3 widget-chart bg-arielle-smile card-border">
                <div className="widget-chart-content text-white">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg bg-white opacity-7" />
                    <i className="lnr-graduation-hat text-info" />
                  </div>
                  <div className="widget-numbers">63.2k</div>
                  <div className="widget-subheading">Bugs Fixed</div>
                  <div className="widget-description text-white">
                    <FontAwesomeIcon icon={faArrowRight} />
                    <span className="ps-1">175.5%</span>
                  </div>
                </div>
                <div className="widget-chart-wrapper chart-wrapper-relative">
                  <ResponsiveContainer width="100%" height={174}>
                    <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area type="stepAfter" dataKey="uv" stroke="rgba(255,255,255,.7)" fill="rgba(255,255,255,.5)"/>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
            <Col md="12" lg="6">
              <Card className="card-shadow-primary card-border mb-3">
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-primary">
                    <div className="menu-header-image opacity-4"
                      style={{
                        backgroundImage: "url(" + bg1 + ")",
                      }}/>
                    <div className="menu-header-content">
                      <h5 className="menu-header-title text-capitalize mb-0 fsize-3">
                        Top Sellers
                      </h5>
                      <h6 className="menu-header-subtitle mb-3">
                        Yet another Example of Card Boxes
                      </h6>
                      <ButtonGroup className="mb-0">
                        <Button color="warning"
                          className={
                            "btn-pill ps-3 pe-3 " +
                            classnames({ active: this.state.activeTab === "1" })
                          }>
                          John
                        </Button>
                        <Button color="warning"
                          className={
                            "ps-3 pe-3 " +
                            classnames({ active: this.state.activeTab === "2" })
                          }>
                          Mary
                        </Button>
                        <Button color="warning"
                          className={
                            "btn-pill ps-3 pe-3 " +
                            classnames({ active: this.state.activeTab === "3" })
                          }>
                          Katie
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
                <ListGroup flush>
                  <ListGroupItem className="p-0">
                    <Row>
                      <Col md="6" className="center-elem">
                        <div className="p-2 center-elem w-100">
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
                              fill: color("#a7a7a7").toString(),
                            }}
                            waveTextStyle={{
                              fill: color("#fff").toString(),
                            }}
                            onClick={() => {
                              this.setState({ value: Math.random() * 100 });
                            }}/>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="widget-chart">
                          <div className="widget-chart-content">
                            <div className="widget-numbers mt-0 text-danger">
                              <small>$</small>
                              158
                              <small className="opacity-5 ps-2">
                                <FontAwesomeIcon icon={faAngleUp} />
                              </small>
                            </div>
                            <div className="widget-subheading">Sales Today</div>
                          </div>
                        </div>
                        <div className="divider mt-0 mb-0 me-2" />
                        <div className="widget-chart">
                          <div className="widget-chart-content">
                            <div className="widget-numbers mt-0 text-primary">
                              <small>$</small>
                              346
                              <small className="opacity-5 ps-2">
                                <FontAwesomeIcon icon={faAngleDown} />
                              </small>
                            </div>
                            <div className="widget-subheading">
                              Sales this Month
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="p-0">
                    <div className="grid-menu grid-menu-2col">
                      <Row className="g-0">
                        <Col sm="12">
                          <div className="p-1">
                            <Button
                              onClick={() => {
                                this.setState({ value: Math.random() * 100 });
                              }}
                              className="btn-transition-text btn-transition btn-transition-alt pt-2 pb-2" outline color="warning">
                              <span className="text-uppercase fw-bold">
                                Refresh Liquid Gauge
                              </span>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col md="12" lg="6">
              <div className="card mb-3 widget-chart bg-strong-bliss card-border">
                <div className="widget-chart-content text-white">
                  <div className="icon-wrapper rounded">
                    <div className="icon-wrapper-bg bg-white opacity-4" />
                    <i className="lnr-graduation-hat text-white" />
                  </div>
                  <div className="widget-numbers">1.5M</div>
                  <div className="widget-subheading">Bugs Fixed</div>
                  <div className="widget-description text-white">
                    Down by
                    <span className="text-white ps-1 pe-1 opacity-8">
                      <FontAwesomeIcon icon={faAngleDown} />
                      <span className="ps-1">54.1%</span>
                    </span>
                    from 30 days ago
                  </div>
                </div>
                <div className="widget-chart-wrapper chart-wrapper-relative">
                  <ResponsiveContainer width="100%" height={146}>
                    <LineChart data={data2} margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                      <Line type="monotone" dataKey="pv" stroke="#ffffff" strokeWidth={2}/>
                      <Line type="monotone" dataKey="uv" stroke="rgba(255,255,255,.7)" strokeWidth={2}/>
                      <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
            <Col md="12" lg="6">
              <Card className="card-shadow-primary card-border mb-3 profile-responsive-sm">
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-vicious-stance">
                    <div className="menu-header-image opacity-1"
                      style={{
                        backgroundImage: "url(" + bg2 + ")",
                      }}/>
                    <div className="menu-header-content btn-pane-right">
                      <div className="avatar-icon-wrapper me-3 avatar-icon-xl btn-hover-shine">
                        <div className="avatar-icon rounded-circle">
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
                        <Col sm="6" className="d-block">
                          <div className="p-1">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="dark">
                              <i className="lnr-lighter text-dark opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Automation
                            </Button>
                          </div>
                        </Col>
                        <Col sm="6" className="d-block">
                          <div className="p-1">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="danger">
                              <i className="lnr-construction text-danger opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Reports
                            </Button>
                          </div>
                        </Col>
                        <Col sm="6" className="d-md-none d-lg-block">
                          <div className="p-1">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="success">
                              <i className="lnr-bus text-success opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Activity
                            </Button>
                          </div>
                        </Col>
                        <Col sm="6" className="d-md-none d-lg-block">
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
