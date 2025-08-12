import React from "react";
import img1 from "../../../public/images/sony1000xm4-2.png";
import { LiaStarSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
// import { IoCard } from "react-icons/io5";
import { imageClean } from "./../../helpers/imageClean";

const IoCard = ({ product, idx }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${product?._id}`)}
      className="relative max-lg:mb-16 group flex flex-col justify-center items-center rounded-[10px] p-4 border border-[#333] overflow-visible cursor-pointer"
    >
      <img
        src={imageClean(product?.imageCover)}
        alt="Product Image"
        className="w-full h-auto"
      />

      <div
        className="absolute w-[90%] bg-[#111] rounded-[20px] shadow  shadow-[#fff]
                   left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2
                   p-4 "
      >
        <h1 className="text-[18px] text-white mb-2">{product?.title}</h1>

        <div className="flex w-full justify-between items-center">
          {/* التقييم */}
          <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-[#ed1d24] text-white">
            <span>{product?.ratingsAverage}</span>
            <LiaStarSolid />
          </div>

          <div className="flex flex-col justify-start items-start text-white">
            <span>{product?.price} $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoCard;
