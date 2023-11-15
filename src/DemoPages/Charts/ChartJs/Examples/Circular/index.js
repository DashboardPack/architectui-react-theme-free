import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DoughnutExample from "../doughnut";
import PieExample from "../pie";
import DynamicDoughnutExample from "../dynamicDoughnut";
import RadarExample from "../radar";
import PolarExample from "../polar";

import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

export default class ChartJsCircular extends React.Component {
  componentDidMount() {
    window.removeEventListener("keyup", this.keyHandling);
  }

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
                      <CardTitle>Doughnut</CardTitle>
                      <DoughnutExample />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Dynamic Doughnut Chart</CardTitle>
                      <DynamicDoughnutExample />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Radar Chart</CardTitle>
                      <RadarExample />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Polar Chart</CardTitle>
                      <PolarExample />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Pie Chart</CardTitle>
                      <PieExample />
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
