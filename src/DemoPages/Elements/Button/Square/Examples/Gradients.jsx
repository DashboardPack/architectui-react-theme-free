import React, { Component, Fragment } from "react";
import { Button, Container, ButtonGroup } from "reactstrap";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

class ButtonsSquareGradients extends Component {
  state = {
    expLeft: false,
    expRight: false,
    expUp: false,
    expDown: false,
    expContract: false,
    expOverlay: false,
    expSlideLeft: false,
    expSlideRight: false,
    expSlideUp: false,
    expSlideDown: false,
    expZoomIn: false,
    expZoomOut: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      cSelected: [],
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    });
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Color States</CardTitle>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-primary">
                    Primary
                  </Button>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-secondary">
                    Secondary
                  </Button>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-success">
                    Success
                  </Button>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-info">
                    Info
                  </Button>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-warning">
                    Warning
                  </Button>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-danger">
                    Danger
                  </Button>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-focus">
                    Focus
                  </Button>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-alternate">
                    Alt
                  </Button>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-light">
                    Light
                  </Button>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-dark">
                    Dark
                  </Button>
                  <Button color="" className="mb-2 me-2 btn-square btn-gradient-link">
                    link
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Active State</CardTitle>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-primary">
                    Primary
                  </Button>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-secondary">
                    Secondary
                  </Button>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-success">
                    Success
                  </Button>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-info">
                    Info
                  </Button>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-warning">
                    Warning
                  </Button>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-danger">
                    Danger
                  </Button>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-focus">
                    Focus
                  </Button>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-alternate">
                    Alt
                  </Button>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-light">
                    Light
                  </Button>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-dark">
                    Dark
                  </Button>
                  <Button color="" active className="mb-2 me-2 btn-square btn-gradient-link">
                    link
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Disabled State</CardTitle>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-primary">
                    Primary
                  </Button>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-secondary">
                    Secondary
                  </Button>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-success">
                    Success
                  </Button>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-info">
                    Info
                  </Button>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-warning">
                    Warning
                  </Button>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-danger">
                    Danger
                  </Button>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-focus">
                    Focus
                  </Button>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-alternate">
                    Alt
                  </Button>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-light">
                    Light
                  </Button>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-dark">
                    Dark
                  </Button>
                  <Button color="" disabled className="mb-2 me-2 btn-square btn-gradient-link">
                    link
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Block Level</CardTitle>
                  <Button color="" block className="mb-2 me-2 btn-square btn-gradient-primary" size="lg">
                    Block Large
                  </Button>
                  <Button color="" block className="mb-2 me-2 btn-square btn-gradient-primary">
                    Block Normal
                  </Button>
                  <Button color="" block className="mb-2 me-2 btn-square btn-gradient-primary" size="sm">
                    Block Small
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Wider</CardTitle>
                  <div className="text-center">
                    <Button color="" className="btn-wide mb-2 me-2 btn-square btn-gradient-primary" size="lg">
                      Wider Large
                    </Button>
                    <Button color="" className="btn-wide mb-2 me-2 btn-square btn-gradient-primary">
                      Wider Normal
                    </Button>
                    <Button color="" className="btn-wide mb-2 me-2 btn-square btn-gradient-primary" size="sm">
                      Wider Small
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Sizing</CardTitle>
                  <div className="text-center">
                    <Button color="" className="mb-2 me-2 btn-square btn-gradient-primary" size="lg">
                      Large
                    </Button>
                    <Button color="" className="mb-2 me-2 btn-square btn-gradient-primary">
                      Normal
                    </Button>
                    <Button color="" className="mb-2 me-2 btn-square btn-gradient-primary" size="sm">
                      Small
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Checkbox Buttons</CardTitle>
                  <div className="text-center">
                    <ButtonGroup size="sm" className="mb-2">
                      <Button color="" className="btn-square btn-gradient-primary"
                        onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>
                        One
                      </Button>
                      <Button color="" className="btn-square btn-gradient-primary"
                        onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>
                        Two
                      </Button>
                      <Button color="" className="btn-square btn-gradient-primary"
                        onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <ButtonGroup className="mb-2">
                      <Button color="" className="btn-square btn-gradient-warning" 
                        onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>
                        One
                      </Button>
                      <Button color="" className="btn-square btn-gradient-warning"
                        onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>
                        Two
                      </Button>
                      <Button color="" className="btn-square btn-gradient-warning"
                        onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <ButtonGroup size="lg" className="mb-2">
                      <Button color="" className="btn-square btn-gradient-alternate"
                        onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>
                        One
                      </Button>
                      <Button color="" className="btn-square btn-gradient-alternate"
                        onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>
                        Two
                      </Button>
                      <Button color="" className="btn-square btn-gradient-alternate"
                        onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Radio Buttons</CardTitle>
                  <div className="text-center">
                    <ButtonGroup size="sm" className="mb-2">
                      <Button color="" className="btn-square btn-gradient-primary"
                        onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>
                        One
                      </Button>
                      <Button color="" className="btn-square btn-gradient-primary"
                        onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>
                        Two
                      </Button>
                      <Button color="" className="btn-square btn-gradient-primary"
                        onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <ButtonGroup className="mb-2">
                      <Button color="" className="btn-square btn-gradient-danger"
                        onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>
                        One
                      </Button>
                      <Button color="" className="btn-square btn-gradient-danger"
                        onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>
                        Two
                      </Button>
                      <Button color=""  className="btn-square btn-gradient-danger"
                        onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <ButtonGroup size="lg" className="mb-2">
                      <Button color="" className="btn-square btn-gradient-alternate"
                        onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>
                        One
                      </Button>
                      <Button color="" className="btn-square btn-gradient-alternate"
                        onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>
                        Two
                      </Button>
                      <Button color="" className="btn-square btn-gradient-alternate"
                        onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <p>Selected: {this.state.rSelected}</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ButtonsSquareGradients;
