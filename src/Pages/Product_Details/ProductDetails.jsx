import ProductSummary from "../../Components/Sub_Components/Main_Components/Product_Summary/ProductSummary";
import ProductTabs from "../../Components/Sub_Components/Main_Components/Product_Tabs/ProductTabs";
import RelatedProducts from "../../Components/Sub_Components/Main_Components/Related_Products/RelatedProducts";
import Seo from "../../Components/Seo/Seo";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";

export default function ProductDetails() {
  return (
    <>
    <BreadCrumb base={"Home"} page={"Product Details"} />
    <div className="product-details flex flex-col w-full">
      <Seo currentPage={"Details"} />

      <ProductSummary />
      <ProductTabs />
      <RelatedProducts />
    </div>
      </>
  );
}
