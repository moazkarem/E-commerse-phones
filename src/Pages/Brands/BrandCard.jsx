import React, { useMemo } from "react";
import { images } from "./data";
import { Link } from "react-router-dom";
const BrandCard = ({ brand, index }) => {
  const { slug, name, _id } = brand;
  const randomImage = useMemo(() => {
    let selectedImage;
    do {
      selectedImage = images[Math.floor(Math.random() * images.length)];
    } while (index > 0 && selectedImage === images[index - 1]);
    return selectedImage;
  }, [index]);
  return (
    <Link to={`/brands/${_id}`}>
      <div
         data-aos="fade-up"
         data-aos-duration="300"
         data-aos-delay={index * 100}
      className="brand-logo flex flex-col justify-center items-center gap-6 mb-10 cursor-pointer">
        <div className="bg-[#0D0D0D] p-3 rounded-[10px] group overflow-hidden w-full">
          <img
            src={randomImage}
            alt={slug}
            className="w-full h-[400px] max-[912px]:h-[300px] transform transition-all duration-300 group-hover:scale-105 "
          />
        </div>
        <h5 className=" text-center capitalize text-[18px] text-[#ed1d24]  pt-4">
          {name}
        </h5>
      </div>
    </Link>
  );
};

export default BrandCard;
