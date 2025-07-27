import React, { useEffect } from "react";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Reviews from "../Home/Reviews/Reviews";
import Services from "../../Components/Layout/Services/Services";
import Seo from "../../Components/Seo/Seo";
import { useDispatch, useSelector } from "react-redux";
import { getAboutPageData } from "../../store/HomeSections/actions";
import Loading from "../../Components/Loading/Loading";
const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAboutPageData());
  }, [dispatch]);

  const { loading, aboutData } = useSelector((state) => state.homeSections);
  const aboutSections = aboutData?.data?.[0];

    if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  return (
    <>
      <Seo currentPage={"About Us"} />
      <div>
        <BreadCrumb base={"Home"} page={"About"} />
      </div>
      <div>
        <SectionOne aboutSections={aboutSections} />
        <SectionTwo aboutSections={aboutSections} />
        <SectionThree aboutSections={aboutSections} />
        <Reviews />
        {/* <Services /> */}
      </div>
    </>
  );
};

export default About;
