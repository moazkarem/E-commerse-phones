import React from "react";
import { BsHandbag } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import img1 from '../../../../public/images/brands/img1.png'
const Whishlist = () => {
  return (
  <div className="bg-[#161819] py-5">
      <div className="  flex justify-between items-center px-12 py-4  gap-3 last:border-none max-[500px]:px-3 ">
      <img
        src={img1}
        alt="product name"
        className="w-20 h-20 rounded-[10px] object-cover border border-[#a9afc3] p-3 max-[500px]:w-16 max-[500px]:h-16"
      />
      <div className="flex justify-center gap-3 items-center max-[500px]:flex-col max-[500px]:items-start">
        <span className="capitalize text-[16px] line-clamp-1 text-[#a9afc3]">
          HeadPhone del 2014
        </span>
        <span className="capitalize text-[16px] text-[#008000]">80$</span>
      </div>
      <button className="bg-[#ff0000cc] py-2 px-8 rounded-[8px] flex justify-center items-center gap-3 max-[1050px]:py-2 max-[1050px]:px-5 max-[1050px]:rounded-[6px] ">
        <span className="capitalize text-[16px] text-[#fff] max-[1050px]:hidden">
          Add To cart
        </span>
        <span className="">
          <BsHandbag />
        </span>
      </button>
      <span className="cursor-pointer">
        <MdDeleteOutline size={24} className="text-[#ff0000cc] " />
      </span>
    </div>


    <div className="  flex justify-between items-center px-12 py-4  gap-3 last:border-none max-[500px]:px-3 ">
      <img
        src={img1}
        alt="product name"
        className="w-20 h-20 rounded-[10px] object-cover border border-[#a9afc3] p-3 max-[500px]:w-16 max-[500px]:h-16"
      />
      <div className="flex justify-center gap-3 items-center max-[500px]:flex-col max-[500px]:items-start">
        <span className="capitalize text-[16px] line-clamp-1 text-[#a9afc3]">
          HeadPhone del 2014
        </span>
        <span className="capitalize text-[16px] text-[#008000]">80$</span>
      </div>
      <button className="bg-[#ff0000cc] py-2 px-8 rounded-[8px] flex justify-center items-center gap-3 max-[1050px]:py-2 max-[1050px]:px-5 max-[1050px]:rounded-[6px] ">
        <span className="capitalize text-[16px] text-[#fff] max-[1050px]:hidden">
          Add To cart
        </span>
        <span className="">
          <BsHandbag />
        </span>
      </button>
      <span className="cursor-pointer">
        <MdDeleteOutline size={24} className="text-[#ff0000cc] " />
      </span>
    </div>


    <div className="  flex justify-between items-center px-12 py-4  gap-3 last:border-none max-[500px]:px-3 ">
      <img
        src={img1}
        alt="product name"
        className="w-20 h-20 rounded-[10px] object-cover border border-[#a9afc3] p-3 max-[500px]:w-16 max-[500px]:h-16"
      />
      <div className="flex justify-center gap-3 items-center max-[500px]:flex-col max-[500px]:items-start">
        <span className="capitalize text-[16px] line-clamp-1 text-[#a9afc3]">
          HeadPhone del 2014
        </span>
        <span className="capitalize text-[16px] text-[#008000]">80$</span>
      </div>
      <button className="bg-[#ff0000cc] py-2 px-8 rounded-[8px] flex justify-center items-center gap-3 max-[1050px]:py-2 max-[1050px]:px-5 max-[1050px]:rounded-[6px] ">
        <span className="capitalize text-[16px] text-[#fff] max-[1050px]:hidden">
          Add To cart
        </span>
        <span className="">
          <BsHandbag />
        </span>
      </button>
      <span className="cursor-pointer">
        <MdDeleteOutline size={24} className="text-[#ff0000cc] " />
      </span>
    </div>
    
  </div>
  );
};

export default Whishlist;
