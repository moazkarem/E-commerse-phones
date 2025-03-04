import React from "react";
import Rate from "rc-rate";
import "swiper/css/pagination";
import "swiper/css";
import { Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const ProductCard = ({ item }) => {
  return (
    <div className="rounded-[10px]">
      <div className="relative overflow-hidden cursor-pointer rounded-[10px] pt-[100%] group bg-[#111]">
        <Link href={`products/${item.id}`}>
          <img
            src={item.image}
            alt={item.title}
            className="rounded-[10px] object-cover w-full h-full absolute inset-0 p-4 transform transition-all duration-300 group-hover:scale-110"
          />
        </Link>
      </div>

      <div className="flex justify-center flex-col">
        <div className="flex justify-between items-center py-5 px-3">
          <div className="rate rc-rate   ">
            <Rate value={item?.rate} disabled allowHalf />
          </div>
          <div className="flex">
            <h3 className="text-[16px] text-[#fff]">199.99 ر.س</h3>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 px-0">
          <h3 className=" text-[#ed1d24] text-[18px] ">Title</h3>

          <h3 className="text-[#a9afc3] text-[16px]">299.99 ر.س</h3>
        </div>
        <div className="flex justify-between items-center gap-3 mt-4">
          <button className="text-[#ed1d24] rounded-[6px] border px-6 h-12 flex justify-between items-center w-full ">
            <IoBagCheckOutline className="text-[20px]" />
            Add To Cart
          </button>
          <button className="text-[#ed1d24] border rounded-[6px] px-6  h-12">
            <CiHeart className="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
