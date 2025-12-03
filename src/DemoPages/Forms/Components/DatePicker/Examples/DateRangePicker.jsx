import React, { Fragment } from "react";

import { InputGroup, FormGroup, Label, Form, Col, Row } from "reactstrap";

import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DatePicker from "react-datepicker";

import moment from "moment";

class FormDateRangePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;

    if (moment(startDate).isAfter(endDate)) {
      endDate = startDate;
    }

    this.setState({ startDate, endDate });
  };

  handleChangeStart = (startDate) => this.handleChange({ startDate });

  handleChangeEnd = (endDate) => this.handleChange({ endDate });

  render() {
    return (
      <Fragment>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail" className="me-sm-2">
                  Start Date
                </Label>
                <InputGroup>
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </div>
                  <DatePicker
                    className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChangeStart}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword" className="me-sm-2">
                  End Date
                </Label>
                <DatePicker
                  className="form-control"
                  selected={this.state.endDate}
                  onChange={this.handleChangeEnd}
                  selectsEnd
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }
}

export default FormDateRangePicker;
