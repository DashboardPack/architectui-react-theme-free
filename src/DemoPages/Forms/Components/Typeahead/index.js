import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import { Typeahead } from "react-bootstrap-typeahead";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import options from "./Examples/DummyData";

export default class FormTypeahead extends React.Component {
  state = {
    multiple: false,
  };

  render() {
    const { multiple } = this.state;
    return (
      <Fragment>
        <PageTitle heading="Typeahead"
          subheading="Create beautiful suggestion inputs for React form elements."
          icon="pe-7s-plug icon-gradient bg-arielle-smile"/>
        <TransitionGroup>  
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Basic</CardTitle>
                    <Typeahead id="typeID2" labelKey="name" multiple={multiple} options={options} placeholder="Choose a state..."/>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Pre-Populate</CardTitle>
                    <Typeahead id="typeID" defaultSelected={options.slice(0, 5)}
                      labelKey="name" multiple options={options} placeholder="Choose a state..."/>
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
