import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import ButtonsPillSolid from "./Examples/Solid";
import ButtonsPillOutline from "./Examples/Outline";
import ButtonsPillOutline2x from "./Examples/Outline2x";
import ButtonsPillDashed from "./Examples/Dashed";
import ButtonsPillGradients from "./Examples/Gradients";

export default class ButtonsPill extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <PageTitle
                heading="Pills Buttons"
                subheading="The pills buttons from ArchitectUI Framework have 100% rounded corners."
                icon="pe-7s-bluetooth icon-gradient bg-deep-blue" />
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                <TabPane tab="Solid" key="1">
                  <ButtonsPillSolid />
                </TabPane>
                <TabPane tab="Outline" key="2">
                  <ButtonsPillOutline />
                </TabPane>
                <TabPane tab="Outline 2x" key="3">
                  <ButtonsPillOutline2x />
                </TabPane>
                <TabPane tab="Dashed" key="4">
                  <ButtonsPillDashed />
                </TabPane>
                <TabPane tab="Gradients" key="5">
                  <ButtonsPillGradients />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
