import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup  } from '../../../../utils/TransitionWrapper';

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from '../../../../utils/TabsWrapper';
import { TabContent } from '../../../../utils/TabsWrapper';
import { ScrollableInkTabBar } from '../../../../utils/TabsWrapper';

// Examples

import FormGrid from "./Examples/FormGrid";
import FormGridFormRow from "./Examples/FormGridFormRow";

class FormElementsLayouts extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="Form Layouts"
                subheading="Build whatever layout you need with our ArchitectUI framework."
                icon="pe-7s-graph text-success"/>
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                <TabPane tab="Layout" key="1">
                  <FormGridFormRow />
                </TabPane>
                <TabPane tab="Grid" key="2">
                  <FormGrid />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default FormElementsLayouts;
