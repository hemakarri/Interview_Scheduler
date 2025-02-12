import React, { createContext, useContext, useState } from 'react';

// Create a context to store interviews data
const InterviewContext = createContext();

// Custom hook to use InterviewContext
export const useInterview = () => {
  return useContext(InterviewContext);
};

// InterviewProvider component that wraps the app
export const InterviewProvider = ({ children }) => {
  const [interviews, setInterviews] = useState(
    JSON.parse(localStorage.getItem('interviews')) || []
  );

  const saveToLocalStorage = (data) => {
    localStorage.setItem('interviews', JSON.stringify(data));
  };

  // Add a new interview
  const addInterview = (interview) => {
    const updatedInterviews = [...interviews, interview];
    setInterviews(updatedInterviews);
    saveToLocalStorage(updatedInterviews);
  };

  // Delete an interview
  const deleteInterview = (id) => {
    const updatedInterviews = interviews.filter((interview) => interview.id !== id);
    setInterviews(updatedInterviews);
    saveToLocalStorage(updatedInterviews);
  };

  // Update an existing interview
  const updateInterview = (updatedInterview) => {
    const updatedInterviews = interviews.map((interview) =>
      interview.id === updatedInterview.id ? updatedInterview : interview
    );
    setInterviews(updatedInterviews);
    saveToLocalStorage(updatedInterviews);
  };

  return (
    <InterviewContext.Provider value={{ interviews, addInterview, deleteInterview, updateInterview }}>
      {children}
    </InterviewContext.Provider>
  );
};
