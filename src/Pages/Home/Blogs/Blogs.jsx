import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiArrowRight } from "react-icons/fi";
import img1 from "../../../../public/images/brands/blogs.jpg";
import { Autoplay } from "swiper/modules";
import HeadSec from "../../../Components/HeadSec/HeadSec";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { blogs } from "../../../data/blogs";
import { Link } from "react-router-dom";

const LatestBlogs = ({secTitle}) => {
  return (
    <div className=" pb-40">
      <div className="mb-16">
        <HeadSec title={secTitle} />
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 4 },
        }}
        className="[&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex"
      >
        {blogs
          ?.slice(0, 6)
          .map(({ author, image, title, id, description, date }) => (
            <SwiperSlide key={id}>
              <div className="bg-[#111] rounded-[10px] p-5 flex flex-col gap-4 h-full w-full">
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

                <p className="text-[#a9afc3] text-[16px] leading-snug line-clamp-3">
                  {description}
                </p>

                <Link
                  to={`/blogs/${id}`}
                  className="text-[#ed1d24] text-[16px] font-medium inline-flex items-center gap-1 mt-auto"
                >
                  Read More <FiArrowRight size={16} />
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default LatestBlogs;
