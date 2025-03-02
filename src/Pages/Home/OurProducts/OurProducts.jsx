import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import style from './styles/style.module.scss'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { offersData } from './data';
import ProductCard from './ProductCard';
const OurProducts = () => {
    const renderSlides = offersData?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <ProductCard item={item} />
        </SwiperSlide>
      ));
  return (
  
    <div className={`py-12 ${style['products']}`}>
      <div className='container'>
        <div className=" rounded-[6px] flex flex-col items-center ">
          <div className="text-center w-full ">
            <div className='flex flex-col justify-center items-center gap-4 mb-10'>
              <h6 className='text-[#a9afc3] text-[16px] '>You Can See</h6>
              <h3 className="text-[36px] text-[#a9afc3] ">Our Products</h3>
            </div>
          </div>
          <div className="mb-6 w-full">
            <div className='container'>
              <div>
                <Swiper
                  spaceBetween={30}
                
                  breakpoints={{
                    0: {
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
                  modules={[Navigation]}
                >
                  {renderSlides}
                </Swiper>

              </div>
            </div>
          </div>
        </div>
      </div>
</div>
  )
}

export default OurProducts