import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Container,
} from "reactstrap";

import {
  AreaChart,
  Area,
  LineChart,
  Line,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  faAngleUp,
  faArrowLeft,
  faArrowRight,
  faEllipsisH,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import CountUp from "react-countup";

import bg1 from "../../../../assets/utils/images/dropdown-header/abstract1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

class BasicExample extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chart-content">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Sales</div>
                        <div className="widget-subtitle text-muted">
                          Monthly Goals
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          <CountUp start={0} end={1283} separator="" decimals={0} decimal=","
                            prefix="$" useEasing={false} suffix="" duration="15"/>
                        </div>
                        <div className="widget-description ms-auto text-success">
                          <FontAwesomeIcon icon={faAngleUp} />
                          <span className="ps-1">
                            <CountUp start={0} end={176} separator="," delay={2} decimals={0}
                              decimal="," useEasing={false} prefix="" suffix="%" duration="10"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chart-actions">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle color="link">
                          <FontAwesomeIcon icon={faEllipsisH} />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg dropdown-menu-right">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-primary">
                              <div className="menu-header-image"
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
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Profiles</div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-primary">
                          <CountUp start={0} end={368} separator="" decimals={0} decimal=","
                            prefix="" useEasing={true} suffix="k" duration="15"/>
                        </div>
                        <div className="widget-description ms-auto text-warning">
                          <span className="pe-2">66.5%</span>
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chart-content">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Clients</div>
                        <div className="widget-subtitle text-danger opacity-7">
                          Returning
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          <CountUp start={0} end={87} separator="," decimals={0} decimal=","
                            prefix="" useEasing={false} suffix="%" duration="20"/>
                        </div>
                        <div className="widget-description ms-auto text-danger">
                          <span className="pe-1">45</span>
                          <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chart-content">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Reports</div>
                        <div className="widget-subtitle text-muted">
                          Bugs Fixed
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-warning">
                          <CountUp start={5} end={1621} separator="," decimals={0} decimal=","
                            prefix="" useEasing={false} suffix="" duration="10"/>
                        </div>
                        <div className="widget-description ms-auto text-info">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1">27.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chart-content">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Support Requests</div>
                        <div className="widget-subtitle text-success opacity-7">
                          Solved
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          <CountUp start={0} end={183} separator="," decimals={0} decimal=","
                            prefix="" useEasing={false} suffix="" duration="15"/>
                        </div>
                        <div className="widget-description ms-auto text-success">
                          <span className="pe-1">32</span>
                          <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chart-content">
                      <div className="widget-chart-flex">
                        <div className="widget-title text-success">Reports</div>
                        <div className="widget-subtitle text-muted">
                          Bugs Fixed
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-success">
                          <CountUp start={5} end={1621} separator="," decimals={0} decimal=","
                            prefix="" useEasing={false} suffix="" duration="10"/>
                        </div>
                        <div className="widget-description ms-auto text-info">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1">17.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Sales</div>
                          <div className="widget-subtitle text-muted">
                            Monthly Goals
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <small>$</small>
                            1283
                          </div>
                          <div className="widget-description ms-auto text-success">
                            <FontAwesomeIcon icon={faAngleUp} />
                            <span className="ps-1">175.5%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <Line type="monotone" dataKey="pv" stroke="#3ac47d" strokeWidth={3}/>
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Profiles</div>
                          <div className="widget-subtitle text-muted">
                            Active Users
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">368</div>
                          <div className="widget-description ms-auto text-warning">
                            <span className="pe-1">66.5%</span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <Area type="monotoneX" dataKey="uv" stroke="#fd7e14" fill="#ffb87d"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Clients</div>
                          <div className="widget-subtitle text-danger opacity-7">
                            Returning
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            87
                            <small>%</small>
                          </div>
                          <div className="widget-description ms-auto text-danger">
                            <span className="pe-1">45</span>
                            <FontAwesomeIcon icon={faAngleUp} />
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <Bar dataKey="uv" fill="#81a4ff" stroke="#3f6ad8" strokeWidth={2}/>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Reports</div>
                          <div className="widget-subtitle text-muted">
                            Bugs Fixed
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers text-warning">1621</div>
                          <div className="widget-description ms-auto text-info">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span className="ps-1">27.2%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <Area type="stepAfter" dataKey="uv" stroke="#3aabff" fill="#78C3FB"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Clients</div>
                          <div className="widget-subtitle text-danger opacity-7">
                            Returning
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            87
                            <small>%</small>
                          </div>
                          <div className="widget-description ms-auto text-danger">
                            <span className="pe-1">45</span>
                            <FontAwesomeIcon icon={faAngleUp} />
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer width="100%">
                          <LineChart data={data2} margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                            <Line type="monotone" dataKey="pv" stroke="#d6b5ff" strokeWidth={2}/>
                            <Line type="monotone" dataKey="uv" stroke="#a75fff" strokeWidth={2}/>
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Payments</div>
                          <div className="widget-subtitle text-muted">
                            Successful
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers text-success">1621</div>
                          <div className="widget-description ms-auto text-info">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span className="ps-1">27.2%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer width="100%">
                          <ComposedChart data={data2}>
                            <CartesianGrid stroke="#f5f5f5" />
                            <Area type="monotone" dataKey="amt" fill="#f7ffd0" stroke="#85a200"/>
                            <Bar dataKey="pv" barSize={5} fill="#32a40a" />
                            <Line type="monotone" dataKey="uv" stroke="#272631" />
                          </ComposedChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 p-0 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content widget-chart-content-lg">
                        <div className="widget-chart-flex">
                          <div className="widget-title opacity-5 text-muted text-uppercase">
                            New accounts since 2018
                          </div>
                        </div>
                        <div className="widget-numbers">
                          <div className="widget-chart-flex">
                            <div>
                              <span className="opacity-10 text-success pe-2">
                                <FontAwesomeIcon icon={faAngleUp} />
                              </span>
                              <CountUp start={0} end={78} separator="" decimals={0}
                                decimal="" prefix="" duration="15"/>
                              <small className="opacity-5 ps-1">%</small>
                            </div>
                            <div className="widget-title ms-2 font-size-lg fw-normal text-muted">
                              <span className="text-success">+14</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                        <ResponsiveContainer height="100%">
                          <AreaChart data={data} margin={{ top: -15, right: 0, left: 0, bottom: 0 }}>
                            <Area type="monotoneX" dataKey="uv" stroke="#e570b9" strokeWidth="4" fill="#f5d7ea"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 p-0 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content widget-chart-content-lg">
                        <div className="widget-chart-flex">
                          <div className="widget-title opacity-5 text-muted text-uppercase">
                            Helpdesk Tickets
                          </div>
                        </div>
                        <div className="widget-numbers">
                          <div className="widget-chart-flex">
                            <div>
                              <span className="text-warning">
                                <CountUp start={0} end={34} separator="" decimals={0} decimal="" prefix="" duration="15"/>
                              </span>
                            </div>
                            <div className="widget-title ms-2 font-size-lg fw-normal text-dark">
                              <span className="opacity-5 text-muted pe-1">
                                5%
                              </span>
                              increase
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                        <ResponsiveContainer height="100%">
                          <AreaChart data={data} margin={{ top: -15, right: 0, left: 0, bottom: 0 }}>
                            <Area type="monotoneX" dataKey="uv" stroke="#9ce570" strokeWidth="4" fill="#ddf5d7"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 p-0 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content widget-chart-content-lg">
                        <div className="widget-chart-flex">
                          <div className="widget-title opacity-5 text-muted text-uppercase">
                            Last Year Total Sales
                          </div>
                        </div>
                        <div className="widget-numbers">
                          <div className="widget-chart-flex">
                            <div>
                              <small className="opacity-5 pe-1">$</small>
                              <span className="text-success">
                                <CountUp start={0} end={629} separator="" decimals={0} decimal="" prefix="" duration="15"/>
                              </span>
                              <span className="opacity-5 ps-3">
                                <FontAwesomeIcon icon={faAngleDown} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                        <ResponsiveContainer height="100%">
                          <AreaChart data={data} margin={{ top: -15, right: 0, left: 0, bottom: 0 }}>
                            <Area type="monotoneX" dataKey="uv" stroke="#1e4bf2" strokeWidth="4" fill="#ccddf9"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <div className="widget-chart-flex">
                              <div>
                                <small className="opacity-5">$</small>
                                <CountUp start={0} end={1283} separator="" decimals={0} decimal="" prefix="" duration="10"/>
                              </div>
                              <div className="widget-title ms-2 font-size-lg text-muted">
                                <span className="text-success pe-2">+14%</span>
                                <span className="opacity-5">Income</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <LineChart  data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }} padding={{ bottom: 10 }}>
                            <Tooltip />
                            <Line type="monotone" dataKey="pv" stroke="#1eb1f2" strokeWidth={3}/>
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <div className="widget-chart-flex">
                              <div>
                                <small className="opacity-5">$</small>
                                <CountUp start={0} end={368} separator="" decimals={0} decimal="," prefix="" duration="10"/>
                              </div>
                              <div className="widget-title ms-2 font-size-lg text-muted">
                                <span className="text-danger pe-2">
                                  <FontAwesomeIcon icon={faAngleDown} />
                                  <span className="ps-2">66.5%</span>
                                </span>
                                <span className="opacity-5">Total Sales</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper opacity-10">
                        <ResponsiveContainer height="100%">
                          <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                            <Tooltip />
                            <Area type="monotoneX" dataKey="uv" strokeWidth={0} fill="#bdadd8"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <div className="widget-chart-flex">
                              <div>
                                87
                                <small className="opacity-5">%</small>
                              </div>
                              <div className="widget-title ms-2 font-size-lg text-muted">
                                <span className="text-success pe-2">
                                  <FontAwesomeIcon icon={faAngleUp} />
                                  <span className="ps-1">45</span>
                                </span>
                                <span className="opacity-5">New Clients</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper opacity-10">
                        <ResponsiveContainer height="100%">
                          <BarChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                            <Tooltip />
                            <Bar dataKey="uv" fill="#81a4ff" stroke="#3f6ad8" strokeWidth={0}/>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start widget-chart-hover card-btm-border border-primary">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <div className="widget-chart-flex">
                              <div>
                                <small className="opacity-5">$</small>
                                1283
                              </div>
                              <div className="widget-title ms-2 opacity-5 font-size-lg text-muted">
                                Total Sales
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }} padding={{ bottom: 10 }}>
                            <Line type="monotone" dataKey="pv" stroke="#bac601" strokeWidth={3}/>
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start widget-chart-hover card-btm-border border-success">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <div className="widget-chart-flex">
                              <div>
                                <small className="opacity-5">$</small>
                                <CountUp start={0} end={368} separator="" decimals={0} decimal="," prefix="" duration="10"/>
                              </div>
                              <div className="widget-title ms-2 font-size-lg text-muted">
                                <span className="text-danger pe-2">
                                  <FontAwesomeIcon icon={faAngleDown} />
                                  <span className="ps-2">66.5%</span>
                                </span>
                                <span className="opacity-5">Total Sales</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper opacity-10">
                        <ResponsiveContainer height="100%">
                          <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                            <Area type="monotoneX" dataKey="uv" strokeWidth={0} fill="#cf2929"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start widget-chart-hover card-btm-border border-danger">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <div className="widget-chart-flex">
                              <div>
                                87
                                <small className="opacity-5">%</small>
                              </div>
                              <div className="widget-title ms-2 font-size-lg text-muted">
                                <span className="text-success pe-2">
                                  <FontAwesomeIcon icon={faAngleUp} />
                                  <span className="ps-1">45</span>
                                </span>
                                <span className="opacity-5">New Clients</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper opacity-10">
                        <ResponsiveContainer height="100%">
                          <BarChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                            <Bar dataKey="uv" fill="#29caec" strokeWidth={0} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Sales</div>
                          <div className="widget-subtitle text-muted">
                            Monthly Goals
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <small>$</small>
                            1283
                          </div>
                          <div className="widget-description ms-auto text-success">
                            <FontAwesomeIcon icon={faAngleUp} />
                            <span className="ps-1">175.5%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-sm progress-bar-animated-alt" color="success" value="65"/>
                        <div className="progress-sub-label">YoY Growth</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Profiles</div>
                          <div className="widget-subtitle text-muted">
                            Active Users
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">368</div>
                          <div className="widget-description ms-auto text-warning">
                            <span className="pe-2">66.5%</span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-xs progress-bar-animated-alt" color="danger" value="85"/>
                        <div className="progress-sub-label">
                          Monthly Subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Clients</div>
                          <div className="widget-subtitle text-danger opacity-7">
                            Returning
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            87
                            <small>%</small>
                          </div>
                          <div className="widget-description ms-auto text-danger">
                            <span className="pe-1">45</span>
                            <FontAwesomeIcon icon={faAngleUp} />
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-sm progress-bar-animated" color="warning" value="47"/>
                        <div className="progress-sub-label">
                          Successful Payments
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Reports</div>
                          <div className="widget-subtitle text-muted">
                            Bugs Fixed
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers text-warning">1621</div>
                          <div className="widget-description ms-auto text-info">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span>27.2%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-xs" color="primary" value="91"/>
                        <div className="progress-sub-label">Severe Reports</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Payments</div>
                          <div className="widget-subtitle text-danger opacity-7">
                            Failed
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers text-success">
                            43
                            <small>%</small>
                          </div>
                          <div className="widget-description ms-auto text-danger">
                            <span className="pe-1">45</span>
                            <FontAwesomeIcon icon={faAngleUp} />
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar" animated color="success" value="47"/>
                        <div className="progress-sub-label">
                          Successful Payments
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content">
                        <div className="widget-chart-flex">
                          <div className="widget-title text-warning">Reports</div>
                          <div className="widget-subtitle text-muted">
                            Bugs Fixed
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers text-danger">1621</div>
                          <div className="widget-description ms-auto text-info">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span>27.2%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-lg" color="danger" value="55"/>
                        <div className="progress-sub-label">Severe Reports</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default BasicExample;
