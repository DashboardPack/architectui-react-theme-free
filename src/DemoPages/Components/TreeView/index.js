import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from "../../../Layout/AppMain/PageTitle";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

class TreeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // treeData: treeData,
    };
  }

  render() {
    return (
      <Fragment>
        <PageTitle heading="Tree View"
          subheading="Create stunning tree like views with this awesome React plugin."
          icon="pe-7s-switch icon-gradient bg-plum-plate"/>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col lg="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Basic</CardTitle>
                    <div style={{ height: "100vh" }}>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default TreeView;
