import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsReviewAction } from "../../../store/Reviews/actions";
import Loading from "../../../Components/Loading/Loading";
import Error from "../../../Components/Error/Error";
import { Autoplay } from "swiper/modules";
import HeadSec from "../../../Components/HeadSec/HeadSec";
const Reviews = () => {
  const dispatch = useDispatch();
  const { getAllProductReview, loading, error } = useSelector(
    (state) => state.reviewsRed
  );
  useEffect(() => {
    dispatch(getAllProductsReviewAction());
  }, [dispatch]);

  const renderReviesSlides = getAllProductReview?.data?.data.map(
    ({ review, rating, user }, idx) => (
      <SwiperSlide key={idx} className="cursor-grab">
        <div className="bg-[#161819] rounded-[10px] p-4 flex flex-col justify-start items-start h-full w-full">
          <div className="flex-grow">
            <div className="flex gap-1 mb-[10px]">
              {Array.from({ length: rating }).map((_, i) => (
                <AiFillStar key={i} className="text-[#ed1d24]" size={20} />
              ))}
            </div>
            <p className="text-[#a9afc3] text-[16px] mb-[10px]">{review}</p>
          </div>
          <h4 className="text-white text-[14px] capitalize">{user?.name}</h4>
        </div>
      </SwiperSlide>
    )
  );

  //============================HANDEL LOADING ===========
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  //============================HANDEL ERROR ===========
  if (error)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Error msg={error} />
      </div>
    );
  //============================START JSX ===========

  return (
    <div className=" pb-40">
    <div className="mb-16">
    <HeadSec title={"Customer Reviews"} />
    </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.8 },
          1024: { slidesPerView: 4 },
        }}
        className="!items-stretch [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex"
      >
        {renderReviesSlides}
      </Swiper>
    </div>
  );
};

export default Reviews;
