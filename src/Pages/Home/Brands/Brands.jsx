import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getAllbrands } from "../../../store/actions";
import Loading from "../../../Components/Loading/Loading";
import { images } from "./data";
import { Link } from "react-router-dom";
import HeadSec from "../../../Components/HeadSec/HeadSec";
import { useLocale } from "../../../i18n/LocaleProvider";
import { useIntl } from "react-intl";
const Brands = () => {
  const swiperRef = useRef(null);
  const { locale } = useLocale();
  const isRtl = locale === "ar";
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const { brands, loading, error } = useSelector((state) => state.brandsRed);
  useEffect(() => {
    dispatch(getAllbrands());
  }, [dispatch]);
  //============================HANDEL DATA ===========
  const renderBrands = brands?.data?.slice(0, 8)?.map(({ name, slug }, idx) => (
    <SwiperSlide key={idx}>
      <Link
        
        to={"/brands"}
      >
        <div 
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay={idx * 100}
        className="flex flex-col justify-center items-center gap-8 mb-12 group cursor-pointer">
          <div className="bg-[#363D40] flex justify-center items-center p-2 w-48 h-24 border rounded-[10px] shadow-[#454a4d] ">
            <img
              src={images[Math.floor(Math.random() * images.length)]}
              className=" w-full h-full object-cover  transform transition-all duration-300 group-hover:scale-105"
              alt={slug}
            />
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ));
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
  //============================ START JSX ===========
  return (
    <div className="pb-40 relative max-lg:pb-20">
      <div className="text-center w-full ">
        <div className="w-full flex justify-between items-center mb-16">
          <HeadSec title={formatMessage({ id: "Popular Brands" })} />
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
        modules={[Navigation]}
        navigation
        breakpoints={{
          0: { slidesPerView: 1.5, spaceBetween: 10 },
          450: { slidesPerView: 2.4, spaceBetween: 10 },
          768: { slidesPerView: 3.4, spaceBetween: 10 },
          992: { slidesPerView: 6, spaceBetween: 10 },
        }}
        className="swiper-container"
      >
        {renderBrands}
      </Swiper>
    </div>
  );
};

export default Brands;
