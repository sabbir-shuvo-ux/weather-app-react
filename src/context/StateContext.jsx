import React, { createContext, useState, useEffect, useContext } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [foreCasteData, setForeCasteData] = useState([]);

  return (
    <StateContext.Provider value={{ foreCasteData, setForeCasteData }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
