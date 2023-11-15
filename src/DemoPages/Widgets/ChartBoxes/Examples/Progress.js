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
} from "recharts";

import { Progress } from "react-sweet-progress";

import {
  faAngleUp,
  faAngleDown,
  faArrowLeft,
  faArrowRight,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

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

class ProgressExample extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={62} width="100%" />
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-subheading">Total Views</div>
                      <div className="widget-numbers">45.8k</div>
                      <div className="widget-description text-success">
                        <FontAwesomeIcon icon={faAngleUp} />
                        <span className="ps-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start">
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
                                }}/>
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
                                  <Button size="sm" className="btn-icon btn-icon-only"
                                    color="warning">
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
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={100} width="100%"
                        theme={{
                          success: {
                            trailColor: "#ccf3e6",
                            color: "#3ac47d",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-subheading">Profiles</div>
                      <div className="widget-numbers">17.2k</div>
                      <div className="widget-description text-warning">
                        <span className="pe-1">175.5%</span>
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={49} width="100%" strokeWidth="10"
                        theme={{
                          active: {
                            symbol: "49 %",
                            trailColor: "#f9d4dc",
                            color: "#e32752",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-subheading">Reports Submitted</div>
                      <div className="widget-numbers">5.82k</div>
                      <div className="widget-description text-primary">
                        <span className="pe-1">54.1%</span>
                        <FontAwesomeIcon icon={faAngleUp} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={78} width="100%" strokeWidth="4"
                        theme={{
                          active: {
                            symbol: "78",
                            trailColor: "#cceff5",
                            color: "#0bb3cd",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-subheading">Bugs Fixed</div>
                      <div className="widget-numbers">63.2k</div>
                      <div className="widget-description text-info">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <span className="ps-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={22} width="100%" strokeWidth="10"
                        theme={{
                          active: {
                            symbol: "22",
                            trailColor: "#c2ffd2",
                            color: "#37a438",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-subheading">Reports Submitted</div>
                      <div className="widget-numbers">5.82k</div>
                      <div className="widget-description text-primary">
                        <span className="pe-1">54.1%</span>
                        <FontAwesomeIcon icon={faAngleUp} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={21} width="100%" strokeWidth="4"
                        theme={{
                          active: {
                            symbol: "21",
                            trailColor: "#f5e6bd",
                            color: "#ddae34",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-subheading">Bugs Fixed</div>
                      <div className="widget-numbers">63.2k</div>
                      <div className="widget-description text-info">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <span className="ps-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-left">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={62} width="100%" />
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">45.8k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-success">
                          <FontAwesomeIcon icon={faAngleUp} />
                          <span className="ps-1">175.5%</span>
                        </div>
                        <div className="widget-subheading ps-1">Total Views</div>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper">
                      <ResponsiveContainer height="100%">
                        <LineChart data={data} margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                          <Line type="monotone" dataKey="pv" stroke="#3ac47d" strokeWidth={3}/>
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-left">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={78} width="100%"
                        theme={{
                          active: {
                            trailColor: "#ccf3e6",
                            color: "#3ac47d",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">17.2k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-warning">
                          <span className="pe-1">175.5%</span>
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <div className="widget-subheading ps-1">Profiles</div>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper">
                      <ResponsiveContainer height="100%">
                        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                          <Area type="monotoneX" dataKey="uv" stroke="#fd7e14" fill="#ffb87d"/>
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-left">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={9} width="100%" strokeWidth="8"
                        theme={{
                          active: {
                            symbol: "9%",
                            trailColor: "#f9d4dc",
                            color: "#e32752",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">5.82k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-danger">
                          <FontAwesomeIcon icon={faAngleDown} />
                          <span className="ps-1">54.1%</span>
                        </div>
                        <div className="widget-subheading ps-1">
                          Reports Submitted
                        </div>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper">
                      <ResponsiveContainer height="100%">
                        <BarChart data={data}>
                          <Bar dataKey="uv" fill="#81a4ff" stroke="#3f6ad8" strokeWidth={2}/>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-left">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={78} width="100%" strokeWidth="4"
                        theme={{
                          active: {
                            symbol: "78",
                            trailColor: "#cceff5",
                            color: "#0bb3cd",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">63.2k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-info">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1">175.5%</span>
                        </div>
                        <div className="widget-subheading ps-1">Bugs Fixed</div>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper">
                      <ResponsiveContainer height="100%">
                        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                          <Area type="stepAfter" dataKey="uv" stroke="#3aabff" fill="#78C3FB"/>
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-left">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={55} width="100%" strokeWidth="8"
                        theme={{
                          active: {
                            symbol: "55%",
                            trailColor: "#f9d4dc",
                            color: "#e32752",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">1.82k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-danger">
                          <FontAwesomeIcon icon={faAngleDown} />
                          <span className="ps-1">54.1%</span>
                        </div>
                        <div className="widget-subheading ps-1">
                          Reports Submitted
                        </div>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper opacity-6">
                      <ResponsiveContainer width="100%">
                        <LineChart data={data2} margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                          <Line type="monotone" dataKey="pv" stroke="#d6b5ff" strokeWidth={2}/>
                          <Line type="monotone" dataKey="uv" stroke="#a75fff" strokeWidth={2}/>
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-left">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={44} width="100%" strokeWidth="4"
                        theme={{
                          active: {
                            symbol: "44",
                            trailColor: "#ded7f5",
                            color: "#ca37cd",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">63.2k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-info">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1">175.5%</span>
                        </div>
                        <div className="widget-subheading ps-1">Bugs Fixed</div>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper">
                      <ResponsiveContainer width="100%">
                        <ComposedChart data={data2}>
                          <CartesianGrid stroke="#f5f5f5" />
                          <Area type="monotone" dataKey="amt" fill="#f7ffd0" stroke="#85a200"/>
                          <Bar dataKey="pv" barSize={10} fill="#565e6b" />
                          <Line type="monotone" dataKey="uv" stroke="#272631" />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-hover">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={62} width="100%" />
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">45.8k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-success">
                          <FontAwesomeIcon icon={faAngleUp} />
                          <span className="ps-1">175.5%</span>
                        </div>
                        <div className="widget-subheading ps-1">Total Views</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-hover">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={78} width="100%"
                        theme={{
                          active: {
                            trailColor: "#ccf3e6",
                            color: "#3ac47d",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">17.2k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-warning">
                          <span className="pe-1">175.5%</span>
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <div className="widget-subheading ps-1">Profiles</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-hover">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={9} width="100%" strokeWidth="8"
                        theme={{
                          active: {
                            symbol: "9%",
                            trailColor: "#f9d4dc",
                            color: "#e32752",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">5.82k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-danger">
                          <FontAwesomeIcon icon={faAngleDown} />
                          <span className="ps-1">54.1%</span>
                        </div>
                        <div className="widget-subheading ps-1">
                          Reports Submitted
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-hover">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={78} width="100%" strokeWidth="4"
                        theme={{
                          active: {
                            symbol: "78",
                            trailColor: "#cceff5",
                            color: "#0bb3cd",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">63.2k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-info">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1">175.5%</span>
                        </div>
                        <div className="widget-subheading ps-1">Bugs Fixed</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-hover">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={14} width="100%"
                        strokeWidth="8"
                        theme={{
                          active: {
                            symbol: "14",
                            trailColor: "#cfbff9",
                            color: "#a763e3",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">5.82k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-danger">
                          <FontAwesomeIcon icon={faAngleDown} />
                          <span className="ps-1">54.1%</span>
                        </div>
                        <div className="widget-subheading ps-1">
                          Reports Submitted
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart text-start widget-chart-hover">
                    <div className="progress-circle-wrapper">
                      <Progress type="circle" percent={78} width="100%" strokeWidth="4"
                        theme={{
                          active: {
                            symbol: "78",
                            trailColor: "#c3f5d4",
                            color: "#3ca33c",
                          },
                        }}/>
                    </div>
                    <div className="widget-chart-content">
                      <div className="widget-numbers">63.2k</div>
                      <div className="widget-chart-flex">
                        <div className="widget-description text-info">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1">175.5%</span>
                        </div>
                        <div className="widget-subheading ps-1">Bugs Fixed</div>
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

export default ProgressExample;
