import ProductSummary from "../../Components/Sub_Components/Main_Components/Product_Summary/ProductSummary";
import ProductTabs from "../../Components/Sub_Components/Main_Components/Product_Tabs/ProductTabs";
import CurrentItemProvider from "../../Components/Contexts/CurrentItemProvider";
import RelatedProducts from "../../Components/Sub_Components/Main_Components/Related_Products/RelatedProducts";
import Seo from "../../Components/Seo/Seo";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";

export default function ProductDetails() {
  return (
    <div className="product-details flex flex-col">
      <Seo currentPage={"Details"} />
      <CurrentItemProvider>
      <BreadCrumb base={"Home"} page={"Product Details"} />
        <ProductSummary />
        <ProductTabs />
        <RelatedProducts />
      </CurrentItemProvider>
    </div>
  );
}
