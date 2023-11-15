import React, { Component, Fragment } from "react";
import SweetAlert from 'react-bootstrap-sweetalert';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Row, Col, Card, CardBody, Button, CardTitle } from "reactstrap";

export default class SweetAlerts extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      message34:false,
      message32: false,
      message33: false,
      message1: false,
      message2: false,
      message4: false,
      message7: false,
    };
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <Row>
                <Col md="3">
                  <Card className="mb-3 text-center">
                    <CardBody>
                      <CardTitle>Success</CardTitle>
                      <Button color="success" onClick={() => this.setState({ show: true })}>
                        Show Alert
                      </Button>
                      <SweetAlert title="Good job!"  show={this.state.show}
                      type="success" onConfirm={() => this.setState({ show: false })}/>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="mb-3 text-center">
                    <CardBody>
                      <CardTitle>Danger</CardTitle>
                      <Button color="danger" onClick={() => this.setState({ message34: true })}>
                        Show Alert
                      </Button>
                      <SweetAlert title="Good job!"  show={this.state.message34}
                      type="error" onConfirm={() => this.setState({ message34: false })}/>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="mb-3 text-center">
                    <CardBody>
                      <CardTitle>Info</CardTitle>
                      <Button color="info" onClick={() => this.setState({ message32: true })}>
                        Show Alert
                      </Button>
                      <SweetAlert title="Good job!"  show={this.state.message32}
                        type="info" onConfirm={() => this.setState({ message32: false })}/>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="mb-3 text-center">
                    <CardBody>
                      <CardTitle>Warning</CardTitle>
                      <Button color="warning" onClick={() => this.setState({ message33: true })}>
                        Show Alert
                      </Button>
                      <SweetAlert title="Good job!"  show={this.state.message33}
                        type="warning" onConfirm={() => this.setState({ message33: false })}/>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Card className="mb-3 text-center">
                    <CardBody>
                      <CardTitle>Basic</CardTitle>
                      <Button color="primary" onClick={() => this.setState({ message1: true })}>
                        Show Alert
                      </Button>
                      <SweetAlert title="Here's a message!"
                        show={this.state.message1} onConfirm={() => this.setState({ message1: false })} />
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="mb-3 text-center">
                    <CardBody>
                      <CardTitle>Title & Text</CardTitle>
                      <Button color="primary" onClick={() => this.setState({ message2: true })}>
                        Show Alert
                      </Button>
                      <SweetAlert title="Here's a message!" show={this.state.message2}
                        onConfirm={() => this.setState({ message2: false })}>
                        It's pretty, isn't it?
                      </SweetAlert>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="mb-3 text-center">
                    <CardBody>
                      <CardTitle>HTML Description</CardTitle>
                      <Button color="primary" onClick={() => this.setState({ message4: true })}>
                        Show Alert
                      </Button>
                      <SweetAlert
                        title={<span>HTML <small>Title</small>!</span>}
                        show={this.state.message4}
                        onConfirm={() => this.setState({ message4: false })}
                      >
                        <span>A custom <span style={{color:'#F8BB86'}}>html</span> message.</span>
                      </SweetAlert>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="mb-3 text-center">
                    <CardBody>
                      <CardTitle>Auto Close Timer</CardTitle>
                      <Button color="primary"
                        onClick={() => {
                          this.setState({ message7: true });
                          setTimeout(() => {
                            this.setState({ message7: false });
                          }, 2000);
                        }}>
                        Show Alert
                      </Button>
                      <SweetAlert
                        success
                        title="Success Data!"
                        show={this.state.message7}
                        onConfirm={() => this.setState({ message7: false })}
                        timeout={2000}
                      >
                        This success message will automatically close after 2 seconds
                      </SweetAlert>
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
