import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderData from "../../../data/SliderData";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroData } from "../../../store/HomeSections/actions";
import Loading from "../../Loading/Loading";
const Slider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeroData());
  }, [dispatch]);
  const { loading, heroData } = useSelector((state) => state.homeSections);
  const renderHero = heroData?.data?.map((item) => (
    <SwiperSlide key={item.id} className="flex items-center justify-center ">
      <h1 id="category">{item?.category} </h1>
      <div className="flex h-full flex-col-reverse md:flex-row container gap-8 pb-20 items-center">
        <div className="slider-info w-full md:w-1/2 h-max flex flex-col justify-center">
          <h2 className="text-main mb-2 slider-title">{item.title}</h2>
          <h1
            className="text-main slider-caption"
            dangerouslySetInnerHTML={{
              __html: item.description,
            }}
          />
          <div className="prices">
            <h3 className="text-main my-6">
              ${item.newPrice.toLocaleString()}
            </h3>
            <del className="text-muted">${item.oldPrice.toLocaleString()}</del>
          </div>
          <Link to={`/products`} className="single-button w-max">
            Shop Now
          </Link>
        </div>
        <div className="slider-image w-full  md:w-1/2  m-auto h-2/5 md:h-full">
          <img
            src={`${item?.image?.url}`}
            alt={item.title}
          />
        </div>
      </div>
    </SwiperSlide>
  ));

  //======================= RENDER SLIDER STATIC  DATA
  const staticSlider = SliderData.map((item) => (
    <SwiperSlide key={item.id} className="flex items-center justify-center ">
      <h1 id="category">{item.category}</h1>
      <div className="flex h-full flex-col-reverse md:flex-row container gap-8 pb-20 items-center">
        <div className="slider-info w-full md:w-1/2 h-max flex flex-col justify-center">
          <h2 className="text-main mb-2 slider-title">{item.title}</h2>
          <h1 className="text-main slider-caption">{item.caption}</h1>
          <div className="prices">
            <h3 className="text-main my-6">
              ${item.finalPrice.toLocaleString()}
            </h3>
            <del className="text-muted">
              ${item.originalPrice.toLocaleString()}
            </del>
          </div>
          <Link
            to={`/product-details/${item.id}`}
            className="single-button w-max"
          >
            Shop Now
          </Link>
        </div>
        <div className="slider-image w-full  md:w-1/2  m-auto h-2/5 md:h-full">
          <img src={item.images[0]} alt={item.brand} />
        </div>
      </div>
    </SwiperSlide>
  ));

  //============================HANDEL LOADING ===========
  // if (loading)
  //   return (
  //     <div className="w-full h-[100vh] flex justify-center items-center">
  //       <Loading />
  //     </div>
  //   );

  //============================START JSX ===========

  return (
    <div className="slider mt-[80px] ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* {heroData?.data ? renderHero : staticSlider} */}
        {staticSlider}
      </Swiper>
    </div>
  );
};

export default Slider;
