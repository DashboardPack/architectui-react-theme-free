import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCoffee, faArchive } from "@fortawesome/free-solid-svg-icons";

class TimelineIconBadge extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Basic</CardTitle>
                      <VerticalTimeline className="vertical-time-icons" layout="1-column">
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <div className="timeline-icon border-primary">
                              <i className="lnr-license icon-gradient bg-night-fade" />
                            </div>
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
                            <div className="timeline-icon border-warning">
                              <i className="lnr-cog fa-spin icon-gradient bg-happy-itmeo" />
                            </div>
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
                            <div className="timeline-icon border-success">
                              <i className="lnr-cloud-upload icon-gradient bg-plum-plate" />
                            </div>
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
                            <div className="timeline-icon border-primary">
                              <i className="lnr-license text-primary" />
                            </div>
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
                            <div className="timeline-icon border-success bg-success">
                              <FontAwesomeIcon icon={faCoffee} className="text-white" />
                            </div>
                          }>
                          <h4 className="timeline-title text-success">
                            FontAwesome Icons
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur elit enim at
                            minim veniam quis nostrud
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-item"
                          icon={
                            <div className="timeline-icon border-warning bg-warning">
                              <FontAwesomeIcon icon={faArchive} className="text-white"/>
                            </div>
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
                            <div className="timeline-icon bg-danger border-danger">
                              <i className="pe-7s-cloud-upload text-white" />
                            </div>
                          }>
                          <p>
                            Another meeting today, at{" "}
                            <b className="text-warning">12:00 PM</b>
                          </p>
                          <p>
                            Yet another one, at{" "}
                            <span className="text-dark">15:00 PM</span>
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

export default TimelineIconBadge;
