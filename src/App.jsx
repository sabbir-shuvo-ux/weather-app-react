import React from "react";
import { mainBg } from "./assets/index";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecaste from "./components/WeatherForecaste";
import SearchBox from "./components/SearchBox";

const App = () => {
  return (
    <div className="mainBg flex justify-center items-center relative min-h-screen">
      <div className="w-[430px] absolute mainBgImg h-[calc(100vh-1rem)] rounded-2xl flex justify-between flex-col overflow-hidden">
        <SearchBox />
        <CurrentWeather />
        <WeatherForecaste />
      </div>
    </div>
  );
};

export default App;
