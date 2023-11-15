import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

// Examples

import FormDropZoneExample1 from "./Examples/example1";

class FormDropZone extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="DropZone"
          subheading="Create drag & drop zones for uploading files."
          icon="pe-7s-ticket icon-gradient bg-happy-fisher"/>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Basic</CardTitle>
                    <FormDropZoneExample1 />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default FormDropZone;
