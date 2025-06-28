"use client";
import img1 from "../../../public/images/sony1000xm4-4.png";
import calender from "../../../public/svgs/calender.svg";
import user from "../../../public/svgs/user.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaLink } from "react-icons/fa";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import { FiArrowRight } from "react-icons/fi";
import { blogs } from "../../data/blogs";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Blogs = () => {
  const blogCards = blogs?.map(
    ({ author, image, title, id, description, date }, idx) => (
      <div className="bg-[#161819] rounded-[10px] p-5 flex flex-col gap-4 h-full w-full transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg cursor-pointer">
        <img
          src={image || img1}
          alt={title}
          className="w-full h-[180px] object-contain rounded-[10px] border border-1 border-[#a9afc355]  px-2 py-3"
        />

        <div className="flex items-center gap-4 text-[#a9afc3] text-[14px]">
          <div className="flex items-center gap-2">
            <FaUser />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <span>{date}</span>
          </div>
        </div>

        <h3 className="text-white text-[18px] ">{title}</h3>

        <p className="text-[#a9afc3] text-[16px] leading-snug">{description}</p>

        <Link
          to={`/blogs/${id}`}
          className="text-[#ed1d24] text-[16px] font-medium inline-flex items-center gap-1 mt-auto"
        >
          Read More <FiArrowRight size={16} />
        </Link>
      </div>
    )
  );

  return (
    <div className="">
      <div>
        <BreadCrumb base={"Home"} page={"Blogs"} />
      </div>
      <div className="pb-40">
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
