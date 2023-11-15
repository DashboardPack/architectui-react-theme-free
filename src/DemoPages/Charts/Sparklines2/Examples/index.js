import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from "prop-types";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Brush,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  BarChart,
  Bar,
  Cell,
  ComposedChart,
} from "recharts";

const data5 = [
  { name: "18-24", uv: 31.47, pv: 2400, fill: "#fece78" },
  { name: "25-29", uv: 26.69, pv: 4567, fill: "#83a6ed" },
  { name: "30-34", uv: 15.69, pv: 1398, fill: "#8dd1e1" },
  { name: "35-39", uv: 8.22, pv: 9800, fill: "#82ca9d" },
  { name: "40-49", uv: 8.63, pv: 3908, fill: "#a4de6c" },
  { name: "50+", uv: 2.63, pv: 4800, fill: "#d0ed57" },
  { name: "unknow", uv: 6.67, pv: 4800, fill: "#ffc658" },
];


const colors = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
];

const data1 = [
  { name: "Page A", uv: 4000, female: 2400, male: 2400 },
  { name: "Page B", uv: 3000, female: 1398, male: 2210 },
  { name: "Page C", uv: 2000, female: 9800, male: 2290 },
  { name: "Page D", uv: 2780, female: 3908, male: 2000 },
  { name: "Page E", uv: 1890, female: 4800, male: 2181 },
  { name: "Page F", uv: 2390, female: 3800, male: 2500 },
  { name: "Page G", uv: 3490, female: 4300, male: 2100 },
];

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data3 = [
  { month: "2015.01", a: 4000, b: 2400, c: 2400 },
  { month: "2015.02", a: 3000, b: 1398, c: 2210 },
  { month: "2015.03", a: 2000, b: 9800, c: 2290 },
  { month: "2015.04", a: 2780, b: 3908, c: 2000 },
  { month: "2015.05", a: 1890, b: 4800, c: 2181 },
  { month: "2015.06", a: 2390, b: 3800, c: 2500 },
  { month: "2015.07", a: 3490, b: 4300, c: 2100 },
];

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};
const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y +
    height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y +
    height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};


class ChartsSparklines2 extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <Row>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Simple Line Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <LineChart data={data} width={500} height={300}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <CartesianGrid strokeDasharray="3 3" />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="pv" stroke="#fece78" activeDot={{ r: 8 }}/>
                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Dashed Line Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <LineChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="pv" stroke="#fece78" activeDot={{ r: 8 }} strokeDasharray="5 5"/>
                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
                        </LineChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Vertical Line Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <LineChart layout="vertical" data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" />
                          <Tooltip />
                          <Legend />
                          <Line dataKey="pv" stroke="#fece78" />
                          <Line dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Simple Bar Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <BarChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="pv" fill="#fece78" />
                          <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Custom Shape Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <BarChart data={data1}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <CartesianGrid strokeDasharray="3 3" />
                          <Bar dataKey="female" fill="#fece78" shape={<TriangleBar />} label={{ position: "top" }}>
                            {data1.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={colors[index % 20]}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Positive/Negative Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <BarChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <ReferenceLine y={0} stroke="#000" />
                          <Bar dataKey="pv" fill="#fece78" />
                          <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>BrushBar Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <BarChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }}/>
                          <ReferenceLine y={0} stroke="#000" />
                          <Brush dataKey="name" height={30} stroke="#fece78" />
                          <Bar dataKey="pv" fill="#fece78" />
                          <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Area Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <AreaChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="uv" stroke="#fece78" fill="#fece78"/>
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Stacked Area Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <AreaChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="uv" stackId="1" stroke="#fece78" fill="#fece78"/>
                          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
                          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658"/>
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Area Percent Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <AreaChart data={data3} stackOffset="expand">
                          <XAxis dataKey="month" />
                          <YAxis tickFormatter={toPercent} />
                          <Tooltip content={renderTooltipContent} />
                          <Area type="monotone" dataKey="a" stackId="1" stroke="#fece78" fill="#fece78"/>
                          <Area type="monotone" dataKey="b" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
                          <Area type="monotone" dataKey="c" stackId="1" stroke="#ffc658" fill="#ffc658"/>
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Composed Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <ComposedChart data={data}>
                          <CartesianGrid stroke="#f5f5f5" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Area type="monotone" dataKey="amt" fill="#fece78" stroke="#fece78"/>
                          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Radial Bar Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <RadialBarChart width={150} height={150} innerRadius={20}
                          outerRadius={140} barSize={10} data={data5}>
                          <RadialBar minAngle={15} label={{ position: "insideStart", fill: "#fff" }}
                            background clockWise={true} dataKey="uv"/>
                        </RadialBarChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Sparkline Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <LineChart data={data}>
                          <Line type="monotone" dataKey="pv" stroke="#fece78" strokeWidth={2}/>
                        </LineChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Sparkbar Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <BarChart data={data}>
                          <Bar dataKey="uv" fill="#fece78" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>SparkArea Charts</CardTitle>
                      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <AreaChart width={200} height={60} data={data}
                          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                          <Area type="monotone" dataKey="uv" stroke="#fece78" fill="#fece78"/>
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default ChartsSparklines2;
