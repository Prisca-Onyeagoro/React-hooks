import React, { createContext } from 'react';

export const Workoutcontext = createContext();

export const WorkoutcontextProvider = ({ children }) => {
  return <Workoutcontext.Provider>{children}</Workoutcontext.Provider>;
};
