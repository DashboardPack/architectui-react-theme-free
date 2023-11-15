import React, { Component, Fragment } from "react";

import { CKEditor } from "ckeditor4-react";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

export default class FormCkEditorEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "Hello World",
    };
    this.setContent = this.setContent.bind(this);
  }

  //------ Test for race condition ------ //
  setContent() {
    this.setState({
      content: "Hello World " + Math.random(),
    });
  }

  onChange(evt) {}

  onBlur(evt) {}

  afterPaste(evt) {}

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="12">
                <Card>
                  <CardBody>
                    <CardTitle>CkEditor</CardTitle>
                    <CKEditor initData="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>" />
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
