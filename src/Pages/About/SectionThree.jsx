import React from "react";
import img1 from "../../../public/images/products/img_14_533x-removebg-preview.png";
const SectionThree = () => {
  return (
    <>
      <div className="w-full overflow-hidden px-4 mb-40 max-md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1200px] mx-auto">
          {/* الصورة */}
          <div className="flex justify-center">
            <div className="w-full max-w-[300px]">
              <img
                src={img1}
                alt="Product"
                className="w-full h-auto rounded-[12px] object-contain"
              />
            </div>
          </div>

          {/* النص */}
          <div className="w-full">
            <h1 className="text-[18px] text-[#ed1d24] font-bold uppercase tracking-widest mb-4">
              Who Us And What Is Our Story ...
            </h1>
            <p className="text-lg text-white leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur cursus neque, vel tincidunt nunc facilisis vel. Sed
              non neque vel felis fermentum volutpat. Donec pulvinar, nunc vel
              rutrum tempor, ligula felis consectetur velit, in consectetur diam
              nisi euismod lectus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed consectetur cursus neque, vel tincidunt nunc
              facilisis vel. Sed non neque vel felis fermentum volutpat. Donec
              pulvinar, nunc vel rutrum tempor, ligula felis consectetur velit,
              in consectetur diam nisi euismod lectus. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed consectetur cursus neque,
              vel tincidunt nunc facilisis vel. Sed non neque vel felis
              fermentum volutpat. Donec pulvinar, nunc vel rutrum tempor, ligula
              felis consectetur velit, in consectetur diam nisi euismod lectus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
