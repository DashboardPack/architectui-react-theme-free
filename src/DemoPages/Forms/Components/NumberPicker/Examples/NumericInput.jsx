import { Fragment } from 'react';
import { CSSTransition, TransitionGroup } from '../../../../../utils/TransitionWrapper';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';

const dollarFormat = (value) => (value === '' || value == null ? '' : `${value}$`);

export default function FormNumericInput() {
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition
          component="div"
          classNames="TabsAnimation"
          appear={true}
          timeout={1500}
          enter={false}
          exit={false}
        >
          <Row>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Basic</CardTitle>
                  <InputNumber min={0} max={100} defaultValue={50} />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Floats</CardTitle>
                  <InputNumber step={0.1} precision={2} defaultValue={50.3} />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Custom Format</CardTitle>
                  <InputNumber precision={2} defaultValue={50.3} step={0.1} formatter={dollarFormat} />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Disabled / Readonly</CardTitle>
                  <Row>
                    <Col>
                      <InputNumber disabled defaultValue={23.45} />
                    </Col>
                    <Col>
                      <InputNumber readOnly defaultValue={23.45} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Stepper</CardTitle>
                  <InputNumber defaultValue={0} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}
