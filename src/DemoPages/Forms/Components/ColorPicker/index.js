import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, Button } from "reactstrap";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import {
  SketchPicker,
  CompactPicker,
  SwatchesPicker,
  TwitterPicker,
  CirclePicker,
  HuePicker,
  AlphaPicker,
  BlockPicker,
} from "react-color";

export default class FormColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  render() {
    const popover = {
      position: "absolute",
      zIndex: "2",
    };
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    };
    return (
      <Fragment>
        <PageTitle heading="Forms Color Picker"
          subheading="Color Pickers following the design from Photoshop, Sketch, Chrome, Twitter and more."
          icon="pe-7s-drawer icon-gradient bg-happy-itmeo"/>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row className="mt-2">
              <Col md="4">
                <Card className="main-card mb-3">
                  <CardBody>
                    <Button color="primary btn-wide btn-shadow" onClick={this.handleClick}>
                      Pick Color
                    </Button>
                    {this.state.displayColorPicker ? (
                      <div style={popover}>
                        <div style={cover} onClick={this.handleClose} />
                        <TwitterPicker />
                      </div>
                    ) : null}
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <SketchPicker className="mx-auto mb-4" />
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="main-card mb-3">
                  <CardBody>
                    <SwatchesPicker className="mx-auto" />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <BlockPicker className="mx-auto" />
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CirclePicker className="mx-auto" />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CompactPicker className="mx-auto" />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <HuePicker className="mx-auto mb-3" />
                    <AlphaPicker className="mx-auto" />
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
