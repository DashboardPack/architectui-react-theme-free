import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";

import { Combobox } from "react-widgets";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let colors = ["Orange", "Red", "Blue", "Purple"];

library.add(faSpinner);

class FormComboboxExample extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      value: [],
      people: colors,
    };
  }

  handleCreate(name) {
    let { people, value } = this.state;

    let newOption = {
      name,
      id: people.length + 1,
    };

    this.setState({
      value: [...value, newOption], // select new option
      people: [...people, newOption], // add new option to our dataset
    });
  }

  render() {
    let { value, people } = this.state;
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Dropdown</CardTitle>
                      <Row form>
                        <Col md={12}>
                          <Combobox data={people} value={value} allowCreate="onFilter"
                            onChange={(value) => this.setState({ value })} textField="name"/>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Loading States</CardTitle>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleEmail">Default Loading Icon</Label>
                            <Combobox busy />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="examplePassword">FontAwesome Icons</Label>
                            <Combobox busy busySpinner={
                                <FontAwesomeIcon className="text-primary" spin icon="spinner"/>
                              }/>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="examplePassword">Regular Input</Label>
                            <Input type="text" name="address2" id="examplePassword" placeholder="Apartment, studio, or floor"/>
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>DropUp</CardTitle>
                      <Row form>
                        <Col md={12}>
                          <Combobox data={["Orange", "Red", "Blue", "Purple"]} />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Disabled</CardTitle>
                      <Combobox className="mb-3" disabled data={colors} defaultValue={["Orange", "Blue"]}/>
                      <Combobox data={colors} defaultValue={["Orange", "Blue"]} disabled={["Red"]}/>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default FormComboboxExample;
