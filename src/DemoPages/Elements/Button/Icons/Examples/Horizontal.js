import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";

import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

class ButtonsHorizontalIcons extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Solid P7 Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon" color="primary">
                    <i className="pe-7s-tools btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon" color="secondary">
                    <i className="pe-7s-gym btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon" color="success">
                    <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon" color="info">
                    <i className="pe-7s-science btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon" color="warning">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon" color="danger">
                    <i className="pe-7s-video btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon" color="focus">
                    <i className="pe-7s-upload btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon" color="alternate">
                    <i className="pe-7s-piggy btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon" color="light">
                    <i className="pe-7s-photo btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon" color="dark">
                    <i className="pe-7s-helm btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon" color="link">
                    <i className="pe-7s-settings btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Outline Pill P7 Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="primary">
                    <i className="pe-7s-tools btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="secondary">
                    <i className="pe-7s-gym btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="success">
                    <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="info">
                    <i className="pe-7s-science btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="warning">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="danger">
                    <i className="pe-7s-video btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="focus">
                    <i className="pe-7s-upload btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="alternate">
                    <i className="pe-7s-piggy btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="light">
                    <i className="pe-7s-photo btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="dark">
                    <i className="pe-7s-helm btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" outline color="link">
                    <i className="pe-7s-settings btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Shadow Dashed P7 Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="primary">
                    <i className="pe-7s-tools btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="secondary">
                    <i className="pe-7s-gym btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="success">
                    <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="info">
                    <i className="pe-7s-science btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="warning">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="danger">
                    <i className="pe-7s-video btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="focus">
                    <i className="pe-7s-upload btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="alternate">
                    <i className="pe-7s-piggy btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="light">
                    <i className="pe-7s-photo btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="dark">
                    <i className="pe-7s-helm btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-dashed" outline color="link">
                    <i className="pe-7s-settings btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Linecons Icons Square Buttons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="primary">
                    <i className="lnr-license btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="secondary">
                    <i className="lnr-map btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="success">
                    <i className="lnr-music-note btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="info">
                    <i className="lnr-heart btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="warning">
                    <i className="lnr-magic-wand btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="danger">
                    <i className="lnr-lighter btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="focus">
                    <i className="lnr-dice btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="alternate">
                    <i className="lnr-apartment btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="light">
                    <i className="lnr-database btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="dark">
                    <i className="lnr-location btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-square" color="link">
                    <i className="lnr-inbox btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Outline 2x Shadow Linecons Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="primary">
                    <i className="lnr-store btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="secondary">
                    <i className="lnr-book btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="success">
                    <i className="lnr-user btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="info">
                    <i className="lnr-paperclip btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="warning">
                    <i className="lnr-screen btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="danger">
                    <i className="lnr-smartphone btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="focus">
                    <i className="lnr-phone btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="alternate">
                    <i className="lnr-keyboard btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="light">
                    <i className="lnr-dinner btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="dark">
                    <i className="lnr-earth btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-shadow btn-outline-2x" outline color="link">
                    <i className="lnr-car btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Solid Pills Linecons Icons</CardTitle>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="primary">
                    <i className="lnr-hand btn-icon-wrapper"> </i>
                    Primary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="secondary">
                    <i className="lnr-funnel btn-icon-wrapper"> </i>
                    Secondary
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="success">
                    <i className="lnr-crop btn-icon-wrapper"> </i>
                    Success
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="info">
                    <i className="lnr-drop btn-icon-wrapper"> </i>
                    Info
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="warning">
                    <i className="lnr-enter btn-icon-wrapper"> </i>
                    Warning
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="danger">
                    <i className="lnr-eye btn-icon-wrapper"> </i>
                    Danger
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="focus">
                    <i className="lnr-graduation-hat btn-icon-wrapper"> </i>
                    Focus
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="alternate">
                    <i className="lnr-file-empty btn-icon-wrapper"> </i>
                    Alt
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="light">
                    <i className="lnr-camera btn-icon-wrapper"> </i>
                    Light
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="dark">
                    <i className="lnr-picture btn-icon-wrapper"> </i>
                    Dark
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-pill" color="link">
                    <i className="lnr-book btn-icon-wrapper"> </i>
                    link
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Block Level</CardTitle>
                  <Button block className="mb-2 me-2 btn-icon" size="lg" color="primary">
                    <i className="lnr-picture btn-icon-wrapper"> </i>
                    Block Large
                  </Button>
                  <Button block className="mb-2 me-2 btn-icon" color="primary">
                    <i className="lnr-crop btn-icon-wrapper"> </i>
                    Block Normal
                  </Button>
                  <Button block className="mb-2 me-2 btn-icon" size="sm" color="primary">
                    <i className="lnr-paperclip btn-icon-wrapper"> </i>
                    Block Small
                  </Button>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Sizing</CardTitle>
                  <div className="text-center">
                    <Button className="btn-wide mb-2 me-2 btn-icon" size="lg" color="primary">
                      <i className="pe-7s-science btn-icon-wrapper"> </i>
                      Large
                    </Button>
                    <Button className="btn-wide mb-2 me-2 btn-icon" color="primary">
                      <i className="pe-7s-volume btn-icon-wrapper"> </i>
                      Normal
                    </Button>
                    <Button className="btn-wide mb-2 me-2 btn-icon" size="sm" color="primary">
                      <i className="pe-7s-tools btn-icon-wrapper"> </i>
                      Small
                    </Button>
                  </div>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Right Icon</CardTitle>
                  <div className="text-center">
                    <Button className="btn-wide mb-2 me-2 btn-icon btn-icon-right btn-pill" size="lg" color="warning">
                      Large
                      <i className="pe-7s-science btn-icon-wrapper"> </i>
                    </Button>
                    <Button className="btn-wide mb-2 me-2 btn-icon btn-icon-right btn-shadow btn-pill" outline color="success">
                      Normal
                      <i className="pe-7s-volume btn-icon-wrapper"> </i>
                    </Button>
                    <Button className="btn-wide mb-2 me-2 btn-icon btn-icon-right btn-dashed btn-pill" outline size="sm" color="danger">
                      Small
                      <i className="pe-7s-tools btn-icon-wrapper"> </i>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Icons Only</CardTitle>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="primary">
                    <i className="pe-7s-tools btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="secondary">
                    <i className="pe-7s-gym btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="success">
                    <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="info">
                    <i className="pe-7s-science btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="warning">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="danger">
                    <i className="pe-7s-video btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="focus">
                    <i className="pe-7s-upload btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="alternate">
                    <i className="pe-7s-piggy btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="light">
                    <i className="pe-7s-photo btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="dark">
                    <i className="pe-7s-helm btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only" color="link">
                    <i className="pe-7s-settings btn-icon-wrapper"> </i>
                  </Button>
                  <div className="divider" />
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="primary">
                    <i className="pe-7s-tools btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="secondary">
                    <i className="pe-7s-gym btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="success">
                    <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="info">
                    <i className="pe-7s-science btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="warning">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="danger">
                    <i className="pe-7s-video btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="focus">
                    <i className="pe-7s-upload btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="alternate">
                    <i className="pe-7s-piggy btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="light">
                    <i className="pe-7s-photo btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="dark">
                    <i className="pe-7s-helm btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" outline color="link">
                    <i className="pe-7s-settings btn-icon-wrapper"> </i>
                  </Button>
                  <div className="divider" />
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="primary">
                    <i className="pe-7s-tools btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="secondary">
                    <i className="pe-7s-gym btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="success">
                    <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="info">
                    <i className="pe-7s-science btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="warning">
                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="danger">
                    <i className="pe-7s-video btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="focus">
                    <i className="pe-7s-upload btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="alternate">
                    <i className="pe-7s-piggy btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="light">
                    <i className="pe-7s-photo btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="dark">
                    <i className="pe-7s-helm btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-dashed" outline color="link">
                    <i className="pe-7s-settings btn-icon-wrapper"> </i>
                  </Button>
                  <div className="divider" />
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="primary">
                    <i className="lnr-license btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="secondary">
                    <i className="lnr-map btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="success">
                    <i className="lnr-music-note btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="info">
                    <i className="lnr-heart btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="warning">
                    <i className="lnr-magic-wand btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="danger">
                    <i className="lnr-lighter btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="focus">
                    <i className="lnr-dice btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="alternate">
                    <i className="lnr-apartment btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="light">
                    <i className="lnr-database btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="dark">
                    <i className="lnr-location btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-square" color="link">
                    <i className="lnr-inbox btn-icon-wrapper"> </i>
                  </Button>
                  <div className="divider" />
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="primary">
                    <i className="lnr-store btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="secondary">
                    <i className="lnr-book btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="success">
                    <i className="lnr-user btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="info">
                    <i className="lnr-paperclip btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="warning">
                    <i className="lnr-screen btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="danger">
                    <i className="lnr-smartphone btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="focus">
                    <i className="lnr-phone btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="alternate">
                    <i className="lnr-keyboard btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="light">
                    <i className="lnr-dinner btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="dark">
                    <i className="lnr-earth btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" outline color="link">
                    <i className="lnr-car btn-icon-wrapper"> </i>
                  </Button>
                  <div className="divider" />
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="primary">
                    <i className="lnr-hand btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="secondary">
                    <i className="lnr-funnel btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="success">
                    <i className="lnr-crop btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="info">
                    <i className="lnr-drop btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="warning">
                    <i className="lnr-enter btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="danger">
                    <i className="lnr-eye btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="focus">
                    <i className="lnr-graduation-hat btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="alternate">
                    <i className="lnr-file-empty btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="light">
                    <i className="lnr-camera btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="dark">
                    <i className="lnr-picture btn-icon-wrapper"> </i>
                  </Button>
                  <Button className="mb-2 me-2 btn-icon btn-icon-only btn-pill" color="link">
                    <i className="lnr-book btn-icon-wrapper"> </i>
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ButtonsHorizontalIcons;
