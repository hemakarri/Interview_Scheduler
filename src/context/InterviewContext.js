// // src/context/InterviewContext.js
// import React, { createContext, useState, useContext } from "react";

// const InterviewContext = createContext();

// export const useInterview = () => useContext(InterviewContext);

// export const InterviewProvider = ({ children }) => {
//   const [interviews, setInterviews] = useState(JSON.parse(localStorage.getItem("interviews")) || []);

//   const addInterview = (interview) => {
//     setInterviews((prevInterviews) => {
//       const newInterviews = [...prevInterviews, interview];
//       localStorage.setItem("interviews", JSON.stringify(newInterviews));
//       return newInterviews;
//     });
//   };

//   const updateInterview = (updatedInterview) => {
//     setInterviews((prevInterviews) => {
//       const newInterviews = prevInterviews.map((interview) =>
//         interview.id === updatedInterview.id ? updatedInterview : interview
//       );
//       localStorage.setItem("interviews", JSON.stringify(newInterviews));
//       return newInterviews;
//     });
//   };

//   const deleteInterview = (id) => {
//     setInterviews((prevInterviews) => {
//       const newInterviews = prevInterviews.filter((interview) => interview.id !== id);
//       localStorage.setItem("interviews", JSON.stringify(newInterviews));
//       return newInterviews;
//     });
//   };

//   return (
//     <InterviewContext.Provider value={{ interviews, addInterview, updateInterview, deleteInterview }}>
//       {children}
//     </InterviewContext.Provider>
//   );
// };
