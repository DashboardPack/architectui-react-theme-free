import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Select from "react-select";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import makeAnimated from "react-select/animated";

import { colourOptions, groupedOptions } from "./Examples/data";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

class FormMultiSelectBasic extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Single Select</CardTitle>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleEmail">Basic</Label>
                          <Select value={selectedOption} onChange={this.handleChange}  options={options}/>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="examplePassword">Regular Input</Label>
                          <Input type="text" name="address2" id="examplePassword" placeholder="Apartment, studio, or floor"/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Grouped</CardTitle>
                    <Row>
                      <Col md={12}>
                        <FormGroup>
                          <Select defaultValue={colourOptions[1]} options={groupedOptions} formatGroupLabel={formatGroupLabel}/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Multi Select</CardTitle>
                    <Row>
                      <Col md={12}>
                        <FormGroup>
                          <Select defaultValue={[colourOptions[2], colourOptions[3]]} isMulti
                            name="colors" options={colourOptions} className="basic-multi-select" classNamePrefix="select"/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Animated</CardTitle>
                    <Row>
                      <Col md={12}>
                        <FormGroup>
                          <Select closeMenuOnSelect={false} components={makeAnimated()}
                            defaultValue={[colourOptions[4], colourOptions[5]]} isMulti options={colourOptions}/>
                        </FormGroup>
                      </Col>
                    </Row>
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

export default FormMultiSelectBasic;
