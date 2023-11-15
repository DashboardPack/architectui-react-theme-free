import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classnames from "classnames";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  ButtonGroup,
  Container,
} from "reactstrap";

import { faCommentDots, faBullhorn } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TabsExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col md="12">
                  <Card className="mb-3">
                    <CardHeader className="tabs-lg-alternate">
                      <Nav justified>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}>
                            <div className="widget-number">Tab 1</div>
                            <div className="tab-subheading">
                              <span className="pe-2 opacity-6">
                                <FontAwesomeIcon icon={faCommentDots} />
                              </span>
                              Totals
                            </div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}>
                            <div className="widget-number">Tab 2</div>
                            <div className="tab-subheading">Products</div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "3",
                            })}
                            onClick={() => {
                              this.toggle("3");
                            }}>
                            <div className="widget-number text-danger">Tab 3</div>
                            <div className="tab-subheading">
                              <span className="pe-2 opacity-6">
                                <FontAwesomeIcon icon={faBullhorn} />
                              </span>
                              Income
                            </div>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardHeader>
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <CardBody>
                          <p className="mb-0">
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.{" "}
                          </p>
                        </CardBody>
                      </TabPane>
                      <TabPane tabId="2">
                        <CardBody>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.{" "}
                          </p>
                        </CardBody>
                      </TabPane>
                      <TabPane tabId="3">
                        <CardBody>
                          <p className="mb-0">
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </CardBody>
                      </TabPane>
                    </TabContent>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Basic</CardTitle>
                      <Nav>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}>
                            Tab 1
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}>
                            Tab 2
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "3",
                            })}
                            onClick={() => {
                              this.toggle("3");
                            }}>
                            Tab 3
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </TabPane>
                        <TabPane tabId="2">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.{" "}
                          </p>
                        </TabPane>
                        <TabPane tabId="3">
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.{" "}
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Justified Alignment</CardTitle>
                      <Nav justified>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}>
                            Tab 1
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}>
                            Tab 2
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "3",
                            })}
                            onClick={() => {
                              this.toggle("3");
                            }}>
                            Tab 3
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </TabPane>
                        <TabPane tabId="2">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.{" "}
                          </p>
                        </TabPane>
                        <TabPane tabId="3">
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.{" "}
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Tabs Variations</CardTitle>
                      <div className="mb-3">
                        <ButtonGroup size="sm">
                          <Button caret="true" color="warning"
                            className={
                              "btn-pill ps-3 " +
                              classnames({ active: this.state.activeTab === "1" })
                            }
                            onClick={() => {
                              this.toggle("1");
                            }}>
                            Tab 1
                          </Button>
                          <Button color="warning"
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}>
                            Tab 2
                          </Button>
                          <Button color="warning"
                            className={
                              "btn-pill pe-3 " +
                              classnames({ active: this.state.activeTab === "3" })
                            }
                            onClick={() => {
                              this.toggle("3");
                            }}>
                            Tab 3
                          </Button>
                        </ButtonGroup>
                      </div>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </TabPane>
                        <TabPane tabId="2">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.{" "}
                          </p>
                        </TabPane>
                        <TabPane tabId="3">
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.{" "}
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Pills</CardTitle>
                      <Nav pills>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}>
                            Pill 1
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}>
                            Pill 2
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "3",
                            })}
                            onClick={() => {
                              this.toggle("3");
                            }}>
                            Pill 3
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </TabPane>
                        <TabPane tabId="2">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.{" "}
                          </p>
                        </TabPane>
                        <TabPane tabId="3">
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.{" "}
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Pills</CardTitle>
                      <Nav pills fill>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}>
                            Pill 1
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}>
                            Pill 2
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#"
                            className={classnames({
                              active: this.state.activeTab === "3",
                            })}
                            onClick={() => {
                              this.toggle("3");
                            }}>
                            Pill 3
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </TabPane>
                        <TabPane tabId="2">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.{" "}
                          </p>
                        </TabPane>
                        <TabPane tabId="3">
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.{" "}
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Button Group Tabs</CardTitle>
                      <div className="mb-3 text-center">
                        <ButtonGroup size="sm">
                          <Button caret="true" color="primary"
                            className={
                              "btn-shadow " +
                              classnames({ active: this.state.activeTab === "1" })
                            }
                            onClick={() => {
                              this.toggle("1");
                            }}>
                            Tab 1
                          </Button>
                          <Button color="primary"
                            className={
                              "btn-shadow " +
                              classnames({ active: this.state.activeTab === "2" })
                            }
                            onClick={() => {
                              this.toggle("2");
                            }}>
                            Tab 2
                          </Button>
                          <Button color="primary"
                            className={
                              "btn-shadow " +
                              classnames({ active: this.state.activeTab === "3" })
                            }
                            onClick={() => {
                              this.toggle("3");
                            }}>
                            Tab 3
                          </Button>
                        </ButtonGroup>
                      </div>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </TabPane>
                        <TabPane tabId="2">
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.{" "}
                          </p>
                        </TabPane>
                        <TabPane tabId="3">
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.{" "}
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
