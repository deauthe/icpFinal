import React, { useState } from "react";
import data from "../../assets/car.json";
import Button from "./Button";

// PropertyDetails Component
const PropertyDetails = (props) => {
  return (
    <div className="text-white flex flex-col justify-start  mx-5 mt-3">
      <p className="flex items-center text-md gap-1 font-[500]  ">
        {props.name}
      </p>
      <p className="flex items-center text-md gap-1 font-[300]  ">
        {props.year}
      </p>
    </div>
  );
};

// PriceAndReadMore Component
const PriceAndReadMore = () => {
  return (
    <div className="flex justify-between mx-5 items-center mt-4 ">
      <p>
        <span className="text-gray-500 text-xl font-[500] ">2.53 ETH</span>
      </p>
      <p>
        <span className="text-white text-md font-[400] ">$4487</span>
      </p>
    </div>
  );
};

function Cardesign({ cardsToShow }) {
  return (
    <>
      {cardsToShow.map((item) => (
        <div
          key={item.id}
          className="w-[250px] h-[365px] glassmorphism rounded-2xl shadow flex flex-col "
        >
          <div className="rounded-xl overflow-hidden z-10 mt-[10px] relative mx-2">
            <img
              src={item.image_url}
              alt="image1"
              className="w-full h-[200px] object-cover "
            />
          </div>

          <PropertyDetails name={item.car_name} year={item.make_year} />
          <PriceAndReadMore />
        </div>
      ))}
    </>
  );
}

export default Cardesign;
