import React, { Fragment } from "react";

import { InputGroup } from "reactstrap";

import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DatePicker from "react-datepicker";

class FormDatePicker1 extends React.Component {
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
          <div className="input-group-text">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <DatePicker className="form-control" selected={this.state.startDate} onChange={this.handleChange}/>
        </InputGroup>
      </Fragment>
    );
  }
}

export default FormDatePicker1;
