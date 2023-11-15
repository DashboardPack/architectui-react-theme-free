import React, { Component, Fragment } from "react";
import { Button, Container } from "reactstrap";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

class BadgesExamples extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>With Buttons</CardTitle>
                      <Button className="mb-2 me-2" color="primary">
                        Primary
                        <span className="badge rounded-pill bg-light">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="secondary">
                        Secondary
                        <span className="badge rounded-pill bg-light">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="success">
                        Success
                        <span className="badge rounded-pill bg-light">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="info">
                        Info
                        <span className="badge rounded-pill bg-light">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="warning">
                        Warning
                        <span className="badge rounded-pill bg-light">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="danger">
                        Danger
                        <span className="badge rounded-pill bg-light">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="focus">
                        Focus
                        <span className="badge rounded-pill bg-light">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="alternate">
                        Alt
                        <span className="badge rounded-pill bg-light">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="light">
                        Light
                        <span className="badge rounded-pill bg-light">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="dark">
                        Dark
                        <span className="badge rounded-pill bg-light">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="link">
                        Link 1
                        <span className="badge rounded-pill bg-primary">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="link">
                        Link 2
                        <span className="badge rounded-pill bg-success">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="link">
                        Link 3
                        <span className="badge rounded-pill bg-danger">6</span>
                      </Button>
                      <Button className="mb-2 me-2" color="link">
                        Link 4
                        <span className="badge rounded-pill bg-warning">6</span>
                      </Button>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Badge Dots</CardTitle>
                      <Row className="text-center">
                        <Col md="4">
                          <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-primary">
                            Primary
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-secondary">
                            Secondary
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-success">
                            Success
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-info">
                            Info
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-warning">
                            Warning
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-danger">
                            Danger
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-focus">
                            Focus
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-alternate">
                            Alt
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-dark">
                            Dark
                          </div>
                        </Col>
                        <Col md="4">
                          <div className="mb-2 me-2 badge badge-dot bg-primary">
                            Primary
                          </div>
                          <div className="mb-2 me-2 badge badge-dot bg-secondary">
                            Secondary
                          </div>
                          <div className="mb-2 me-2 badge badge-dot bg-success">
                            Success
                          </div>
                          <div className="mb-2 me-2 badge badge-dot bg-info">
                            Info
                          </div>
                          <div className="mb-2 me-2 badge badge-dot bg-warning">
                            Warning
                          </div>
                          <div className="mb-2 me-2 badge badge-dot bg-danger">
                            Danger
                          </div>
                          <div className="mb-2 me-2 badge badge-dot bg-focus">
                            Focus
                          </div>
                          <div className="mb-2 me-2 badge badge-dot bg-alternate">
                            Alt
                          </div>
                          <div className="mb-2 me-2 badge badge-dot bg-dark">
                            Dark
                          </div>
                        </Col>
                        <Col md="4">
                          <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-primary">
                            Primary
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-secondary">
                            Secondary
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-success">
                            Success
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-info">
                            Info
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-warning">
                            Warning
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-danger">
                            Danger
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-focus">
                            Focus
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-alternate">
                            Alt
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-dark">
                            Dark
                          </div>
                        </Col>
                      </Row>
                      <div className="divider" />
                      <Row>
                        <Col md="12">
                          <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-primary">
                            Primary
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-secondary">
                            Secondary
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-success">
                            Success
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-info">
                            Info
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-warning">
                            Warning
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-danger">
                            Danger
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-focus">
                            Focus
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-alternate">
                            Alt
                          </div>
                          <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-dark">
                            Dark
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Badge Dots Buttons</CardTitle>
                      <Button className="mb-2 me-2" color="primary">
                        Primary
                        <span className="badge bg-secondary badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="secondary">
                        Secondary
                        <span className="badge bg-primary badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="success">
                        Success
                        <span className="badge bg-success badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="info">
                        Info
                        <span className="badge bg-info badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="warning">
                        Warning
                        <span className="badge bg-warning badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="danger">
                        Danger
                        <span className="badge bg-focus badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="focus">
                        Focus
                        <span className="badge bg-danger badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="alternate">
                        Alt
                        <span className="badge bg-alternate badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="light">
                        Light
                        <span className="badge bg-success badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="dark">
                        Dark
                        <span className="badge bg-primary badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="link">
                        Link 1
                        <span className="badge bg-primary badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="link">
                        Link 2
                        <span className="badge bg-success badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="link">
                        Link 3
                        <span className="badge bg-danger badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                      <Button className="mb-2 me-2" color="link">
                        Link 4
                        <span className="badge bg-warning badge-dot badge-dot-lg"> {" "} </span>
                      </Button>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Icon Buttons with Badges</CardTitle>
                      <button className="mb-2 me-2 btn-icon btn-icon-only btn btn-link btn-sm">
                        <i className="pe-7s-settings btn-icon-wrapper font-size-xlg"> {" "} </i>
                        <span className="badge bg-warning badge-dot badge-dot-sm"> {" "} </span>
                      </button>
                      <button className="mb-2 me-2 btn-icon btn-icon-only btn btn-link btn-sm">
                        <i className="lnr-license btn-icon-wrapper font-size-xlg"> {" "} </i>
                        <span className="badge bg-primary badge-dot badge-dot"> {" "} </span>
                      </button>
                      <button className="mb-2 me-4 btn-icon btn-icon-only btn btn-link btn-sm">
                        <i className="lnr-map btn-icon-wrapper font-size-xlg"> {" "} </i>
                        <span className="badge bg-success badge-dot badge-dot-lg"> {" "} </span>
                      </button>
                      <button className="mb-2 me-2 btn-icon btn-icon-only btn btn-link btn-sm">
                        <i className="pe-7s-settings btn-icon-wrapper font-size-xlg"> {" "} </i>
                        <span className="badge rounded-pill bg-warning">2</span>
                      </button>
                      <button className="mb-2 me-2 btn-icon btn-icon-only btn btn-link btn-sm">
                        <i className="lnr-license btn-icon-wrapper font-size-xlg"> {" "} </i>
                        <span className="badge rounded-pill bg-primary">3</span>
                      </button>
                      <button className="mb-2 me-2 btn-icon btn-icon-only btn btn-link btn-sm">
                        <i className="lnr-map btn-icon-wrapper font-size-xlg"> {" "} </i>
                        <span className="badge rounded-pill bg-success">5</span>
                      </button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Icon Buttons Grids I</CardTitle>
                      <div className="grid-menu grid-menu-3col">
                        <Row className="g-0">
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="primary">
                              <i className="lnr-license btn-icon-wrapper"> </i>
                              <span className="badge bg-primary badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                              Primary
                            </Button>
                          </Col>
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="secondary">
                              <i className="lnr-map btn-icon-wrapper"> </i>
                              <span className="badge bg-success badge-dot badge-dot-inside"> {" "} </span>
                              Secondary
                            </Button>
                          </Col>
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="success">
                              <i className="lnr-music-note btn-icon-wrapper"> </i>
                              <span className="badge bg-danger badge-dot badge-dot-inside"> {" "} </span>
                              Success
                            </Button>
                          </Col>
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square  br-tr btn-transition" outline color="info" >
                              <i className="lnr-heart btn-icon-wrapper"> </i>
                              <span className="badge bg-warning badge-dot badge-dot-inside"> {" "} </span>
                              Info
                            </Button>
                          </Col>
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square  br-bl btn-transition" outline color="warning">
                              <i className="lnr-magic-wand btn-icon-wrapper"> </i>
                              <span className="badge bg-primary badge-dot badge-dot-inside"> {" "} </span>
                              Warning
                            </Button>
                          </Col>
                          <Col xl="4" sm="6">
                            <Button className="btn-icon-vertical btn-square btn-transition" outline color="danger">
                              <i className="lnr-lighter btn-icon-wrapper"> </i>
                              <span className="badge bg-success badge-dot badge-dot-inside"> {" "} </span>
                              Danger
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Icon Buttons Grids II</CardTitle>
                      <div className="grid-menu grid-menu-2col">
                        <Row className="g-0">
                          <Col sm="6">
                            <Button className="btn-icon-vertical btn-transition" outline color="link">
                              <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                              <span className="badge bg-info badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                              Primary
                            </Button>
                          </Col>
                          <Col sm="6">
                            <Button className="btn-icon-vertical btn-transition " outline color="link">
                              <i className="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                              <span className="badge bg-info badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                              Secondary
                            </Button>
                          </Col>
                          <Col sm="6">
                            <Button className="btn-icon-vertical btn-transition " outline color="link">
                              <i className="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                              <span className="badge bg-alternate badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                              Success
                            </Button>
                          </Col>
                          <Col sm="6">
                            <Button className="btn-icon-vertical btn-transition " outline color="link">
                              <i className="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                              <span className="badge bg-warning badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                              Info
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Icon Buttons Grids III</CardTitle>
                      <Row>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical mb-3 btn-transition" outline color="primary">
                            <i className="lnr-license btn-icon-wrapper"> </i>
                            <span className="badge bg-primary badge-dot badge-dot-sm badge-dot-inside"> {" "} </span>
                            Primary
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical mb-3 btn-transition" outline color="secondary">
                            <i className="lnr-map btn-icon-wrapper"> </i>
                            <span className="badge bg-success badge-dot badge-dot-sm badge-dot-inside"> {" "} </span>
                            Secondary
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical mb-3 btn-transition" outline color="success">
                            <i className="lnr-music-note btn-icon-wrapper"> </i>
                            <span className="badge bg-danger badge-dot badge-dot-inside"> {" "} </span>
                            Success
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical mb-3 btn-transition" outline color="info">
                            <i className="lnr-heart btn-icon-wrapper"> </i>
                            <span className="badge bg-warning badge-dot badge-dot-inside"> {" "} </span>
                            Info
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical mb-3 btn-transition" outline color="warning">
                            <i className="lnr-magic-wand btn-icon-wrapper"> </i>
                            <span className="badge bg-info badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                            Warning
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical mb-3 btn-transition" outline color="danger">
                            <i className="lnr-lighter btn-icon-wrapper"> </i>
                            <span className="badge bg-dark badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                            Danger
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical mb-3 btn-transition" outline color="focus">
                            <i className="lnr-dice btn-icon-wrapper"> </i>
                            <span className="badge bg-focus badge-dot badge-dot-sm badge-dot-inside"> {" "} </span>
                            Focus
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical mb-3 btn-transition" outline color="dark">
                            <i className="lnr-location btn-icon-wrapper"> </i>
                            <span className="badge bg-alternate badge-dot badge-dot-inside"> {" "}</span>
                            Dark
                          </Button>
                        </Col>
                      </Row>
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

export default BadgesExamples;
