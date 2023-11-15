import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Card,
  CardBody,
  FormText,
  CardTitle,
  Button,
  InputGroup,
  Input,
} from "reactstrap";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { faCopy } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

export default class FormClipboard extends React.Component {
  state = {
    value:
      "Write here the text that you are copying. \n This is a new text line!",
    copied: false,
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value, copied: false });
  };

  onClick = ({ target: { innerHTML } }) => {
    console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  render() {
    return (
      <Fragment>
        <PageTitle heading="Clipboard"
          subheading="You can copy/paste text with this React form widget."
          icon="pe-7s-phone icon-gradient bg-premium-dark"/>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Text to Copy</CardTitle>
                    <textarea onChange={this.onChange} rows={2} cols={10}
                      className="form-control" value={this.state.value}/>
                    {this.state.copied ? (
                      <div className="text-center">
                        <h5 className="text-success mt-2">Copied.</h5>
                      </div>
                    ) : null}
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Input Group Copy</CardTitle>
                    <InputGroup>
                      <Input value={this.state.value} onChange={this.onChange} />
                      <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
                        <Button color="primary">
                          <FontAwesomeIcon icon={faCopy} />
                        </Button>
                      </CopyToClipboard>
                    </InputGroup>
                    {this.state.copied ? (
                      <FormText color="success">Text has been copied.</FormText>
                    ) : null}
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Button Copy</CardTitle>
                    <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
                      <Button color="primary" className="btn-shadow btn-pill btn-wide">
                        Copy to clipboard with button
                      </Button>
                    </CopyToClipboard>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Element Copy</CardTitle>
                    <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
                      <span>Copy to clipboard with span</span>
                    </CopyToClipboard>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>onClick Copy</CardTitle>
                    <CopyToClipboard onCopy={this.onCopy} options={{ message: "Whoa!" }} text={this.state.value}>
                      <Button color="primary" className="btn-shadow btn-pill btn-wide" onClick={this.onClick}>
                        Copy to clipboard with onClick prop
                      </Button>
                    </CopyToClipboard>
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
