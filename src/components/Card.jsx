import React from "react";
import moment from "moment";

const Card = ({ item }) => {
  const itemDate = item?.valid_date;
  const dayName = moment(itemDate).format("dddd");

  return (
    <div className="card cursor-pointer">
      <h2 className="text-white uppercase text-[14px]">
        {" "}
        {item?.valid_date ? dayName : null}{" "}
      </h2>
      <img
        className="mx-auto w-[50px]"
        src={`https://cdn.weatherbit.io/static/img/icons/${item?.weather?.icon}.png`}
        alt={item?.weather?.description}
        title={item?.weather?.description}
      />
      <h3 className="text-white uppercase"> {item?.weather?.description} </h3>
      <h4 className="text-white uppercase text-[1.25rem]"> {item?.temp}°</h4>
    </div>
  );
};

export default Card;
