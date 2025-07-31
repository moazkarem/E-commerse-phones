import { useDispatch, useSelector } from "react-redux";
import Seo from "../../Components/Seo/Seo";
import Carousel from "../../Components/Sub_Components/Main_Components/Carousel/Carousel";
import Brands from "./Brands/Brands";
import Categories from "./Categories/Categories";
import OurProducts from "./OurProducts/OurProducts";
import { getWhishlist } from "../../store/actions";
import { useEffect } from "react";
import Reviews from "./Reviews/Reviews";
import TopRated from "./TopRated/TopRated";
import LatestBlogs from "./Blogs/Blogs";
import BannerOne from "./BannerOne/Banner";
import Services from "./Features/Features";
import BannerTwo from "./Banner2/BannerTwo";

export default function Home() {
  return (
    <div className="home">
      <Seo currentPage={" Home "} />
      {/* <Carousel /> */}
      <Categories />
      <BannerOne />
      <TopRated />
      <OurProducts headSecTitle={"Our Products"} />
      <BannerTwo />
      <Reviews />
      <Brands />
      <LatestBlogs secTitle={"Latest News"} />
      {/* <Services /> */}
    </div>
  );
}
