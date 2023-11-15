import React, { Component, Fragment } from "react";
import Loader from "react-loaders";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

class LoadersBasicExample extends Component {
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
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-pulse" />
                        </div>
                        <p>ball-pulse</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-grid-pulse" />
                        </div>
                        <p>ball-grid-pulse</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-clip-rotate" />
                        </div>
                        <p>ball-clip-rotate</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-clip-rotate-pulse" />
                        </div>
                        <p>ball-clip-rotate-pulse</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="square-spin" />
                        </div>
                        <p>square-spin</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-clip-rotate-multiple" />
                        </div>
                        <p>ball-clip-rotate-multiple</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-pulse-rise" />
                        </div>
                        <p>ball-pulse-rise</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-rotate" />
                        </div>
                        <p>ball-rotate</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="cube-transition" />
                        </div>
                        <p>cube-transition</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-zig-zag" />
                        </div>
                        <p>ball-zig-zag</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-zig-zag-deflect" />
                        </div>
                        <p>ball-zig-zag-deflect</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-triangle-path" />
                        </div>
                        <p>ball-triangle-path</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-scale" />
                        </div>
                        <p>ball-scale</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="line-scale" />
                        </div>
                        <p>line-scale</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="line-scale-party" />
                        </div>
                        <p>line-scale-party</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-scale-multiple" />
                        </div>
                        <p>ball-scale-multiple</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-pulse-sync" />
                        </div>
                        <p>ball-pulse-sync</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-beat" />
                        </div>
                        <p>ball-beat</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="line-scale-pulse-out" />
                        </div>
                        <p>line-scale-pulse-out</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="line-scale-pulse-out-rapid" />
                        </div>
                        <p>line-scale-pulse-out-rapid</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-scale-ripple" />
                        </div>
                        <p>ball-scale-ripple</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-scale-ripple-multiple" />
                        </div>
                        <p>ball-scale-ripple-multiple</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-spin-fade-loader" />
                        </div>
                        <p>ball-spin-fade-loader</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="line-spin-fade-loader" />
                        </div>
                        <p>line-spin-fade-loader</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="triangle-skew-spin" />
                        </div>
                        <p>angle-skew-spin</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="pacman" />
                        </div>
                        <p>pacman</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="ball-grid-beat" />
                        </div>
                        <p>ball-grid-beat</p>
                      </div>
                      <div className="font-icon-wrapper float-start me-3 mb-3">
                        <div className="loader-wrapper d-flex justify-content-center align-items-center">
                          <Loader type="semi-circle-spin" />
                        </div>
                        <p>semi-circle-spin</p>
                      </div>
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

export default LoadersBasicExample;
