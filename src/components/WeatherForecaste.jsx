import React from "react";
import { testIcon } from "../assets/index";
import SliderButton from "./SliderButton";

const WeatherForecaste = () => {
  return (
    <div>
      <div className="pl-8">
        <h1 className="text-start text-[1.25rem] leading-[1.85663rem] tracking-[0.02938rem] text-white">
          WEEKLY FORECAST
        </h1>
      </div>
      <div className="title_divider"></div>
      <div className="relative group mt-8 mb-4">
        {/* sldier button components  */}
        <SliderButton sliderId="slider" />
        <div
          id="slider"
          className="p-4 pt-0 overflow-x-scroll overflow-y-hidden flex gap-[1rem] scrollbar-hide scroll-smooth"
        >
          <div className="card">
            <h2 className="text-white uppercase">sunday</h2>
            <img className="mx-auto w-[50px]" src={testIcon} alt="test img" />
            <h3 className="text-white uppercase">Broken clouds</h3>
            <h4 className="text-white uppercase text-[1.25rem]">20°</h4>
          </div>
          <div className="card">
            <h2 className="text-white uppercase">sunday</h2>
            <img className="mx-auto w-[50px]" src={testIcon} alt="test img" />
            <h3 className="text-white uppercase">Broken clouds</h3>
            <h4 className="text-white uppercase text-[1.25rem]">20°</h4>
          </div>
          <div className="card">
            <h2 className="text-white uppercase">sunday</h2>
            <img className="mx-auto w-[50px]" src={testIcon} alt="test img" />
            <h3 className="text-white uppercase">Broken clouds</h3>
            <h4 className="text-white uppercase text-[1.25rem]">20°</h4>
          </div>
          <div className="card">
            <h2 className="text-white uppercase">sunday</h2>
            <img className="mx-auto w-[50px]" src={testIcon} alt="test img" />
            <h3 className="text-white uppercase">Broken clouds</h3>
            <h4 className="text-white uppercase text-[1.25rem]">20°</h4>
          </div>
          <div className="card">
            <h2 className="text-white uppercase">sunday</h2>
            <img className="mx-auto w-[50px]" src={testIcon} alt="test img" />
            <h3 className="text-white uppercase">Broken clouds</h3>
            <h4 className="text-white uppercase text-[1.25rem]">20°</h4>
          </div>
          <div className="card">
            <h2 className="text-white uppercase">sunday</h2>
            <img className="mx-auto w-[50px]" src={testIcon} alt="test img" />
            <h3 className="text-white uppercase">Broken clouds</h3>
            <h4 className="text-white uppercase text-[1.25rem]">20°</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecaste;
