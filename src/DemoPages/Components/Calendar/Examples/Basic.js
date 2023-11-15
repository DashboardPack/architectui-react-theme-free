import React, { Fragment, Component } from "react";

import { Card, CardBody } from "reactstrap";

import { Calendar, momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from "moment";
import events from "./Events";

const localizer = momentLocalizer(moment);

export default class CalendarBasic extends Component {
  render() {
    return (
      <Fragment>
        <Card className="mb-3">
          <CardBody>
            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end"/>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}
