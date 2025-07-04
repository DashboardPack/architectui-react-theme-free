import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup  } from '../../../../utils/TransitionWrapper';

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from '../../../../utils/TabsWrapper';
import { TabContent } from '../../../../utils/TabsWrapper';
import { ScrollableInkTabBar } from '../../../../utils/TabsWrapper';

// Examples

// import FormValidationExample from "./Examples/FormValidation";
import FormsFeedback from "./Examples/Feedback";

class FormElementsValidation extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="Form Validation"
                subheading="Inline validation is very easy to implement using the ArchitectUI Framework."
                icon="lnr-picture text-danger"/>
              <Tabs defaultActiveKey="1"
                renderTabBar={() => <ScrollableInkTabBar />}
                renderTabContent={() => <TabContent />}>
                <TabPane tab="Feedback" key="1">
                <FormsFeedback />
                </TabPane>
              </Tabs>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default FormElementsValidation;
