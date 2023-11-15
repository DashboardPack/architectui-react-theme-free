import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Card, CardBody, Row, Col } from "reactstrap";

import MultiStep from "../Wizard";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step4 from "./Steps/Step4";
import PageTitle from "../../../../../Layout/AppMain/PageTitle";

const steps = [
  { name: "Account Information", component: <Step1 /> },
  { name: "Payment Information", component: <Step2 /> },
  { name: "Finish Wizard", component: <Step4 /> },
];

export default class FormWizardVar3 extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <PageTitle heading="Forms Wizard"
                subheading="Easily create beautiful form multi step wizards!"
                icon="lnr-map text-info"/>
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <div className="forms-wizard-vertical">
                        <MultiStep showNavigation={true} steps={steps} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
