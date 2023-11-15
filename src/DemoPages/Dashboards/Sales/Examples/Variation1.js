import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Progress } from "react-sweet-progress";
import classnames from "classnames";
import { IoIosAnalytics } from "react-icons/io";
import DataTable from 'react-data-table-component';

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  CardHeader,
  CardFooter,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  DropdownItem,
  ButtonGroup,
  TabContent,
  TabPane,
} from "reactstrap";

import TabbedContent from "./Tabbed";

import {
  XAxis,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  faAngleUp,
  faArrowRight,
  faAngleDown,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar8 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../../assets/utils/images/avatars/4.jpg";
import avatar5 from "../../../../assets/utils/images/avatars/5.jpg";
import avatar6 from "../../../../assets/utils/images/avatars/8.jpg";
import avatar7 from "../../../../assets/utils/images/avatars/9.jpg";

import { makeData } from "../../../Tables/DataTables/Examples/utils";

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

const data2 = [
  { name: "Jan", Sales: 4000, Downloads: 2400, amt: 2400 },
  { name: "Feb", Sales: 3000, Downloads: 1398, amt: 2210 },
  { name: "Mar", Sales: 2000, Downloads: 5800, amt: 2290 },
  { name: "Apr", Sales: 2780, Downloads: 3908, amt: 2000 },
  { name: "Jun", Sales: 1890, Downloads: 4800, amt: 2181 },
  { name: "Jul", Sales: 2390, Downloads: 3800, amt: 2500 },
  { name: "Aug", Sales: 3490, Downloads: 4543, amt: 1233 },
  { name: "Sep", Sales: 1256, Downloads: 1398, amt: 1234 },
  { name: "Oct", Sales: 2345, Downloads: 4300, amt: 5432 },
  { name: "Nov", Sales: 1258, Downloads: 3908, amt: 2345 },
  { name: "Dec", Sales: 3267, Downloads: 2400, amt: 5431 },
];

const data552 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
];

export default class SalesDashboard1 extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: "1",
      data: makeData(),
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
    const { data } = this.state;

    const columns = [
      {
        name: "First Name",
        selector: row => row.firstName,
        sortable: true,
      },
      {
        name: "Last Name",
        id: "lastName",
        selector: row => row.lastName,
        sortable: true,
      },
    
      {
        name: "Age",
        selector: row => row.age,
        sortable: true,
      },
      {
        name: "Status",
        selector: row => row.status,
        sortable: true,
      },
    
      {
        name: "Visits",
        selector: row => row.visits,
        sortable: true,
        },
    ];

    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <Row>
                <Col lg="6" xl="4">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title font-size-lg text-capitalize fw-normal">
                        <i className="header-icon lnr-shirt me-3 text-muted opacity-6"> {" "} </i>
                        Top Sellers
                      </div>
                      <div className="btn-actions-pane-right actions-icon-btn">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle className="btn-icon btn-icon-only" color="link">
                            <i className="pe-7s-menu btn-icon-wrapper" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-shadow dropdown-menu-hover-link">
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem>
                              <i className="dropdown-icon lnr-inbox"> </i>
                              <span>Menus</span>
                            </DropdownItem>
                            <DropdownItem>
                              <i className="dropdown-icon lnr-file-empty"> </i>
                              <span>Settings</span>
                            </DropdownItem>
                            <DropdownItem>
                              <i className="dropdown-icon lnr-book"> </i>
                              <span>Actions</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <div className="p-1 text-end">
                              <Button className="me-2 btn-shadow btn-sm" color="link">
                                View Details
                              </Button>
                              <Button className="me-2 btn-shadow btn-sm" color="primary">
                                Action
                              </Button>
                            </div>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                    </CardHeader>
                    <div className="widget-chart widget-chart2 text-start p-0">
                      <div className="widget-chat-wrapper-outer">
                        <div className="widget-chart-content widget-chart-content-lg">
                          <div className="widget-chart-flex">
                            <div className="widget-title opacity-5 text-muted text-uppercase">
                              New accounts since 2018
                            </div>
                          </div>
                          <div className="widget-numbers">
                            <div className="widget-chart-flex">
                              <div>
                                <span className="opacity-10 text-success pe-2">
                                  <FontAwesomeIcon icon={faAngleUp} />
                                </span>
                                <CountUp start={0} end={9} separator="" decimals={0} decimal="" prefix="" duration="15"/>
                                <small className="opacity-5 ps-1">%</small>
                              </div>
                              <div className="widget-title ms-2 font-size-lg fw-normal text-muted">
                                <span className="text-danger ps-2">
                                  +14% failed
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                          <ResponsiveContainer height="100%">
                            <AreaChart data={data552}
                              margin={{
                                top: -15,
                                right: 0,
                                left: 0,
                                bottom: 0,
                              }}>
                              <defs>
                                <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="10%" stopColor="#3ac47d" stopOpacity={0.7}/>
                                  <stop offset="90%" stopColor="#3ac47d" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <Area type="monotoneX" dataKey="uv" stroke="#3ac47d" strokeWidth="3"
                                fillOpacity={1} fill="url(#colorPv2)"/>
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                    <CardBody className="pt-2 pb-0">
                      <h6 className="text-muted text-uppercase font-size-md opacity-9 mb-2 fw-normal">
                        Authors
                      </h6>
                      <div className="scroll-area-md shadow-overflow">
                        <PerfectScrollbar>
                          <ListGroup className="rm-list-borders rm-list-borders-scroll" flush>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <img width={38} className="rounded-circle" src={avatar5} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Viktor Martin
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $152
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      <CountUp start={0} end={752} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                      <small className="text-warning ps-2">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <img width={38} className="rounded-circle" src={avatar4} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Denis Delgado
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $53
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      <CountUp start={0} end={587} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                      <small className="text-danger ps-2">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <img width={38} className="rounded-circle" src={avatar1} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Shawn Galloway
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $239
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      <CountUp start={0} end={163} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                      <small className="text-muted ps-2">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <img width={38} className="rounded-circle" src={avatar3} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Latisha Allison
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $21
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      653
                                      <small className="text-primary ps-2">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <img width={38} className="rounded-circle" src={avatar7} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Lilly-Mae White
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $381
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      629
                                      <small className="text-muted ps-2">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <img width={38} className="rounded-circle" src={avatar8} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Julie Prosser
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $74
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      462
                                      <small className="text-muted ps-2">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem className="border-bottom-0">
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <img width={38} className="rounded-circle" src={avatar6} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Amin Hamer
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill badge-dark">
                                        $7
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      956
                                      <small className="text-success ps-2">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                          </ListGroup>
                        </PerfectScrollbar>
                      </div>
                    </CardBody>
                    <CardFooter className="d-block text-center rm-border">
                      <Button color="primary">
                        View complete report
                        <span className="text-white ps-2 opacity-3">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title font-size-lg text-capitalize fw-normal">
                        <i className="header-icon lnr-laptop-phone me-3 text-muted opacity-6"> {" "} </i>
                        Best Selling Products
                      </div>
                      <div className="btn-actions-pane-right actions-icon-btn">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle className="btn-icon btn-icon-only" color="link">
                            <i className="pe-7s-menu btn-icon-wrapper" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-shadow dropdown-menu-hover-link">
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem>
                              <i className="dropdown-icon lnr-inbox"> </i>
                              <span>Menus</span>
                            </DropdownItem>
                            <DropdownItem>
                              <i className="dropdown-icon lnr-file-empty"> </i>
                              <span>Settings</span>
                            </DropdownItem>
                            <DropdownItem>
                              <i className="dropdown-icon lnr-book"> </i>
                              <span>Actions</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <div className="p-1 text-end">
                              <Button className="me-2 btn-shadow btn-sm" color="link">
                                View Details
                              </Button>
                              <Button className="me-2 btn-shadow btn-sm" color="primary">
                                Action
                              </Button>
                            </div>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                    </CardHeader>
                    <div className="widget-chart widget-chart2 text-start p-0">
                      <div className="widget-chat-wrapper-outer">
                        <div className="widget-chart-content widget-chart-content-lg">
                          <div className="widget-chart-flex">
                            <div className="widget-title opacity-5 text-muted text-uppercase">
                              Toshiba Laptops
                            </div>
                          </div>
                          <div className="widget-numbers">
                            <div className="widget-chart-flex">
                              <div>
                                <span className="opacity-10 text-warning pe-2">
                                  <FontAwesomeIcon icon={faDotCircle} />
                                </span>
                                <CountUp start={0} end={984} separator="" decimals={0}
                                  decimal="" prefix="$" duration="15"/>
                              </div>
                              <div className="widget-title ms-2 font-size-lg fw-normal text-muted">
                                <span className="text-success ps-2">+14</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                          <ResponsiveContainer height="100%">
                            <AreaChart data={data55}
                              margin={{
                                top: -15,
                                right: 0,
                                left: 0,
                                bottom: 0,
                              }}>
                              <defs>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="10%" stopColor="#545cd8" stopOpacity={0.7}/>
                                  <stop offset="90%" stopColor="#545cd8" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <Area type="monotoneX" dataKey="uv" stroke="#545cd8"
                                strokeWidth="3" fillOpacity={1} fill="url(#colorPv)"/>
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                    <CardBody className="pt-2 pb-0">
                      <h6 className="text-muted text-uppercase font-size-md opacity-9 mb-2 fw-normal">
                        Top Performing
                      </h6>
                      <div className="scroll-area-md shadow-overflow">
                        <PerfectScrollbar>
                          <ListGroup className="rm-list-borders rm-list-borders-scroll" flush>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="icon-wrapper m-0">
                                      <div className="progress-circle-wrapper">
                                        <Progress type="circle" percent={62}
                                          width="100%"
                                          theme={{
                                            active: {
                                              trailColor: "rgba(0,0,0,0.1)",
                                              color: "#545cd8",
                                            },
                                          }}/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Asus Laptop
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $152
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      <CountUp start={0} end={752} separator="" decimals={0}
                                        decimal="." prefix="" duration="10"/>
                                      <small className="text-warning ps-2">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="icon-wrapper m-0">
                                      <div className="progress-circle-wrapper">
                                        <Progress type="circle" percent={43} width="100%"
                                          theme={{
                                            active: {
                                              trailColor: "rgba(0,0,0,0.1)",
                                              color: "#545cd8",
                                            },
                                          }}/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Dell Inspire
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $53
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      <CountUp start={0} end={587} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                      <small className="text-danger ps-2">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="icon-wrapper m-0">
                                      <div className="progress-circle-wrapper">
                                        <Progress type="circle" percent={83} width="100%" status="error"
                                          theme={{
                                            error: {
                                              trailColor: "rgba(0,0,0,0.1)",
                                              color: "#d92550",
                                            },
                                          }}/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Lenovo IdeaPad
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $239
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      <CountUp start={0} end={163} separator="" decimals={0} decimal="." prefix="" duration="10"/>
                                      <small className="text-muted ps-2">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="icon-wrapper m-0">
                                      <div className="progress-circle-wrapper">
                                        <Progress type="circle" percent={23} width="100%"
                                          theme={{
                                            active: {
                                              trailColor: "rgba(0,0,0,0.1)",
                                              color: "#3ac47d",
                                            },
                                          }}/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Asus Vivobook
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $21
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      653
                                      <small className="text-primary ps-2">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="icon-wrapper m-0">
                                      <div className="progress-circle-wrapper">
                                        <Progress type="circle" percent={55} width="100%"
                                          theme={{
                                            active: {
                                              trailColor: "rgba(0,0,0,0.1)",
                                              color: "#545cd8",
                                            },
                                          }}/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Apple Macbook
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $381
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      629
                                      <small className="text-muted ps-2">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="icon-wrapper m-0">
                                      <div className="progress-circle-wrapper">
                                        <Progress type="circle" percent={17} width="100%"
                                          theme={{
                                            active: {
                                              trailColor: "rgba(0,0,0,0.1)",
                                              color: "#f7b924",
                                            },
                                          }}/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      HP Envy 13"
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $74
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      462
                                      <small className="text-muted ps-2">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem className="border-bottom-0">
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left me-3">
                                    <div className="icon-wrapper m-0">
                                      <div className="progress-circle-wrapper">
                                        <Progress type="circle" percent={19} width="100%"
                                          theme={{
                                            active: {
                                              trailColor: "rgba(0,0,0,0.1)",
                                              color: "#545cd8",
                                            },
                                          }}/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Gaming Laptop HP
                                    </div>
                                    <div className="widget-subheading mt-1 opacity-10">
                                      <div className="badge rounded-pill bg-dark">
                                        $7
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="fsize-1 text-focus">
                                      <small className="opacity-5 pe-1">$</small>
                                      956
                                      <small className="text-success ps-2">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                          </ListGroup>
                        </PerfectScrollbar>
                      </div>
                    </CardBody>
                    <CardFooter className="d-block text-center rm-border">
                      <Button color="primary">
                        View all participants
                        <span className="text-white ps-2 opacity-3">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="12" xl="4">
                  <Card className="mb-3">
                    <CardHeader className="rm-border pb-0 responsive-center">
                      <div>
                        <h5 className="menu-header-title text-capitalize">
                          Portfolio Performance
                        </h5>
                      </div>
                    </CardHeader>
                    <Row>
                      <Col lg="6" xl="12">
                        <Card className="no-shadow rm-border bg-transparent widget-chart text-start">
                          <div className="progress-circle-wrapper">
                            <Progress type="circle" percent={42} width="100%"
                              theme={{
                                active: {
                                  trailColor: "rgba(0,0,0,0.1)",
                                  color: "#3ac47d",
                                },
                              }}/>
                          </div>
                          <div className="widget-chart-content">
                            <div className="widget-subheading">Capital Gains</div>
                            <div className="widget-numbers text-success">
                              <CountUp start={0} end={563} separator="" decimals={0}
                                decimal="." prefix="$" useEasing={false} suffix="" duration="10"/>
                            </div>
                            <div className="widget-description text-focus">
                              Increased by
                              <span className="text-warning ps-1">
                                <FontAwesomeIcon icon={faAngleUp} />
                                <span className="ps-1">7.35%</span>
                              </span>
                            </div>
                          </div>
                        </Card>
                      </Col>
                      <Col lg="6" xl="12">
                        <div className="card no-shadow rm-border bg-transparent widget-chart text-start mt-2">
                          <div className="progress-circle-wrapper">
                            <Progress type="circle" percent={34} width="100%"
                              theme={{
                                active: {
                                  trailColor: "rgba(0,0,0,0.1)",
                                  color: "#d92550",
                                },
                              }}/>
                          </div>
                          <div className="widget-chart-content">
                            <div className="widget-subheading">Withdrawals</div>
                            <div className="widget-numbers text-danger">
                              <CountUp start={0} end={194} separator="" decimals={0} decimal=","
                                prefix="$" useEasing={false} suffix="" duration="10"/>
                            </div>
                            <div className="widget-description opacity-8 text-focus">
                              Down by
                              <span className="text-success ps-1 pe-1">
                                <FontAwesomeIcon icon={faAngleDown} />
                                <span className="ps-1">21.8%</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center mx-auto mt-3">
                      <div>
                        <ButtonGroup size="sm">
                          <Button caret="true" color="primary"
                            className={
                              "btn-shadow ps-3 pe-3 " +
                              classnames({ active: this.state.activeTab === "1" })
                            }
                            onClick={() => {
                              this.toggle("1");
                            }}>
                            Income
                          </Button>
                          <Button color="primary"
                            className={
                              "btn-shadow pe-3 ps-3 " +
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
                    <CardBody>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <div className="text-center">
                            <h5 className="menu-header-title">Target Sales</h5>
                            <h6 className="menu-header-subtitle opacity-6">
                              Total performance for this month
                            </h6>
                          </div>
                          <ResponsiveContainer height={244}>
                            <BarChart data={data2}>
                              <XAxis dataKey="name" />
                              <Legend />
                              <Bar barGap="12" dataKey="Sales" stackId="a" fill="#30b1ff"/>
                              <Bar barGap="12" dataKey="Downloads" stackId="a" fill="#30b1ff" fillOpacity=".15"/>
                            </BarChart>
                          </ResponsiveContainer>
                        </TabPane>
                        <TabPane tabId="2">
                          <div className="text-center">
                            <h5 className="menu-header-title">Tabbed Content</h5>
                            <h6 className="menu-header-subtitle opacity-6">
                              Example of various options built with ArchitectUI
                            </h6>
                          </div>
                          <Card className="card-hover-shadow-2x widget-chart widget-chart2 bg-premium-dark text-start mt-3">
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
                                  <CountUp start={0} end={976} separator="" decimals={0} decimal="."
                                    prefix="" useEasing={false} suffix="" duration="10"/>
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
                          <div className="text-center mt-3">
                            <Button color="success" className="btn-pill btn-shadow btn-wide fsize-1" size="lg">
                              <span className="me-2 opacity-7">
                                {/* <Ionicon color="#ffffff" icon="ios-analytics-outline" beat={true}/> */}
                                <IoIosAnalytics color="#ffffff" />
                              </span>
                              <span className="me-1">View Complete Report</span>
                            </Button>
                          </div>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="12" lg="6" xl="8">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title font-size-lg text-capitalize fw-normal">
                        <i className="header-icon lnr-dice me-3 text-muted opacity-6"> {" "} </i>
                        Easy Dynamic Tables
                      </div>
                      <div className="btn-actions-pane-right actions-icon-btn">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle className="btn-icon btn-icon-only" color="link">
                            <i className="pe-7s-menu btn-icon-wrapper" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-shadow dropdown-menu-hover-link">
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem>
                              <i className="dropdown-icon lnr-inbox"> </i>
                              <span>Menus</span>
                            </DropdownItem>
                            <DropdownItem>
                              <i className="dropdown-icon lnr-file-empty"> </i>
                              <span>Settings</span>
                            </DropdownItem>
                            <DropdownItem>
                              <i className="dropdown-icon lnr-book"> </i>
                              <span>Actions</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <div className="p-3 text-end">
                              <Button className="me-2 btn-shadow btn-sm" color="link">
                                View Details
                              </Button>
                              <Button className="me-2 btn-shadow btn-sm" color="primary">
                                Action
                              </Button>
                            </div>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                    </CardHeader>
                    <CardBody>
                    <DataTable data={data}
                          columns={columns}
                          pagination
                          fixedHeader
                          fixedHeaderScrollHeight="370px"
                        />
                    </CardBody>
                  </Card>
                </Col>
                <Col md="12" lg="6" xl="4">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title font-size-lg text-capitalize fw-normal">
                        <i className="header-icon lnr-cloud-download icon-gradient bg-happy-itmeo"> {" "} </i>
                        Technical Support
                      </div>
                    </CardHeader>
                    <CardBody className="p-0">
                      <TabbedContent />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Card className="main-card mb-3">
                <Row className="g-0s">
                  <Col md="6" xl="4">
                    <div className="widget-content">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-right ms-0 me-3">
                          <div className="widget-numbers text-success">1896</div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Total Orders</div>
                          <div className="widget-subheading">
                            Last year expenses
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" xl="4">
                    <div className="widget-content">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-right ms-0 me-3">
                          <div className="widget-numbers text-warning">$ 14M</div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Products Sold</div>
                          <div className="widget-subheading">
                            Total revenue streams
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" xl="4">
                    <div className="widget-content">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-right ms-0 me-3">
                          <div className="widget-numbers text-danger">45.9%</div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Followers</div>
                          <div className="widget-subheading">
                            People Interested
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" xl="4" className="d-xl-none d-md-block">
                    <div className="widget-content">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-right ms-0 me-3">
                          <div className="widget-numbers text-danger">45.9%</div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Followers</div>
                          <div className="widget-subheading">
                            People Interested
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
