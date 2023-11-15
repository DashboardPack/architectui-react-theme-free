import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classnames from "classnames";
import DataTable from 'react-data-table-component';

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  faAngleUp,
  faDotCircle,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import { makeData } from "../../../Tables/DataTables/Examples/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";

const data55 = [
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

const data22 = [
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

const data3 = [
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
];

const data2 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
];

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
const sampleData2 = randomData(15);
const sampleData3 = randomData(8);
const sampleData4 = randomData(12);

export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);

    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
      data: makeData(),
    };
  }

  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        name: "First Name",
        selector: row => row.firstName,
        sortable: true,
      },
      {
        name: "Last Name",
        id: "lastName",
        selector: row => row.lastName,
        sortable: true,
      },

      {
        name: "Age",
        selector: row => row.age,
        sortable: true,
      },
      {
        name: "Status",
        selector: row => row.status,
        sortable: true,
      },

      {
        name: "Visits",
        selector: row => row.visits,
        sortable: true,
        },
    ];
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation"
            appear={true} timeout={0} enter={false} exit={false}>
            <div>
              <Row>
                <Col md="6" xl="4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">Total Orders</div>
                          <div className="widget-subheading">
                            Last year expenses
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-success">1896</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-sm" color="primary" value="71"/>
                        <div className="progress-sub-label">
                          <div className="sub-label-left">YoY Growth</div>
                          <div className="sub-label-right">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" xl="4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">Products Sold</div>
                          <div className="widget-subheading">Revenue streams</div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-warning">$3M</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-sm progress-bar-animated-alt" color="danger" value="85"/>
                        <div className="progress-sub-label">
                          <div className="sub-label-left">Sales</div>
                          <div className="sub-label-right">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" xl="4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">Followers</div>
                          <div className="widget-subheading">
                            People Interested
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-danger">45,9%</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-sm progress-bar-animated-alt" color="success" value="46"/>
                        <div className="progress-sub-label">
                          <div className="sub-label-left">Twitter Progress</div>
                          <div className="sub-label-right">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" xl="4" className="d-xl-none d-lg-block">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">Income</div>
                          <div className="widget-subheading">Expected totals</div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-focus">$147</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-sm progress-bar-animated-alt" color="info" value="54"/>
                        <div className="progress-sub-label">
                          <div className="sub-label-left">Expenses</div>
                          <div className="sub-label-right">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="12" xl="6">
                  <Row>
                    <Col md="6" lg="3" xl="6">
                      <div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-success border-success">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content pt-3 ps-3 pb-1">
                            <div className="widget-chart-flex">
                              <div className="widget-numbers">
                                <div className="widget-chart-flex">
                                  <div className="fsize-4">
                                    <small className="opacity-5">$</small>
                                    <CountUp start={0} end={874} separator="" decimals={0} decimal="" prefix="" duration="10"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h6 className="widget-subheading mb-0 opacity-5">
                              sales last month
                            </h6>
                          </div>
                          <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
                            <Col md="9">
                              <Sparklines data={sampleData}>
                                <SparklinesCurve
                                  style={{
                                    strokeWidth: 3,
                                    stroke: "#3ac47d",
                                    fill: "none",
                                  }}/>
                              </Sparklines>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                    <Col md="6" lg="3" xl="6">
                      <div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-primary border-primary">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content pt-3 ps-3 pb-1">
                            <div className="widget-chart-flex">
                              <div className="widget-numbers">
                                <div className="widget-chart-flex">
                                  <div className="fsize-4">
                                    <small className="opacity-5">$</small>
                                    <CountUp start={0} end={1283} separator="" decimals={0} decimal="" prefix="" duration="10"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h6 className="widget-subheading mb-0 opacity-5">
                              sales Income
                            </h6>
                          </div>
                          <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
                            <Col md="9">
                              <Sparklines data={sampleData2}>
                                <SparklinesCurve
                                  style={{
                                    strokeWidth: 3,
                                    stroke: "#545cd8",
                                    fill: "none",
                                  }}/>
                              </Sparklines>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                    <Col md="6" lg="3" xl="6">
                      <div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-warning border-warning">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content pt-3 ps-3 pb-1">
                            <div className="widget-chart-flex">
                              <div className="widget-numbers">
                                <div className="widget-chart-flex">
                                  <div className="fsize-4">
                                    <small className="opacity-5">$</small>
                                    <CountUp start={0} end={1286} separator="" decimals={0} decimal="" prefix="" duration="10"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h6 className="widget-subheading mb-0 opacity-5">
                              last month sales
                            </h6>
                          </div>
                          <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
                            <Col md="9">
                              <Sparklines data={sampleData3}>
                                <SparklinesCurve
                                  style={{
                                    strokeWidth: 3,
                                    stroke: "#f7b924",
                                    fill: "none",
                                  }}/>
                              </Sparklines>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                    <Col md="6" lg="3" xl="6">
                      <div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-danger border-danger">
                        <div className="widget-chat-wrapper-outer">
                          <div className="widget-chart-content pt-3 ps-3 pb-1">
                            <div className="widget-chart-flex">
                              <div className="widget-numbers">
                                <div className="widget-chart-flex">
                                  <div className="fsize-4">
                                    <small className="opacity-5">$</small>
                                    <CountUp start={0} end={564} separator="" decimals={0} decimal="" prefix="" duration="10"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h6 className="widget-subheading mb-0 opacity-5">
                              total revenue
                            </h6>
                          </div>
                          <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
                            <Col md="9">
                              <Sparklines data={sampleData4}>
                                <SparklinesCurve
                                  style={{
                                    strokeWidth: 3,
                                    stroke: "#d92550",
                                    fill: "none",
                                  }}/>
                              </Sparklines>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg="12" xl="6">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title">
                        <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> {" "} </i>
                        Bandwidth Reports
                      </div>
                      <div className="btn-actions-pane-right">
                        <Button outline
                          className={
                            "border-0 btn-pill btn-wide btn-transition " +
                            classnames({ active: this.state.activeTab1 === "11" })
                          }
                          color="alternate"
                          onClick={() => {
                            this.toggle1("11");
                          }}>
                          Tab 1
                        </Button>
                        <Button outline
                          className={
                            "ms-1 btn-pill btn-wide border-0 btn-transition " +
                            classnames({ active: this.state.activeTab1 === "22" })
                          }
                          color="alternate"
                          onClick={() => {
                            this.toggle1("22");
                          }}>
                          Tab 2
                        </Button>
                      </div>
                    </CardHeader>
                    <TabContent activeTab={this.state.activeTab1}>
                      <TabPane tabId="11">
                        <CardBody className="pt-2 pb-0">
                          <Row>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        63%
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">
                                      Server Errors
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        $ 1893
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">
                                      Total Income
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left pe-2 fsize-1">
                                      <div className="widget-numbers fsize-3 text-alternate">
                                        61%
                                      </div>
                                    </div>
                                    <div className="widget-content-right w-100">
                                      <Progress className="progress-bar-xs" color="alternate" value="71"/>
                                    </div>
                                  </div>
                                  <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">
                                      Server Target
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left pe-2 fsize-1">
                                      <div className="widget-numbers fsize-3 text-danger">
                                        71%
                                      </div>
                                    </div>
                                    <div className="widget-content-right w-100">
                                      <Progress className="progress-bar-xs" color="danger" value="71"/>
                                    </div>
                                  </div>
                                  <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">
                                      Income Target
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                        <div className="widget-chart p-0">
                          <ResponsiveContainer height={223}>
                            <AreaChart data={data22} margin={{ top: -25, right: 0, left: 0, bottom: 0 }}>
                              <defs>
                                <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="10%" stopColor="#f7b924" stopOpacity={0.7}/>
                                  <stop offset="90%" stopColor="#f7b924" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <Tooltip />
                              <Area type="monotoneX" dataKey="uv" stroke="#f7b924" strokeWidth={2}
                                fillOpacity={1} fill="url(#colorPv2)"/>
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </TabPane>
                      <TabPane tabId="22">
                        <CardBody className="pt-2">
                          <Row>
                            <Col lg="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        63%
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">
                                      Server Errors
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col lg="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        $ 1893
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">
                                      Total Income
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <div className="divider" />
                          <Row>
                            <Col lg="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        83%
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">
                                        Servers Load
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress className="progress-bar-sm progress-bar-animated-alt" color="danger" value="83"/>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col lg="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        48%
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">
                                        Reported Bugs
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress className="progress-bar-sm progress-bar-animated-alt" color="alternate" value="48"/>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                        <div className="widget-chart p-0">
                          <ResponsiveContainer height={192}>
                            <AreaChart data={data2} margin={{ top: -25, right: 0, left: 0, bottom: 0 }}>
                              <defs>
                                <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="10%" stopColor="var(--alternate)" stopOpacity={0.7}/>
                                  <stop offset="90%" stopColor="var(--alternate)" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <Tooltip />
                              <Area type="monotoneX" dataKey="uv" stroke="var(--alternate)"
                                strokeWidth={2} fillOpacity={1} fill="url(#colorPv2)"/>
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </TabPane>
                    </TabContent>
                  </Card>
                </Col>
              </Row>
              <Card className="main-card mb-3">
                <CardHeader className="card-header-tab">
                  <div className="card-header-title font-size-lg text-capitalize fw-normal">
                    <i className="header-icon lnr-dice me-3 text-muted opacity-6"> {" "} </i>
                    Easy Dynamic Tables
                  </div>
                  <div className="btn-actions-pane-right actions-icon-btn">
                    <UncontrolledButtonDropdown>
                      <DropdownToggle className="btn-icon btn-icon-only" color="link">
                        <i className="pe-7s-menu btn-icon-wrapper" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-shadow dropdown-menu-hover-link">
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
                        <div className="p-3 text-end">
                          <Button className="me-2 btn-shadow btn-sm" color="link">
                            View Details
                          </Button>
                          <Button className="me-2 btn-shadow btn-sm" color="primary">
                            Action
                          </Button>
                        </div>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                </CardHeader>
                <CardBody>
                <DataTable data={data}
                    columns={columns}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="400px"
                  />
                </CardBody>
              </Card>
              <Row>
                <Col lg="5">
                  <Row>
                    <Col md="6" lg="12">
                      <Card className="card-hover-shadow-2x mb-3 card-btm-border card-shadow-primary border-primary">
                        <CardHeader className="rm-border pb-0 mt-sm-3 responsive-center">
                          <div>
                            <h5 className="menu-header-title text-capitalize fsize-2 text-muted text-start opacity-6">
                              Received Messages
                            </h5>
                          </div>
                        </CardHeader>
                        <div className="widget-chart widget-chart2 text-start p-0">
                          <div className="widget-chat-wrapper-outer">
                            <div className="widget-chart-content pt-3 pe-3 ps-5">
                              <div className="widget-chart-flex">
                                <div className="widget-numbers">
                                  <div className="widget-chart-flex">
                                    <div className="text-primary">
                                      <CountUp start={0} end={348} separator="" decimals={0}
                                        decimal="," prefix="" duration="10"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="widget-chart-wrapper widget-chart-wrapper-lg he-auto opacity-3 m-0 p-1">
                              <ResponsiveContainer height={114}>
                                <AreaChart data={data3}
                                  margin={{
                                    top: -20,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                  }}>
                                  <Tooltip />
                                  <Area type="monotoneX" dataKey="uv" stroke="#545cd8"
                                    strokeOpacity=".8" strokeWidth={3} fill="#545cd8" fillOpacity=".08"/>
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col md="6" lg="12">
                      <Card className="card-hover-shadow-2x mb-3 card-btm-border card-shadow-danger border-danger">
                        <CardHeader className="rm-border pb-0 mt-sm-3 responsive-center">
                          <div>
                            <h5 className="menu-header-title text-capitalize fsize-2 text-muted text-start opacity-6">
                              Sent Messages
                            </h5>
                          </div>
                        </CardHeader>
                        <div className="widget-chart widget-chart2 text-start p-0">
                          <div className="widget-chat-wrapper-outer">
                            <div className="widget-chart-content pt-3 pe-3 ps-5">
                              <div className="widget-chart-flex">
                                <div className="widget-numbers">
                                  <div className="widget-chart-flex">
                                    <div className="text-danger">
                                      <CountUp start={0} end={425} separator="" decimals={0} decimal="," prefix="" duration="10"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="widget-chart-wrapper widget-chart-wrapper-lg he-auto opacity-3 m-0 p-1">
                              <ResponsiveContainer height={114}>
                                <AreaChart data={data2}
                                  margin={{
                                    top: -20,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                  }}>
                                  <Tooltip />
                                  <Area type="monotoneX" dataKey="uv" stroke="#d92550" strokeOpacity=".8"
                                    strokeWidth={3} fill="#d92550" fillOpacity=".08"/>
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col lg="7">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab card-header-tab-animation">
                      <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> {" "} </i>
                        Sales Report
                      </div>
                      <Nav>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab2 === "222",
                            })}
                            onClick={() => {
                              this.toggle2("222");
                            }}>
                            Last
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab2 === "111",
                            })}
                            onClick={() => {
                              this.toggle2("111");
                            }}>
                            Current
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardHeader>
                    <CardBody>
                      <TabContent activeTab={this.state.activeTab2}>
                        <TabPane tabId="111">
                          <div className="card mb-3 widget-chart widget-chart2 text-start p-0">
                            <div className="widget-chat-wrapper-outer">
                              <div className="widget-chart-content pt-3 pe-3 ps-3">
                                <div className="widget-chart-flex">
                                  <div className="widget-numbers">
                                    <div className="widget-chart-flex">
                                      <div>
                                        <small className="opacity-5">$</small>
                                        <CountUp start={0} end={368} separator="" decimals={0} decimal="," prefix="" duration="10"/>
                                      </div>
                                      <div className="widget-title ms-2 opacity-5 font-size-lg text-muted">
                                        Total Leads
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                <ResponsiveContainer height={162}>
                                  <AreaChart data={data55}
                                    margin={{
                                      top: -10,
                                      right: 0,
                                      left: 0,
                                      bottom: 0,
                                    }}>
                                    <Tooltip />
                                    <Area type="monotoneX" dataKey="uv" strokeWidth={0} fill="#30b1ff"/>
                                  </AreaChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-muted text-uppercase font-size-md opacity-5 fw-normal">
                            Top Authors
                          </h6>
                          <div className="scroll-area-sm">
                            <PerfectScrollbar>
                              <ListGroup className="rm-list-borders rm-list-borders-scroll" flush>
                                <ListGroupItem>
                                  <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                      <div className="widget-content-left me-3">
                                        <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Ella-Rose Henry
                                        </div>
                                        <div className="widget-subheading">
                                          Web Developer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={129} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                          <small className="text-danger ps-2">
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
                                        <img width={42} className="rounded-circle" src={avatar2} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Ruben Tillman
                                        </div>
                                        <div className="widget-subheading">
                                          UI Designer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={54} separator="" decimals={0} decimal="." prefix="" duration="15"/>
                                          <small className="text-success ps-2">
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
                                        <img width={42} className="rounded-circle" src={avatar3} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Vinnie Wagstaff
                                        </div>
                                        <div className="widget-subheading">
                                          Java Programmer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={431} separator="" decimals={0} decimal="." prefix="" duration="20"/>
                                          <small className="text-warning ps-2">
                                            <FontAwesomeIcon icon={faDotCircle} />
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
                                        <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Ella-Rose Henry
                                        </div>
                                        <div className="widget-subheading">
                                          Web Developer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={129} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                          <small className="text-danger ps-2">
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
                                        <img width={42} className="rounded-circle" src={avatar2} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Ruben Tillman
                                        </div>
                                        <div className="widget-subheading">
                                          UI Designer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={54} separator="" decimals={0} decimal="." prefix="" duration="15"/>
                                          <small className="text-success ps-2">
                                            <FontAwesomeIcon icon={faAngleUp} />
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </ListGroupItem>
                              </ListGroup>
                            </PerfectScrollbar>
                          </div>
                        </TabPane>
                        <TabPane tabId="222">
                          <div className="card mb-3 widget-chart widget-chart2 text-start p-0">
                            <div className="widget-chat-wrapper-outer">
                              <div className="widget-chart-content pt-3 pe-3 ps-3">
                                <div className="widget-chart-flex">
                                  <div className="widget-numbers">
                                    <div className="widget-chart-flex">
                                      <div>
                                        <small className="opacity-5">$</small>
                                        <CountUp start={0} end={851} separator="" decimals={0} decimal="," prefix="" duration="10"/>
                                      </div>
                                      <div className="widget-title ms-2 opacity-5 font-size-lg text-muted">
                                        Sales Total
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                <ResponsiveContainer height={162}>
                                  <LineChart data={data55}
                                    margin={{
                                      top: 5,
                                      right: 10,
                                      left: 10,
                                      bottom: 0,
                                    }}>
                                    <Line type="monotone" dataKey="pv" stroke="#3ac47d" strokeWidth={3}/>
                                  </LineChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-muted text-uppercase font-size-md opacity-5 fw-normal">
                            Last Month Highlights
                          </h6>
                          <div className="scroll-area-sm">
                            <PerfectScrollbar>
                              <ListGroup className="rm-list-borders rm-list-borders-scroll" flush>
                                <ListGroupItem>
                                  <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                      <div className="widget-content-left me-3">
                                        <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Ella-Rose Henry
                                        </div>
                                        <div className="widget-subheading">
                                          Web Developer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={129} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                          <small className="text-danger ps-2">
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
                                        <img width={42} className="rounded-circle" src={avatar2} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Ruben Tillman
                                        </div>
                                        <div className="widget-subheading">
                                          UI Designer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={54} separator="" decimals={0} decimal="." prefix="" duration="15"/>
                                          <small className="text-success ps-2">
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
                                        <img width={42} className="rounded-circle" src={avatar3} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Vinnie Wagstaff
                                        </div>
                                        <div className="widget-subheading">
                                          Java Programmer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={431} separator="" decimals={0} decimal="." prefix="" duration="20"/>
                                          <small className="text-warning ps-2">
                                            <FontAwesomeIcon icon={faDotCircle} />
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
                                        <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Ella-Rose Henry
                                        </div>
                                        <div className="widget-subheading">
                                          Web Developer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={129} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                          <small className="text-danger ps-2">
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
                                        <img width={42} className="rounded-circle" src={avatar2} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Ruben Tillman
                                        </div>
                                        <div className="widget-subheading">
                                          UI Designer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={54} separator="" decimals={0} decimal="." prefix="" duration="15"/>
                                          <small className="text-success ps-2">
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
                                        <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Ella-Rose Henry
                                        </div>
                                        <div className="widget-subheading">
                                          Web Developer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={129} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                          <small className="text-danger ps-2">
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
                                        <img width={42} className="rounded-circle" src={avatar2} alt=""/>
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">
                                          Ruben Tillman
                                        </div>
                                        <div className="widget-subheading">
                                          UI Designer
                                        </div>
                                      </div>
                                      <div className="widget-content-right">
                                        <div className="font-size-xlg text-muted">
                                          <small className="opacity-5 pe-1">
                                            $
                                          </small>
                                          <CountUp start={0} end={54} separator="" decimals={0} decimal="." prefix="" duration="15"/>
                                          <small className="text-success ps-2">
                                            <FontAwesomeIcon icon={faAngleUp} />
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </ListGroupItem>
                              </ListGroup>
                            </PerfectScrollbar>
                          </div>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div className="text-center mb-3">
                <h5 className="menu-header-title text-capitalize mb-3 fsize-3">
                  Cards
                </h5>
                <ButtonGroup size="sm" className="mb-3">
                  <Button color="dark"
                    className={
                      "btn-shadow " +
                      classnames({ active: this.state.activeTab7 === "1" })
                    }>
                    Hour
                  </Button>
                  <Button color="dark"
                    className={
                      "btn-hover-shine " +
                      classnames({ active: this.state.activeTab7 === "2" })
                    }>
                    Day
                  </Button>
                  <Button color="dark"
                    className={
                      "btn-hover-shine " +
                      classnames({ active: this.state.activeTa7 === "3" })
                    }>
                    Week
                  </Button>
                  <Button color="dark"
                    className={
                      "btn-hover-shine " +
                      classnames({ active: this.state.activeTab7 === "4" })
                    }>
                    Month
                  </Button>
                </ButtonGroup>
              </div>
              <Row>
                <Col sm="12" md="6" xl="4">
                  <Card className="card-shadow-primary card-border text-white mb-3" color="primary">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-primary">
                        <div className="menu-header-content">
                          <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                            <div className="avatar-icon">
                              <img src={avatar1} alt="Avatar 5" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">Jessica Walberg</h5>
                            <h6 className="menu-header-subtitle">
                              Lead UX Developer
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardFooter className="text-center d-block">
                      <Button className="btn-shadow-dark btn-wider" color="dark">
                        Send Message
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col sm="12" md="6" xl="4">
                  <Card className="card-shadow-primary card-border text-white mb-3" color="focus">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-focus">
                        <div className="menu-header-content">
                          <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                            <div className="avatar-icon">
                              <img src={avatar2} alt="Avatar 5" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">Vinnie Wagstaff</h5>
                            <h6 className="menu-header-subtitle">
                              Backend Engineer
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardFooter className="text-center d-block">
                      <Button className="btn-shadow-dark btn-wider" color="warning">
                        Send Message
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col sm="12" md="12" xl="4">
                  <Card className="card-shadow-primary card-border text-white mb-3" color="dark">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-dark">
                        <div className="menu-header-content">
                          <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                            <div className="avatar-icon">
                              <img src={avatar3} alt="Avatar 5" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">Ruben Tillman</h5>
                            <h6 className="menu-header-subtitle">
                              Frontend UI Designer
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardFooter className="text-center d-block">
                      <Button className="btn-shadow-dark btn-wider" color="success">
                        Send Message
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
