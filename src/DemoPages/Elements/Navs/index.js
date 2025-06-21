import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from '../../../utils/TransitionWrapper';

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from '../../../utils/TabsWrapper';
import { TabContent } from '../../../utils/TabsWrapper';
import { ScrollableInkTabBar } from '../../../utils/TabsWrapper';

// Examples

import NavsVertical from "./Examples/NavVertical";
import NavsHorizontal from "./Examples/NavHorizontal";
import NavsGrid from "./Examples/NavGrid";

export default class NavigationExample extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="Navigation Menus"
                subheading="Navigation menus are one of the basic building blocks for any web or mobile app."
                icon="pe-7s-photo-gallery icon-gradient bg-mean-fruit"/>
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                <TabPane tab="Grid Menus" key="1">
                  <NavsGrid />
                </TabPane>
                <TabPane tab="Vertical Menus" key="2">
                  <NavsVertical />
                </TabPane>
                <TabPane tab="Horizontal Menus" key="3">
                  <NavsHorizontal />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
