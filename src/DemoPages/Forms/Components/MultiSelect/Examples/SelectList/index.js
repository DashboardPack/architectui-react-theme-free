import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import { Listbox } from "react-widgets";

class FormSelectListBasic extends React.Component {
  render() {
    let colors = ["orange", "red", "blue", "green", "cyan", "purple"];

    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Basic</CardTitle>
                    <Row>
                      <Col md={6}>
                        <Listbox busy />
                      </Col>
                      <Col md={6}>
                        <Listbox data={colors} defaultValue={["orange", "blue"]}/>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Disabled</CardTitle>
                    <Row>
                      <Col md={6}>
                        <Listbox disabled data={colors} defaultValue={["orange", "blue"]}/>
                      </Col>
                      <Col md={6}>
                        <Listbox  data={colors} defaultValue={["orange", "blue"]} disabled={["red", "purple"]}/>
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

export default FormSelectListBasic;
