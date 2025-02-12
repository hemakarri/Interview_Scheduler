import React from "react";
import { useInterview } from "../context/InterviewContext";
import { Calendar as ReactBigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.css'; // Import CSS file

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
    <div className="calendar-container">
      <ReactBigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="react-calendar"
      />
    </div>
  );
};

export default Calendar;
