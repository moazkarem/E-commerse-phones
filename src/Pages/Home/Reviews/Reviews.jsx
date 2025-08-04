import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsReviewAction } from "../../../store/Reviews/actions";
import Loading from "../../../Components/Loading/Loading";
import Error from "../../../Components/Error/Error";
import { Autoplay, Navigation } from "swiper/modules";
import HeadSec from "../../../Components/HeadSec/HeadSec";
import { useIntl } from "react-intl";
import { useLocale } from "../../../i18n/LocaleProvider";
const Reviews = () => {
  const swiperRef = useRef(null);
  const { locale } = useLocale();
  const isRtl = locale === "ar";
  const { formatMessage } = useIntl();
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
        <div className="bg-[#111] rounded-[10px] p-4 flex flex-col justify-start items-start h-full w-full">
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
    <div className=" pb-40 max-lg:pb-20">
      <div className="mb-16">
        <div className="text-center w-full ">
          <div className="w-full flex justify-between items-center mb-16">
            <HeadSec title={formatMessage({ id: "Customer Reviews" })} />
            <div className="flex justify-center items-center gap-6 max-md:hidden">
              <button
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="w-8 flex cursor-pointer justify-center items-center h-8 rounded-[5px] border border-[#ed1d24]"
              >
                {isRtl ? (
                  <IoIosArrowForward className="text-[25px]" />
                ) : (
                  <IoIosArrowBack className="text-[25px]" />
                )}
              </button>
              <button
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="w-8 flex cursor-pointer justify-center items-center h-8 rounded-[5px] border border-[#ed1d24]"
              >
                {isRtl ? (
                  <IoIosArrowBack className="text-[25px]" />
                ) : (
                  <IoIosArrowForward className="text-[25px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        dir={locale === "ar" ? "rtl" : "ltr"}
        modules={[Autoplay, Navigation]}
        navigation
        ref={swiperRef}
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
