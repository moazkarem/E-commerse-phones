import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiArrowRight } from "react-icons/fi";
import img1 from "../../../../public/images/brands/blogs.jpg";
import { Autoplay } from "swiper/modules";
import HeadSec from "../../../Components/HeadSec/HeadSec";
const blogs = [
  {
    id: 1,
    image: img1,
    title: "How to choose the best headphones",
    description: "Learn what to look for when buying headphones.",
    link: "#",
  },
  {
    id: 2,
    image: img1,
    title: "Top 10 gadgets in 2024",
    description: "Discover the most trending gadgets this year.",
    link: "#",
  },
  {
    id: 3,
    image: img1,
    title: "Wireless vs Wired mouse",
    description: "Which one is best for gaming and productivity?",
    link: "#",
  },
  {
    id: 4,
    image: img1,
    title: "Best tech accessories under $50",
    description: "Affordable tech that’s worth every penny.",
    link: "#",
  },
  {
    id: 5,
    image: img1,
    title: "How to choose the best headphones",
    description: "Learn what to look for when buying headphones.",
    link: "#",
  },
];

const LatestBlogs = () => {
  return (
    <div className=" pb-36">
      <div className="mb-16">
      <HeadSec title={"Latest News"} />
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
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="bg-[#161819] rounded-[10px] p-5 flex flex-col gap-4 h-full w-full">
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[180px] object-cover rounded-[10px]"
              />

              {/* Title */}
              <h3 className="text-white text-[18px] ">{blog.title}</h3>

              {/* Description */}
              <p className="text-[#a9afc3] text-[16px] leading-snug">
                {blog.description}
              </p>

              {/* Read more */}
              <a
                href={blog.link}
                className="text-[#ed1d24] text-[16px] font-medium inline-flex items-center gap-1 mt-auto"
              >
                Read More <FiArrowRight size={16} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestBlogs;
