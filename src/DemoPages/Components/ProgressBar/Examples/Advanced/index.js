import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Progress } from "react-sweet-progress";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup,
  Container,
} from "reactstrap";

export default class ProgressBarAdvancedExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: props.percent || 55,
    };
  }

  onDecClick = () => {
    this.setState({
      percent: this.state.percent - 10 > 0 ? this.state.percent - 10 : 0,
    });
  };

  onIncClick = () => {
    this.setState({
      percent: this.state.percent + 10 < 100 ? this.state.percent + 10 : 100,
    });
  };

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
                      <CardTitle>Colors</CardTitle>
                      <Progress className="mb-3" percent={this.state.percent} theme={this.props.theme}
                        width={this.props.width} strokeWidth={this.props.strokeWidth}/>

                      <Progress className="mb-3" percent={this.state.percent} status="success"
                        theme={this.props.theme} width={this.props.width} strokeWidth={this.props.strokeWidth}/>

                      <Progress percent={this.state.percent} status="error" theme={this.props.theme}
                        width={this.props.width} strokeWidth={this.props.strokeWidth}/>
                      <div className="text-center mt-3">
                        <ButtonGroup>
                          <Button onClick={this.onDecClick} color="primary">
                            -
                          </Button>
                          <Button onClick={this.onIncClick} color="primary">
                            +
                          </Button>
                        </ButtonGroup>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Colors</CardTitle>
                      <Progress percent={this.state.percent} width={this.props.width} strokeWidth={this.props.strokeWidth}
                        theme={{
                          error: {
                            symbol: this.state.percent + "%",
                            trailColor: "pink",
                            color: "red",
                          },
                          default: {
                            symbol: this.state.percent + "%",
                            trailColor: "lightblue",
                            color: "blue",
                          },
                          active: {
                            symbol: this.state.percent + "%",
                            trailColor: "yellow",
                            color: "orange",
                          },
                          success: {
                            symbol: this.state.percent + "%",
                            trailColor: "lime",
                            color: "green",
                          },
                        }}/>
                      <div className="text-center mt-3">
                        <ButtonGroup>
                          <Button onClick={this.onDecClick} color="primary">
                            -
                          </Button>
                          <Button onClick={this.onIncClick} color="primary">
                            +
                          </Button>
                        </ButtonGroup>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Circles</CardTitle>
                      <Row className="text-center mb-3">
                        <Col>
                          <Progress percent={this.state.percent} theme={this.props.theme} type="circle"
                            width={90} strokeWidth={this.props.strokeWidth}/>
                        </Col>
                        <Col>
                          <Progress percent={this.state.percent} status="success" theme={this.props.theme}
                            type="circle" width={92} strokeWidth={this.props.strokeWidth}/>
                        </Col>
                        <Col>
                          <Progress percent={this.state.percent} status="error" theme={this.props.theme}
                            type="circle" width={90} strokeWidth={this.props.strokeWidth}/>
                        </Col>
                      </Row>
                      <div className="text-center mt-3">
                        <ButtonGroup>
                          <Button onClick={this.onDecClick} color="primary">
                            -
                          </Button>
                          <Button onClick={this.onIncClick} color="primary">
                            +
                          </Button>
                        </ButtonGroup>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Circle variations</CardTitle>
                      <Row className="text-center">
                        <Col>
                          <Progress type="circle" width={52} percent={62} />
                        </Col>
                        <Col>
                          <Progress type="circle" width={72} percent={23} />
                        </Col>
                        <Col>
                          <Progress type="circle" strokeWidth={2} percent={70} status="error" width={92}/>
                        </Col>
                        <Col>
                          <Progress type="circle" percent={34} width={112} />
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
