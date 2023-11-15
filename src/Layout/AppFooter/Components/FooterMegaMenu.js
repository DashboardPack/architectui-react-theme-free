import React, { Fragment } from "react";

import { Popover, Nav, NavLink, Col, Row, NavItem, Button } from "reactstrap";

import bg4 from "../../../assets/utils/images/dropdown-header/city5.jpg";

import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FooterMegaMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      popoverOpen: false,
      popoverOpen2: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  toggle2() {
    this.setState({
      popoverOpen2: !this.state.popoverOpen2,
    });
  }

  state = {};

  render() {
    return (
      <Fragment>
        <Nav className="header-megamenu">
          <NavItem>
            <NavLink href="#" onClick={this.toggle} id="PopoverMegaMenuFooter">
              Footer Menu
              <FontAwesomeIcon className="ms-2 opacity-8" icon={faAngleUp} />
            </NavLink>
          </NavItem>
          <Popover className="rm-max-width" placement="top-start" fade={false} hideArrow
            trigger="legacy" isOpen={this.state.popoverOpen} target="PopoverMegaMenuFooter" toggle={this.toggle}>
            <div className="dropdown-mega-menu dropdown-mega-menu-sm">
              <div className="grid-menu grid-menu-2col">
                <Row className="g-0">
                  <Col xl="6" sm="6">
                    <Nav vertical>
                      <NavItem className="nav-item-header">Overview</NavItem>
                      <NavItem>
                        <NavLink href="#">
                          <i className="nav-link-icon lnr-inbox"> </i>
                          <span>Contacts</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          <i className="nav-link-icon lnr-book"> </i>
                          <span>Incidents</span>
                          <div className="ms-auto badge rounded-pill bg-danger">
                            5
                          </div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          <i className="nav-link-icon lnr-picture"> </i>
                          <span>Companies</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink disabled href="#">
                          <i className="nav-link-icon lnr-file-empty"> </i>
                          <span>Dashboards</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col xl="6" sm="6">
                    <Nav vertical>
                      <NavItem className="nav-item-header">
                        Sales &amp; Marketing
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Queues</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Resource Groups</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Goal Metrics
                          <div className="ms-auto badge bg-warning">3</div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Campaigns</NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Row>
              </div>
            </div>
          </Popover>
          <NavItem>
            <NavLink href="#" onClick={this.toggle2} id="PopoverGridFooter">
              Grid Menu
              <div className="badge bg-dark ms-0 ms-1">
                <small>NEW</small>
              </div>
              <FontAwesomeIcon className="ms-2 opacity-8" icon={faAngleUp} />
            </NavLink>
          </NavItem>
          <Popover className="rm-max-width popover-custom" fade={false} hideArrow trigger="legacy"
            placement="top-start" isOpen={this.state.popoverOpen2} target="PopoverGridFooter" toggle={this.toggle2}>
            <div className="dropdown-menu-header">
              <div className="dropdown-menu-header-inner bg-tempting-azure">
                <div className="menu-header-image opacity-1"
                  style={{
                    backgroundImage: "url(" + bg4 + ")",
                  }}/>
                <div className="menu-header-content text-dark">
                  <h5 className="menu-header-title">Two Column Grid</h5>
                  <h6 className="menu-header-subtitle">
                    Easy grid navigation inside popovers
                  </h6>
                </div>
              </div>
            </div>
            <div className="grid-menu grid-menu-2col">
              <Row className="g-0">
                <Col sm="6">
                  <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                    outline color="dark">
                    <i className="lnr-lighter text-dark opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                    Automation
                  </Button>
                </Col>
                <Col sm="6">
                  <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                    outline color="danger">
                    <i className="lnr-construction text-danger opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                    Reports
                  </Button>
                </Col>
                <Col sm="6">
                  <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                    outline color="success">
                    <i className="lnr-bus text-success opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                    Activity
                  </Button>
                </Col>
                <Col sm="6">
                  <Button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                    outline color="focus">
                    <i className="lnr-gift text-focus opacity-7 btn-icon-wrapper mb-2"> {" "} </i>
                    Settings
                  </Button>
                </Col>
              </Row>
            </div>
            <Nav vertical>
              <NavItem className="nav-item-divider" />
              <NavItem className="nav-item-btn clearfix">
                <div className="float-start">
                  <Button size="sm" color="link">
                    Link Button
                  </Button>
                </div>
                <div className="float-end">
                  <Button size="sm" className="btn-shadow" color="info">
                    Info Button
                  </Button>
                </div>
              </NavItem>
            </Nav>
          </Popover>
        </Nav>
      </Fragment>
    );
  }
}

export default FooterMegaMenu;
