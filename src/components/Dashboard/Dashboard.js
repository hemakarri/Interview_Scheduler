// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Link to navigate to InterviewForm
import './Dashboard.css'; // Import CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-description">View your scheduled interviews here.</p>
      <Link to="/schedule" className="dashboard-link">
        <button className="dashboard-button">Schedule New Interview</button>
      </Link>
    </div>
  );
};

export default Dashboard;
