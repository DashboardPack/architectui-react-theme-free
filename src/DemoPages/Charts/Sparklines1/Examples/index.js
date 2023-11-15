import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import {
  Sparklines,
  SparklinesBars,
  SparklinesLine,
  SparklinesCurve,
  SparklinesReferenceLine,
  SparklinesSpots,
} from "react-sparklines";

function boxMullerRandom() {
  let phase = true,
    x1,
    x2,
    w;

  return (function() {
    if (phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(30);
const sampleData1 = randomData(39);
const sampleData2 = randomData(19);
const sampleData3 = randomData(43);
const sampleData4 = randomData(13);
const sampleData5 = randomData(17);
const sampleData6 = randomData(24);
const sampleData7 = randomData(35);
const sampleData100 = randomData(100);

class ChartsSparklines1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    setInterval(
      () =>
        this.setState({
          data: this.state.data.concat([boxMullerRandom()]),
        }),
      200
    );
  }
  componeDidMount() {
    clearInterval(this.timeout);
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="3">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Simple</CardTitle>
                    <Sparklines height={90} data={sampleData}>
                      <SparklinesLine />
                    </Sparklines>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Simple curved</CardTitle>
                    <Sparklines height={90} data={sampleData1}>
                      <SparklinesCurve />
                    </Sparklines>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Dynamic Sparklines</CardTitle>
                    <div className="mb-2">
                      <Sparklines data={this.state.data} limit={20}>
                        <SparklinesLine color="#1c8cdc" />
                        <SparklinesSpots />
                      </Sparklines>
                    </div>
                    <div className="mb-2">
                      <Sparklines data={this.state.data} limit={20}>
                        <SparklinesBars
                          style={{
                            fill: "#41c3f9",
                            fillOpacity: ".25",
                          }}/>
                        <SparklinesLine
                          style={{
                            stroke: "#41c3f9",
                            fill: "none",
                          }}/>
                      </Sparklines>
                    </div>
                    <div className="mb-2">
                      <Sparklines data={this.state.data} limit={20}>
                        <SparklinesLine
                          style={{
                            stroke: "none",
                            fill: "#8e44af",
                            fillOpacity: "1",
                          }}/>
                      </Sparklines>
                    </div>
                    <Sparklines data={this.state.data} limit={10}>
                      <SparklinesBars color="#0a83d8" />
                    </Sparklines>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Normal Band</CardTitle>
                    <Row>
                      <Col md="6">
                        <Sparklines height={90} data={sampleData}>
                          <SparklinesLine
                            height="30"
                            style={{
                              fill: "none",
                            }}/>
                        </Sparklines>
                      </Col>
                      <Col md="6">
                        <Sparklines height={90} data={sampleData}>
                          <SparklinesLine
                            height="30"
                            style={{
                              fill: "none",
                            }}/>
                          <SparklinesReferenceLine height="30" type="mean" />
                        </Sparklines>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Customizable</CardTitle>
                    <Row>
                      <Col md="4">
                        <div className="mb-2">
                          <Sparklines height={90} data={sampleData2}>
                            <SparklinesLine color="#1c8cdc" />
                          </Sparklines>
                        </div>
                        <Sparklines height={90} data={sampleData3}>
                          <SparklinesLine color="#fa7e17" />
                        </Sparklines>
                      </Col>
                      <Col md="4">
                        <div className="mb-2">
                          <Sparklines height={90} data={sampleData4}>
                            <SparklinesLine color="#ea485c" />
                          </Sparklines>
                        </div>
                        <Sparklines height={90} data={sampleData5}>
                          <SparklinesLine color="#56b45d" />
                        </Sparklines>
                      </Col>
                      <Col md="4">
                        <div className="mb-2">
                          <Sparklines height={90} data={sampleData6}>
                            <SparklinesLine color="#253e56" />
                          </Sparklines>
                        </div>
                        <Sparklines height={90} data={sampleData7}>
                          <SparklinesLine color="#8e44af" />
                        </Sparklines>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Spots</CardTitle>
                    <Row>
                      <Col md="4">
                        <Sparklines height={90} data={sampleData}>
                          <SparklinesLine
                            style={{
                              fill: "none",
                            }}/>
                          <SparklinesSpots />
                        </Sparklines>
                      </Col>
                      <Col md="4">
                        <Sparklines height={90} data={sampleData}>
                          <SparklinesLine color="#56b45d" />
                          <SparklinesSpots
                            style={{
                              fill: "#56b45d",
                            }}/>
                        </Sparklines>
                      </Col>
                      <Col md="4">
                        <Sparklines height={90} data={sampleData} margin={6}>
                          <SparklinesLine
                            style={{
                              strokeWidth: 3,
                              stroke: "#336aff",
                              fill: "none",
                            }}/>
                          <SparklinesSpots
                            size={4}
                            style={{
                              stroke: "#336aff",
                              strokeWidth: 3,
                              fill: "white",
                            }}/>
                        </Sparklines>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Bars &amp; Bounds</CardTitle>
                    <Row>
                      <Col md="4">
                        <Sparklines height={90} data={sampleData} max={0.5}>
                          <SparklinesLine />
                        </Sparklines>
                      </Col>
                      <Col md="4">
                        <Sparklines height={90} data={sampleData}>
                          <SparklinesBars
                            style={{
                              fill: "#41c3f9",
                            }}/>
                        </Sparklines>
                      </Col>
                      <Col md="4">
                        <Sparklines height={90} data={sampleData}>
                          <SparklinesBars
                            style={{
                              stroke: "white",
                              fill: "#41c3f9",
                              fillOpacity: ".25",
                            }}/>
                          <SparklinesLine
                            style={{
                              stroke: "#41c3f9",
                              fill: "none",
                            }}/>
                        </Sparklines>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col md="3">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Reference Line</CardTitle>
                    <div className="mb-4">
                      <Sparklines height={90} data={sampleData}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="max" />
                      </Sparklines>
                    </div>
                    <div className="mb-4">
                      <Sparklines height={90} data={sampleData}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="min" />
                      </Sparklines>
                    </div>
                    <div className="mb-4">
                      <Sparklines height={90} data={sampleData}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="mean" />
                      </Sparklines>
                    </div>
                    <div className="mb-4">
                      <Sparklines height={90} data={sampleData}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="avg" />
                      </Sparklines>
                    </div>
                    <div className="mb-4">
                      <Sparklines height={90} data={sampleData}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="median" />
                      </Sparklines>
                    </div>
                    <Sparklines height={90} data={sampleData}>
                      <SparklinesBars
                        style={{
                          fill: "slategray",
                          fillOpacity: ".5",
                        }}/>
                      <SparklinesReferenceLine />
                    </Sparklines>
                  </CardBody>
                </Card>
              </Col>
              <Col md="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Other Examples</CardTitle>
                    <Row>
                      <Col md="3">
                        <div className="mb-3">
                          <Sparklines height={90} data={sampleData}>
                            <SparklinesLine
                              style={{
                                strokeWidth: 3,
                                stroke: "#336aff",
                                fill: "none",
                              }}/>
                          </Sparklines>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="mb-3">
                          <Sparklines height={90} data={sampleData100} width={200}>
                            <SparklinesLine
                              style={{
                                stroke: "#2991c8",
                                fill: "none",
                              }}/>
                            <SparklinesSpots />
                          </Sparklines>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="mb-3">
                          <Sparklines height={90} data={sampleData100}>
                            <SparklinesLine
                              style={{
                                stroke: "black",
                                fill: "none",
                              }}/>
                            <SparklinesSpots
                              style={{
                                fill: "orange",
                              }}/>
                          </Sparklines>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="mb-3">
                          <Sparklines height={90} data={sampleData}>
                            <SparklinesBars
                              style={{
                                stroke: "white",
                                strokeWidth: "1",
                                fill: "#40c0f5",
                              }}/>
                          </Sparklines>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="mb-3">
                          <Sparklines height={90} data={sampleData}>
                            <SparklinesLine
                              style={{
                                stroke: "#8ed53f",
                                strokeWidth: "1",
                                fill: "none",
                              }}/>
                          </Sparklines>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="mb-3">
                          <Sparklines height={90} data={sampleData}>
                            <SparklinesLine
                              style={{
                                stroke: "#d1192e",
                                strokeWidth: "1",
                                fill: "none",
                              }}/>
                          </Sparklines>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="mb-3">
                          <Sparklines height={90} data={sampleData}>
                            <SparklinesLine
                              style={{
                                stroke: "#559500",
                                fill: "#8fc638",
                                fillOpacity: "1",
                              }}/>
                          </Sparklines>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="mb-3">
                          <Sparklines height={90} data={sampleData}
                            style={{
                              background: "#272727",
                            }}
                            margin={10}>
                            <SparklinesLine
                              style={{
                                stroke: "none",
                                fill: "#d2673a",
                                fillOpacity: ".5",
                              }}/>
                          </Sparklines>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="mb-1">
                          <Sparklines height={90} data={sampleData}
                            style={{
                              background: "#00bdcc",
                            }}
                            margin={10}>
                            <SparklinesLine
                              style={{
                                stroke: "white",
                                fill: "none",
                              }}/>
                            <SparklinesReferenceLine
                              style={{
                                stroke: "white",
                                strokeOpacity: 0.75,
                                strokeDasharray: "2, 2",
                              }}/>
                          </Sparklines>
                        </div>
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

export default ChartsSparklines1;
