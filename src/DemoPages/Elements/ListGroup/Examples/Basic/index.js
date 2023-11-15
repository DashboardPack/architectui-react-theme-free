import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

import ListGroupDefault from "./ListGroup";
import ListGroupAnchorsAndButtons from "./ListGroupAnchorsAndButtons";
import ListGroupBadge from "./ListGroupBadge";
import ListGroupContextualClasses from "./ListGroupContextualClasses";
import ListGroupCustomContent from "./ListGroupCustomContent";
import ListGroupDisabledItems from "./ListGroupDisabledItems";
import ListGroupFlush from "./ListGroupFlush";

const ListGroupExampleBasic = (props) => {
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition component="div" classNames="TabsAnimation" appear={true}
          timeout={0} enter={false} exit={false}>
          <Container fluid>
            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>List group</CardTitle>
                    <ListGroupDefault />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>List group buttons</CardTitle>
                    <ListGroupAnchorsAndButtons />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>List group badges</CardTitle>
                    <ListGroupBadge />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>List group contextual classes</CardTitle>
                    <ListGroupContextualClasses />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>List group custom content</CardTitle>
                    <ListGroupCustomContent />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>List group disabled items</CardTitle>
                    <ListGroupDisabledItems />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>List group without border</CardTitle>
                    <ListGroupFlush />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default ListGroupExampleBasic;
