import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import Basic2Example from "./Examples/Basic";
import Colors2Example from "./Examples/Colors";

export default class WidgetsChartBoxes2 extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="Chart Boxes II"
                subheading="Unlimited styles are available for our chart boxes. Check out our dashboard examples for more."
                icon="pe-7s-plug icon-gradient bg-arielle-smile"/>
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                <TabPane tab="Basic" key="1">
                  <Basic2Example />
                </TabPane>
                <TabPane tab="Colors" key="2">
                  <Colors2Example />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
