import React from "react";
import img1 from "../../../public/images/sony1000xm4-2.png";
import { Link } from "react-router-dom";
import { LiaStarSolid } from "react-icons/lia";
const SingleCard = ({ product, idx }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-delay={idx * 100}
      className="relative group flex flex-col gap-3 justify-center items-center rounded-[10px] p-4 overflow-hidden border border-[#111]"
    >
      <img src={img1} alt="Product Image" className="w-full h-auto mb-2" />
      <h3 className="text-[18px] text-[#a9afc3] line-clamp-1">
        {product?.title}
      </h3>
      <div className="flex justify-between items-center w-full">
        <p className="text-[16px] text-[#fff] ">${product?.price}</p>
        <div className="flex justify-center gap-1">
          {Array.from({ length: Math.ceil(product?.ratingsQuantity) }).map(
            (_, idx) => (
              <LiaStarSolid key={idx} color="#ed1d24" />
            )
          )}
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link
          to={`/products/${product?._id}`}
          className="w-[80%] text-center rounded-full py-2 bg-[#a61c00] text-white hover:bg-[#872000]"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
