import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../store/actions";
import Loading from "../../../Components/Loading/Loading";
import { images } from "./data";
import HeadSec from "../../../Components/HeadSec/HeadSec";
const Categories = () => {
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categoriesRed
  );
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  //============================HANDEL DATA ===========
  const renderCategories = categories?.data
    ?.slice(0, 8)
    ?.map(({ image, name, slug }, idx) => (
      <SwiperSlide key={idx}>
        <div className="flex flex-col justify-center items-center gap-8 mb-12 group cursor-pointer">
          <div className="bg-[#111] flex justify-center items-center p-2 w-48 h-48 border border-[#ed1d24] shadow-md shadow-[#454a4d] rounded-full">
            <img
              src={images[Math.floor(Math.random() * images.length)]}
              className=" w-[90%] h-[90%] p-4 transform transition-all duration-300 group-hover:scale-105"
              alt={slug}
            />
          </div>
          <h5 className="mb-0 text-[#a9afc3] text-[16px]">{name}</h5>
        </div>
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
    <div className="pt-40 pb-40 relative">
     <HeadSec title={'main categories'}/>
      <Swiper
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
        {renderCategories}
      </Swiper>
      <div className="flex justify-center items-center gap-6 pt-7 min-[992px]:hidden">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="w-8 flex cursor-pointer justify-center items-center h-8 rounded-[5px] border border-[#ed1d24]"
        >
          <IoIosArrowBack className="text-[25px]" />
        </button>
        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="w-8 flex cursor-pointer justify-center items-center h-8 rounded-[5px] border border-[#ed1d24]"
        >
          <IoIosArrowForward className="text-[25px]" />
        </button>
      </div>
    </div>
  );
};

export default Categories;
