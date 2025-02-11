// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Importing Dashboard
import InterviewForm from './components/InterviewForm'; // Importing InterviewForm

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Interview Scheduler</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<InterviewForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
