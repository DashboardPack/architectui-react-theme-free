import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples

import FormsDefault from "./Examples/FormBasic";
import InputGroups from "./Examples/InputGroup/InputGroups";

class FormElementsControls extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="Form Controls"
                subheading="Wide selection of forms controls, using the Bootstrap 5 code base, but built with React."
                icon="pe-7s-display1 icon-gradient bg-premium-dark"/>
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                <TabPane tab="Basic" key="1">
                  <FormsDefault />
                </TabPane>
                <TabPane tab="Input Groups" key="2">
                  <InputGroups />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default FormElementsControls;
