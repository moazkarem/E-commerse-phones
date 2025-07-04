import React from "react";
import img3 from "../../../public/images/brands/bg-about.jpg";
import { useNavigate } from "react-router-dom";
const SectionTwo = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="relative bg-fixed bg-center bg-cover w-full mb-40 max-md:mb-20 min-h-[500px] flex items-center justify-center text-white   rounded-[10px]"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0  rounded-[10px]"></div>

        <div className="relative z-10 text-center flex flex-col justify-center items-center ">
          <p
            className="text-[22px] mb-6 max-w-[100%] text-center uppercase"
            style={{
              letterSpacing: "8px",
              wordSpacing: "10px",
            }}
          >
            " in our online , store "
          </p>
          <h1
            className="text-[40px] mb-6 max-w-[100%] text-center uppercase max-md:text-[22px]"
            style={{
              letterSpacing: "8px",
              wordSpacing: "10px",
            }}
          >
            "You can see our best products at competitive prices."
          </h1>
          <button
            onClick={() => navigate("/products")}
            className="w-[181px] h-[55px] text-white bg-transparent border border-white rounded-full transition-all duration-500 ease-in-out hover:bg-[#ff0000cc] hover:border-transparent"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
