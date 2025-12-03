import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import FadeVisibility from "./Examples/Fade";

export default class ScreenVisibilityExamples extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Screen Visibility Sensor"
          subheading="Add Animate.css animations on the fly for your components."
          icon="pe-7s-wristwatch icon-gradient bg-deep-blue"/>
        <Row>
          <Col md="12">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Fade Animation</CardTitle>
              </CardBody>
              <FadeVisibility />
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
