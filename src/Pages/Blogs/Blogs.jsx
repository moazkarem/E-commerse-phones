"use client";
import img1 from "../../../public/images/sony1000xm4-4.png";
import calender from "../../../public/svgs/calender.svg";
import user from "../../../public/svgs/user.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Blogs = () => {
  const blogCards = Array.from({ length: 12 }, (_, idx) => (
    <div
      key={idx}
      className="flex flex-col justify-center items-center gap-6 rounded-sm"
    >
      <div className="bg-[#161819] p-3 rounded-[30px]">
        <img src={img1} className="rounded-[12px] object-cover" />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-2">
          <img src={user} className="w-3 h-3" />
          <span className="text-[16px] text-[#ed1d24]">Admin</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={calender} className="w-3 h-3" />
          <span className="text-[16px] text-[#ed1d24]">August 3, 2022</span>
        </div>
      </div>
      <h1 className="text-[#a9afc3] text-[18px] capitalize">
        Blog Title Written here
      </h1>
      <button className="px-8 py-2 rounded-full text-[16px] bg-[#a61c00] text-[#a9afc3]">
        Read More
      </button>
    </div>
  ));

  return (
    <div className="pt-24">
      {/* عرض الشبكة في الشاشات الكبيرة */}
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
  );
};

export default Blogs;
