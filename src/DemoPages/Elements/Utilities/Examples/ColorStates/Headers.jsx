import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";

import bg2 from "../../../../../assets/utils/images/dropdown-header/abstract2.jpg";
import bg3 from "../../../../../assets/utils/images/dropdown-header/abstract3.jpg";
import bg4 from "../../../../../assets/utils/images/dropdown-header/abstract4.jpg";
import bg5 from "../../../../../assets/utils/images/dropdown-header/abstract5.jpg";

const Headers = () => {
  return (
    <Fragment>
      <Row>
        <Col md="3">
          <div className="dropdown-menu-header">
            <div className="dropdown-menu-header-inner bg-mean-fruit">
              <div className="menu-header-image"
                style={{
                  backgroundImage: "url(" + bg2 + ")",
                }}/>
              <div className="menu-header-content">
                <div>
                  <h5 className="menu-header-title">Settings</h5>
                  <h6 className="menu-header-subtitle">
                    Manage all of your options
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="dropdown-menu-header">
            <div className="dropdown-menu-header-inner bg-amy-crisp">
              <div className="menu-header-image"
                style={{
                  backgroundImage: "url(" + bg3 + ")",
                }}/>
              <div className="menu-header-content">
                <div>
                  <h5 className="menu-header-title">Settings</h5>
                  <h6 className="menu-header-subtitle">
                    Manage all of your options
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="dropdown-menu-header">
            <div className="dropdown-menu-header-inner bg-arielle-smile">
              <div className="menu-header-image"
                style={{
                  backgroundImage: "url(" + bg4 + ")",
                }}/>
              <div className="menu-header-content">
                <div>
                  <h5 className="menu-header-title">Settings</h5>
                  <h6 className="menu-header-subtitle">
                    Manage all of your options
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="dropdown-menu-header">
            <div className="dropdown-menu-header-inner bg-grow-early">
              <div className="menu-header-image"
                style={{
                  backgroundImage: "url(" + bg5 + ")",
                }}/>
              <div className="menu-header-content">
                <div>
                  <h5 className="menu-header-title">Settings</h5>
                  <h6 className="menu-header-subtitle">
                    Manage all of your options
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Headers;
