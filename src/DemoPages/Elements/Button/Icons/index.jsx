import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup  } from '../../../../utils/TransitionWrapper';

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from '../../../../utils/TabsWrapper';
import { TabContent } from '../../../../utils/TabsWrapper';
import { ScrollableInkTabBar } from '../../../../utils/TabsWrapper';

// Examples
import ButtonsHorizontalIcons from "./Examples/Horizontal";
import ButtonsVerticalIcons from "./Examples/Vertical";

export default class ButtonsIcons extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false}exit={false}>
            <div>  
              <PageTitle
                heading="Buttons with Icons"
                subheading="These buttons examples contain icons with or without labels attached."
                icon="pe-7s-hourglass icon-gradient bg-ripe-malin" />
              <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />}
                renderTabContent={() => <TabContent />}>
                <TabPane tab="Horizontal Icons" key="1">
                  <ButtonsHorizontalIcons />
                </TabPane>
                <TabPane tab="Vertical Icons" key="2">
                  <ButtonsVerticalIcons />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
