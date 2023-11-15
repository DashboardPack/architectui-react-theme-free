import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Card,
  CardBody,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  ListGroup,
  ListGroupItem,
  Dropdown,
  ButtonGroup,
  CardHeader,
  CardFooter,
  Button,
  Input,
  Container,
} from "reactstrap";

import PerfectScrollbar from "react-perfect-scrollbar";

import CountUp from "react-countup";

import { Progress } from "react-sweet-progress";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../../assets/utils/images/avatars/4.jpg";
import avatar5 from "../../../../assets/utils/images/avatars/5.jpg";
import avatar6 from "../../../../assets/utils/images/avatars/8.jpg";

import {
  faTrashAlt,
  faCheck,
  faEllipsisH,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ListGroupExampleAdvanced extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      cSelected: [],
      dropdownOpen: false,
    };

    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <ListGroup flush>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Alina Mcloughlin
                              </div>
                              <div className="widget-subheading">
                                A short profile description
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <ButtonGroup size="sm">
                                <Button className="btn-shadow" color="primary"
                                  onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>
                                  Hire
                                </Button>
                                <Button className="btn-shadow" color="primary"
                                  onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>
                                  Fire
                                </Button>
                              </ButtonGroup>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <img width={42} className="rounded" src={avatar2} alt=""/>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">Ruben Tillman</div>
                              <div className="widget-subheading">
                                Etiam sit amet orci eget eros faucibus
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="badge bg-danger">NEW</div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <img width={42} className="rounded-circle" src={avatar3} alt=""/>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Vinnie Wagstaff
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <Button className="btn-pill btn-hover-shine" size="sm" color="focus">
                                Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <img width={42} className="rounded-circle" src={avatar4} alt=""/>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Ella-Rose Henry
                              </div>
                              <div className="widget-subheading">
                                Lorem ipsum dolor sit amet, consectetuer
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="widget-numbers text-primary">
                                <CountUp start={-75.9} end={568.2} separator="" decimals={0} decimal="," prefix="$ " duration="20"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <img width={42} className="rounded-circle" src={avatar5} alt=""/>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">Eliot Huber</div>
                            </div>
                            <div className="widget-content-right">
                              <div className="ms-auto badge rounded-pill bg-warning">
                                43
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={52} className="rounded" src={avatar6} alt="" />
                              </div>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Product Sales</div>
                              <div className="widget-subheading opacity-10">
                                <span className="pe-2">
                                  <b>43</b> Sales
                                </span>
                                <span>
                                  <b className="text-success">$156,24</b> Totals
                                </span>
                              </div>
                            </div>
                            <div className="widget-content-right text-end me-3">
                              <div>
                                <b>52,5%</b>
                              </div>
                              YoY Growth
                            </div>
                            <div className="widget-content-right">
                              <div className="icon-wrapper">
                                <div className="progress-circle-wrapper">
                                  <Progress type="circle" percent={62} width="100%"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                              <div className="widget-heading">Product Sales</div>
                            </div>
                            <div className="widget-content-right">
                              <div className="icon-wrapper">
                                <div className="progress-circle-wrapper">
                                  <Progress type="circle" percent={78} width="100%"
                                    theme={{
                                      active: {
                                        trailColor: "#ccf3e6",
                                        color: "#3ac47d",
                                      },
                                    }}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-3">
                              <div className="icon-wrapper border-light rounded m-0">
                                <div className="icon-wrapper-bg bg-light" />
                                <i className="lnr-cog icon-gradient bg-happy-itmeo" />
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Hidden Actions Pane
                              </div>
                            </div>
                            <div className="widget-content-right widget-content-actions">
                              <Button color="primary" outline className="btn-pill">
                                Follow
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left center-elem me-2">
                              <i className="pe-7s-file text-muted fsize-2" />
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">Example file 1</div>
                            </div>
                            <div className="widget-content-right">
                              <Button className="btn-icon btn-icon-only" color="link">
                                <i className="pe-7s-download fsize-2 btn-icon-wrapper"> {" "} </i>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardHeader>ToDo List</CardHeader>
                    <ListGroup className="todo-list-wrapper" flush>
                      <ListGroupItem>
                        <div className="todo-indicator bg-warning" />
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-2 ms-2">
                              <Input type="checkbox" className="form-check-input-custom" id="exampleCustomCheckbox12" label="&nbsp;"/>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Wash the car
                                <div className="badge bg-danger ms-2">
                                  Rejected
                                </div>
                              </div>
                              <div className="widget-subheading">
                                <i>Written by Bob</i>
                              </div>
                            </div>
                            <div className="widget-content-right widget-content-actions">
                              <Button className="border-0 btn-transition" outline color="success">
                                <FontAwesomeIcon icon={faCheck} />
                              </Button>
                              <Button className="border-0 btn-transition" outline color="danger">
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="todo-indicator bg-focus" />
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-2 ms-2">
                              <Input type="checkbox" className="form-check-input-custom" id="exampleCustomCheckbox1" label="&nbsp;"/>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Task with hover dropdown menu
                              </div>
                              <div className="widget-subheading">
                                <div>
                                  By Johnny
                                  <div className="badge rounded-pill bg-info ms-2">
                                    NEW
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-right widget-content-actions">
                              <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
                                isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle color="link" className="border-0 btn-transition">
                                  <FontAwesomeIcon icon={faEllipsisH} />
                                </DropdownToggle>
                                <DropdownMenu end>
                                  <DropdownItem header>Header</DropdownItem>
                                  <DropdownItem disabled>Action</DropdownItem>
                                  <DropdownItem>Another Action</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="todo-indicator bg-primary" />
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-2 ms-2">
                              <Input type="checkbox" className="form-check-input-custom" id="exampleCustomCheckbox4" label="&nbsp;"/>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">
                                Badge on the right task
                              </div>
                              <div className="widget-subheading">
                                This task has show on hover actions!
                              </div>
                            </div>
                            <div className="widget-content-right widget-content-actions">
                              <Button className="border-0 btn-transition" outline color="success">
                                <FontAwesomeIcon icon={faCheck} />
                              </Button>
                            </div>
                            <div className="widget-content-right ms-3">
                              <div className="badge rounded-pill bg-success">
                                Latest Task
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="todo-indicator bg-info" />
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-2 ms-2">
                              <Input type="checkbox" className="form-check-input-custom" id="exampleCustomCheckbox2" label="&nbsp;"/>
                            </div>
                            <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={42} className="rounded" src={avatar2} alt=""/>
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Go grocery shopping
                              </div>
                              <div className="widget-subheading">
                                A short description for this todo item
                              </div>
                            </div>
                            <div className="widget-content-right widget-content-actions">
                              <Button className="border-0 btn-transition" outline color="success">
                                <FontAwesomeIcon icon={faCheck} />
                              </Button>
                              <Button className="border-0 btn-transition" outline color="danger">
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="todo-indicator bg-success" />
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left me-2 ms-2">
                              <Input type="checkbox" className="form-check-input-custom" id="exampleCustomCheckbox3" label="&nbsp;"/>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">
                                Development Task
                              </div>
                              <div className="widget-subheading">
                                Finish React ToDo List App
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="badge bg-warning me-2">69</div>
                            </div>
                            <div className="widget-content-right">
                              <Button className="border-0 btn-transition" outline color="success">
                                <FontAwesomeIcon icon={faCheck} />
                              </Button>
                              <Button className="border-0 btn-transition" outline color="danger">
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                    <CardFooter className="d-block text-end">
                      <Button size="sm" className="me-2" color="link">
                        Cancel
                      </Button>
                      <Button size="lg" color="success">
                        Save
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardHeader>Chat Box</CardHeader>
                    <div className="scroll-area-sm">
                      <PerfectScrollbar>
                        <div className="chat-wrapper p-1">
                          <div className="chat-box-wrapper">
                            <div>
                              <div className="avatar-icon-wrapper me-1">
                                <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                                <div className="avatar-icon avatar-icon-lg rounded">
                                  <img src={avatar1} alt="" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="chat-box">
                                But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain was
                                born and I will give you a complete account of the
                                system.
                              </div>
                              <small className="opacity-6">
                                <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                                11:01 AM | Yesterday
                              </small>
                            </div>
                          </div>
                          <div className="float-end">
                            <div className="chat-box-wrapper chat-box-wrapper-right">
                              <div>
                                <div className="chat-box">
                                  Expound the actual teachings of the great
                                  explorer of the truth, the master-builder of
                                  human happiness.
                                </div>
                                <small className="opacity-6">
                                  <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                                  11:01 AM | Yesterday
                                </small>
                              </div>
                              <div>
                                <div className="avatar-icon-wrapper ms-1">
                                  <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon avatar-icon-lg rounded">
                                    <img src={avatar1} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat-box-wrapper">
                            <div>
                              <div className="avatar-icon-wrapper me-1">
                                <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                                <div className="avatar-icon avatar-icon-lg rounded">
                                  <img src={avatar1} alt="" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="chat-box">
                                But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain was
                                born and I will give you a complete account of the
                                system.
                              </div>
                              <small className="opacity-6">
                                <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                                11:01 AM | Yesterday
                              </small>
                            </div>
                          </div>
                          <div className="float-end">
                            <div className="chat-box-wrapper chat-box-wrapper-right">
                              <div>
                                <div className="chat-box">
                                  Denouncing pleasure and praising pain was born
                                  and I will give you a complete account.
                                </div>
                                <small className="opacity-6">
                                  <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                                  11:01 AM | Yesterday
                                </small>
                              </div>
                              <div>
                                <div className="avatar-icon-wrapper ms-1">
                                  <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon avatar-icon-lg rounded">
                                    <img src={avatar2} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="float-end">
                            <div className="chat-box-wrapper chat-box-wrapper-right">
                              <div>
                                <div className="chat-box">
                                  The master-builder of human happiness.
                                </div>
                                <small className="opacity-6">
                                  <FontAwesomeIcon icon={faCalendarAlt} className="me-1"/>
                                  11:01 AM | Yesterday
                                </small>
                              </div>
                              <div>
                                <div className="avatar-icon-wrapper ms-1">
                                  <div className="badge badge-bottom btn-shine bg-success badge-dot badge-dot-lg" />
                                  <div className="avatar-icon avatar-icon-lg rounded">
                                    <img src={avatar2} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </PerfectScrollbar>
                    </div>
                    <CardFooter>
                      <Input bsSize="lg" type="text" placeholder="Write here and hit enter to send..."/>
                    </CardFooter>
                  </Card>
                  <Card className="main-card mb-3">
                    <CardBody>
                      <ListGroup>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Alina Mcloughlin
                                </div>
                                <div className="widget-subheading">
                                  A short profile description
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <ButtonGroup size="sm">
                                  <Button className="btn-shadow" color="primary"
                                    onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>
                                    Hire
                                  </Button>
                                  <Button className="btn-shadow" color="primary"
                                    onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>
                                    Fire
                                  </Button>
                                </ButtonGroup>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={42} className="rounded" src={avatar2} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Ruben Tillman
                                </div>
                                <div className="widget-subheading">
                                  Etiam sit amet orci eget eros faucibus
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="badge bg-danger">NEW</div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={42} className="rounded-circle" src={avatar3} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Vinnie Wagstaff
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <Button className="btn-pill btn-hover-shine" size="sm" color="focus">
                                  Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={42} className="rounded-circle" src={avatar4} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Ella-Rose Henry
                                </div>
                                <div className="widget-subheading">
                                  Lorem ipsum dolor sit amet, consectetuer
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-primary">
                                  <CountUp start={-75.9} end={568.2} separator="" decimals={0}
                                    decimal="," prefix="$ " duration="20"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img width={42} className="rounded-circle" src={avatar5} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">Eliot Huber</div>
                              </div>
                              <div className="widget-content-right">
                                <div className="ms-auto badge rounded-pill bg-warning">
                                  43
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <div className="widget-content-left">
                                  <img width={52} className="rounded" src={avatar6} alt=""/>
                                </div>
                              </div>
                              <div className="widget-content-left flex2">
                                <div className="widget-heading">
                                  Product Sales
                                </div>
                                <div className="widget-subheading opacity-10">
                                  <span className="pe-2">
                                    <b>43</b> Sales
                                  </span>
                                  <span>
                                    <b className="text-success">$156,24</b> Totals
                                  </span>
                                </div>
                              </div>
                              <div className="widget-content-right text-end me-3">
                                <div>
                                  <b>52,5%</b>
                                </div>
                                YoY Growth
                              </div>
                              <div className="widget-content-right">
                                <div className="icon-wrapper">
                                  <div className="progress-circle-wrapper">
                                    <Progress type="circle" percent={62} width="100%"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Product Sales
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="icon-wrapper">
                                  <div className="progress-circle-wrapper">
                                    <Progress type="circle" percent={78} width="100%"
                                      theme={{
                                        active: {
                                          trailColor: "#ccf3e6",
                                          color: "#3ac47d",
                                        },
                                      }}/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <div className="icon-wrapper border-light rounded m-0">
                                  <div className="icon-wrapper-bg bg-light" />
                                  <i className="lnr-cog icon-gradient bg-happy-itmeo" />
                                </div>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Hidden Actions Pane
                                </div>
                              </div>
                              <div className="widget-content-right widget-content-actions">
                                <Button color="primary" outline className="btn-pill">
                                  Follow
                                </Button>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left center-elem me-2">
                                <i className="pe-7s-file text-muted fsize-2" />
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Example file 1
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <Button className="btn-icon btn-icon-only" color="link">
                                  <i className="pe-7s-download fsize-2 btn-icon-wrapper"> {" "} </i>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
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

export default ListGroupExampleAdvanced;
