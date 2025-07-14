import ProductSummary from "../../Components/Sub_Components/Main_Components/Product_Summary/ProductSummary";
import ProductTabs from "../../Components/Sub_Components/Main_Components/Product_Tabs/ProductTabs";
import CurrentItemProvider from "../../Components/Contexts/CurrentItemProvider";
import RelatedProducts from "../../Components/Sub_Components/Main_Components/Related_Products/RelatedProducts";
import Seo from "../../Components/Seo/Seo";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";

import OurProducts from "./../Home/OurProducts/OurProducts";
const SingleProduct = () => {
  return (
    <div className="product-details flex flex-col">
      <Seo currentPage={"Details"} />
      <div>
        <BreadCrumb base={"Home / Products  "} page={"Product Details"} />
      </div>

      <CurrentItemProvider>
        <ProductSummary />
        <ProductTabs />
        <div className="pt-20">
          <OurProducts headSecTitle={"Relate Products"} />
        </div>
      </CurrentItemProvider>
    </div>
  );
};
export default SingleProduct;
