import React from "react";

function CurrentWeather() {
  return (
    <div className="text-center">
      <h1 className="text-white text-[2.5rem] tracking-[0.463px] leading-[50.748px] mb-[1.5rem]">
        Dhaka
      </h1>
      <h1 className="text-[6rem] leading-[1.85663rem] tracking-[0.02938rem] text-white mb-[1.5rem]">
        20°
      </h1>
      <p className="text-white text-[1.5rem] leading-[3.17175rem] tracking-[0.02894rem]">
        Mostly clear
      </p>
      <div className="flex justify-between w-[200px] mx-auto">
        <h3 className="text-[1.25rem] text-white">Max:35°</h3>
        <h3 className="text-[1.25rem] text-white">Min:35°</h3>
      </div>
    </div>
  );
}

export default CurrentWeather;
