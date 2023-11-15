import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import CountUp from "react-countup";

import {
  faAngleUp,
  faArrowLeft,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import bg1 from "../../../assets/utils/images/dropdown-header/abstract1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PageTitle from "../../../Layout/AppMain/PageTitle";

class CountUpExample extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Count Up"
          subheading="Add animations to your numbers. It'll make your next ArchitectUI app more user friendly."
          icon="pe-7s-signal icon-gradient bg-malibu-beach"/>
          <TransitionGroup>
            <CSSTransition component="div" classNames="TabsAnimation" appear={true}
              timeout={1500} enter={false} exit={false}>
              <div> 
                <Row>
                  <Col lg="6">
                    <Card className="main-card mb-3">
                      <CardBody>
                        <CardTitle>Basic</CardTitle>
                        <h3>
                          <CountUp end={348} duration="20" />
                        </h3>
                      </CardBody>
                    </Card>
                    <Card className="main-card mb-3">
                      <CardBody>
                        <CardTitle>3 Seconds Delay</CardTitle>
                        <h3>
                          <CountUp start={56} end={268} duration="15" delay={3}>
                            {({ countUpRef, start }) => (
                              <div className="text-center">
                                <h3 ref={countUpRef}> </h3>
                                <div className="divider" />
                                <Button color="primary" onClick={start}>
                                  Start
                                </Button>
                              </div>
                            )}
                          </CountUp>
                        </h3>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6">
                    <Card className="main-card mb-3">
                      <CardBody>
                        <CardTitle>Manual Trigger</CardTitle>
                        <CountUp start={-875.039} end={160527.012} duration={2.75} separator=""
                          decimals={4} decimal="," prefix="EUR " suffix=" left">
                          {({ countUpRef, start }) => (
                            <div className="text-center">
                              <h3 ref={countUpRef}> </h3>
                              <div className="divider" />
                              <Button color="primary" onClick={start}>
                                Start
                              </Button>
                            </div>
                          )}
                        </CountUp>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <div className="card mb-3 widget-chart">
                      <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-primary" />
                        <i className="lnr-cog text-primary" />
                      </div>
                      <div className="widget-numbers">
                        <CountUp start={0} end={46} separator="" decimals={0} decimal=","
                          prefix="" useEasing={false} suffix="k" duration="15"/>
                      </div>
                      <div className="widget-subheading">Total Views</div>
                      <div className="widget-description text-success">
                        <FontAwesomeIcon icon={faAngleUp} />
                        <span className="ps-1">
                          <CountUp start={0} end={176} separator="," delay={2} decimals={0}
                            decimal="," useEasing={false} prefix="" suffix="%" duration="10"/>
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="card mb-3 widget-chart">
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
                                      <i className="pe-7s-config btn-icon-wrapper">
                                        {" "}
                                      </i>
                                    </Button>
                                  </div>
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
                      <div className="widget-numbers">
                        <CountUp start={0} end={17.2} separator="" decimals={0}
                          decimal="," prefix="" useEasing={true} suffix="k" duration="15"/>
                      </div>
                      <div className="widget-subheading">Profiles</div>
                      <div className="widget-description text-warning">
                        <span className="pe-1">
                          <CountUp start={0} end={135.5} separator="," delay={2} decimals={0}
                            decimal="," useEasing={false} prefix="" suffix="%" duration="35"/>
                        </span>
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="card mb-3 widget-chart">
                      <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-danger" />
                        <i className="lnr-laptop-phone text-danger" />
                      </div>
                      <div className="widget-numbers">
                        <CountUp start={0} end={5.82} separator="," decimals={2} decimal=","
                          prefix="" useEasing={false} suffix="k" duration="15"/>
                      </div>
                      <div className="widget-subheading">Reports Submitted</div>
                      <div className="widget-description text-primary">
                        <span className="pe-1">54.1%</span>
                        <FontAwesomeIcon icon={faAngleUp} />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default CountUpExample;
