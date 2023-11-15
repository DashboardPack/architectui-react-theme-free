import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples

import FlagIconsExample from "./Examples/FlagIcons";
import FontAwesomeIconsExample from "./Examples/FontAwesome";
import Pe7IconsExample from "./Examples/Pe7Icons";
import LinearIconsExample from "./Examples/LinearIcons";
import IonIconsExample from "./Examples/IonIcons";

export default class IconsExamples extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="Icons"
                subheading="Wide icons selection including from flag icons to FontAwesome and other icons libraries."
                icon="pe-7s-phone icon-gradient bg-night-fade"/>
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />}
                renderTabContent={() => <TabContent />}>
                <TabPane tab="Pe7 Icons" key="1">
                  <Pe7IconsExample />
                </TabPane>
                <TabPane tab="FontAwesome" key="2">
                  <FontAwesomeIconsExample />
                </TabPane>
                <TabPane tab="Linear Icons" key="3">
                  <LinearIconsExample />
                </TabPane>
                <TabPane tab="Ion Icons" key="4">
                  <IonIconsExample />
                </TabPane>
                <TabPane tab="Flag Icons" key="5">
                  <FlagIconsExample />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
