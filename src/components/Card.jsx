import React from "react";
import { testIcon } from "../assets/index";

const Card = () => {
  return (
    <div className="card">
      <h2 className="text-white uppercase">sunday</h2>
      <img className="mx-auto w-[50px]" src={testIcon} alt="test img" />
      <h3 className="text-white uppercase">Broken clouds</h3>
      <h4 className="text-white uppercase text-[1.25rem]">20°</h4>
    </div>
  );
};

export default Card;
