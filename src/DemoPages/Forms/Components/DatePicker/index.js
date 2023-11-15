import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PageTitle from "../../../../Layout/AppMain/PageTitle";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

// Examples

import FormDatePicker1 from "./Examples/example1";
import FormDatePicker2 from "./Examples/example2";
import FormDatePicker3 from "./Examples/example3";
import FormDatePicker4 from "./Examples/example4";
import FormDatePicker5 from "./Examples/example5";
import FormDatePicker6 from "./Examples/example6";
import FormDatePicker7 from "./Examples/example7";
import FormDatePicker8 from "./Examples/example8";
import FormDateRangePicker from "./Examples/DateRangePicker";

class FormDatePicker extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Datepicker"
          subheading="Build beautiful datepickers perfectly integrated in the general style of the application."
          icon="pe-7s-battery icon-gradient bg-plum-plate"/>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Default</CardTitle>
                    <FormDatePicker1 />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Date &amp; Time</CardTitle>
                    <FormDatePicker2 />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Placeholder Text</CardTitle>
                    <FormDatePicker4 />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Inline Calendar</CardTitle>
                    <FormDatePicker8 />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Date Range Time Picker</CardTitle>
                    <FormDateRangePicker />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Time Only</CardTitle>
                    <FormDatePicker3 />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Specific Date Range</CardTitle>
                    <FormDatePicker5 />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Date Range</CardTitle>
                    <FormDatePicker6 />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Portal Version</CardTitle>
                    <FormDatePicker7 />
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

export default FormDatePicker;
