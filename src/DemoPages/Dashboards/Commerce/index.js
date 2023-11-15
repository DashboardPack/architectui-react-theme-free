import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import CommerceDashboard1 from "./Examples/Variation1";
import CommerceDashboard2 from "./Examples/Variation2";

export default class CommerceDashboard extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="Commerce Dashboard"
                subheading="This dashboard was created as an example of the flexibility that ArchitectUI offers."
                icon="pe-7s-graph icon-gradient bg-ripe-malin"/>
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                <TabPane tab="Variation 1" key="1">
                  <CommerceDashboard1 />
                </TabPane>
                <TabPane tab="Variation 2" key="2">
                  <CommerceDashboard2 />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
