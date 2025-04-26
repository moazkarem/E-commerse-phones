import React from "react";
import img1 from "../../../public/images/boat131-1.png";
import img2 from "../../../public/images/jbl500bt-1.png";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
const About = () => {
  return (
    <>
      <div>
        <BreadCrumb base={"Home"} page={"About"} />
      </div>
      <div>
        <div className="grid grid-cols-12 mb-12 gap-8">
          <div className="col-span-6 max-md:col-span-12  w-full">
            <div className="w-[100%] flex justify-center items-center">

            <img
              src={img1}
              className=" w-[50%] rounded-[12px] "
            />
            </div>
          </div>
          <div className="col-span-6 max-md:col-span-12">
            <h1 className="text-[18px] text-[#a9afc3] font-bold tracking-wide uppercase">
              Who Us And What Is Our Story ...
            </h1>
            <p className="text-lg text-[#6c757d] mt-4 leading-relaxed">
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

        <div className="col-span-6 max-md:col-span-12  w-full mb-12">
            <div className="w-[100%] flex justify-center items-center">

            <img
              src={img1}
              className=" w-[50%] rounded-[12px] "
            />
            </div>
          </div>

        <div className="grid grid-cols-12 mb-12 gap-8">
        <div className="col-span-6 max-md:col-span-12  w-full mb-12">
            <div className="w-[100%] flex justify-center items-center">

            <img
              src={img2}
              className=" w-[50%] rounded-[12px] "
            />
            </div>
          </div>
          <div className="col-span-6 max-md:col-span-12">
            <h1 className="text-[18px] text-[#a9afc3] font-bold tracking-wide uppercase">
              Who Us And What Is Our Story ...
            </h1>
            <p className="text-lg text-[#6c757d] mt-4 leading-relaxed">
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

export default About;
