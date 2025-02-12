// src/components/InterviewItem.js
import React from "react";
import { useInterview } from "../context/InterviewContext";
import './InterviewItem.css'; // Import CSS file

const InterviewItem = ({ interview }) => {
  const { deleteInterview } = useInterview();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this interview?")) {
      deleteInterview(interview.id);
    }
  };

  return (
    <div className="interview-item-container">
      <h3 className="interview-item-title">{interview.candidate} - {interview.type}</h3>
      <p className="interview-item-text">Interviewer: {interview.interviewer}</p>
      <p className="interview-item-text">Date: {new Date(interview.date).toLocaleString()}</p>
      <button onClick={handleDelete} className="interview-item-delete-button">Delete</button>
    </div>
  );
};

export default InterviewItem;
