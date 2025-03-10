import React from "react";
import img1 from "../../../public/images/img1.jpeg";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
const About = () => {
  return (
    <>
      <div>
        <BreadCrumb base={"Home"} page={"About"} />
      </div>
      <div>
        <div className="grid grid-cols-12 mb-12 gap-8">
          <div className="col-span-6 max-md:col-span-12 ">
            <img
              src={img1}
              className="w-full h-full rounded-[12px] object-cover"
            />
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

        <div className="grid grid-cols-12 mb-12">
          <div className="col-span-12 rounded-[12px]">
            <img
              src={img1}
              className="w-full h-[60vh] object-cover rounded-[12px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 mb-12 gap-8">
          <div className="col-span-6 max-md:col-span-12 ">
            <img
              src={img1}
              className="w-full h-full rounded-[12px] object-cover"
            />
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
