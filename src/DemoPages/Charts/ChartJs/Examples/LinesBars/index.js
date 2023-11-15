import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LineExample from "../line";
import LineExample2 from "../line2";
import BarExample from "../bar";
import HorizontalBarExample from "../horizontalBar";
import MixExample from "../mix";

import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

export default class ChartJsLinesBars extends React.Component {
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
                      <CardTitle>Line Chart</CardTitle>
                      <LineExample />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Animated Line Chart</CardTitle>
                      <MixExample />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Area Chart</CardTitle>
                      <LineExample2 />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Bar Chart</CardTitle>
                      <BarExample />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Horizontal Bar Chart</CardTitle>
                      <HorizontalBarExample />
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
