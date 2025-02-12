// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import InterviewItem from './components/InterviewItem/InterviewItem';
// import { useInterview } from "../context/InterviewContext"; // correct path
import Notification from "./components/Notification/Notification";
// import Context from "./Context/InterviewContext";
// import Context from "./components/context"
import Dashboard from './components/Dashboard/Dashboard';
import InterviewForm from './components/Interviewses/Interviewses';
// import interviewses from './components/Interviewses/Interviewses';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Interview Scheduler</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<InterviewForm />} />
          {/* <Route path="/InterviewItem" element={<InterviewItem/>}/> */}
          {/* <Route path ="/InterviewItem" element={<Interview/>}/> */}
          <Route path="/Notification" element={<Notification/>}/>
          <Route path="/Interviewses" element={<interviewses/>}/>
          {/* <Route path ="/context" element={<Context/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
