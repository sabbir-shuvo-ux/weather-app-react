import React from "react";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecaste from "./components/WeatherForecaste";
import SearchBox from "./components/SearchBox";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="mainBg flex justify-center items-center relative min-h-screen">
      <div className="responsive w-[430px] absolute mainBgImg h-[calc(100vh-1rem)] rounded-2xl flex justify-between flex-col overflow-hidden">
        <SearchBox />
        <CurrentWeather />
        <WeatherForecaste />
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
