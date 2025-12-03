import React, { Component, Fragment } from "react";
import { Row, Col, CardTitle, Progress } from "reactstrap";

import { ResponsiveContainer, LineChart, Tooltip, Line } from "recharts";

const data55 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export default class IncomeReport extends Component {
  render() {
    return (
      <Fragment>
        <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={data55} margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
              <Tooltip />
              <Line type="monotone" dataKey="pv" stroke="#e83e8c" strokeOpacity={0.4} strokeWidth={2}/>
              <Line type="monotone" dataKey="uv" stroke="#e83e8c" strokeWidth={3}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <CardTitle>Target Sales</CardTitle>
        <Row className="mt-3">
          <Col sm="12" md="4">
            <div className="widget-content p-0">
              <div className="widget-content-outer">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="widget-numbers text-dark">65%</div>
                  </div>
                </div>
                <div className="widget-progress-wrapper mt-1">
                  <Progress className="progress-bar-xs progress-bar-animated-alt" color="info" value="65"/>
                  <div className="progress-sub-label">
                    <div className="sub-label-left font-size-md">Sales</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" md="4">
            <div className="widget-content p-0">
              <div className="widget-content-outer">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="widget-numbers text-dark">22%</div>
                  </div>
                </div>
                <div className="widget-progress-wrapper mt-1">
                  <Progress className="progress-bar-xs progress-bar-animated-alt" color="warning" value="22"/>
                  <div className="progress-sub-label">
                    <div className="sub-label-left font-size-md">Profiles</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" md="4">
            <div className="widget-content p-0">
              <div className="widget-content-outer">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="widget-numbers text-dark">83%</div>
                  </div>
                </div>
                <div className="widget-progress-wrapper mt-1">
                  <Progress className="progress-bar-xs progress-bar-animated-alt" color="success" value="83"/>
                  <div className="progress-sub-label">
                    <div className="sub-label-left font-size-md">Tickets</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
