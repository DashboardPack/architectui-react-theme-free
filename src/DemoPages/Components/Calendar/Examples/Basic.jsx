import React, { Fragment, Component } from 'react';

import { Card, CardBody } from 'reactstrap';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import events from './Events';

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { 'en-US': enUS },
});

export default class CalendarBasic extends Component {
  render() {
    return (
      <Fragment>
        <Card className="mb-3">
          <CardBody>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
            />
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}
