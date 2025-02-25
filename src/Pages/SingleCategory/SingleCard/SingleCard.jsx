import React from "react";
import img1 from "../../../../public/images/sony1000xm4-2.png";

const SingleCard = () => {
  return (
    <div className=" rounded-[10px] p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 12 }, (_, idx) => (
        <div
          key={idx}
          className="relative group flex flex-col justify-center items-center  rounded-[10px] p-4 overflow-hidden"
        >
          <img src={img1} alt="Product Image" className="w-full h-auto mb-2" />
          <h3 className="text-[18px] text-[#a9afc3]">Product Title</h3>
          <p className="text-[16px] text-[#a61c00] ">$120.00</p>

          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-[80%] rounded-full py-2 bg-[#a61c00] text-white  hover:bg-[#872000]">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCard;
