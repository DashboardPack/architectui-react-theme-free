import React, { Fragment } from "react";

import { Nav, Button, NavItem, Popover } from "reactstrap";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";

import CountUp from "react-countup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import city2 from "../../../assets/utils/images/dropdown-header/city2.jpg";
import avatar6 from "../../../assets/utils/images/avatars/2.jpg";


import Tabs from "react-responsive-tabs";

// Dropdown Tabs Content
import ChatExample from "./TabsContent/ChatExample";
import TimelineEx from "./TabsContent/TimelineExample";
import SysErrEx from "./TabsContent/SystemExample";

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

const tabsContent = [
  {
    title: "Messages",
    content: <ChatExample />,
  },
  {
    title: "Events",
    content: <TimelineEx />,
  },
  {
    title: "Errors",
    content: <SysErrEx />,
  },
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
  }));
}

class FooterDots extends React.Component {
  constructor(props) {
    super(props);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.state = {
      popoverOpen1: false,
      popoverOpen2: false,
      popoverOpen3: false,
    };
  }

  toggle1(event) {
    event.preventDefault();
    this.setState({
      popoverOpen1: !this.state.popoverOpen1,
    });
  }

  toggle2(event) {
    event.preventDefault();
    this.setState({
      popoverOpen2: !this.state.popoverOpen2,
    });
  }

  toggle3(event) {
    event.preventDefault();
    this.setState({
      popoverOpen3: !this.state.popoverOpen3,
    });
  }

  render() {
    const settings = {
      className: "",
      centerMode: false,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      dots: true,
      arrows: false,
    };
    return (
      <Fragment>
        <div className="footer-dots">
          <a href="https://colorlib.com/" onClick={this.toggle1} className="dot-btn-wrapper" id="PopoverFooter-1">
            <i className="dot-btn-icon lnr-bullhorn icon-gradient bg-mean-fruit" />
            <div className="badge badge-dot badge-abs badge-dot-sm bg-danger">
              Notifications
            </div>
          </a>
          <div className="dots-separator" />
          <a href="https://colorlib.com/" onClick={this.toggle3} className="dot-btn-wrapper" id="PopoverFooter-3">
            <i className="dot-btn-icon lnr-pie-chart icon-gradient bg-love-kiss" />
            <div className="badge badge-dot badge-abs badge-dot-sm bg-warning">
              Notifications
            </div>
          </a>
          <Popover className="popover-custom popover-custom-xl" container=".app-container" hideArrow fade={false}
            trigger="legacy" placement="top-start" isOpen={this.state.popoverOpen1} target="PopoverFooter-1" toggle={this.toggle1}>
            <div className="dropdown-menu-header mb-0">
              <div className="dropdown-menu-header-inner bg-strong-bliss">
                <div className="menu-header-image opacity-1"
                  style={{
                    backgroundImage: "url(" + city2 + ")",
                  }}/>
                <div className="menu-header-content text-white">
                  <h5 className="menu-header-title">Notifications</h5>
                  <h6 className="menu-header-subtitle">
                    You have <b className="text-warning">21 </b>
                    unread messages
                  </h6>
                </div>
              </div>
            </div>
            <div className="card-tabs-animated card-tabs-animated-inner">
              <Tabs tabsWrapperClass="body-tabs body-tabs-alt" transform={false} showInkBar={true} items={getTabs()}/>
            </div>
            <Nav vertical>
              <NavItem className="nav-item-btn text-center pt-4 pb-3">
                <Button className="btn-shadow btn-wide btn-pill" color="dark">
                  <div className="badge badge-dot badge-dot-lg bg-warning badge-pulse">
                    Badge
                  </div>
                  View All Messages
                </Button>
              </NavItem>
            </Nav>
          </Popover>
          <Popover className="popover-custom popover-custom-lg" fade={false} hideArrow trigger="legacy"
            placement="top" isOpen={this.state.popoverOpen3} target="PopoverFooter-3" toggle={this.toggle3}>
            <div className="dropdown-menu-header">
              <div className="dropdown-menu-header-inner bg-malibu-beach">
                <div className="menu-header-image opacity-2"
                  style={{
                    backgroundImage: "url(" + city2 + ")",
                  }}/>
                <div className="menu-header-content text-white">
                  <div className="avatar-icon-wrapper btn-hover-shine mb-3 avatar-icon-xl">
                    <div className="avatar-icon rounded">
                      <img src={avatar6} alt="Avatar 6" />
                    </div>
                  </div>
                  <h5 className="menu-header-title">Fancy Statistics</h5>
                  <h6 className="menu-header-subtitle">
                    Just an example of a slider with some chart widgets inside.
                  </h6>
                </div>
              </div>
            </div>
            <div className="p-1 pb-2">
              <Slider {...settings}>
                <div>
                  <div className="card no-shadow widget-chart widget-chart2 text-start p-0 m-1">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content ps-3 pt-2 pe-2 mb--2">
                        <div className="widget-chart-flex">
                          <div className="widget-title opacity-6 text-muted text-uppercase">
                            New accounts since 2018
                          </div>
                        </div>
                        <div className="widget-numbers">
                          <div className="widget-chart-flex">
                            <div>
                              <span className="opacity-10 text-success pe-2">
                                <FontAwesomeIcon icon={faAngleUp} />
                              </span>
                              <CountUp start={10} end={78} separator="" decimals={0}
                                decimal="" prefix="" duration="10"/>
                              <small className="opacity-5 ps-1">%</small>
                            </div>
                            <div className="widget-title font-size-lg fw-normal text-muted">
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
                            <Area type="monotoneX" dataKey="uv" stroke="#3ac47d" strokeWidth="4"
                              fill="#3ac47d" fillOpacity=".1"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card no-shadow widget-chart widget-chart2 text-start p-0 m-1">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content ps-3 pt-2 pe-2 mb--2">
                        <div className="widget-chart-flex">
                          <div className="widget-title opacity-6 text-muted text-uppercase">
                            Helpdesk Tickets
                          </div>
                        </div>
                        <div className="widget-numbers">
                          <div className="widget-chart-flex">
                            <div>
                              <span className="text-warning">34</span>
                            </div>
                            <div className="widget-title ms-2 font-size-lg fw-normal text-dark">
                              <span className="opacity-5 text-danger ps-2 pe-1">
                                5%
                              </span>
                              increase
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
                            <Area type="monotoneX" dataKey="uv" stroke="#f7b924" strokeWidth="4"
                              fill="#f7b924" fillOpacity=".1"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card no-shadow widget-chart widget-chart2 text-start p-0 m-1">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-content ps-3 pt-2 pe-2 mb--2">
                        <div className="widget-chart-flex">
                          <div className="widget-title opacity-6 text-muted text-uppercase">
                            Last Year Total Sales
                          </div>
                        </div>
                        <div className="widget-numbers">
                          <div className="widget-chart-flex">
                            <div>
                              <small className="opacity-5 pe-1">$</small>
                              <span className="text-warning">629</span>
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
                            <Area type="monotoneX" dataKey="uv" stroke="#d92550"
                              strokeWidth="4" fill="#d92550" fillOpacity=".1"/>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Popover>
        </div>
      </Fragment>
    );
  }
}

export default FooterDots;
