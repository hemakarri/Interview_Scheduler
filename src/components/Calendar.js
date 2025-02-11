// src/components/Calendar.js
import React from "react";
import { useInterview } from "../context/InterviewContext";
import { Calendar as ReactBigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const { interviews } = useInterview();

  const events = interviews.map((interview) => ({
    id: interview.id,
    title: `${interview.candidate} - ${interview.type}`,
    start: new Date(interview.date),
    end: new Date(new Date(interview.date).getTime() + 60 * 60 * 1000), // Assuming interview duration is 1 hour
  }));

  return (
    <div style={{ height: 500 }}>
      <ReactBigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default Calendar;
