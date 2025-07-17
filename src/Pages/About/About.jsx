import React from "react";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Reviews from "../Home/Reviews/Reviews";
import Services from "../../Components/Layout/Services/Services";
import Seo from "../../Components/Seo/Seo";
const About = () => {
  return (
    <>
      <Seo currentPage={"About Us"} />
      <div>
        <BreadCrumb base={"Home"} page={"About"} />
      </div>
      <div>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Reviews />
        {/* <Services /> */}
      </div>
    </>
  );
};

export default About;
