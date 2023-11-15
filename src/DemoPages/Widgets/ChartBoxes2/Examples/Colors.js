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
} from "recharts";

import {
  faAngleUp,
  faArrowLeft,
  faArrowRight,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import bg1 from "../../../../assets/utils/images/dropdown-header/abstract1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                  <div className="card mb-3 widget-chart widget-chart2 bg-primary text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Sales</div>
                        <div className="widget-subtitle opacity-7">
                          Monthly Goals
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          <small>$</small>
                          1283
                        </div>
                        <div className="widget-description ms-auto opacity-7">
                          <FontAwesomeIcon icon={faAngleUp} />
                          <span className="ps-1">175.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-info text-start">
                    <div className="widget-chart-actions">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle color="link" className="text-white">
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
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Profiles</div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">368</div>
                        <div className="widget-description ms-auto opcity-5">
                          <span className="pe-1">66.5%</span>
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-focus text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Clients</div>
                        <div className="widget-subtitle text-warning">
                          Returning
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          87
                          <small>%</small>
                        </div>
                        <div className="widget-description ms-auto text-warning">
                          <span className="pe-1">45</span>
                          <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-vicious-stance text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Reports</div>
                        <div className="widget-subtitle text-success">
                          Bugs Fixed
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-warning">357</div>
                        <div className="widget-description ms-auto text-success">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1">27.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-slick-carbon text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Payments</div>
                        <div className="widget-subtitle text-danger">Failed</div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-danger">475</div>
                        <div className="widget-description ms-auto text-danger">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1">27.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-night-sky text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Requests</div>
                        <div className="widget-subtitle text-white">
                          Submitted
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-white">345</div>
                        <div className="widget-description ms-auto text-success">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="pe-1">27.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-danger text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Sales</div>
                          <div className="widget-subtitle text-white">
                            Monthly Goals
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <small>$</small>
                            1283
                          </div>
                          <div className="widget-description ms-auto text-white">
                            <FontAwesomeIcon icon={faAngleUp} />
                            <span className="ps-1">175.5%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <Line type="monotone" dataKey="pv" stroke="rgba(255,255,255,.3)" strokeWidth={3}/>
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-deep-blue text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Profiles</div>
                          <div className="widget-subtitle text-white">
                            Active Users
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">368</div>
                          <div className="widget-description ms-auto text-white">
                            <span className="pe-1">66.5%</span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <Area type="monotoneX" dataKey="uv" stroke="rgba(255,255,255,.5)" fill="rgba(255,255,255,.25)"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-sunny-morning text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
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
                            <Bar dataKey="uv" fill="rgba(255,255,255,.5)" stroke="rgba(255,255,255,.7)" strokeWidth={2}/>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-mean-fruit text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Reports</div>
                          <div className="widget-subtitle text-white">
                            Bugs Fixed
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers text-white">1621</div>
                          <div className="widget-description ms-auto text-white">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span className="ps-1">27.2%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <Area type="stepAfter" dataKey="uv" stroke="rgba(255,255,255,.6)" fill="rgba(255,255,255,.3)"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-royal text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Reports</div>
                          <div className="widget-subtitle text-white">
                            Bugs Fixed
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers text-white">1621</div>
                          <div className="widget-description ms-auto text-white">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span className="ps-1">27.2%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <Area type="stepAfter" dataKey="uv" stroke="rgba(255,255,255,.6)" fill="rgba(255,255,255,.3)"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" lg="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-midnight-bloom text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Reports</div>
                          <div className="widget-subtitle text-white">
                            Bugs Fixed
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers text-white">1621</div>
                          <div className="widget-description ms-auto text-white">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span className="ps-1">27.2%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer height="100%">
                          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <Line type="monotone" dataKey="pv" stroke="rgba(255,255,255,.3)" strokeWidth={3}/>
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-warm-flame text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Sales</div>
                          <div className="widget-subtitle text-white">
                            Monthly Goals
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <small>$</small>
                            1283
                          </div>
                          <div className="widget-description ms-auto text-white">
                            <FontAwesomeIcon icon={faAngleUp} />
                            <span className="ps-1">175.5%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-sm progress-bar-animated-alt" color="success" value="65"/>
                        <div className="progress-sub-label text-white">
                          YoY Growth
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-tempting-azure text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-dark">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Profiles</div>
                          <div className="widget-subtitle text-dark">
                            Active Users
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">368</div>
                          <div className="widget-description ms-auto text-dark">
                            <span className="pe-1">66.5%</span>
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
                  <div className="card mb-3 widget-chart widget-chart2 bg-plum-plate text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Clients</div>
                          <div className="widget-subtitle text-white opacity-7">
                            Returning
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            87
                            <small>%</small>
                          </div>
                          <div className="widget-description ms-auto text-white">
                            <span className="pe-1">45</span>
                            <FontAwesomeIcon icon={faAngleUp} />
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-sm progress-bar-animated" color="warning" value="47"/>
                        <div className="progress-sub-label text-white">
                          Successful Payments
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-mixed-hopes text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
                        <div className="widget-chart-flex">
                          <div className="widget-title">Reports</div>
                          <div className="widget-subtitle text-white">
                            Bugs Fixed
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers text-warning">1621</div>
                          <div className="widget-description ms-auto text-white">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span className="ps-1">27.2%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-xs" color="primary" value="91"/>
                        <div className="progress-sub-label text-white">
                          Severe Reports
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-slick-carbon text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
                        <div className="widget-chart-flex">
                          <div className="widget-title opacity-5">Sales</div>
                          <div className="widget-subtitle opacity-5 text-white">
                            Monthly Goals
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <small>$</small>
                            1283
                          </div>
                          <div className="widget-description ms-auto text-white">
                            <FontAwesomeIcon icon={faAngleUp} />
                            <span className="ps-1">175.5%</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-xs progress-bar-animated-alt" color="warning" value="65"/>
                        <div className="progress-sub-label text-white">
                          YoY Growth
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-asteroid text-start">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content text-white">
                        <div className="widget-chart-flex">
                          <div className="widget-title opacity-5">Payments</div>
                          <div className="widget-subtitle opacity-5 text-white">
                            Totals
                          </div>
                        </div>
                        <div className="widget-chart-flex">
                          <div className="widget-numbers">
                            <small>$</small>
                            653
                          </div>
                          <div className="widget-description ms-auto text-white">
                            <FontAwesomeIcon icon={faAngleUp} />
                            <span className="ps-1">$4596</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-xs progress-bar-animated-alt" color="info" value="65"/>
                        <div className="progress-sub-label text-white">
                          YoY Growth
                        </div>
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
