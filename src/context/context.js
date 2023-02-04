import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const PositionContext = createContext();

const initialState = {
  homePosition: 0,
  aboutPosition: 0,
  resumePosition: 0,
  portfolioPosition: 0,
  skillsPosition: 0
};

const PositionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PositionContext.Provider value={{ state, dispatch }}>{children}</PositionContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(PositionContext);
};

export { PositionContext, PositionProvider };
