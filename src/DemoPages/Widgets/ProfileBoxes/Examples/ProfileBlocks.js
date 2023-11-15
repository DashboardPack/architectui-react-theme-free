import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import avatar5 from "../../../../assets/utils/images/avatars/5.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/4.jpg";
import avatar4 from "../../../../assets/utils/images/avatars/3.jpg";


import bg1 from "../../../../assets/utils/images/dropdown-header/abstract1.jpg";
import bg2 from "../../../../assets/utils/images/dropdown-header/city2.jpg";
import bg3 from "../../../../assets/utils/images/dropdown-header/city4.jpg";

import {
  Row,
  Col,
  Card,
} from "reactstrap";

class ProfileBlocks extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <Row>
                <Col md="6" lg="4">
                  <Card className="mb-3 profile-block">
                    <div className="dropdown-menu-header">
                      <img src={bg1} alt="" className="profile-blur opacity-10" />
                      <div className="profile-inner bg-warning opacity-5" />
                      <div className="menu-header-content">
                        <div className="avatar-icon-wrapper avatar-icon-lg">
                          <div className="avatar-icon rounded btn-hover-shine me-0">
                            <img src={avatar3} alt="Avatar 5" />
                          </div>
                        </div>
                        <h5 className="menu-header-title">Jessica Walberg</h5>
                        <div className="menu-header-btn-pane">
                          <Button className="btn-icon btn-pill me-2 btn-icon-only" color="link">
                            <i className="lnr-inbox btn-icon-wrapper"> </i>
                          </Button>
                          <Button className="btn-icon btn-pill btn-icon-only" color="link">
                            <i className="lnr-camera btn-icon-wrapper"> </i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="6" lg="4">
                  <Card className="mb-3 profile-block">
                    <div className="dropdown-menu-header">
                      <img src={bg3} alt="" className="profile-blur opacity-9" />
                      <div className="menu-header-content">
                        <div className="avatar-icon-wrapper avatar-icon-lg">
                          <div className="avatar-icon rounded-circle btn-hover-shine me-0">
                            <img src={avatar4} alt="Avatar 5" />
                          </div>
                        </div>
                        <h5 className="menu-header-title">John Rosenberg</h5>
                        <h6 className="menu-header-subtitle">
                          Short Profile description
                        </h6>
                        <div className="menu-header-btn-pane">
                          <Button className="btn-icon btn-pill me-2 btn-icon-only" color="link">
                            <i className="lnr-inbox btn-icon-wrapper"> </i>
                          </Button>
                          <Button className="btn-icon btn-pill btn-icon-only" color="link">
                            <i className="lnr-camera btn-icon-wrapper"> </i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="6" lg="4">
                  <Card className="mb-3 profile-block">
                    <div className="dropdown-menu-header">
                      <img src={bg2} alt="" className="profile-blur opacity-10" />
                      <div className="profile-inner bg-dark opacity-6" />
                      <div className="menu-header-content">
                        <div className="avatar-icon-wrapper avatar-icon-lg">
                          <div className="avatar-icon rounded btn-hover-shine me-0">
                            <img src={avatar5} alt="Avatar 5" />
                          </div>
                        </div>
                        <h5 className="menu-header-title">Jessica Walberg</h5>
                        <div className="menu-header-btn-pane">
                          <Button className="btn-icon btn-pill me-2 btn-icon-only" color="link">
                            <i className="lnr-inbox btn-icon-wrapper"> </i>
                          </Button>
                          <Button className="btn-icon btn-pill btn-icon-only" color="link">
                            <i className="lnr-camera btn-icon-wrapper"> </i>
                          </Button>
                        </div>
                      </div>
                    </div>
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

export default ProfileBlocks;
