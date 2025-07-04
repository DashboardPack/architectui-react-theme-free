import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup  } from '../../../utils/TransitionWrapper';

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from '../../../utils/TabsWrapper';
import { TabContent } from '../../../utils/TabsWrapper';
import { ScrollableInkTabBar } from '../../../utils/TabsWrapper';

// Examples
import ChartJsCircular from "./Examples/Circular";
import ChartJsLinesBars from "./Examples/LinesBars";

export default class ChartJSExamples extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="ChartJS"
                subheading="Huge selection of charts created with the React ChartJS Plugin"
                icon="pe-7s-bandaid icon-gradient bg-amy-crisp"/>
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                <TabPane tab="Circular Charts" key="1">
                  <ChartJsCircular />
                </TabPane>
                <TabPane tab="Lines & Bars Charts" key="2">
                  <ChartJsLinesBars />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
