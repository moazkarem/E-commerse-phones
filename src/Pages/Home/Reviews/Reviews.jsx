import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AiFillStar } from "react-icons/ai";

const reviews = [
  {
    id: 1,
    text: "Amazing product and great service! Amazing product and great service!Amazing product and great service!Amazing product and great service!Amazing product and great service!Amazing product and great service!",
    name: "John Doe",
  },
  { id: 2, text: "Really loved it! Highly recommended.", name: "Jane Smith" },
  { id: 3, text: "Decent quality for the price.", name: "Ali Hassan" },
  { id: 4, text: "Exceeded my expectations!", name: "Salma Adel" },
  { id: 5, text: "Fast delivery and quality is top!", name: "Omar Khaled" },
];

const Reviews = () => {
  return (
    <div className="px-4 py-10">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.8 },
          1024: { slidesPerView: 4 },
        }}
        className="!items-stretch [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="cursor-grab">
            <div className="bg-[#161819] rounded-[10px] p-4 flex flex-col justify-start items-start h-full w-full">
              <div className="flex-grow">
                {/* Stars */}
                <div className="flex gap-1 mb-[10px]">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <AiFillStar key={i} className="text-[#ed1d24]" size={20} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#a9afc3] text-[16px] mb-[10px]">
                  {review.text}
                </p>
               <h4 className="text-white text-[14px]">{review.name}</h4>
              </div>

          
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
