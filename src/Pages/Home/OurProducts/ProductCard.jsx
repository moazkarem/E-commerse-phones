import React, { useMemo } from "react";
import Rate from "rc-rate";
import "swiper/css/pagination";
import "swiper/css";
import { Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { images } from "./data";
const ProductCard = ({ product, index }) => {
  const { title, quantity, price, imageCover, slug, ratingsQuantity, _id } =
    product;
  const randomImage = useMemo(() => {
    let selectedImage;
    do {
      selectedImage = images[Math.floor(Math.random() * images.length)];
    } while (index > 0 && selectedImage === images[index - 1]);
    return selectedImage;
  }, [index]);
  return (
    <div className="rounded-[10px]">
      <div className="relative overflow-hidden w-full cursor-pointer rounded-[10px] pt-[100%] group bg-[#111]">
        <Link to={`products/${_id}`}>
          <div className="flex justify-center items-center w-full mx-auto ">
            <img
              src={randomImage}
              alt={slug}
              className="rounded-[10px] w-[90%] h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 transition-all duration-300 group-hover:scale-110"
            />
          </div>
        </Link>
      </div>

      <div className="flex justify-center flex-col">
        <div className="flex justify-between items-center py-5 px-3">
          <div className="rate rc-rate">
            <Rate value={ratingsQuantity} disabled allowHalf />
          </div>
          <div className="flex">
            <h3 className="text-[16px] text-[#fff]">{quantity} Piese</h3>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 px-0">
          <h3 className="text-[#ed1d24] text-[18px] line-clamp-1">{title}</h3>
          <h3 className="text-[#a9afc3] text-[16px]">{price}$</h3>
        </div>
        <div className="flex justify-between items-center gap-3 mt-4">
          <button className="text-[#ed1d24] rounded-[6px] border px-6 max-[380px]:px-1 max-[380px]:justify-center max-[380px]:gap-2 h-12 flex justify-between items-center w-full max-[330px]:text-[16px]">
            <IoBagCheckOutline className="text-[20px] max-[330px]:text-[16px]" />
            Add To Cart
          </button>
          <button className="text-[#ed1d24] border rounded-[6px] px-6 h-12">
            <CiHeart className="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
