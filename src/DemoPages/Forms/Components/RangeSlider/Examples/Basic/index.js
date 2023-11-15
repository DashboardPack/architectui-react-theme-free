import React, { Fragment } from "react";
import Tooltip from "rc-tooltip";
import Slider from 'rc-slider';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const handle = (node, handleProps) => {
  const { value, dragging, index } = handleProps;
  return (
    <Tooltip prefixCls="rc-slider-tooltip" overlay={value} visible={dragging}
      placement="top" key={index}>
      {node}
    </Tooltip>
  );
};

class FormRangeSliderBasic extends React.Component {
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
                    <CardTitle>Tooltips</CardTitle>
                    <Slider className="mb-2" min={0} max={20} defaultValue={3} handleRender={handle}/>
                    <Slider range className="mb-2" min={0} max={20} defaultValue={[3, 10]} tipFormatter={(value) => `${value}%`}/>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Disabled</CardTitle>
                    <Slider className="mb-2" disabled min={0} max={20} defaultValue={3} handleRender={handle}/>
                    <Slider range className="mb-2" disabled min={0} max={20} defaultValue={[3, 10]}
                      tipFormatter={(value) => `${value}%`}/>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Dots with Steps</CardTitle>
                    <Slider className="mb-2" dots min={0} step={20} max={340} defaultValue={20} handleRender={handle}/>
                    <Slider range className="mb-2" dots step={20} min={0} max={340}
                      defaultValue={[20, 60]} tipFormatter={(value) => `${value}%`}/>
                    <div className="divider" />

                    <Slider className="rc-slider-warning rc-slider-square rc-slider-lg mb-2" dots
                      min={0} step={20} max={480} defaultValue={80} handleRender={handle}/>
                    <Slider range className="rc-slider-success rc-slider-square mb-2" dots
                      step={80} min={0} max={480} defaultValue={[30, 60]} tipFormatter={(value) => `${value}%`}/>

                    <Slider className="rc-slider-info mb-2" dots
                      min={0} step={30} max={300} defaultValue={66} handleRender={handle}/>
                    <Slider range className="rc-slider-danger rc-slider-sm mb-2" dots
                      step={40} min={0} max={360} defaultValue={[6, 22]} tipFormatter={(value) => `${value}%`}/>
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

export default FormRangeSliderBasic;
