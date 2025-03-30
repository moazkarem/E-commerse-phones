import React, { useEffect, useMemo } from "react";
import { BsHandbag } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getWhishlist } from "../../../store/actions";
import { images } from "./data";
const Whishlist = () => {
  const dispatch = useDispatch();
  const { whishlistData } = useSelector((state) => state.whishlistRed);
  useEffect(() => {
    if (!whishlistData?.data) {
      dispatch(getWhishlist());
    }
  }, [dispatch, whishlistData]);

  const renderWhishCards = whishlistData?.data?.map((item) => (
    <div
      key={item._id}
      className="  flex justify-between items-center px-12 py-4  gap-3 last:border-none max-[500px]:px-3 "
    >
      <div className="w-20 h-20">

      <img
        src={images[Math.floor(Math.random() * images.length)]}
        alt="product name"
        className="w-[90%] h-full p-2  rounded-[10px] object-cover border border-[#a9afc3]  max-[500px]:w-16 max-[500px]:h-16"
      />
      </div>
      <div className="flex justify-center gap-3 items-center max-[500px]:flex-col max-[500px]:items-start">
        <span className="capitalize text-[16px] line-clamp-1 text-[#a9afc3]">
          {item.title}
        </span>
        <span className="capitalize text-[16px] text-[#008000]">
          {item.price}$
        </span>
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
  ));
  return <div className="bg-[#161819] py-5">{renderWhishCards}</div>;
};

export default Whishlist;
