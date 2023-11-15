import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React, { Fragment, Component } from "react";
import LiquidFillGauge from "react-liquid-gauge";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class ChartsLiquidGaugeExample extends Component {
  state = {
    value: 50,
  };
  startColor = "#6495ed"; // cornflowerblue
  endColor = "#dc143c"; // crimson
  render() {
    const radius = 80;
    const interpolate = interpolateRgb(this.startColor, this.endColor);
    const fillColor = interpolate(this.state.value / 100);
    const gradientStops = [
      {
        key: "0%",
        stopColor: color(fillColor)
          .darker(0.5)
          .toString(),
        stopOpacity: 1,
        offset: "0%",
      },
      {
        key: "50%",
        stopColor: fillColor,
        stopOpacity: 0.75,
        offset: "50%",
      },
      {
        key: "100%",
        stopColor: color(fillColor)
          .brighter(0.5)
          .toString(),
        stopOpacity: 0.5,
        offset: "100%",
      },
    ];
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Liquid Gauges</CardTitle>
                    <Row className="text-center">
                      <Col md="6" lg="4">
                        <LiquidFillGauge style={{ margin: "0 auto" }} width={radius} height={radius} value={this.state.value}
                          percent="" textSize={1} textOffsetX={0} textOffsetY={0}
                          textRenderer={(props) => {
                            const value = Math.round(props.value);
                            const radius = Math.min(
                              props.height / 2,
                              props.width / 2
                            );
                            const textPixels = (props.textSize * radius) / 2;
                            const valueStyle = {
                              fontSize: textPixels,
                            };
                            const percentStyle = {
                              fontSize: textPixels * 0.6,
                            };

                            return (
                              <tspan>
                                <tspan className="value" style={valueStyle}>
                                  {value}
                                </tspan>
                                <tspan style={percentStyle}>
                                  {props.percent}
                                </tspan>
                              </tspan>
                            );
                          }}
                          riseAnimation waveAnimation waveFrequency={5} waveAmplitude={3} gradient
                          gradientStops={gradientStops}
                          circleStyle={{
                            fill: fillColor,
                          }}
                          waveStyle={{
                            fill: fillColor,
                          }}
                          textStyle={{
                            fill: color("#989fa4").toString(),
                          }}
                          waveTextStyle={{
                            fill: color("#fff").toString(),
                          }}
                          onClick={() => {
                            this.setState({ value: Math.random() * 100 });
                          }}/>
                      </Col>
                      <Col md="6" lg="4">
                        <LiquidFillGauge style={{ margin: "0 auto" }} width={radius * 1.5} height={radius * 1.5}
                          value={this.state.value} percent="" textSize={1} textOffsetX={0} textOffsetY={0}
                          textRenderer={(props) => {
                            const value = Math.round(props.value);
                            const radius = Math.min(
                              props.height / 2,
                              props.width / 2
                            );
                            const textPixels = (props.textSize * radius) / 2;
                            const valueStyle = {
                              fontSize: textPixels,
                            };
                            const percentStyle = {
                              fontSize: textPixels * 0.6,
                            };

                            return (
                              <tspan>
                                <tspan className="value" style={valueStyle}>
                                  {value}
                                </tspan>
                                <tspan style={percentStyle}>
                                  {props.percent}
                                </tspan>
                              </tspan>
                            );
                          }}
                          riseAnimation waveAnimation waveFrequency={3} waveAmplitude={4} gradient
                          gradientStops={gradientStops}
                          circleStyle={{
                            fill: fillColor,
                          }}
                          waveStyle={{
                            fill: fillColor,
                          }}
                          textStyle={{
                            fill: color("#989fa4").toString(),
                          }}
                          waveTextStyle={{
                            fill: color("#fff").toString(),
                          }}
                          onClick={() => {
                            this.setState({ value: Math.random() * 100 });
                          }}
                        />
                      </Col>
                      <Col md="6" lg="4">
                        <LiquidFillGauge style={{ margin: "0 auto" }} width={radius * 2} height={radius * 2}
                          value={this.state.value} percent="%" textSize={1} textOffsetX={0} textOffsetY={0}
                          textRenderer={(props) => {
                            const value = Math.round(props.value);
                            const radius = Math.min(
                              props.height / 2,
                              props.width / 2
                            );
                            const textPixels = (props.textSize * radius) / 2;
                            const valueStyle = {
                              fontSize: textPixels,
                            };
                            const percentStyle = {
                              fontSize: textPixels * 0.6,
                            };

                            return (
                              <tspan>
                                <tspan className="value" style={valueStyle}>
                                  {value}
                                </tspan>
                                <tspan style={percentStyle}>
                                  {props.percent}
                                </tspan>
                              </tspan>
                            );
                          }}
                          riseAnimation waveAnimation waveFrequency={3} waveAmplitude={2} gradient
                          gradientStops={gradientStops}
                          circleStyle={{
                            fill: fillColor,
                          }}
                          waveStyle={{
                            fill: fillColor,
                          }}
                          textStyle={{
                            fill: color("#989fa4").toString(),
                          }}
                          waveTextStyle={{
                            fill: color("#fff").toString(),
                          }}
                          onClick={() => {
                            this.setState({ value: Math.random() * 100 });
                          }}/>
                      </Col>
                    </Row>
                    <div className="divider" />
                    <div className="text-center">
                      <Button type="button" color="primary" className="btn-wide btn-shadow btn-pill"
                        onClick={() => {
                          this.setState({ value: Math.random() * 100 });
                        }}>
                        Refresh
                      </Button>
                    </div>
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
