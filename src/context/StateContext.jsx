import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [foreCasteData, setForeCasteData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [loader, setLoader] = useState(false);
  return (
    <StateContext.Provider
      value={{
        foreCasteData,
        setForeCasteData,
        setCurrentWeather,
        currentWeather,
        loader,
        setLoader,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
