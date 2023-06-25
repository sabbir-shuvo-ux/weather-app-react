import React from "react";
import { useStateContext } from "../context/StateContext";
import ErrorBox from "./ErrorBox";

function CurrentWeather() {
  const { currentWeather, loader } = useStateContext();

  return (
    <>
      {loader ? (
        <div className="flex justify-center flex-col items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[60px] h-[60px] text-white animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          Fetching Data...
        </div>
      ) : (
        <>
          {currentWeather.count ? (
            <>
              {currentWeather?.data?.map((item, index) => (
                <div key={index} className="text-center">
                  <h1 className="text-white text-[2.5rem] tracking-[0.463px] leading-[50.748px] mb-[0.5rem]">
                    {item?.city_name}
                  </h1>
                  <img
                    className="mx-auto w-[50px]"
                    src={`https://cdn.weatherbit.io/static/img/icons/${item?.weather?.icon}.png`}
                    alt={item?.weather?.description}
                    title={item?.weather?.description}
                  />
                  <h1 className="text-[6rem] leading-[1.85663rem] tracking-[0.02938rem] text-white mb-[1.5rem]">
                    {item?.temp}°
                  </h1>
                  <p className="text-white text-[1.5rem] leading-[3.17175rem] tracking-[0.02894rem]">
                    {item?.weather?.description}
                  </p>
                  <div className="">
                    <h3 className="text-[1.25rem] text-white">
                      Feels like: {item?.app_temp}°
                    </h3>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <ErrorBox text="Please search by any city or country name" />
          )}
        </>
      )}
    </>
  );
}

export default CurrentWeather;
