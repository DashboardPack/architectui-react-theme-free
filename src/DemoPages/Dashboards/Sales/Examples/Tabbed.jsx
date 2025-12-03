import React, { Component, Fragment } from "react";
import Tabs from "react-responsive-tabs";

import city3 from "../../../../assets/utils/images/dropdown-header/city3.jpg";

import { Nav, Button, NavItem } from "reactstrap";

// Examples
import ChatExample from "../../../../Layout/AppFooter/Components/TabsContent/ChatExample";
import TimelineEx from "../../../../Layout/AppFooter/Components/TabsContent/TimelineExample";
import SysErrEx from "../../../../Layout/AppFooter/Components/TabsContent/SystemExample";

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
    title: "System Errors",
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

export default class TabbedContent extends Component {
  render() {
    return (
      <Fragment>
        <div className="dropdown-menu-header mt-0 mb-0">
          <div className="dropdown-menu-header-inner bg-heavy-rain">
            <div className="menu-header-image opacity-1"
              style={{
                backgroundImage: "url(" + city3 + ")",
              }}/>
            <div className="menu-header-content text-dark">
              <h5 className="menu-header-title">Notifications</h5>
              <h6 className="menu-header-subtitle">
                You have <b className="text-danger">21 </b>
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
      </Fragment>
    );
  }
}
