import React, { Fragment } from "react";

import DatePicker from "react-datepicker";

class FormDatePicker8 extends React.Component {
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
        <div className="text-center">
          <DatePicker inline selected={this.state.startDate}
            onChange={this.handleChange} calendarClassName="no-shadow"/>
        </div>
      </Fragment>
    );
  }
}

export default FormDatePicker8;
