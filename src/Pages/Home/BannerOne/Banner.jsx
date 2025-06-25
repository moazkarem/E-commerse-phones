import React from "react";
import img6 from "../../../../public/images/homebrands/Banner 2.png";

const BannerOne = () => {
  return (
    <div className="pb-40">

    <div className="relative w-full min-h-[450px] ">
      <img
        src={img6}
        alt="Promo Banner"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-[10px]"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-4">
        <h1 className="text-white text-[50px] mb-0 " style={{letterSpacing:'7px'}}>
          Big Summer Sale
        </h1>
        <p className="text-[#a9afc3] text-[18px] mb-4" >
          Grab your favorite items at unbeatable prices all summer long!
        </p>
        <button className="text-white border border-[#fff] px-16 py-3 rounded  transition">
          Shop Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default BannerOne;
