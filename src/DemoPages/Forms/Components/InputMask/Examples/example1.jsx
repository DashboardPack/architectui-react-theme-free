import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody, CardTitle, InputGroup } from 'reactstrap';

import { InputMask } from '@react-input/mask';

import { faCalendarAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FormInputMaskExample extends React.Component {
  // `_` placeholders accept a single digit; literal characters stay as typed.
  replacement = { _: /\d/ };

  state = {
    value: '',
    mask: '____-____-____-____',
  };

  onChange = (event) => {
    const value = event.target.value;
    // American Express cards (starting 34/37) use a 4-6-5 grouping.
    const mask = /^3[47]/.test(value) ? '____-______-_____' : '____-____-____-____';
    this.setState({ mask, value });
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Col md="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Phone Numbers</CardTitle>
                <InputGroup className="mb-3">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <InputMask
                    className="form-control"
                    mask="+49 __ ___ __"
                    replacement={this.replacement}
                  />
                </InputGroup>
                <InputGroup>
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <InputMask
                    className="form-control"
                    mask="+7 (___) ___-__-__"
                    replacement={this.replacement}
                  />
                </InputGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Dates</CardTitle>
                <InputGroup className="mb-3">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </div>
                  <InputMask
                    className="form-control"
                    mask="__-__-____"
                    replacement={this.replacement}
                    defaultValue="27-10-2018"
                  />
                </InputGroup>
                <InputGroup>
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </div>
                  <InputMask
                    className="form-control"
                    mask="__/__/____"
                    replacement={this.replacement}
                    placeholder="Enter birthdate"
                  />
                </InputGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Credit Card</CardTitle>
                <InputGroup>
                  <div className="input-group-text">@</div>
                  <InputMask
                    className="form-control"
                    mask={this.state.mask}
                    replacement={this.replacement}
                    value={this.state.value}
                    onChange={this.onChange}
                  />
                </InputGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default FormInputMaskExample;
