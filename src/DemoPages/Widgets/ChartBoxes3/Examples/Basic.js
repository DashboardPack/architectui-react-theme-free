import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  Progress,
} from "reactstrap";

import CountUp from "react-countup";

class Basic3Example extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <Row>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left">
                        <div className="widget-heading">Total Orders</div>
                        <div className="widget-subheading">Last year expenses</div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-success">
                          <CountUp end={1896} duration="10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left">
                        <div className="widget-heading">Clients</div>
                        <div className="widget-subheading">
                          Total Clients Profit
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-primary">
                          <CountUp start={-75.9} end={568.2} separator="" decimals={0} decimal="," prefix="$ " duration="20"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left">
                        <div className="widget-heading">Products Sold</div>
                        <div className="widget-subheading">
                          Total revenue streams
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-warning">
                          <CountUp start={1} end={14} separator="" decimals={0} decimal="," prefix="$" suffix="M" duration="20"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left">
                        <div className="widget-heading">Followers</div>
                        <div className="widget-subheading">People Interested</div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-danger">
                          <CountUp start={0} end={45.9} separator="" decimals={0} decimal="," prefix="" suffix="%" duration="15"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content bg-night-fade">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Total Orders</div>
                        <div className="widget-subheading">Last year expenses</div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-white">
                          <CountUp end={1896} duration="10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content bg-arielle-smile">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Clients</div>
                        <div className="widget-subheading">
                          Total Clients Profit
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-white">
                          <CountUp start={-75.9} end={568.2} separator="" decimals={0} decimal="," prefix="$ " duration="20"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content bg-premium-dark">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Products Sold</div>
                        <div className="widget-subheading">
                          Total revenue streams
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-warning">
                          <CountUp start={1} end={14} separator="" decimals={0} decimal="," prefix="$" suffix="M" duration="20"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content bg-happy-green">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Followers</div>
                        <div className="widget-subheading">People Interested</div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-dark">
                          <CountUp start={0} end={45.9} separator="" decimals={0} decimal="," prefix="" suffix="%" duration="15"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col lg="6" xl="4">
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
                        <Progress className="progress-bar-xs" color="primary" value="65"/>
                        <div className="progress-sub-label">
                          <div className="sub-label-left">YoY Growth</div>
                          <div className="sub-label-right">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">Clients</div>
                          <div className="widget-subheading">
                            Total Clients Profit
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-primary">$12.6k</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-lg progress-bar-animated" color="warning" value="47"/>
                        <div className="progress-sub-label">
                          <div className="sub-label-left">Retention</div>
                          <div className="sub-label-right">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">Products Sold</div>
                          <div className="widget-subheading">
                            Total revenue streams
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-warning">$3M</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-xs progress-bar-animated-alt" color="danger" value="85"/>
                        <div className="progress-sub-label">
                          <div className="sub-label-left">Sales</div>
                          <div className="sub-label-right">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" xl="4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">Followers</div>
                          <div className="widget-subheading">People Interested</div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-danger">45,9%</div>
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <Progress className="progress-bar-sm progress-bar-animated-alt" color="success" value="65"/>
                        <div className="progress-sub-label">
                          <div className="sub-label-left">Twitter Progress</div>
                          <div className="sub-label-right">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Card className="main-card mb-3">
                <Row className="g-0">
                  <Col md="4">
                    <div className="widget-content">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-right ms-0 me-3">
                          <div className="widget-numbers text-success">1896</div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Total Orders</div>
                          <div className="widget-subheading">
                            Last year expenses
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="widget-content">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-right ms-0 me-3">
                          <div className="widget-numbers text-warning">$ 14M</div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Products Sold</div>
                          <div className="widget-subheading">
                            Total revenue streams
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="widget-content">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-right ms-0 me-3">
                          <div className="widget-numbers text-danger">45.9%</div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Followers</div>
                          <div className="widget-subheading">People Interested</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Card className="main-card mb-3">
                <Row className="g-0">
                  <Col md="4">
                    <CardBody className="pt-0 pb-0">
                      <ListGroup flush>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">Total Orders</div>
                                  <div className="widget-subheading">
                                    Last year expenses
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-success">
                                    1896
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">Clients</div>
                                  <div className="widget-subheading">
                                    Total Clients Profit
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-primary">
                                    $12.6k
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Col>
                  <Col md="4">
                    <CardBody className="pt-0 pb-0">
                      <ListGroup flush>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">Followers</div>
                                  <div className="widget-subheading">
                                    People Interested
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-danger">
                                    45,9%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Products Sold
                                  </div>
                                  <div className="widget-subheading">
                                    Total revenue streams
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-warning">
                                    $3M
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Col>
                  <Col md="4">
                    <CardBody className="pt-0 pb-0">
                      <ListGroup flush>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">Total Orders</div>
                                  <div className="widget-subheading">
                                    Last year expenses
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-success">
                                    1896
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">Clients</div>
                                  <div className="widget-subheading">
                                    Total Clients Profit
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-primary">
                                    $12.6k
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Card className="main-card mb-3">
                <Row>
                  <Col lg="6" xl="4">
                    <div className="widget-content">
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
                          <Progress className="progress-bar-sm progress-bar-animated-alt" color="primary" value="43"/>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">YoY Growth</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" xl="4">
                    <div className="widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Clients</div>
                            <div className="widget-subheading">
                              Total Clients Profit
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-primary">
                              $12.6k
                            </div>
                          </div>
                        </div>
                        <div className="widget-progress-wrapper">
                          <Progress className="progress-bar-sm progress-bar-animated-alt" color="warning" value="47"/>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">Retention</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" xl="4">
                    <div className="widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Products Sold</div>
                            <div className="widget-subheading">
                              Total revenue streams
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-warning">$3M</div>
                          </div>
                        </div>
                        <div className="widget-progress-wrapper">
                          <Progress className="progress-bar-sm progress-bar-animated-alt" color="danger" value="77"/>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">Sales</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" xl="4">
                    <div className="widget-content">
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
                          <Progress className="progress-bar-sm progress-bar-animated-alt" color="success" value="65"/>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">Twitter Progress</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Card className="main-card mb-3">
                <Row>
                  <Col md="4">
                    <div className="widget-content">
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
                          <Progress className="progress-bar-sm progress-bar-animated-alt" color="primary" value="43"/>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">YoY Growth</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Products Sold</div>
                            <div className="widget-subheading">
                              Total revenue streams
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-warning">$3M</div>
                          </div>
                        </div>
                        <div className="widget-progress-wrapper">
                          <Progress className="progress-bar-sm progress-bar-animated-alt" color="danger" value="77"/>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">Sales</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="widget-content">
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
                          <Progress className="progress-bar-sm progress-bar-animated-alt" color="success" value="65"/>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">Twitter Progress</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
              <div className="divider mt-0" style={{ marginBottom: "30px" }} />
              <Row>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <ListGroup flush>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">Total Orders</div>
                                <div className="widget-subheading">
                                  Last year expenses
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-success">
                                  1896
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper">
                              <Progress className="progress-bar-xs" color="primary" value="65"/>
                              <div className="progress-sub-label">
                                <div className="sub-label-left">YoY Growth</div>
                                <div className="sub-label-right">100%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">Clients</div>
                                <div className="widget-subheading">
                                  Total Clients Profit
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-primary">
                                  $12.6k
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper">
                              <Progress className="progress-bar-lg progress-bar-animated" color="warning" value="47"/>
                              <div className="progress-sub-label">
                                <div className="sub-label-left">Retention</div>
                                <div className="sub-label-right">100%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">Followers</div>
                                <div className="widget-subheading">
                                  People Interested
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-danger">
                                  45,9%
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper">
                              <Progress className="progress-bar-sm progress-bar-animated-alt" color="success" value="65"/>
                              <div className="progress-sub-label">
                                <div className="sub-label-left">
                                  Twitter Progress
                                </div>
                                <div className="sub-label-right">100%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">Products Sold</div>
                                <div className="widget-subheading">
                                  Total revenue streams
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-warning">
                                  $3M
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper">
                              <Progress className="progress-bar-xs progress-bar-animated-alt" color="danger" value="85"/>
                              <div className="progress-sub-label">
                                <div className="sub-label-left">Sales</div>
                                <div className="sub-label-right">100%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <ListGroup>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">Total Orders</div>
                                  <div className="widget-subheading">
                                    Last year expenses
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-success">
                                    1896
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">Clients</div>
                                  <div className="widget-subheading">
                                    Total Clients Profit
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-primary">
                                    $12.6k
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">Followers</div>
                                  <div className="widget-subheading">
                                    People Interested
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-danger">
                                    45,9%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    Products Sold
                                  </div>
                                  <div className="widget-subheading">
                                    Total revenue streams
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-warning">
                                    $3M
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
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

export default Basic3Example;
