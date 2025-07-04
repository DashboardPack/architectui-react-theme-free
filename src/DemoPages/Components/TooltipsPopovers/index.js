import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup  } from '../../../utils/TransitionWrapper';

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from '../../../utils/TabsWrapper';
import { TabContent } from '../../../utils/TabsWrapper';
import { ScrollableInkTabBar } from '../../../utils/TabsWrapper';

// Examples
import PopoversExample from "./Examples/Popovers/";
import TooltipsExample from "./Examples/Tooltips/";

export default class TooltipsPopoversExample extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="Tooltips & Popovers"
                subheading="These React components are used to add interaction or extra information for your app's content."
                icon="pe-7s-note2 icon-gradient bg-happy-fisher"/>
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                <TabPane tab="Popovers" key="1">
                  <PopoversExample />
                </TabPane>
                <TabPane tab="Tooltips" key="2">
                  <TooltipsExample />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
