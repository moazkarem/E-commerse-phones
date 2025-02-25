import React from "react";
import img1 from "../../../../public/images/sony1000xm4-2.png";

const SingleCard = () => {
  return (
    <div className="rounded-[10px] grid grid-cols-12 pt-5 max-[560px]:grid-cols-8">
      {Array.from({ length: 12 }, (_, idx) => (
        <div
          key={idx}
          className="flex justify-center items-center max-lg:flex-col max-[560px]:col-span-8  gap-4 rounded-[10px] mb-6 col-span-12 max-lg:col-span-6"
        >
          <div className=" me-4 p-3   bg-[#161819] flex justify-center   rounded-[10px] h-[300px] max-lg:h-[240px] max-[560px]:w-[80%]">
            <img
              src={img1}
              alt="Product Image"
              className="lg:min-w-[300px] lg:max-w-[400px] lg:max-h-[400px] w-full h-auto  cursor-pointer"
            />
          </div>

          <div className="  flex flex-col gap-2 lg:items-start justify-center max-lg:items-center">
            <h3 className="text-[18px] text-[#a9afc3]">Product Title</h3>
            <p className="text-[16px] line-clamp-4 max-lg:text-center text-start text-[#a9afc3] max-w-[70%] lg:max-w-[90%] max-lg:line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur labore praesentium possimus. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Consequuntur labore
              praesentium possimus. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Consequuntur labore praesentium possimus. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
              labore praesentium possimus.
            </p>
            <p className="text-[16px] text-[#a61c00]">$120.00</p>

            <button className="w-[250px] max-lg:w-[170px] rounded-full py-2 bg-[rgba(255,0,0,0.8)] max-[350px]:w-[140px] max-lg:py-1 text-white hover:bg-[#872000]">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCard;
