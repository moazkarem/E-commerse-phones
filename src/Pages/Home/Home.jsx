import Seo from "../../Components/Seo/Seo";
import Carousel from "../../Components/Sub_Components/Main_Components/Carousel/Carousel";
import Brands from "./Brands/Brands";
import Categories from "./Categories/Categories";
import OurProducts from "./OurProducts/OurProducts";

export default function Home() {
  return (
    <div className="home">
      <Seo currentPage={"Find the best deals"} />
      {/* <Carousel /> */}
      <Categories />
      <Brands />
      <OurProducts />
    </div>
  );
}
