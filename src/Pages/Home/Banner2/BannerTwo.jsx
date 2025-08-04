import React from "react";
import bannerImage from "../../../../public/images/bg-banner2.jpeg";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const BannerTwo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mb-40 max-lg:mb-20 rounded-[10px] relative overflow-hidden"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full rounded-[20px] min-h-[400px] max-md:min-h-[200px] px-14 relative">
        <div className="flex flex-col gap-[30px] px-6 py-10 md:w-1/2 text-center md:text-start z-10">
          <h3 className="text-[#ed1d24] text-[18px] font-medium">
            <FormattedMessage id="navCategories" defaultMessage="Categories" />
          </h3>
          <h1
            className="text-white text-[50px] leading-[1.4] max-md:text-[30px]"
            style={{ letterSpacing: "5px", wordSpacing: "5px" }}
          >
            <FormattedMessage
              id="enhanceYour"
              defaultMessage="Enhance Your"
            />
            <br />
            <FormattedMessage
              id="musicExperience"
              defaultMessage="Music Experience"
            />
          </h1>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#ff0000cc] text-white w-[171px] h-[56px] rounded transition hover:opacity-90 mx-auto md:mx-0 max-md:h-[45px] z-10"
          >
            <FormattedMessage id="shopNow" defaultMessage="Shop Now" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
