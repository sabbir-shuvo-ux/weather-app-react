import React from "react";
import SliderButton from "./SliderButton";
import { useStateContext } from "../context/StateContext";
import Card from "./Card";
import ErrorBox from "./ErrorBox";

const WeatherForecaste = () => {
  const { foreCasteData } = useStateContext();

  return (
    <div>
      <div className="pl-8">
        <h1 className="text-start text-[1.25rem] leading-[1.85663rem] tracking-[0.02938rem] text-white">
          WEEKLY FORECAST
        </h1>
      </div>
      <div className="title_divider"></div>
      {foreCasteData?.data?.length > 0 ? (
        <div className="relative group mt-8 mb-4">
          {/* sldier button components  */}
          <SliderButton sliderId="slider" />
          <div
            id="slider"
            className="p-4 pt-0 overflow-x-scroll overflow-y-hidden flex gap-[1rem] scrollbar-hide scroll-smooth"
          >
            {/* Weather forcaste card components */}
            {foreCasteData?.data?.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <ErrorBox text="Please search by any city or country name" />
      )}
    </div>
  );
};

export default WeatherForecaste;
