import React, { Fragment } from "react";

import { InputGroup, } from "reactstrap";

import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DatePicker from "react-datepicker";

class FormDatePicker2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <Fragment>
        <InputGroup>
          <DatePicker selected={this.state.startDate}  onChange={this.handleChange} showTimeSelect className="form-control"
            timeFormat="HH:mm" timeIntervals={30} dateFormat="LLL" timeCaption="Time"/>
          <div className="input-group-text">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
        </InputGroup>
      </Fragment>
    );
  }
}

export default FormDatePicker2;
