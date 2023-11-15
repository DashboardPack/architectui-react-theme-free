import React, { Component, Fragment } from "react";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

// Examples
import Area from "./Area";
import Bar from "./Bar";
// import Column from './Column';
// import Line from './Line';
import Donut from "./Donut";
import RadialBar from "./RadialBar";

export default class ApexChartsBasic extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md="6">
            <Card className="mb-3">
              <CardBody>
                <CardTitle>Line</CardTitle>
                <Area />
              </CardBody>
            </Card>
            <Card className="mb-3">
              <CardBody>
                <CardTitle>Donut</CardTitle>
                <Donut />
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="mb-3">
              <CardBody>
                <CardTitle>RadialBar</CardTitle>
                <RadialBar />
              </CardBody>
            </Card>
            <Card className="mb-3">
              <CardBody>
                <CardTitle>Bar</CardTitle>
                <Bar />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
