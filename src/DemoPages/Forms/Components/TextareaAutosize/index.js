import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import TextareaAutosize from "react-textarea-autosize";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

export default class FormTextareaAutosize extends React.Component {
  constructor(props) {
    super(props);
    let value = new Array(15).join("\nLine.");
    this.state = { value };
  }

  render() {
    return (
      <Fragment>
        <PageTitle heading="Textarea Autosize"
          subheading="Create textareas that grow in height based on their content."
          icon="pe-7s-switch icon-gradient bg-plum-plate"/>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Basic</CardTitle>
                    <TextareaAutosize className="form-control" maxRows={3} />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>With Min/Max Rows</CardTitle>
                    <TextareaAutosize className="form-control" minRows={3} maxRows={6} defaultValue="Just a single line..."/>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Max Rows</CardTitle>
                    <TextareaAutosize className="form-control" maxRows={5} defaultValue="Just a single line..."/>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Max Height</CardTitle>
                    <TextareaAutosize className="form-control" defaultValue="Just a single line..."/>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>With Rows Set</CardTitle>
                    <TextareaAutosize className="form-control" rows={4} defaultValue="Just a single line..."/>
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
