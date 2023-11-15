import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import cx from "classnames";

import Switch from "react-switch";

class FormToggleSwitchExample extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      isToggleOn: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  handleClick() {
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Colors</CardTitle>
                    <div className="text-center">
                      <div className="switch has-switch me-2 mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-danger">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-danger">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-warning">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-warning">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-success">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-success">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-info">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-info">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-dark">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-dark">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-focus">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-focus">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-alternate">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-alternate">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-light">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-light">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right">OFF</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Smaller</CardTitle>
                    <div className="text-center">
                      <div className="switch has-switch has-switch-sm me-2 mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-danger">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-danger">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch has-switch-sm mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-warning">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-warning">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch has-switch-sm mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-success">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-success">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch has-switch-sm mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-info">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-info">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch has-switch-sm mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-dark">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-dark">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch has-switch-sm mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-focus">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-focus">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch has-switch-sm mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-alternate">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-alternate">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch has-switch-sm mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left bg-light">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right bg-light">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch has-switch-sm mb-2 me-2"  data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right">OFF</span>
                        </div>
                      </div>
                      <div className="switch has-switch has-switch-sm mb-2 me-2" data-on-label="ON"
                        data-off-label="OFF" onClick={this.handleClick}>
                        <div className={cx("switch-animate", {
                            "switch-on": this.state.isToggleOn,
                            "switch-off": !this.state.isToggleOn,
                          })}>
                          <input type="checkbox" />
                          <span className="switch-left">ON</span>
                          <label>&nbsp;</label>
                          <span className="switch-right">OFF</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card>
                  <CardBody>
                    <CardTitle>Alternate Style</CardTitle>
                    <Row className="text-center">
                      <Col md="6">
                        <b className="d-block mb-3">Alternate I</b>
                        <Switch checked={this.state.checked} onChange={this.handleChange} className="me-2 mb-2"/>
                        <Switch checked={this.state.checked} onChange={this.handleChange} disabled className="me-2 mb-2"/>
                      </Col>
                      <Col md="6">
                        <b className="d-block mb-3">Alternate II</b>
                        <Switch checked={this.state.checked} onChange={this.handleChange} onColor="#86d3ff"
                          onHandleColor="#2693e6" handleDiameter={30} uncheckedIcon={false} checkedIcon={false}
                          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                          height={20} width={48} className="me-2 mb-2" id="material-switch"/>
                        <Switch onChange={this.handleChange} checked={this.state.checked}
                          className="me-2 mb-2" id="normal-switch"/>
                      </Col>
                    </Row>
                    <div className="divider" />
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

export default FormToggleSwitchExample;
