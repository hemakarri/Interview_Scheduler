// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Link to navigate to InterviewForm

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>View your scheduled interviews here.</p>
      <Link to="/schedule">
        <button>Schedule New Interview</button>
      </Link>
    </div>
  );
};

export default Dashboard;
