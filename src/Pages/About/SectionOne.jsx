import React from "react";
import fallImg from "../../../public/images/brands/img2.png";

const SectionOne = ({ aboutSections }) => {
  console.log(aboutSections, "section one ");
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-delay={100}
      className="w-full overflow-hidden px-4 mb-40  max-lg:mb-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1200px] mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-[300px]">
            <img
              src={
                `${import.meta.env.VITE_IMAGE_DOMAIN}${
                  aboutSections?.missionImg?.url
                }` || fallImg
              }
              alt="Product"
              className="w-full h-auto rounded-[12px] object-contain"
            />
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-[18px] text-[#ed1d24] font-bold uppercase tracking-widest mb-4">
            Who Us And What Is Our Mission ...
          </h1>
          <p
            className="text-lg text-white leading-relaxed text-justify"
            dangerouslySetInnerHTML={{
              __html: aboutSections?.missionDesc || "Mission Description",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
