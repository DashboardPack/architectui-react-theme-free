import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
} from "reactstrap";

import bg1 from "../../../../assets/utils/images/dropdown-header/abstract1.jpg";
import bg2 from "../../../../assets/utils/images/dropdown-header/abstract2.jpg";
import bg3 from "../../../../assets/utils/images/dropdown-header/abstract3.jpg";

import {
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import PerfectScrollbar from "react-perfect-scrollbar";

class ScrollableElements extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Medium Scrollable Area</CardTitle>
                    <div className="scroll-area-md">
                      <PerfectScrollbar>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                      </PerfectScrollbar>
                    </div>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Large Scrollable Area</CardTitle>
                    <div className="scroll-area-lg">
                      <PerfectScrollbar>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                      </PerfectScrollbar>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Small Scrollable Area</CardTitle>
                    <div className="scroll-area-sm">
                      <PerfectScrollbar>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                      </PerfectScrollbar>
                    </div>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Scrollable Dropdown Menus</CardTitle>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle caret className="mb-2 me-2" color="primary">
                        Bottom Header Buttons
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-lg">
                        <div className="dropdown-menu-header">
                          <div className="dropdown-menu-header-inner bg-primary">
                            <div className="menu-header-image"
                              style={{
                                backgroundImage: "url(" + bg1 + ")",
                              }}/>
                            <div className="menu-header-content">
                              <div>
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                              <div className="menu-header-btn-pane">
                                <Button size="sm" color="dark" className="me-2">
                                  Settings
                                </Button>
                                <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                                  <i className="pe-7s-config btn-icon-wrapper"> {" "}</i>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="scroll-area-xs">
                          <PerfectScrollbar>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  Chat
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">Recover Password</NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  Settings
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  Messages
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">Logs</NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn">
                                <Button size="sm" className="btn-wide btn-shadow" color="danger">
                                  Cancel
                                </Button>
                              </NavItem>
                            </Nav>
                          </PerfectScrollbar>
                        </div>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle caret color="success" className="mb-2 me-2">
                        Left Aligned Header
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-lg">
                        <div className="dropdown-menu-header">
                          <div className="dropdown-menu-header-inner bg-success">
                            <div className="menu-header-image opacity-1"
                              style={{
                                backgroundImage: "url(" + bg3 + ")",
                              }}/>
                            <div className="menu-header-content text-start">
                              <h5 className="menu-header-title">Settings</h5>
                              <h6 className="menu-header-subtitle">
                                Manage all of your options
                              </h6>
                              <div className="menu-header-btn-pane">
                                <Button size="sm" color="dark" className="me-2">
                                  Settings
                                </Button>
                                <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                                  <i className="pe-7s-config btn-icon-wrapper"> {" "}</i>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="scroll-area-xs"
                          style={{
                            height: "150px",
                          }}>
                          <PerfectScrollbar>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  Chat
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">Recover Password</NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  Settings
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  Messages
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">Logs</NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  Messages
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">Logs</NavLink>
                              </NavItem>
                            </Nav>
                          </PerfectScrollbar>
                        </div>
                        <Nav vertical>
                          <NavItem className="nav-item-divider" />
                          <NavItem className="nav-item-btn">
                            <Button size="sm" className="btn-wide btn-shadow" color="danger">
                              Cancel
                            </Button>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle caret color="secondary" className="mb-2 me-2">
                        Left Aligned Header Buttons
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-lg">
                        <div className="dropdown-menu-header">
                          <div className="dropdown-menu-header-inner bg-secondary">
                            <div className="menu-header-image opacity-5"
                              style={{
                                backgroundImage: "url(" + bg2 + ")",
                              }}/>
                            <div className="menu-header-content btn-pane-right">
                              <div>
                                <h5 className="menu-header-title">Settings</h5>
                                <h6 className="menu-header-subtitle">
                                  Manage all of your options
                                </h6>
                              </div>
                              <div className="menu-header-btn-pane">
                                <Button size="sm" className="btn-icon btn-icon-only" color="warning">
                                  <i className="pe-7s-config btn-icon-wrapper"> {" "} </i>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="scroll-area-xs">
                          <PerfectScrollbar>
                            <Nav vertical>
                              <NavItem className="nav-item-header">
                                Activity
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  Chat
                                  <div className="ms-auto badge rounded-pill bg-info">
                                    8
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">Recover Password</NavLink>
                              </NavItem>
                              <NavItem className="nav-item-header">
                                My Account
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  Settings
                                  <div className="ms-auto badge bg-success">
                                    New
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">
                                  Messages
                                  <div className="ms-auto badge bg-warning">
                                    512
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#">Logs</NavLink>
                              </NavItem>
                              <NavItem className="nav-item-divider" />
                              <NavItem>
                                <NavLink href="#">Logs</NavLink>
                              </NavItem>
                            </Nav>
                          </PerfectScrollbar>
                        </div>
                        <Nav vertical>
                          <NavItem className="nav-item-divider" />
                          <NavItem className="nav-item-btn">
                            <Button size="sm" className="btn-wide btn-shadow" color="danger">
                              Cancel
                            </Button>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardHeader>
                    <i className="header-icon lnr-laptop-phone icon-gradient bg-plum-plate"> {" "} </i>
                    Header Menu
                    <div className="btn-actions-pane-right actions-icon-btn">
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
                        <DropdownMenu className="dropdown-menu-right dropdown-menu-shadow dropdown-menu-hover-link">
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
                    <div className="scroll-area-sm">
                      <PerfectScrollbar>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                      </PerfectScrollbar>
                    </div>
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
              </Col>
            </Row>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default ScrollableElements;
