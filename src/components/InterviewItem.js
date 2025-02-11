// src/components/InterviewItem.js
import React from "react";
import { useInterview } from "../context/InterviewContext";

const InterviewItem = ({ interview }) => {
  const { deleteInterview } = useInterview();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this interview?")) {
      deleteInterview(interview.id);
    }
  };

  return (
    <div>
      <h3>{interview.candidate} - {interview.type}</h3>
      <p>Interviewer: {interview.interviewer}</p>
      <p>Date: {new Date(interview.date).toLocaleString()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default InterviewItem;
