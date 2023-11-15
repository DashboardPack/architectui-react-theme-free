import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  faAngleUp,
  faAngleDown,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar5 from "../../../../assets/utils/images/avatars/5.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/4.jpg";
import avatar4 from "../../../../assets/utils/images/avatars/3.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/8.jpg";
import avatar6 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar9 from "../../../../assets/utils/images/avatars/9.jpg";

import bg1 from "../../../../assets/utils/images/dropdown-header/abstract1.jpg";
import bg2 from "../../../../assets/utils/images/dropdown-header/city2.jpg";
import bg3 from "../../../../assets/utils/images/dropdown-header/city4.jpg";

import classnames from "classnames";

import CountUp from "react-countup";

import {
  Row,
  Col,
  TabContent,
  TabPane,
  ButtonGroup,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardFooter,
} from "reactstrap";

import { Progress } from "react-sweet-progress";

class ListBoxes extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  state = {
    expSlideRight: false,
  };

  toggle2(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
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
              <Row>
                <Col md="12" lg="6" xl="4">
                  <Card className="card-hover-shadow profile-responsive card-border border-success mb-3">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-success">
                        <div className="menu-header-content">
                          <div className="avatar-icon-wrapper btn-hover-shine mb-2 avatar-icon-xl">
                            <div className="avatar-icon rounded">
                              <img src={avatar6} alt="Avatar 6" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">John Rosenberg</h5>
                            <h6 className="menu-header-subtitle">
                              Short profile description
                            </h6>
                          </div>
                          <div className="menu-header-btn-pane pt-2">
                            <div>
                              <ButtonGroup>
                                <Button caret="true" color="dark"
                                  className={
                                    "" +
                                    classnames({
                                      active: this.state.activeTab === "1",
                                    })
                                  }
                                  onClick={() => {
                                    this.toggle("1");
                                  }}>
                                  Tab 1
                                </Button>
                                <Button color="dark"
                                  className={classnames({
                                    active: this.state.activeTab === "2",
                                  })}
                                  onClick={() => {
                                    this.toggle("2");
                                  }}>
                                  Tab 2
                                </Button>
                                <Button color="dark"
                                  className={
                                    "" +
                                    classnames({
                                      active: this.state.activeTab === "3",
                                    })
                                  }
                                  onClick={() => {
                                    this.toggle("3");
                                  }}>
                                  Tab 3
                                </Button>
                              </ButtonGroup>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardBody className="p-0">
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <ListGroup flush>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="widget-content-left">
                                      <img width={52} className="rounded-circle" src={avatar3} alt=""/>
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">John Doe</div>
                                    <div className="widget-subheading opacity-10">
                                      <span className="pe-2">
                                        <b>43</b> Sales
                                      </span>
                                      <span>
                                        <b className="text-success">$156,24</b>{" "}
                                        Totals
                                      </span>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="icon-wrapper m-0">
                                      <div className="progress-circle-wrapper">
                                        <Progress type="circle" percent={62} width="100%"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="widget-content-left">
                                      <img width={52} className="rounded-circle" src={avatar2} alt=""/>
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">
                                      Rosy O'Dowell
                                    </div>
                                    <div className="widget-subheading opacity-10">
                                      <span className="pe-2">
                                        <b className="text-danger">12</b> Leads
                                      </span>
                                      <span>
                                        <b className="text-warning">$56,24</b>{" "}
                                        Totals
                                      </span>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="icon-wrapper m-0">
                                      <div className="progress-circle-wrapper">
                                        <Progress color="danger" type="circle" percent={32} width="100%"
                                          theme={{
                                            active: {
                                              trailColor: "#ccf3e6",
                                              color: "#3ac47d",
                                            },
                                          }}/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                          </ListGroup>
                        </TabPane>
                        <TabPane tabId="2">
                          <ListGroup flush>
                            <ListGroupItem disabled tag="a" href="#">
                              Cras justo odio
                            </ListGroupItem>
                            <ListGroupItem tag="a" href="#">
                              Dapibus ac facilisis in
                            </ListGroupItem>
                            <ListGroupItem tag="a" href="#">
                              Morbi leo risus
                            </ListGroupItem>
                            <ListGroupItem tag="a" href="#">
                              Porta ac consectetur ac
                            </ListGroupItem>
                            <ListGroupItem tag="a" href="#">
                              Vestibulum at eros
                            </ListGroupItem>
                          </ListGroup>
                        </TabPane>
                        <TabPane tabId="3">
                          <div className="p-3">
                            <p>
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                            <p className="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled.
                            </p>
                          </div>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                    <CardFooter className="text-center d-block">
                      <Button size="sm" className="me-2 text-danger" color="link">
                        Cancel
                      </Button>
                      <Button size="lg" className="btn-shadow-primary" color="primary">
                        View Profile
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="12" lg="6" xl="4">
                  <Card className="card-shadow-primary card-border mb-3">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-primary">
                        <div className="menu-header-image"
                          style={{
                            backgroundImage: "url(" + bg2 + ")",
                          }}>
                      </div>
                        <div className="menu-header-content">
                          <div className="avatar-icon-wrapper avatar-icon-lg">
                            <div className="avatar-icon rounded btn-hover-shine">
                              <img src={avatar5} alt="Avatar 5" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">Jessica Walberg</h5>
                          </div>
                          <div className="menu-header-btn-pane">
                            <Button size="sm" color="info" className="me-2">
                              Settings
                            </Button>
                            <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                              <i className="pe-7s-config btn-icon-wrapper"> </i>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="scroll-area-sm">
                      <PerfectScrollbar>
                        <ListGroup flush>
                          <ListGroupItem>
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left center-elem me-2">
                                  <i className="pe-7s-file text-muted fsize-2" />
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Example file 1
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button size="sm" className="me-1 btn-icon btn-icon-only" color="primary">
                                    <i className="pe-7s-tools btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                  <Button size="sm" className="me-1 btn-icon btn-icon-only" color="secondary">
                                    <i className="pe-7s-gym btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="success">
                                    <i className="pe-7s-umbrella btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left center-elem me-2">
                                  <i className="pe-7s-file text-muted fsize-2" />
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Example file 2
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button size="sm" className="me-1 btn-icon btn-icon-only" color="primary">
                                    <i className="pe-7s-tools btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="success">
                                    <i className="pe-7s-umbrella btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left center-elem me-2">
                                  <i className="pe-7s-file text-muted fsize-2" />
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Example file 2
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button size="sm" className="me-1 btn-icon btn-icon-only" color="primary">
                                    <i className="pe-7s-tools btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="success">
                                    <i className="pe-7s-umbrella btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left center-elem me-2">
                                  <i className="pe-7s-file text-muted fsize-2" />
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Example file 2
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button size="sm" className="me-1 btn-icon btn-icon-only" color="primary">
                                    <i className="pe-7s-tools btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="success">
                                    <i className="pe-7s-umbrella btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left center-elem me-2">
                                  <i className="pe-7s-file text-muted fsize-2" />
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Example file 2
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button size="sm" className="me-1 btn-icon btn-icon-only" color="primary">
                                    <i className="pe-7s-tools btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="success">
                                    <i className="pe-7s-umbrella btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left center-elem me-2">
                                  <i className="pe-7s-file text-muted fsize-2" />
                                </div>
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Example file 2
                                  </div>
                                </div>
                                <div className="widget-content-right widget-content-actions">
                                  <Button size="sm" className="me-1 btn-icon btn-icon-only" color="primary">
                                    <i className="pe-7s-tools btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                  <Button size="sm" className="btn-icon btn-icon-only" color="success" >
                                    <i className="pe-7s-umbrella btn-icon-wrapper"> {" "} </i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>
                        </ListGroup>
                      </PerfectScrollbar>
                    </div>
                    <CardFooter className="text-center d-block">
                      <Button outline className="me-2 border-0 btn-transition" color="danger">
                        Remove from list
                      </Button>
                      <Button outline className="border-0 btn-transition" color="success">
                        Send Message
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="12" lg="6" xl="4">
                  <Card className="card-shadow-primary profile-responsive card-border mb-3">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-danger">
                        <div className="menu-header-image"
                          style={{
                            backgroundImage: "url(" + bg1 + ")",
                          }}/>
                        <div className="menu-header-content btn-pane-right">
                          <div className="avatar-icon-wrapper me-2 avatar-icon-xl">
                            <div className="avatar-icon">
                              <img src={avatar4} alt="Avatar 5" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">Mathew Mercer</h5>
                            <h6 className="menu-header-subtitle">
                              Sales Manager
                            </h6>
                          </div>
                          <div className="menu-header-btn-pane">
                            <Button size="sm" className="btn-icon me-2 btn-icon-only" color="warning">
                              <i className="pe-7s-config btn-icon-wrapper"> </i>
                            </Button>
                            <Button size="sm" className="btn-icon" color="success">
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ListGroup flush>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="icon-wrapper m-0">
                                <div className="progress-circle-wrapper">
                                  <Progress type="circle" percent={82} width="100%"
                                    theme={{
                                      active: {
                                        trailColor: "#e1e1e1",
                                        color: "#3ac47d",
                                      },
                                    }}/>
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">January Sales</div>
                              <div className="widget-subheading">
                                Lorem ipsum dolor
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="widget-numbers widget-numbers-sm text-primary">
                                <CountUp start={-25.9} end={764.2} separator="" decimals={0}
                                  decimal="," prefix="" duration="20"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="icon-wrapper m-0">
                                <div className="progress-circle-wrapper">
                                  <Progress type="circle" percent={47} width="100%"
                                    theme={{
                                      active: {
                                        trailColor: "#e1e1e1",
                                        color: "#f7b924",
                                      },
                                    }}/>
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">February Sales</div>
                              <div className="widget-subheading">
                                Maecenas tempus, tellus
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="widget-numbers widget-numbers-sm text-warning">
                                <CountUp start={-5.9} end={194.2} separator="" decimals={0} decimal="," prefix="" duration="20"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="icon-wrapper m-0">
                                <div className="progress-circle-wrapper">
                                  <Progress type="circle" percent={62} width="100%"
                                    theme={{
                                      active: {
                                        trailColor: "#e1e1e1",
                                        color: "#d92550",
                                      },
                                    }}/>
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">March Sales</div>
                              <div className="widget-subheading">
                                Donec vitae sapien
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="widget-numbers widget-numbers-sm text-danger">
                                <CountUp start={0} end={54.2} separator="" decimals={0}
                                  decimal="," prefix="-" suffix=" $" duration="20"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="icon-wrapper m-0">
                                <div className="progress-circle-wrapper">
                                  <Progress type="circle" percent={43} width="100%"
                                    theme={{
                                      active: {
                                        trailColor: "#e1e1e1",
                                        color: "#28b0cd",
                                      },
                                    }}/>
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">April Sales</div>
                              <div className="widget-subheading">
                                Curabitur ullamcorper ultricies
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="widget-numbers widget-numbers-sm text-info">
                                <CountUp start={0} end={45.2} separator="" decimals={0} decimal=","
                                  prefix="" suffix=" $" duration="20"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="12" lg="6" xl="4">
                  <Card className="card-shadow-primary profile-responsive card-border mb-3">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-focus">
                        <div className="menu-header-image opacity-3"
                          style={{
                            backgroundImage: "url(" + bg3 + ")",
                          }}/>
                        <div className="menu-header-content btn-pane-right">
                          <div className="avatar-icon-wrapper me-2 avatar-icon-xl">
                            <div className="avatar-icon rounded">
                              <img src={avatar5} alt="Avatar 5" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">Bryce Cordova</h5>
                            <h6 className="menu-header-subtitle">
                              Implementation Specialist
                            </h6>
                          </div>
                          <div className="menu-header-btn-pane">
                            {/* <LaddaButton className="btn btn-pill btn-dark" loading={this.state.expSlideRight}
                              onClick={() => this.toggle2("expSlideRight")} data-style={SLIDE_RIGHT}>
                              Load Click
                            </LaddaButton> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <ListGroup flush>
                      <ListGroupItem className="bg-warm-flame">
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="icon-wrapper m-0">
                                <b className="text-primary">
                                  <CountUp start={-25.9} end={764.2} separator="" decimals={0}
                                    decimal="," prefix="" duration="20"/>
                                </b>
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading text-dark opacity-7">
                                March Totals
                              </div>
                              <div className="widget-subheading opacity-10">
                                <span className="pe-2">
                                  <b className="text-danger">12</b> new leads,
                                </span>
                                <span>
                                  <b className="text-dark">$56,24</b> in sales
                                </span>
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="icon-wrapper m-0">
                                <div className="progress-circle-wrapper">
                                  <Progress type="circle" percent={54} width="100%"
                                    theme={{
                                      active: {
                                        trailColor: "rgba(255,255,255,.3)",
                                        color: "#ffffff",
                                      },
                                    }}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className="p-0">
                        <div className="grid-menu grid-menu-2col">
                          <Row className="g-0">
                            <Col sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link" >
                                <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3">
                                  {" "}
                                </i>
                                View Profile
                              </Button>
                            </Col>
                            <Col sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                <i className="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                Sales Reports
                              </Button>
                            </Col>
                            <Col sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                <i className="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                Leads Generated
                              </Button>
                            </Col>
                            <Col sm="6">
                              <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                <i className="lnr-heart btn-icon-wrapper btn-icon-lg mb-3">
                                  {" "}
                                </i>
                                Successful Tasks
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                  <Card className="card-shadow-primary profile-responsive card-border mb-3">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-info">
                        <div className="menu-header-image opacity-2"
                          style={{
                            backgroundImage: "url(" + bg1 + ")",
                          }}/>
                        <div className="menu-header-content btn-pane-right">
                          <div className="avatar-icon-wrapper me-2 avatar-icon-xl">
                            <div className="avatar-icon rounded">
                              <img src={avatar9} alt="Avatar 5" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">Aliesha Hunter</h5>
                          </div>
                          <div className="menu-header-btn-pane">
                            <div>
                              <ButtonGroup>
                                <Button caret="true" color="focus"
                                  className={
                                    "" +
                                    classnames({
                                      active: this.state.activeTab === "1",
                                    })
                                  }
                                  onClick={() => {
                                    this.toggle("1");
                                  }}>
                                  Tab 1
                                </Button>
                                <Button color="focus"
                                  className={
                                    "" +
                                    classnames({
                                      active: this.state.activeTab === "2",
                                    })
                                  }
                                  onClick={() => {
                                    this.toggle("2");
                                  }}>
                                  Tab 2
                                </Button>
                              </ButtonGroup>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <ListGroup flush>
                          <ListGroupItem>
                            <div className="widget-content">
                              <div className="text-center">
                                <h5 className="widget-heading opacity-4">
                                  March Totals
                                </h5>
                                <h5>
                                  <span className="pe-2">
                                    <b className="text-danger">12</b> new leads,
                                  </span>
                                  <span>
                                    <b className="text-success">$56,24</b> in
                                    sales
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem className="p-0">
                            <div className="grid-menu grid-menu-2col">
                              <Row className="g-0">
                                <Col sm="6">
                                  <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                    <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3">
                                      {" "}
                                    </i>
                                    View Profile
                                  </Button>
                                </Col>
                                <Col sm="6">
                                  <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                    <i className="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                    Leads Generated
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                          </ListGroupItem>
                        </ListGroup>
                      </TabPane>
                      <TabPane tabId="2">
                        <div className="p-3">
                          <p className="mb-0">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                        </div>
                      </TabPane>
                    </TabContent>
                  </Card>
                </Col>
                <Col md="12" lg="6" xl="4">
                  <Card className="card-shadow-primary card-border mb-3">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-dark">
                        <div className="menu-header-content">
                          <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                            <div className="avatar-icon">
                              <img src={avatar1} alt="Avatar 5" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">Isabelle Day</h5>
                            <h6 className="menu-header-subtitle">
                              Security Officer
                            </h6>
                          </div>
                          <div className="menu-header-btn-pane pt-1">
                            <Button size="sm" className="btn-icon" color="warning">
                              View Complete Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <h6 className="text-muted text-uppercase font-size-md opacity-5 fw-normal">
                        Top Authors
                      </h6>
                      <ListGroup className="rm-list-borders" flush>
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
                                  <small className="opacity-5 pe-1">$</small>
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
                                  <small className="opacity-5 pe-1">$</small>
                                  <CountUp start={0} end={54} separator="" decimals={0}
                                    decimal="." prefix="" duration="15"/>
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
                                  <small className="opacity-5 pe-1">$</small>
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
                                <img width={42} className="rounded-circle" src={avatar4} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Katerina Hutchings
                                </div>
                                <div className="widget-subheading">
                                  Group ArchitectUI
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="font-size-xlg text-muted">
                                  <small className="opacity-5 pe-1">$</small>
                                  <CountUp start={0} end={77} separator="" decimals={0} decimal="." prefix="" duration="10"/>
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
                                <img width={42} className="rounded-circle" src={avatar3} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">Harper Rose</div>
                                <div className="widget-subheading">
                                  Markets Planner
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="font-size-xlg text-muted">
                                  <small className="opacity-5 pe-1">$</small>
                                  <CountUp start={0} end={32} separator="" decimals={0} decimal="." prefix="" duration="15"/>
                                  <small className="text-info ps-2">
                                    <FontAwesomeIcon icon={faAngleUp} />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </div>
                    <CardFooter className="text-center d-block">
                      <Button color="info">View Details</Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="12" lg="6" xl="4">
                  <Card className="card-shadow-primary card-border text-white mb-3" color="primary">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-primary">
                        <div className="menu-header-content">
                          <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                            <div className="avatar-icon">
                              <img src={avatar3} alt="Avatar 5" />
                            </div>
                          </div>
                          <div>
                            <h5 className="menu-header-title">Kalem Forster</h5>
                            <h6 className="menu-header-subtitle">
                              Applications Technician
                            </h6>
                          </div>
                          <div className="menu-header-btn-pane pt-1">
                            <Button size="sm" className="btn-icon" color="dark">
                              <i className="pe-7s-config btn-icon-wrapper"> </i>
                              View Complete Profile
                            </Button>
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
                  <Card className="card-hover-shadow card-border mb-3">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-warning">
                        <div className="menu-header-content">
                          <div>
                            <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}
                              className="avatar-icon-wrapper btn-hover-shine avatar-icon-xl">
                              <div className="avatar-icon rounded">
                                <img src={avatar4} alt="Avatar 5" />
                              </div>
                            </a>
                          </div>
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
                            <Button size="sm" className="btn-icon btn-icon-only" color="primary">
                              <i className="pe-7s-config btn-icon-wrapper"> </i>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardBody>
                      <p>
                        Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                        rhoncus.
                      </p>
                      <p className="mb-0">
                        Since the 1500s, when an unknown printer took a galley of
                        type and scrambled.
                      </p>
                    </CardBody>
                    <CardFooter className="d-block text-end">
                      <Button size="sm" className="me-2" color="link">
                        Cancel
                      </Button>
                      <Button size="lg" className="btn-shadow-primary" color="primary">
                        Submit
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

export default ListBoxes;
