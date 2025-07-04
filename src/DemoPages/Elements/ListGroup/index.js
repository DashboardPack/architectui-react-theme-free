import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup  } from '../../../utils/TransitionWrapper';

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from '../../../utils/TabsWrapper';
import { TabContent } from '../../../utils/TabsWrapper';
import { ScrollableInkTabBar } from '../../../utils/TabsWrapper';

// Examples
import ListGroupExampleBasic from "./Examples/Basic/";
import ListGroupExampleAdvanced from "./Examples/Advanced";

export default class ListGroupExample extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="List Groups"
                subheading="These can be used with other components and elements to create stunning and unique new elements for your UIs."
                icon="pe-7s-paint icon-gradient bg-sunny-morning"/>
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />}
                renderTabContent={() => <TabContent />} >
                <TabPane tab="Advanced" key="1">
                  <ListGroupExampleAdvanced />
                </TabPane>
                <TabPane tab="Basic" key="2">
                  <ListGroupExampleBasic />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
