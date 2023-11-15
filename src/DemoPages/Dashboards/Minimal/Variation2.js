import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitleAlt3 from "../../../Layout/AppMain/PageTitleAlt3";

import Chart from "react-apexcharts";

import IncomeReport from "../Commerce/Examples/Components/IncomeReport";
import IncomeReport2 from "../Commerce/Examples/Components/IncomeReport2";

import bg1 from "../../../assets/utils/images/dropdown-header/abstract1.jpg";

import Column from "./Examples/Column";
import Bar2 from "./Examples/Bar";

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../assets/utils/images/avatars/4.jpg";

import classnames from "classnames";

import {
  Row,
  Col,
  Button,
  CardHeader,
  Table,
  ButtonGroup,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Popover,
  PopoverBody,
  Progress,
  Card,
  CardBody,
  CardFooter,
} from "reactstrap";

import { ResponsiveContainer, BarChart, Bar } from "recharts";

import CountUp from "react-countup";

import {
  faAngleUp,
  faAngleDown,
  faCommentDots,
  faBullhorn,
  faBusinessTime,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default class MinimalDashboard2 extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.togglePop1 = this.togglePop1.bind(this);

    this.state = {
      popoverOpen1: false,
      activeTab: "2",

      optionsMixedChart: {
        chart: {
          height: 350,
          type: "line",
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: [
          "01/01/2003",
          "02/01/2003",
          "03/01/2003",
          "04/01/2003",
          "05/01/2003",
          "06/01/2003",
          "07/01/2003",
          "08/01/2003",
          "09/01/2003",
          "10/01/2003",
          "11/01/2003",
        ],
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          title: {
            text: "Points",
          },
          min: 0,
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            },
          },
        },
      },
      seriesMixedChart: [
        {
          name: "TEAM A",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "TEAM B",
          type: "bar",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: "TEAM C",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
      ],
    };
  }

  togglePop1() {
    this.setState({
      popoverOpen1: !this.state.popoverOpen1,
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitleAlt3 heading="Container Dashboard"
                subheading="This is an example dashboard created using build-in elements and components."
                icon="lnr-apartment icon-gradient bg-mean-fruit"/>
              <Card className="mb-3">
                <CardHeader className="tabs-lg-alternate">
                  <Nav justified>
                    <NavItem>
                      <NavLink href="#"
                        className={classnames({
                          active: this.state.activeTab === "1",
                        })}
                        onClick={() => {
                          this.toggle("1");
                        }}>
                        <div className="widget-number">
                          <CountUp start={0} end={15065} separator="," decimals={0}
                            decimal="" delay={2} prefix="$" duration="10"/>
                        </div>
                        <div className="tab-subheading">
                          <span className="pe-2 opacity-6">
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          Totals
                        </div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#"
                        className={classnames({
                          active: this.state.activeTab === "2",
                        })}
                        onClick={() => {
                          this.toggle("2");
                        }}>
                        <div className="widget-number">
                          <span className="pe-2 text-success">
                            <FontAwesomeIcon icon={faAngleUp} />
                          </span>
                          <CountUp start={0} end={4531} separator="" decimals={0} decimal=""
                            delay={2} prefix="" duration="10"/>
                        </div>
                        <div className="tab-subheading">Products</div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#"
                        className={classnames({
                          active: this.state.activeTab === "3",
                        })}
                        onClick={() => {
                          this.toggle("3");
                        }}>
                        <div className="widget-number text-danger">
                          <CountUp start={0} end={6784} separator=","
                            decimals={1} decimal="." delay={2} prefix="$" duration="10"/>
                        </div>
                        <div className="tab-subheading">
                          <span className="pe-2 opacity-6">
                            <FontAwesomeIcon icon={faBullhorn} />
                          </span>
                          Income
                        </div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <CardBody>
                      <IncomeReport />
                    </CardBody>
                  </TabPane>
                  <TabPane tabId="2">
                    <Chart options={this.state.optionsMixedChart} series={this.state.seriesMixedChart}
                      type="line" width="100%" height="330px"/>
                  </TabPane>
                  <TabPane tabId="3">
                    <IncomeReport2 />
                  </TabPane>
                </TabContent>
              </Card>
              <Row>
                <Col sm="12" md="7">
                  <Row>
                    <Col sm="12" md="6">
                      <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-start">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content">
                            <h6 className="widget-subheading">Income</h6>
                            <div className="widget-chart-flex">
                              <div className="widget-numbers mb-0 w-100">
                                <div className="widget-chart-flex">
                                  <div className="fsize-4">
                                    <small className="opacity-5">$</small>
                                    5,456
                                  </div>
                                  <div className="ms-auto">
                                    <div className="widget-title ms-auto font-size-lg fw-normal text-muted">
                                      <span className="text-success ps-2">
                                        +14%
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col sm="12" md="6">
                      <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-start">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content">
                            <h6 className="widget-subheading">Expenses</h6>
                            <div className="widget-chart-flex">
                              <div className="widget-numbers mb-0 w-100">
                                <div className="widget-chart-flex">
                                  <div className="fsize-4 text-danger">
                                    <small className="opacity-5 text-muted">
                                      $
                                    </small>
                                    4,764
                                  </div>
                                  <div className="ms-auto">
                                    <div className="widget-title ms-auto font-size-lg fw-normal text-muted">
                                      <span className="text-danger ps-2">
                                        <span className="pe-1">
                                          <FontAwesomeIcon icon={faAngleUp} />
                                        </span>
                                        8%
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col sm="12" md="6">
                      <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-start">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content">
                            <h6 className="widget-subheading">Spendings</h6>
                            <div className="widget-chart-flex">
                              <div className="widget-numbers mb-0 w-100">
                                <div className="widget-chart-flex">
                                  <div className="fsize-4">
                                    <span className="text-success pe-2">
                                      <FontAwesomeIcon icon={faAngleDown} />
                                    </span>
                                    <small className="opacity-5">$</small>
                                    1.5M
                                  </div>
                                  <div className="ms-auto">
                                    <div className="widget-title ms-auto font-size-lg fw-normal text-muted">
                                      <span className="text-success ps-2">
                                        <span className="pe-1">
                                          <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                        15%
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col sm="12" md="6">
                      <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-start">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content">
                            <h6 className="widget-subheading">Totals</h6>
                            <div className="widget-chart-flex">
                              <div className="widget-numbers mb-0 w-100">
                                <div className="widget-chart-flex">
                                  <div className="fsize-4">
                                    <small className="opacity-5">$</small>
                                    31,564
                                  </div>
                                  <div className="ms-auto">
                                    <div className="widget-title ms-auto font-size-lg fw-normal text-muted">
                                      <span className="text-warning ps-2">
                                        +76%
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" md="5">
                  <Card className="mb-3">
                    <CardBody>
                      <div className="widget-chart widget-chart2 text-start p-0">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content">
                            <div className="widget-chart-flex">
                              <div className="widget-numbers mt-0">
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
                            <ResponsiveContainer width="100%"  height={177} aspect={3.0 / 1.0}>
                              <BarChart data={data222}>
                                <Bar barGap="12" dataKey="Sales" stackId="a" fill="#545cd8"/>
                                <Bar barGap="12"  dataKey="Downloads" fillOpacity=".2" stackId="a" fill="#545cd8"/>
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <CardHeader className="mbg-3 h-auto ps-0 pe-0 bg-transparent no-border">
                <div className="card-header-title fsize-2 text-capitalize fw-normal">
                  Target Section
                </div>
                <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                  <Button size="sm" color="link">
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <Row>
                <Col md="6" lg="3">
                  <Card className="card-shadow-danger mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-content p-0 w-100">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left pe-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-danger">
                              71%
                            </div>
                          </div>
                          <div className="widget-content-right w-100">
                            <Progress className="progress-bar-xs" color="danger" value="71"/>
                          </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                          <div className="text-muted opacity-6">Income Target</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="6" lg="3">
                  <Card className="card-shadow-success mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-content p-0 w-100">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left pe-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-success">
                              54%
                            </div>
                          </div>
                          <div className="widget-content-right w-100">
                            <Progress className="progress-bar-xs" color="success" value="54"/>
                          </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                          <div className="text-muted opacity-6">
                            Expenses Target
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="6" lg="3">
                  <Card className="card-shadow-warning mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-content p-0 w-100">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left pe-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-warning">
                              32%
                            </div>
                          </div>
                          <div className="widget-content-right w-100">
                            <Progress className="progress-bar-xs" color="warning" value="32"/>
                          </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                          <div className="text-muted opacity-6">
                            Spendings Target
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="6" lg="3">
                  <Card className="card-shadow-info mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-content p-0 w-100">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left pe-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-info">
                              89%
                            </div>
                          </div>
                          <div className="widget-content-right w-100">
                            <Progress className="progress-bar-xs" color="info" value="89"/>
                          </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                          <div className="text-muted opacity-6">Totals Target</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Card className="main-card mb-3">
                <CardHeader>
                  <div className="card-header-title font-size-lg text-capitalize fw-normal">
                    Company Agents Status
                  </div>
                  <div className="btn-actions-pane-right">
                    <Button size="sm" outline className="btn-icon btn-wide btn-outline-2x" id={"PopoverCustomT-1"}
                      onClick={this.togglePop1} color="focus">
                      Actions Menu
                      <span className="ps-2 align-middle opacity-7">
                        <FontAwesomeIcon icon={faAngleDown} />
                      </span>
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
                              <h5 className="menu-header-title">Settings</h5>
                              <h6 className="menu-header-subtitle">
                                Manage all of your options
                              </h6>
                            </div>
                          </div>
                        </div>
                        <Nav vertical>
                          <NavItem className="nav-item-header">Activity</NavItem>
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
                  </div>
                </CardHeader>
                <Table responsive borderless hover className="align-middle text-truncate mb-0">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th className="text-center">Avatar</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Company</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Due Date</th>
                      <th className="text-center">Target Achievement</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center text-muted" style={{ width: "80px" }}>
                        #54
                      </td>
                      <td className="text-center" style={{ width: "80px" }}>
                        <img width={40} className="rounded-circle" src={avatar1} alt=""/>
                      </td>
                      <td className="text-center">
                        <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                          Juan C. Cargill
                        </a>
                      </td>
                      <td className="text-center">
                        <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                          Micro Electronics
                        </a>
                      </td>
                      <td className="text-center">
                        <div className="badge rounded-pill bg-danger">
                          Canceled
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="pe-2 opacity-6">
                          <FontAwesomeIcon icon={faBusinessTime} />
                        </span>
                        12 Dec
                      </td>
                      <td className="text-center" style={{ width: "200px" }}>
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left pe-2">
                                <div className="widget-numbers fsize-1 text-danger">
                                  71%
                                </div>
                              </div>
                              <div className="widget-content-right w-100">
                                <Progress
                                  className="progress-bar-xs"
                                  color="danger"
                                  value="71"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <ButtonGroup size="sm">
                          <Button className="btn-shadow" color="primary">
                            Hire
                          </Button>
                          <Button className="btn-shadow" color="primary">
                            Fire
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted" style={{ width: "80px" }}>
                        #55
                      </td>
                      <td className="text-center" style={{ width: "80px" }}>
                        <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                      </td>
                      <td className="text-center">
                        <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                          Johnathan Phelan
                        </a>
                      </td>
                      <td className="text-center">
                        <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                          Hatchworks
                        </a>
                      </td>
                      <td className="text-center">
                        <div className="badge rounded-pill bg-info">On Hold</div>
                      </td>
                      <td className="text-center">
                        <span className="pe-2 opacity-6">
                          <FontAwesomeIcon icon={faBusinessTime} />
                        </span>
                        15 Dec
                      </td>
                      <td className="text-center" style={{ width: "200px" }}>
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left pe-2">
                                <div className="widget-numbers fsize-1 text-warning">
                                  54%
                                </div>
                              </div>
                              <div className="widget-content-right w-100">
                                <Progress className="progress-bar-xs" color="warning" value="54"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <ButtonGroup size="sm">
                          <Button className="btn-shadow" color="primary">
                            Hire
                          </Button>
                          <Button className="btn-shadow" color="primary">
                            Fire
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted" style={{ width: "80px" }}>
                        #56
                      </td>
                      <td className="text-center" style={{ width: "80px" }}>
                        <img width={40} className="rounded-circle" src={avatar3} alt=""/>
                      </td>
                      <td className="text-center">
                        <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                          Darrell Lowe
                        </a>
                      </td>
                      <td className="text-center">
                        <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                          Riddle Electronics
                        </a>
                      </td>
                      <td className="text-center">
                        <div className="badge rounded-pill bg-warning">
                          In Progress
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="pe-2 opacity-6">
                          <FontAwesomeIcon icon={faBusinessTime} />
                        </span>
                        6 Dec
                      </td>
                      <td className="text-center" style={{ width: "200px" }}>
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left pe-2">
                                <div className="widget-numbers fsize-1 text-success">
                                  97%
                                </div>
                              </div>
                              <div className="widget-content-right w-100">
                                <Progress className="progress-bar-xs" color="success" value="97"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <ButtonGroup size="sm">
                          <Button className="btn-shadow" color="primary">
                            Hire
                          </Button>
                          <Button className="btn-shadow" color="primary">
                            Fire
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted" style={{ width: "80px" }}>
                        #56
                      </td>
                      <td className="text-center" style={{ width: "80px" }}>
                        <img width={40} className="rounded-circle" src={avatar4} alt=""/>
                      </td>
                      <td className="text-center">
                        <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                          George T. Cottrell
                        </a>
                      </td>
                      <td className="text-center">
                        <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                          Pixelcloud
                        </a>
                      </td>
                      <td className="text-center">
                        <div className="badge rounded-pill bg-success">
                          Completed
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="pe-2 opacity-6">
                          <FontAwesomeIcon icon={faBusinessTime} />
                        </span>
                        19 Dec
                      </td>
                      <td className="text-center" style={{ width: "200px" }}>
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left pe-2">
                                <div className="widget-numbers fsize-1 text-info">
                                  88%
                                </div>
                              </div>
                              <div className="widget-content-right w-100">
                                <Progress className="progress-bar-xs" color="info" value="88"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <ButtonGroup size="sm">
                          <Button className="btn-shadow" color="primary">
                            Hire
                          </Button>
                          <Button className="btn-shadow" color="primary">
                            Fire
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="d-block p-4 text-center">
                  <Button color="dark" className="btn-pill btn-shadow btn-wide fsize-1" size="lg">
                    <span className="me-2 opacity-7">
                      <FontAwesomeIcon spin fixedWidth={false} icon={faCog} />
                    </span>
                    <span className="me-1">View Complete Report</span>
                  </Button>
                </CardFooter>
              </Card>
              <Row>
                <Col sm="12" lg="6">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title font-size-lg text-capitalize fw-normal">
                        Daily Sales
                      </div>

                      <div className="btn-actions-pane-right text-capitalize">
                        <Button size="sm" outline className="btn-wide btn-outline-2x" color="focus">
                          View All
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <Column />
                    </CardBody>
                    <CardFooter className="p-0 d-block">
                      <div className="grid-menu grid-menu-2col">
                        <Row className="g-0">
                          <Col sm="6" className="p-2">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="dark">
                              <i className="lnr-apartment text-dark opacity-7 btn-icon-wrapper mb-2">
                                {" "}
                              </i>
                              Overview
                            </Button>
                          </Col>
                          <Col sm="6" className="p-2">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="dark">
                              <i className="lnr-database text-dark opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Support
                            </Button>
                          </Col>
                          <Col sm="6" className="p-2">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="dark">
                              <i className="lnr-printer text-dark opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Activities
                            </Button>
                          </Col>
                          <Col sm="6" className="p-2">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="dark">
                              <i className="lnr-store text-dark opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Marketing
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col sm="12" lg="6">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title font-size-lg text-capitalize fw-normal">
                        Total Expenses
                      </div>
                      <div className="btn-actions-pane-right text-capitalize">
                        <Button size="sm" outline className="btn-wide btn-outline-2x" color="primary">
                          View All
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <Bar2 />
                    </CardBody>
                    <CardFooter className="p-0 d-block">
                      <div className="grid-menu grid-menu-2col">
                        <Row className="g-0">
                          <Col sm="6" className="p-2">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="success">
                              <i className="lnr-lighter text-success opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Accounts
                            </Button>
                          </Col>
                          <Col sm="6" className="p-2">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="warning">
                              <i className="lnr-construction text-warning opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Contacts
                            </Button>
                          </Col>
                          <Col sm="6" className="p-2">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="info">
                              <i className="lnr-bus text-info opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Products
                            </Button>
                          </Col>
                          <Col sm="6" className="p-2">
                            <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                              outline color="alternate">
                              <i className="lnr-gift text-alternate opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                              Services
                            </Button>
                          </Col>
                        </Row>
                      </div>
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
