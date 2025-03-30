"use client";
import img1 from "../../../public/images/sony1000xm4-4.png";
import calender from "../../../public/svgs/calender.svg";
import user from "../../../public/svgs/user.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaLink } from "react-icons/fa";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import {blogsData} from "./data";
const Blogs = () => {
  const blogCards = blogsData?.map(({img , title , date}, idx) => (
    <div
      key={idx}
      className="flex flex-col justify-center items-center gap-4 rounded-sm"
    >
      <div className="bg-[#161819] p-3 rounded-[30px] flex justify-center relative overflow-hidden group w-full">
        <img
          src={img}
          className="rounded-[12px] cursor-pointer w-full  p-3 transform transition-transform duration-500 group-hover:scale-110 h-64"
        />

        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500  cursor-pointer">
          <span className="text-white text-2xl font-bold">
            <FaLink className="text-white" />
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-2">
          <img src={user} className="w-3 h-3" />
          <span className="text-[16px] text-[#ed1d24]">Admin</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={calender} className="w-3 h-3" />
          <span className="text-[14px] text-[#ed1d24]">{date}</span>
        </div>
      </div>

      <h3 className="text-[#a9afc3] text-[16px] capitalize">
        {title}
      </h3>

      <button className="px-8 py-2 rounded-full text-[16px] bg-[#ff0000] text-[#fff]">
        Read More
      </button>
    </div>
  ));

  return (
    <div className="">
      <div>
        <BreadCrumb base={"Home"} page={"Blogs"} />
      </div>
      <div className="">
        <div className="hidden sm:grid grid-cols-12 gap-4">
          {blogCards.map((card, idx) => (
            <div key={idx} className="col-span-4 mb-10 max-md:col-span-6">
              {card}
            </div>
          ))}
        </div>

        <div className="sm:hidden relative">
          <Swiper spaceBetween={10} slidesPerView={1.3}>
            {blogCards.map((card, idx) => (
              <SwiperSlide key={idx}>{card}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
