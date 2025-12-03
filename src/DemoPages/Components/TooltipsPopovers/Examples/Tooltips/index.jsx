import React, { Fragment } from "react";
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

import TooltipExampleDark from "./TooltipDark";
import TooltipExampleLight from "./TooltipLight";

const TooltipsExample = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col lg="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Dark Tooltips</CardTitle>
                <TooltipExampleDark />
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Light Tooltips</CardTitle>
                <TooltipExampleLight />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TooltipsExample;
