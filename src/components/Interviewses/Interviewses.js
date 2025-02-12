// src/components/InterviewForm.js
import React, { useState } from 'react';
import './InterviewForm.css'; // Import CSS file

const Interviewses= () => {
  const [candidateName, setCandidateName] = useState('');
  const [interviewerName, setInterviewerName] = useState('');
  const [interviewType, setInterviewType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Interview Scheduled');
    // Here you would typically save the data to localStorage or API
  };

  return (
    <div className="interview-form-container">
      <h2 className="interview-form-title">Schedule New Interview</h2>
      <form onSubmit={handleSubmit} className="interview-form">
        <div className="interview-form-group">
          <label className="interview-form-label">Candidate Name:</label>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
            className="interview-form-input"
          />
        </div>
        <div className="interview-form-group">
          <label className="interview-form-label">Interviewer Name:</label>
          <input
            type="text"
            value={interviewerName}
            onChange={(e) => setInterviewerName(e.target.value)}
            required
            className="interview-form-input"
          />
        </div>
        <div className="interview-form-group">
          <label className="interview-form-label">Interview Type:</label>
          <select
            value={interviewType}
            onChange={(e) => setInterviewType(e.target.value)}
            required
            className="interview-form-input"
          >
            <option value="">Select Interview Type</option>
            <option value="Technical">Technical</option>
            <option value="HR">HR</option>
            <option value="Behavioral">Behavioral</option>
          </select>
        </div>
        <div className="interview-form-group">
          <label className="interview-form-label">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="interview-form-input"
          />
        </div>
        <div className="interview-form-group">
          <label className="interview-form-label">Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="interview-form-input"
          />
        </div>
        <button type="submit" className="interview-form-button">Schedule Interview</button>
      </form>
    </div>
  );
};

export default Interviewses;
