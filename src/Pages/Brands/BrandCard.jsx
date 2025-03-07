import React from "react";
import { images } from "./data";
import { Link } from "react-router-dom";
const BrandCard = ({ brand  }) => {
  const { slug, name } = brand;



  return (
    <div className="brand-logo flex flex-col justify-center items-center gap-6 mb-10 cursor-pointer">
   
      <div className="bg-[#0D0D0D] p-3 rounded-[10px] group overflow-hidden w-full">
        <img
          src={images[Math.floor(Math.random()*images.length)]}
          alt={slug}
          className="w-full h-[400px]  transform transition-all duration-300 group-hover:scale-105 "
        />
      </div>
      <h5 className=" text-center capitalize text-[18px] text-[#ed1d24]  pt-4">{name}</h5>
    </div>
  );
};

export default BrandCard;
