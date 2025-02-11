// src/components/InterviewForm.js
import React, { useState } from 'react';

const InterviewForm = () => {
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
    <div>
      <h2>Schedule New Interview</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Candidate Name:</label>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Interviewer Name:</label>
          <input
            type="text"
            value={interviewerName}
            onChange={(e) => setInterviewerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Interview Type:</label>
          <select
            value={interviewType}
            onChange={(e) => setInterviewType(e.target.value)}
            required
          >
            <option value="">Select Interview Type</option>
            <option value="Technical">Technical</option>
            <option value="HR">HR</option>
            <option value="Behavioral">Behavioral</option>
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Schedule Interview</button>
      </form>
    </div>
  );
};

export default InterviewForm;
