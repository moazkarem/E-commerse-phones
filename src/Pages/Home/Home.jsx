import Seo from "../../Components/Seo/Seo";
import Carousel from "../../Components/Sub_Components/Main_Components/Carousel/Carousel";
import OurProducts from "./OurProducts/OurProducts";

export default function Home() {
  return (
    <div className="home">
      <Seo currentPage={"Find the best deals"} />
      {/* <Carousel /> */}
      <OurProducts />
    </div>
  );
}
