import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../../assets/utils/images/avatars/4.jpg";
import avatar5 from "../../../../assets/utils/images/avatars/5.jpg";
import avatar6 from "../../../../assets/utils/images/avatars/8.jpg";
import avatar7 from "../../../../assets/utils/images/avatars/9.jpg";
import avatar8 from "../../../../assets/utils/images/avatars/10.jpg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

class TimelineDotBadge extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Colorful Dots</CardTitle>
                      <VerticalTimeline layout="1-column" className="vertical-time-simple vertical-without-time">
                        <VerticalTimelineElement className="vertical-timeline-item dot-danger">
                          <h4 className="timeline-title">All Hands Meeting</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-item dot-warning">
                          <p>
                            Yet another one, at{" "}
                            <span className="text-success">15:00 PM</span>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-item dot-success">
                          <h4 className="timeline-title">
                            Build the production release{" "}
                            <div className="badge bg-danger ms-2">NEW</div>
                          </h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-item dot-primary">
                          <h4 className="timeline-title">
                            Something not important
                            <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img src={avatar1} alt="" />
                                </div>
                              </div>
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img src={avatar2} alt="" />
                                </div>
                              </div>
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img src={avatar3} alt="" />
                                </div>
                              </div>
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img src={avatar4} alt="" />
                                </div>
                              </div>
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img src={avatar5} alt="" />
                                </div>
                              </div>
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img src={avatar6} alt="" />
                                </div>
                              </div>
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img src={avatar7} alt="" />
                                </div>
                              </div>
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img src={avatar8} alt="" />
                                </div>
                              </div>
                              <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                <div className="avatar-icon">
                                  <i>+</i>
                                </div>
                              </div>
                            </div>
                          </h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-item dot-info">
                          <h4 className="timeline-title">
                            This dot has an info state
                          </h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-item dot-dark">
                          <h4 className="timeline-title">
                            This dot has a dark state
                          </h4>
                        </VerticalTimelineElement>
                      </VerticalTimeline>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Basic</CardTitle>
                      <VerticalTimeline layout="1-column">
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-success">  {" "} </i>
                          }
                          date="10:30 PM">
                          <h4 className="timeline-title">All Hands Meeting</h4>
                          <p>
                            Lorem ipsum dolor sic amet, today at{" "}
                            <a
                              href="https://colorlib.com/"
                              onClick={(e) => e.preventDefault()}>
                              12:00 PM
                            </a>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-warning"> {" "} </i>
                          }
                          date="12:25 PM">
                          <p>
                            Another meeting today, at{" "}
                            <b className="text-danger">12:00 PM</b>
                          </p>
                          <p>
                            Yet another one, at{" "}
                            <span className="text-success">15:00 PM</span>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-danger"> {" "} </i>
                          }
                          date="15:00 PM">
                          <h4 className="timeline-title">
                            Build the production release
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                            incididunt ut labore et dolore magna elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-primary"> {" "} </i>
                          }
                          date="15:00 PM">
                          <h4 className="timeline-title text-success">
                            Something not important
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-success"> {" "} </i>
                          }
                          date="10:30 PM">
                          <h4 className="timeline-title">All Hands Meeting</h4>
                          <p>
                            Lorem ipsum dolor sic amet, today at{" "}
                            <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                              12:00 PM
                            </a>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-warning"> {" "} </i>
                          }
                          date="12:25 PM">
                          <p>
                            Another meeting today, at{" "}
                            <b className="text-danger">12:00 PM</b>
                          </p>
                          <p>
                            Yet another one, at{" "}
                            <span className="text-success">15:00 PM</span>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-danger"> {" "} </i>
                          }
                          date="15:00 PM">
                          <h4 className="timeline-title">
                            Build the production release
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                            incididunt ut labore et dolore magna elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-primary"> {" "} </i>
                          }
                          date="15:00 PM">
                          <h4 className="timeline-title text-success">
                            Something not important
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-success"> {" "} </i>
                          }
                          date="10:30 PM">
                          <h4 className="timeline-title">All Hands Meeting</h4>
                          <p>
                            Lorem ipsum dolor sic amet, today at{" "}
                            <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                              12:00 PM
                            </a>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-warning"> {" "} </i>
                          }
                          date="12:25 PM">
                          <p>
                            Another meeting today, at{" "}
                            <b className="text-danger">12:00 PM</b>
                          </p>
                          <p>
                            Yet another one, at{" "}
                            <span className="text-success">15:00 PM</span>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-danger"> {" "} </i>
                          }
                          date="15:00 PM">
                          <h4 className="timeline-title">
                            Build the production release
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                            incididunt ut labore et dolore magna elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-primary"> {" "} </i>
                          }
                          date="15:00 PM">
                          <h4 className="timeline-title text-success">
                            Something not important
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                      </VerticalTimeline>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Simple Dots</CardTitle>
                      <VerticalTimeline layout="1-column"
                        className="vertical-time-simple vertical-without-time">
                        <VerticalTimelineElement className="vertical-timeline-item">
                          <h4 className="timeline-title">All Hands Meeting</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-item">
                          <p>
                            Yet another one, at{" "}
                            <span className="text-success">15:00 PM</span>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-item">
                          <h4 className="timeline-title">
                            Build the production release
                          </h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-item">
                          <h4 className="timeline-title text-success">
                            Something not important
                          </h4>
                        </VerticalTimelineElement>
                      </VerticalTimeline>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Without Time</CardTitle>
                      <VerticalTimeline layout="1-column" className="vertical-without-time">
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-success"> {" "} </i>
                          } >
                          <h4 className="timeline-title">All Hands Meeting</h4>
                          <p>
                            Lorem ipsum dolor sic amet, today at{" "}
                            <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                              12:00 PM
                            </a>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-warning"> {" "} </i>
                          }>
                          <p>
                            Another meeting today, at{" "}
                            <b className="text-danger">12:00 PM</b>
                          </p>
                          <p>
                            Yet another one, at{" "}
                            <span className="text-success">15:00 PM</span>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-danger"> {" "} </i>
                          }>
                          <h4 className="timeline-title">
                            Build the production release
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                            incididunt ut labore et dolore magna elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-primary"> {" "} </i>
                          }>
                          <h4 className="timeline-title text-success">
                            Something not important
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-success"> {" "} </i>
                          }>
                          <h4 className="timeline-title">All Hands Meeting</h4>
                          <p>
                            Lorem ipsum dolor sic amet, today at{" "}
                            <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                              12:00 PM
                            </a>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-warning"> {" "} </i>
                          }>
                          <p>
                            Another meeting today, at{" "}
                            <b className="text-danger">12:00 PM</b>
                          </p>
                          <p>
                            Yet another one, at{" "}
                            <span className="text-success">15:00 PM</span>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-danger"> {" "} </i>
                          }>
                          <h4 className="timeline-title">
                            Build the production release
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                            incididunt ut labore et dolore magna elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-primary"> {" "} </i>
                          } >
                          <h4 className="timeline-title text-success">
                            Something not important
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-success"> {" "} </i>
                          }>
                          <h4 className="timeline-title">All Hands Meeting</h4>
                          <p>
                            Lorem ipsum dolor sic amet, today at{" "}
                            <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                              12:00 PM
                            </a>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-warning"> {" "} </i>
                          }>
                          <p>
                            Another meeting today, at{" "}
                            <b className="text-danger">12:00 PM</b>
                          </p>
                          <p>
                            Yet another one, at{" "}
                            <span className="text-success">15:00 PM</span>
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-danger"> {" "} </i>
                          }>
                          <h4 className="timeline-title">
                            Build the production release
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                            incididunt ut labore et dolore magna elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <i className="badge badge-dot badge-dot-xl bg-primary"> {" "} </i>
                          }>
                          <h4 className="timeline-title text-success">
                            Something not important
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                      </VerticalTimeline>
                    </CardBody>
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

export default TimelineDotBadge;
