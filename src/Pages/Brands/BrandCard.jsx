import React from "react";
import { Link } from "react-router-dom";
import { imageClean } from "../../helpers/imageClean";

const BrandCard = ({ brand, index }) => {
  const { image, slug, name, _id } = brand;
  return (
    <Link to={`/brands/${_id}`}>
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay={index * 100}
        className="brand-logo flex flex-col justify-center items-center gap-4 mb-4 cursor-pointer"
      >
        <div className="bg-[#0D0D0D] p-3 rounded-[10px] group overflow-hidden w-full h-[400px] max-[912px]:h-[300px]">
          <img
            src={imageClean(image)}
            alt={slug}
            className=" transform transition-all duration-300 group-hover:scale-105 object-contain"
          />
        </div>
        <h5 className=" text-center capitalize text-[18px] text-[#a9afc3]  pt-4">
          {name}
        </h5>
      </div>
    </Link>
  );
};

export default BrandCard;
