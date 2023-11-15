import React, { Fragment } from "react";
import { Container, Col, Card, CardBody, CardTitle, Row } from "reactstrap";

import PopoversBasicExample from "./Basic";
import PopoversCustomExample from "./Custom";

const PopoversExample = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col lg="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Popovers Alignments</CardTitle>
                <PopoversBasicExample />
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Custom</CardTitle>
                <PopoversCustomExample />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default PopoversExample;
