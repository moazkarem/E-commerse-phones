import ProductSummary from "../../Components/Sub_Components/Main_Components/Product_Summary/ProductSummary";
import ProductTabs from "../../Components/Sub_Components/Main_Components/Product_Tabs/ProductTabs";
import RelatedProducts from "../../Components/Sub_Components/Main_Components/Related_Products/RelatedProducts";
import Seo from "../../Components/Seo/Seo";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";

export default function ProductDetails() {
  return (
    <>
      <div className="product-details flex flex-col w-full">
        <Seo currentPage={"Details"} />
        <div className="h-5">
          <BreadCrumb base={"Home"} page={"Product Details"} />
        </div>
        <ProductSummary />
        <ProductTabs />
        <RelatedProducts />
      </div>
    </>
  );
}
