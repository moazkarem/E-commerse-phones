import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducts, getWhishlist } from "../../../store/actions";
import Loading from "../../../Components/Loading/Loading";
import Error from "../../../Components/Error/Error";
const OurProducts = () => {
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productsRed
  );

  useEffect(() => {
    dispatch(getAllproducts());
  }, [dispatch]);
  //============================HANDEL DATA ===========
  const { data } = products;
  const renderSlides = data?.slice(0, 8)?.map((product, index) => (
    <SwiperSlide key={product._id}>
      <ProductCard product={product} index={index} />
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
  //============================START JSX ===========
  return (
    <div className={`pt-28 `}>
      <div className="container">
        <div className=" rounded-[6px] flex flex-col items-center ">
          <div className="text-center w-full ">
            <div className="flex flex-col justify-center items-center gap-4 mb-16">
              <h3 className="text-[28px] text-[#a9afc3] ">Best Seller</h3>
            </div>
          </div>
          <div className="mb-6 w-full">
            <div className="container max-[350px]:p-0">
              <div>
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation]}
                  navigation
                  spaceBetween={30}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    550: {
                      slidesPerView: 1.5,
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 2.5,
                      spaceBetween: 15,
                    },
                    992: {
                      slidesPerView: 2.5,
                      spaceBetween: 15,
                    },
                    1200: {
                      slidesPerView: 4.5,
                      spaceBetween: 15,
                    },
                  }}
                >
                  {renderSlides}
                </Swiper>
                <div className="flex justify-center items-center gap-6 pt-16">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
