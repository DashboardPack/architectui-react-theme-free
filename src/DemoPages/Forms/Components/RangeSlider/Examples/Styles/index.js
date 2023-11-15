import React, { Fragment } from "react";
import Slider from "rc-slider";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

class FormRangeSliderStyles extends React.Component {
  render() {
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
                    <Slider min={0} max={100} defaultValue={14} className="rc-slider-primary mb-2"/>
                    <Slider min={0} max={100} defaultValue={20} className="rc-slider-secondary mb-2"/>
                    <Slider min={0} max={100} defaultValue={26} className="rc-slider-success mb-2"/>
                    <Slider min={0} max={100} defaultValue={32} className="rc-slider-info mb-2"/>
                    <Slider min={0} max={100} defaultValue={38} className="rc-slider-warning mb-2"/>
                    <Slider min={0} max={100} defaultValue={44} className="rc-slider-danger mb-2"/>
                    <Slider min={0} max={100} defaultValue={50} className="rc-slider-focus mb-2"/>
                    <Slider min={0} max={100} defaultValue={56} className="rc-slider-alternate mb-2"/>
                    <Slider min={0} max={100} defaultValue={64} className="rc-slider-light mb-2"/>
                    <Slider min={0}  max={100} defaultValue={70} className="rc-slider-dark mb-2"/>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Lines Sizing</CardTitle>
                    <Slider range min={0} max={100} defaultValue={[30, 70]}
                      className="rc-slider-warning rc-slider-line rc-slider-lg mb-2"/>
                    <Slider range min={0} max={100} defaultValue={[35, 65]}
                      className="rc-slider-info rc-slider-line mb-2" />
                    <Slider range min={0} max={100} defaultValue={[40, 60]}
                      className="rc-slider-danger rc-slider-line rc-slider-sm mb-2" />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Squares Sizing</CardTitle>
                    <Slider range min={0} max={100} defaultValue={[30, 70]}
                      className="rc-slider-focus rc-slider-lg rc-slider-square mb-2"/>
                    <Slider range min={0} max={100} defaultValue={[35, 65]}
                      className="rc-slider-success rc-slider-square mb-2"/>
                    <Slider range min={0} max={100} defaultValue={[40, 60]}
                      className="rc-slider-primary rc-slider-sm rc-slider-square mb-2"/>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Squares</CardTitle>
                    <Slider min={0} max={100} defaultValue={14} className="rc-slider-primary rc-slider-square mb-2"/>
                    <Slider min={0} max={100} defaultValue={20} className="rc-slider-secondary rc-slider-square mb-2"/>
                    <Slider min={0} max={100} defaultValue={26} className="rc-slider-success rc-slider-square mb-2"/>
                    <Slider min={0} max={100} defaultValue={32} className="rc-slider-info rc-slider-square mb-2"/>
                    <Slider min={0} max={100} defaultValue={38} className="rc-slider-warning rc-slider-square mb-2"/>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Lines</CardTitle>
                    <Slider min={0} max={100} defaultValue={14} className="rc-slider-primary rc-slider-line mb-2"/>
                    <Slider min={0} max={100} defaultValue={20} className="rc-slider-secondary rc-slider-line mb-2"/>
                    <Slider min={0} max={100} defaultValue={26} className="rc-slider-success rc-slider-line mb-2"/>
                    <Slider min={0} max={100} defaultValue={32} className="rc-slider-info rc-slider-line mb-2"/>
                    <Slider min={0} max={100} defaultValue={38} className="rc-slider-warning rc-slider-line mb-2" />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Sizing</CardTitle>
                    <Slider range min={0} max={100} defaultValue={[30, 70]} className="rc-slider-primary rc-slider-lg mb-2"/>
                    <Slider range min={0} max={100} defaultValue={[35, 65]} className="rc-slider-success mb-2"/>
                    <Slider range min={0} max={100} defaultValue={[40, 60]} className="rc-slider-warning rc-slider-sm mb-2"/>
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

export default FormRangeSliderStyles;
