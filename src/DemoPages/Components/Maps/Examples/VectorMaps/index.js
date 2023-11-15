import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

// Examples

import VectorMapsBasic from "./Basic";
import VectorMapsMarkers from "./Markers";

class VectorMapsExample extends React.Component {
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
                      <CardTitle>Basic</CardTitle>
                      <VectorMapsBasic />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Markers</CardTitle>
                      <VectorMapsMarkers />
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

export default VectorMapsExample;
