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
  Card,
  NavLink,
  Container,
} from "reactstrap";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

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

class GridsExample extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col lg="5">
                  <Card className="main-card mb-3">
                    <div className="grid-menu grid-menu-2col">
                      <Row className="g-0">
                        <Col sm="6">
                          <div className="widget-chart">
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
                          <div className="widget-chart">
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
                          <div className="widget-chart">
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
                                          <h5 className="menu-header-title">
                                            Settings
                                          </h5>
                                          <h6 className="menu-header-subtitle">
                                            Manage all of your options
                                          </h6>
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
                            <div className="icon-wrapper rounded-circle">
                              <div className="icon-wrapper-bg bg-success" />
                              <i className="lnr-screen text-success" />
                            </div>
                            <div className="widget-numbers">17.2k</div>
                            <div className="widget-subheading">Profiles</div>
                            <div className="widget-description text-warning">
                              <span className="pe-1">175.5%</span>
                              <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                          </div>
                        </Col>
                        <Col sm="6">
                          <div className="widget-chart">
                            <div className="icon-wrapper rounded-circle">
                              <div className="icon-wrapper-bg bg-danger" />
                              <i className="lnr-laptop-phone text-danger" />
                            </div>
                            <div className="widget-numbers">5.82k</div>
                            <div className="widget-subheading">
                              Reports Submitted
                            </div>
                            <div className="widget-description text-primary">
                              <span className="ps-1">54.1%</span>
                              <FontAwesomeIcon icon={faAngleUp} />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
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
                              <span className="ps-1">54.1%</span>
                              <FontAwesomeIcon icon={faAngleUp} />
                            </div>
                          </div>
                        </Col>
                        <Col sm="6">
                          <div className="bg-premium-dark widget-chart-hover widget-chart card-border br-br">
                            <div className="widget-chart-content text-white">
                              <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-success opacity-8" />
                                <i className="lnr-screen" />
                              </div>
                              <div className="widget-numbers">17.2k</div>
                              <div className="widget-subheading">Profiles</div>
                              <div className="widget-description text-warning">
                                <span className="pe-1">175.5%</span>
                                <FontAwesomeIcon icon={faArrowLeft} />
                              </div>
                            </div>
                            <div className="widget-chart-wrapper opacity-4">
                              <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
                                <AreaChart data={data}
                                  margin={{
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                  }}>
                                  <Area type="monotoneX" dataKey="uv" stroke="#fd7e14" fill="#ffb87d"/>
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
                <Col lg="7">
                  <Card className="main-card mb-3">
                    <div className="grid-menu grid-menu-3col">
                      <Row className="g-0">
                        <Col xl="4" sm="6">
                          <div className="widget-chart">
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
                        <Col xl="4" sm="6">
                          <div className="widget-chart">
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
                        <Col xl="4" sm="6">
                          <div className="widget-chart">
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
                        <Col xl="4" sm="6">
                          <div className="widget-chart">
                            <div className="icon-wrapper rounded-circle">
                              <div className="icon-wrapper-bg bg-danger" />
                              <i className="lnr-laptop-phone text-danger" />
                            </div>
                            <div className="widget-numbers">5.82k</div>
                            <div className="widget-subheading">
                              Reports Submitted
                            </div>
                            <div className="widget-description text-primary">
                              <span className="ps-1">54.1%</span>
                              <FontAwesomeIcon icon={faAngleUp} />
                            </div>
                          </div>
                        </Col>
                        <Col xl="4" sm="6">
                          <div className="widget-chart">
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
                                          <h5 className="menu-header-title">
                                            Settings
                                          </h5>
                                          <h6 className="menu-header-subtitle">
                                            Manage all of your options
                                          </h6>
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
                            <div className="icon-wrapper rounded-circle">
                              <div className="icon-wrapper-bg bg-success" />
                              <i className="lnr-screen text-success" />
                            </div>
                            <div className="widget-numbers">17.2k</div>
                            <div className="widget-subheading">Profiles</div>
                            <div className="widget-description text-warning">
                              <span className="pe-1">175.5%</span>
                              <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                          </div>
                        </Col>
                        <Col xl="4" sm="6">
                          <div className="widget-chart">
                            <div className="icon-wrapper rounded-circle">
                              <div className="icon-wrapper-bg bg-danger" />
                              <i className="lnr-laptop-phone text-danger" />
                            </div>
                            <div className="widget-numbers">5.82k</div>
                            <div className="widget-subheading">
                              Reports Submitted
                            </div>
                            <div className="widget-description text-primary">
                              <span className="ps-1">54.1%</span>
                              <FontAwesomeIcon icon={faAngleUp} />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                  <Card className="main-card mb-3">
                    <div className="grid-menu grid-menu-3col">
                      <Row className="g-0">
                        <Col xl="4" sm="6">
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
                        <Col xl="4" sm="6">
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
                        <Col xl="4" sm="6">
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
                        <Col xl="4" sm="6">
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
                              <span className="ps-1">54.1%</span>
                              <FontAwesomeIcon icon={faAngleUp} />
                            </div>
                          </div>
                        </Col>
                        <Col xl="4" sm="6">
                          <div className="widget-chart widget-chart-hover">
                            <div className="widget-chart-actions">
                              <Button color="warning" className="btn-icon btn-icon-only btn-link">
                                <div className="btn-icon-wrapper">
                                  <FontAwesomeIcon icon={faArrowLeft} />
                                </div>
                              </Button>
                            </div>
                            <div className="icon-wrapper rounded-circle">
                              <div className="icon-wrapper-bg bg-success" />
                              <i className="lnr-screen text-success" />
                            </div>
                            <div className="widget-numbers">17.2k</div>
                            <div className="widget-subheading">Profiles</div>
                            <div className="widget-description text-warning">
                              <span className="pe-1">175.5%</span>
                              <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                          </div>
                        </Col>
                        <Col xl="4" sm="6">
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
                              <span className="ps-1">54.1%</span>
                              <FontAwesomeIcon icon={faAngleUp} />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
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

export default GridsExample;
