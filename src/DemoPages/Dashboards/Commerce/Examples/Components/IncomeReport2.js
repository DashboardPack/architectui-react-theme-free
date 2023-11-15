import React, { Component, Fragment } from "react";

import {
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  Card,
  CardBody,
  NavLink,
  Progress,
  CardHeader,
  ButtonGroup,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  TabContent,
  TabPane,
} from "reactstrap";

import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import PerfectScrollbar from "react-perfect-scrollbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CountUp from "react-countup";

import bg1 from "../../../../../assets/utils/images/dropdown-header/abstract2.jpg";

import classnames from "classnames";

import {
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  XAxis,
  CartesianGrid,
  Area,
} from "recharts";

const data55 = [
  { name: "Audi", uv: 4000, pv: 2400, amt: 2400 },
  { name: "BMW", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mercedes", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Renault", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Opel", uv: 1890, pv: 4800, amt: 2181 },
];

export default class IncomeReport2 extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <CardHeader className="rm-border">
          <div>
            <h5 className="menu-header-title text-capitalize text-primary">
              Income Report
            </h5>
          </div>
          <div className="btn-actions-pane-right text-capitalize">
            <UncontrolledButtonDropdown>
              <DropdownToggle caret className="btn-wide me-1" size="sm" outline color="focus">
                Options
              </DropdownToggle>
              <DropdownMenu end className="dropdown-menu-lg rm-pointers">
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-primary">
                    <div className="menu-header-image"
                      style={{
                        backgroundImage: "url(" + bg1 + ")",
                      }}/>
                    <div className="menu-header-content">
                      <div>
                        <h5 className="menu-header-title">Settings</h5>
                        <h6 className="menu-header-subtitle">
                          Example Dropdown Menu
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-area-xs">
                  <PerfectScrollbar>
                    <Nav vertical>
                      <NavItem className="nav-item-header">Activity</NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Chat
                          <div className="ms-auto badge rounded-pill bg-info">
                            8
                          </div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Recover Password</NavLink>
                      </NavItem>
                      <NavItem className="nav-item-header">My Account</NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Settings
                          <div className="ms-auto badge bg-success">New</div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Messages
                          <div className="ms-auto badge bg-warning">512</div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Logs</NavLink>
                      </NavItem>
                    </Nav>
                  </PerfectScrollbar>
                </div>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </CardHeader>
        <CardBody>
          <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={data55} margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#545cd8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#545cd8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f7b924" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f7b924" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#545cd8" fillOpacity={1} fill="url(#colorUv)"/>
                <Area type="monotone" dataKey="pv" stroke="#f7b924" fillOpacity={1} fill="url(#colorPv)"/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardBody>
        <CardHeader className="border-top bg-light">
          <div className="actions-icon-btn mx-auto">
            <div>
              <ButtonGroup size="lg">
                <Button caret="true" color="focus"
                  className={
                    "btn-pill ps-3 " +
                    classnames({ active: this.state.activeTab === "1" })
                  }
                  onClick={() => {
                    this.toggle("1");
                  }}>
                  Income
                </Button>
                <Button color="focus"
                  className={
                    "btn-pill pe-3 " +
                    classnames({ active: this.state.activeTab === "2" })
                  }
                  onClick={() => {
                    this.toggle("2");
                  }}>
                  Expenses
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <h5 className="menu-header-title">Target Sales</h5>
              <h6 className="menu-header-subtitle opacity-6">
                Total performance for this month
              </h6>
              <Row className="mt-3">
                <Col md="6" sm="12">
                  <Card className="card-border mb-sm-3 mb-md-0 border-light no-shadow">
                    <div className="widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Orders</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers line-height-1 text-primary">
                              <CountUp start={0} end={452} separator="" decimals={0}
                                decimal="." prefix="" useEasing={false} suffix="" duration="10"/>
                            </div>
                          </div>
                        </div>
                        <div className="widget-progress-wrapper mt-1">
                          <Progress className="progress-bar-xs" color="success" value="76"/>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">Monthly Target</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="6" sm="12">
                  <Card className="card-border border-light no-shadow">
                    <div className="widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Income</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers line-height-1 text-success">
                              <CountUp start={0} end={3456} separator="" decimals={0} decimal="."
                                prefix="$" useEasing={false} suffix="" duration="10"/>
                            </div>
                          </div>
                        </div>
                        <div className="widget-progress-wrapper mt-1">
                          <Progress className="progress-bar-xs progress-bar-animated" color="danger" value="23"/>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">Monthly Target</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <h5 className="menu-header-title">Tabbed Content</h5>
              <h6 className="menu-header-subtitle opacity-6">
                Example of various options built with ArchitectUI
              </h6>
              <Row className="mt-3">
                <Col md="6" sm="12">
                  <Card className="card-hover-shadow-2x mb-sm-3 mb-md-0 widget-chart widget-chart2 bg-premium-dark text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Sales</div>
                        <div className="widget-subtitle opacity-7">
                          Monthly Goals
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-success">
                          <small>$</small>
                          976
                          <small className="opacity-8 ps-2">
                            <FontAwesomeIcon icon={faAngleUp} />
                          </small>
                        </div>
                        <div className="widget-description ms-auto opacity-7">
                          <FontAwesomeIcon icon={faAngleUp} />
                          <span className="ps-1">175%</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="6" sm="12">
                  <Card className="card-hover-shadow-2x widget-chart widget-chart2 bg-premium-dark text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title">Clients</div>
                        <div className="widget-subtitle text-warning">
                          Returning
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-warning">
                          84
                          <small>%</small>
                          <small className="opacity-8 ps-2">
                            <FontAwesomeIcon icon={faAngleDown} />
                          </small>
                        </div>
                        <div className="widget-description ms-auto text-warning">
                          <span className="pe-1">45</span>
                          <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </CardBody>
      </Fragment>
    );
  }
}
