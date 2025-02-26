import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Arrowright from "../../../../public/svgs/arrow-right.svg"
import Arrowleft from "../../../../public/svgs/arrow-left.svg";
import BadIcon from "../../../../public/svgs/bag.svg";
import styles from './styles/style.module.scss'
import { offersData } from './data';
import ProductCard from './ProductCard';
const OurProducts = () => {
    const renderSlides = offersData?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <ProductCard item={item} />
        </SwiperSlide>
      ));
  return (
  
    <div className={`${styles["main-offers"]} main-offers`}>
      <div className='container'>
        <div className="inner">
          <div className="head-div">
            <div>
              <h6>يمكنك رؤية</h6>
              <h3 className="title">منتجاتنا</h3>
            </div>
          </div>
          <div className="allcards-desktop">
            {/* <Row>{renderSlides}</Row> */}
            <div className='container'>
              <div className="cardsSwiper">
                <Swiper
                  
                  spaceBetween={30}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                  modules={[Navigation]}
                >
                  {renderSlides}
                </Swiper>

                <div className="arrow-btns">
                  <button className="swiper-button swiper-button-next">
                    <img src={Arrowright}  width="20" height="20" />
                  </button>
                  <button className="swiper-button swiper-button-prev">
                    <img src={Arrowleft}  width="20" height="20" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
  )
}

export default OurProducts