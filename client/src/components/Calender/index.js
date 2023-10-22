import * as React from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
  
export default function Calender({events}) {
const localizer = momentLocalizer(moment);

return (

    <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ backgroundColor: 'white', // Green background color for cards
        color: '#347068', height: "74vh", padding:"20px" }}
    />
)
}