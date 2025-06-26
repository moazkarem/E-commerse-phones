import React from "react";
import bannerImage from "../../../../public/images/homebrands/banner2.png";
import {  useNavigate } from "react-router-dom";


const BannerTwo = () => {
  const navigate = useNavigate('/products')
  return (
    <div className="pb-40">

    <div className="flex flex-col md:flex-row items-center justify-between w-full bg-[#111] rounded-[20px] overflow-hidden min-h-[500px] max-md:min-h-[400px] px-14">

      <div className="flex flex-col gap-[30px] px-6 py-10 md:w-1/2 text-center md:text-left">
        <h3 className="text-[#ed1d24] text-[18px] font-medium">Categories</h3>
        <h1 className="text-white text-[50px]  leading-[1.4] max-md:text-[30px] " style={{letterSpacing:'5px' , wordSpacing:'5px'}}>
          Enhance Your
          <br/>
           Music Experience
        </h1>
        <button onClick={()=>navigate('/products')} className="bg-[#ff0000cc] text-white w-[171px] h-[56px] rounded transition hover:opacity-90 mx-auto md:mx-0 max-md:h-[45px]">
          Shop Now
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-auto max-md:hidden">
        <img
          src={bannerImage}
          alt="Music Banner"
          className="object-cover w-[90%] h-[90%]"
    
        />
      </div>
    </div>
    </div>
  );
};

export default BannerTwo;
