import React, { Component, Fragment } from "react";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

// Examples
import Area from "./Area";
import Bar from "./Bar";
// import Column from './Column';
import Line from "./Line";

export default class ApexChartsSparklines extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md="4">
            <Card className="mb-3">
              <CardBody>
                <CardTitle>Area</CardTitle>
                <Area />
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="mb-3">
              <CardBody>
                <CardTitle>Bar</CardTitle>
                <Bar />
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="mb-3">
              <CardBody>
                <CardTitle>Line</CardTitle>
                <Line />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
