import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllproducts,
  getSingleProd,
  getWhishlist,
} from "../../../store/actions";
import Loading from "../../../Components/Loading/Loading";
import Error from "../../../Components/Error/Error";
import { useNavigate } from "react-router-dom";
import QuickeModal from "../../../Components/QuickeViewModal/QuickeModal";
import HeadSec from "../../../Components/HeadSec/HeadSec";
import { useLocale } from "./../../../i18n/LocaleProvider";
const OurProducts = ({ headSecTitle }) => {
  const { locale } = useLocale();
  const isRtl = locale === "ar";
  const navigate = useNavigate();
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

  const [viewedProduct, setViewedProduct] = useState("");
  const quickeViewHandeler = (product) => {
    document.getElementById("Quicke_view").showModal();
    setViewedProduct(product);
  };

  const renderSlides = data?.slice(0, 8)?.map((product, index) => (
    <SwiperSlide key={index}>
      <ProductCard
        product={product}
        index={index}
        quickeViewHandeler={quickeViewHandeler}
      />
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
    <div className="pb-40">
      <div className="">
        <div className=" rounded-[6px] flex flex-col items-center ">
          <div className="text-center w-full ">
            <div className="w-full flex justify-between items-center mb-16">
              <HeadSec title={headSecTitle} />
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
          <div className="mb-6 w-full">
            <div className="container max-[350px]:p-0">
              <div>
                <Swiper
                  dir={locale === "en" ? "ltr" : "rtl"}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickeModal product={viewedProduct} />
    </div>
  );
};

export default OurProducts;
