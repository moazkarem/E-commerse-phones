import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiArrowRight } from "react-icons/fi";
import { imageClean } from "../../../helpers/imageClean";

import { Autoplay, Navigation } from "swiper/modules";
import HeadSec from "../../../Components/HeadSec/HeadSec";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { blogs } from "../../../data/blogs";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useLocale } from "../../../i18n/LocaleProvider";
import { useIntl } from "react-intl";
import Loading from "../../../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsData } from "../../../store/actions";
import { formatDate } from "../../../helpers/validDate";
const LatestBlogs = ({ secTitle }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsData());
  }, [dispatch]);

  const { blogsData, loading } = useSelector((state) => state.blogsRed);
  const swiperRef = useRef(null);
  const { locale } = useLocale();
  const isRtl = locale === "ar";
  const { formatMessage } = useIntl();

  //============================HANDEL LOADING ===========
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );

  const blogsRendering = blogsData?.data
    ?.slice(0, 6)
    .map(({ image, title, documentId, description, createdAt } , idx) => (
      <SwiperSlide key={documentId}>
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay={idx * 100}
          className="bg-[#111] rounded-[10px] p-5 flex flex-col gap-4 h-full w-full"
        >
          <img
            src={imageClean(image?.url)}
            alt={title}
            className="w-full h-[180px] object-contain rounded-[10px] border border-1 border-[#a9afc355]  px-2 py-3"
          />

          <div className="flex items-center gap-4 text-[#a9afc3] text-[14px]">
            <div className="flex items-center gap-2">
              <FaUser />
              <span>Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{formatDate(createdAt)}</span>
            </div>
          </div>
          <h3 className="text-white text-[18px] ">{title}</h3>
          <p
            className="text-[#a9afc3] text-[16px] leading-snug line-clamp-3"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />

          <Link
            to={`/blogs/${documentId}`}
            className="text-[#ed1d24] text-[16px] font-medium inline-flex items-center gap-1 mt-auto"
          >
            Read More <FiArrowRight size={16} />
          </Link>
        </div>
      </SwiperSlide>
    ));

  return (
    <div className=" pb-40 max-lg:pb-20">
      <div className="text-center w-full ">
        <div className="w-full flex justify-between items-center mb-16">
          <HeadSec title={formatMessage({ id: secTitle })} />
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
      <Swiper
        dir={locale === "ar" ? "rtl" : "ltr"}
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        navigation
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
        {blogsRendering}
      </Swiper>
    </div>
  );
};

export default LatestBlogs;
