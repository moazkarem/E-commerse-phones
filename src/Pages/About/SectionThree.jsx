import React from "react";
const SectionThree = ({ aboutSections }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay={300}
        className="w-full overflow-hidden px-4 mb-40 max-md:mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1200px] mx-auto">
          

          <div className="w-full">
            <h1 className="text-[18px] text-[#ed1d24] font-bold uppercase tracking-widest mb-4">
              Our Vission ...
            </h1>
            <p
              className="text-lg text-white leading-relaxed text-justify"
              dangerouslySetInnerHTML={{
                __html: aboutSections?.vissiomDesc || "Vission Description",
              }}
            />
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[300px]">
              <img
                src={`${aboutSections?.vissionImg?.url}`}
                alt="Product"
                className="w-full h-auto rounded-[12px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
