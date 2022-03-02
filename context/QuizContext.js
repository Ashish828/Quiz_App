import React, { useState, createContext } from "react";

export const QuizContext = createContext([]);

export const QuizContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  return (
    <QuizContext.Provider value={[questions, setQuestions]}>
      {children}
    </QuizContext.Provider>
  );
};
