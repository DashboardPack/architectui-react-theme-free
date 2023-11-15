import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classnames from "classnames";
import Tabs from "react-responsive-tabs";

import dummyData from "./dummyData";

import { Loader, Types } from "react-loaders";

import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
  Button,
  ButtonGroup,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
import LoadingOverlay from "react-loading-overlay-ts";

class CardsBlockLoadingExample extends Component {
  constructor(props) {
    super(props);

    this.toggleBlocking = this.toggleBlocking.bind(this);
    this.setLoaderType = this.setLoaderType.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      showMore: true,
      transform: true,
      showInkBar: true,
      items: this.getSimpleTabs(),
      selectedTabKey: 0,
      transformWidth: 400,
      active: false,
      loaderType: "ball-triangle-path",
    };
  }

  toggleBlocking() {
    this.setState({ active: !this.state.active });
  }

  setLoaderType(e) {
    this.setState({ loaderType: e.target.value });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  onChangeProp = (propsName) => (evt) => {
    this.setState({
      [propsName]:
        evt.target.type === "checkbox" ? evt.target.checked : +evt.target.value,
    });
  };

  getSimpleTabs = () =>
    dummyData.map(({ name, biography }, index) => ({
      key: index,
      title: name,
      getContent: () => biography,
    }));

  render() {
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
                      <CardTitle>Loader Customization</CardTitle>
                      <Form className="mt-4">
                        <FormGroup row>
                          <Col sm={8}>
                            <Input type="select" bsSize="sm" onChange={this.setLoaderType} value={this.state.loaderType}>
                              {Object.keys(Types).map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </Input>
                          </Col>
                          <Col sm={4}>
                            <Button onClick={this.toggleBlocking} block color="primary">
                              Toggle Block
                            </Button>
                          </Col>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                  <LoadingOverlay tag="div" active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={
                      <Loader color="#ffffff" active type={this.state.loaderType}/>
                    }
                  >
                    <Card className="mb-3 text-white card-border bg-dark">
                      <CardHeader>
                        <i className="header-icon lnr-screen icon-gradient bg-warm-flame">
                          {" "}
                        </i>
                        Without Shadow
                        <div className="btn-actions-pane-right">
                          <Button size="sm" color="light">
                            Actions
                          </Button>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <p>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <p className="mb-0">
                          Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled.
                        </p>
                      </CardBody>
                      <CardFooter className="d-block text-end">
                        <Button size="sm" className="me-2 text-white" color="link">
                          No
                        </Button>
                        <Button size="lg" color="warning">
                          Yes
                        </Button>
                      </CardFooter>
                    </Card>
                  </LoadingOverlay>
                  <LoadingOverlay tag="div" active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="mb-3" inverse color="success">
                      <CardHeader>Header</CardHeader>
                      <CardBody>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardBody>
                      <CardFooter>Footer</CardFooter>
                    </Card>
                  </LoadingOverlay>
                </Col>
                <Col md="6">
                  <LoadingOverlay tag="div" active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="card-hover-shadow-2x mb-3">
                      <CardHeader>Shadow Hover Card</CardHeader>
                      <CardBody>
                        <p>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <p className="mb-0">
                          Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled.
                        </p>
                      </CardBody>
                      <CardFooter className="d-block text-end">
                        <Button size="sm" className="me-2" color="link">
                          Cancel
                        </Button>
                        <Button size="lg" className="btn-shadow-primary" color="primary">
                          Submit
                        </Button>
                      </CardFooter>
                    </Card>
                  </LoadingOverlay>
                  <LoadingOverlay tag="div" active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="card-hover-shadow card-border mb-3">
                      <CardHeader>Card Hover Shadow</CardHeader>
                      <CardBody>
                        <p>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <p className="mb-0">
                          Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled.
                        </p>
                      </CardBody>
                      <CardFooter className="d-block text-end">
                        <Button size="sm" className="me-2" color="link">
                          Cancel
                        </Button>
                        <Button size="lg" className="btn-shadow-primary" color="primary">
                          Submit
                        </Button>
                      </CardFooter>
                    </Card>
                  </LoadingOverlay>
                  <LoadingOverlay tag="div"
                    active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="mb-3 text-dark card-border" inverse color="light">
                      <CardHeader>Header</CardHeader>
                      <CardBody>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardBody>
                      <CardFooter>Footer</CardFooter>
                    </Card>
                  </LoadingOverlay>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <LoadingOverlay tag="div"
                    active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="main-card mb-3">
                      <CardHeader>
                        <i className="header-icon lnr-laptop-phone icon-gradient bg-plum-plate"> {" "} </i>
                        Header Menu
                        <div className="btn-actions-pane-right">
                          <Button className="btn-icon btn-icon-only" color="link">
                            <i className="pe-7s-leaf btn-icon-wrapper" />
                          </Button>
                          <Button className="btn-icon btn-icon-only" color="link">
                            <i className="pe-7s-cloud-download btn-icon-wrapper" />
                          </Button>
                          <UncontrolledButtonDropdown>
                            <DropdownToggle className="btn-icon btn-icon-only" color="link">
                              <i className="pe-7s-menu btn-icon-wrapper" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-shadow dropdown-menu-hover-link">
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem>
                                <i className="dropdown-icon lnr-inbox"> </i>
                                <span>Menus</span>
                              </DropdownItem>
                              <DropdownItem>
                                <i className="dropdown-icon lnr-file-empty"> </i>
                                <span>Settings</span>
                              </DropdownItem>
                              <DropdownItem>
                                <i className="dropdown-icon lnr-book"> </i>
                                <span>Actions</span>
                              </DropdownItem>
                              <DropdownItem divider />
                              <div className="p-3 text-end">
                                <Button className="me-2 btn-shadow btn-sm" color="link">
                                  View Details
                                </Button>
                                <Button className="me-2 btn-shadow btn-sm" color="primary">
                                  Action
                                </Button>
                              </div>
                            </DropdownMenu>
                          </UncontrolledButtonDropdown>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <p>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <p className="mb-0">
                          Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled.
                        </p>
                      </CardBody>
                      <CardFooter className="d-block text-end">
                        <Button size="sm" className="me-2" color="link">
                          Cancel
                        </Button>
                        <Button size="lg" color="success">
                          Save
                        </Button>
                      </CardFooter>
                    </Card>
                  </LoadingOverlay>
                  <LoadingOverlay tag="div" active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="main-card mb-3">
                      <CardHeader>
                        <i className="header-icon lnr-bicycle icon-gradient bg-love-kiss"> {" "} </i>
                        Header with Tabs
                        <div className="btn-actions-pane-right">
                          <ButtonGroup size="sm">
                            <Button color="dark"
                              className={
                                "btn-shadow " +
                                classnames({
                                  active: this.state.activeTab === "1",
                                })
                              }
                              onClick={() => {
                                this.toggle("1");
                              }}
                            >
                              Tab 1
                            </Button>
                            <Button color="dark"
                              className={
                                "btn-shadow " +
                                classnames({
                                  active: this.state.activeTab === "2",
                                })
                              }
                              onClick={() => {
                                this.toggle("2");
                              }}
                            >
                              Tab 2
                            </Button>
                            <Button color="dark"
                              className={
                                "btn-shadow " +
                                classnames({
                                  active: this.state.activeTab === "3",
                                })
                              }
                              onClick={() => {
                                this.toggle("3");
                              }}
                            >
                              Tab 3
                            </Button>
                          </ButtonGroup>
                        </div>
                      </CardHeader>
                      <CardBody>
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
                              Like Aldus PageMaker including versions of Lorem. It
                              has survived not only five centuries, but also the
                              leap into electronic typesetting, remaining
                              essentially unchanged.{" "}
                            </p>
                          </TabPane>
                          <TabPane tabId="3">
                            <p>
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic
                              typesetting, remaining essentially unchanged.{" "}
                            </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                      <CardFooter className="d-block text-end">
                        <Button className="me-2 btn-icon btn-icon-only" outline color="danger">
                          <i className="pe-7s-trash btn-icon-wrapper"> </i>
                        </Button>
                        <Button className="btn-wide" color="success">
                          Save
                        </Button>
                      </CardFooter>
                    </Card>
                  </LoadingOverlay>
                  <LoadingOverlay  tag="div" active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="main-card mb-3">
                      <CardHeader>
                        <i className="header-icon lnr-gift icon-gradient bg-mixed-hopes"> {" "} </i>
                        Alternate Tabs
                        <div className="btn-actions-pane-right">
                          <ButtonGroup size="sm">
                            <Button color="focus"
                              className={
                                "btn-pill ps-3 " +
                                classnames({
                                  active: this.state.activeTab === "1",
                                })
                              }
                              onClick={() => {
                                this.toggle("1");
                              }}
                            >
                              Tab 1
                            </Button>
                            <Button color="focus"
                              className={classnames({
                                active: this.state.activeTab === "2",
                              })}
                              onClick={() => {
                                this.toggle("2");
                              }}
                            >
                              Tab 2
                            </Button>
                            <Button color="focus"
                              className={
                                "btn-pill pe-3 " +
                                classnames({
                                  active: this.state.activeTab === "3",
                                })
                              }
                              onClick={() => {
                                this.toggle("3");
                              }}
                            >
                              Tab 3
                            </Button>
                          </ButtonGroup>
                        </div>
                      </CardHeader>
                      <CardBody>
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
                              Like Aldus PageMaker including versions of Lorem. It
                              has survived not only five centuries, but also the
                              leap into electronic typesetting, remaining
                              essentially unchanged.{" "}
                            </p>
                          </TabPane>
                          <TabPane tabId="3">
                            <p>
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic
                              typesetting, remaining essentially unchanged.{" "}
                            </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </LoadingOverlay>
                </Col>
                <Col md="6">
                  <LoadingOverlay tag="div"
                    active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="main-card mb-3">
                      <CardHeader>
                        <i className="header-icon lnr-graduation-hat icon-gradient bg-happy-itmeo">
                          {" "}
                        </i>
                        Header Menu
                        <div className="btn-actions-pane-right">
                          <ButtonGroup size="sm">
                            <UncontrolledButtonDropdown>
                              <DropdownToggle caret color="warning" className="btn-pill ps-3">
                                Left
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-rounded">
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem>Menus</DropdownItem>
                                <DropdownItem>Settings</DropdownItem>
                                <DropdownItem>Actions</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Dividers</DropdownItem>
                              </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            <Button color="warning">Middle</Button>
                            <Button color="warning" className="btn-pill pe-3">
                              Right
                            </Button>
                          </ButtonGroup>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <p>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <p className="mb-0">
                          Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled.
                        </p>
                      </CardBody>
                      <CardFooter className="d-block text-end">
                        <Button size="sm" className="me-2" color="link">
                          Cancel
                        </Button>
                        <Button className="btn-wide btn-shadow" color="primary">
                          Submit
                        </Button>
                      </CardFooter>
                    </Card>
                  </LoadingOverlay>
                  <LoadingOverlay tag="div" active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="mb-3">
                      <CardHeader>
                        <Nav>
                          <NavItem>
                            <NavLink href="#"
                              className={classnames({
                                active: this.state.activeTab === "1",
                              })}
                              onClick={() => {
                                this.toggle("1");
                              }}
                            >
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
                              }}
                            >
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
                              }}
                            >
                              Tab 3
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>
                      <CardBody>
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
                              Like Aldus PageMaker including versions of Lorem. It
                              has survived not only five centuries, but also the
                              leap into electronic typesetting, remaining
                              essentially unchanged.{" "}
                            </p>
                          </TabPane>
                          <TabPane tabId="3">
                            <p>
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic
                              typesetting, remaining essentially unchanged.{" "}
                            </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                      <CardFooter className="d-block text-end">
                        <Button className="btn-wide btn-shadow" color="danger">
                          Delete
                        </Button>
                      </CardFooter>
                    </Card>
                  </LoadingOverlay>
                  <LoadingOverlay tag="div" active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    spinner={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="mb-3">
                      <CardHeader>
                        <Nav justified>
                          <NavItem>
                            <NavLink href="#"
                              className={classnames({
                                active: this.state.activeTab === "1",
                              })}
                              onClick={() => {
                                this.toggle("1");
                              }}
                            >
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
                              }}
                            >
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
                              }}
                            >
                              Tab 3
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>
                      <CardBody>
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
                              Like Aldus PageMaker including versions of Lorem. It
                              has survived not only five centuries, but also the
                              leap into electronic typesetting, remaining
                              essentially unchanged.{" "}
                            </p>
                          </TabPane>
                          <TabPane tabId="3">
                            <p>
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic
                              typesetting, remaining essentially unchanged.{" "}
                            </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </LoadingOverlay>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <LoadingOverlay tag="div" active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    className="block-overlay-dark"
                    spinner={
                      <Loader color="#fff" active type={this.state.loaderType} />
                    }
                  >
                    <Card className="mb-3 card-tabs text-white card-border" color="focus">
                      <Tabs tabsWrapperClass="card-header" {...this.state} />
                    </Card>
                  </LoadingOverlay>
                  <LoadingOverlay
                    tag="div"
                    active={this.state.active}
                    styles={{
                      overlay: (base) => ({
                        ...base,
                        background: "#fff",
                        opacity: 0.5,
                      }),
                    }}
                    loader={<Loader active type={this.state.loaderType} />}
                  >
                    <Card className="mb-3 card-tabs">
                      <Tabs tabsWrapperClass="card-header" {...this.state} />
                    </Card>
                  </LoadingOverlay>
                </Col>
              </Row>
            </Container>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default CardsBlockLoadingExample;
