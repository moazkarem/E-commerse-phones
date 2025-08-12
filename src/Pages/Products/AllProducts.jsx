import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import { getAllproducts } from "../../store/actions";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import Pagination from "../../Components/pagination/Pagination";
import NullScreen from "../../Components/NullScreen/NullScreen";
import QuickeModal from "../../Components/QuickeViewModal/QuickeModal";
import Seo from "./../../Components/Seo/Seo";
import { FiSidebar } from "react-icons/fi";
import Drawer from "./Drawer";
const AllProducts = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 9;
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productsRed
  );
  const [searchWord, setSearchWord] = useState(
    localStorage.getItem("searchWord") || ""
  );
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(5000);
  const [sort, setSort] = useState("");
  //============================HANDEL DATA ===========
  useEffect(() => {
    const catQuery =
      categoryChecked.length > 0
        ? categoryChecked
            .map((category) => `category[in][]=${category}`)
            .join("&")
        : "";
    const brandQuery =
      brandChecked.length > 0
        ? brandChecked.map((brand) => `brand[in][]=${brand}`).join("&")
        : "";

    const search = setTimeout(() => {
      dispatch(
        getAllproducts(
          limit,
          currentPage,
          searchWord,
          catQuery,
          brandQuery,
          priceFrom,
          priceTo,
          sort
        )
      );
    }, 1000);

    return () => clearTimeout(search);
  }, [
    dispatch,
    limit,
    currentPage,
    searchWord,
    categoryChecked,
    brandChecked,
    priceFrom,
    priceTo,
    sort,
  ]);
  //============================QUICKE VIEW MODAL ===========
  const [viewedProduct, setViewedProduct] = useState("");
  const handelQuickView = (product) => {
    document.getElementById("Quicke_view").showModal();
    setViewedProduct(product);
  };

  const renderProducts = products?.data?.map((product, index) => (
    <SingleCard
      product={product}
      key={product._id}
      index={index}
      handelQuickView={handelQuickView}
    />
  ));

  //============================HANDEL PAGINATION ===========
  const handelPage = (page) => setCurrentPage(page);
  const pageCount = products?.paginationResult?.numberOfPages || 0;

  //============================HANDEL LOADING ===========
  if (loading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  //============================HANDEL ERROR ===========
  if (error) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Error msg={msg} />
      </div>
    );
  }

  //============================START JSX ===========
  return (
    <>
      <Seo currentPage={"Products"} />

      <BreadCrumb base="Home" page="Products" />
      <div className="grid grid-cols-12 gap-3 pb-40 max-lg:pb-20">
        <div className="col-span-3 max-lg:hidden">
          <Filter
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            products={products}
            categoryChecked={categoryChecked}
            setCategoryChecked={setCategoryChecked}
            setBrandChecked={setBrandChecked}
            setPriceFrom={setPriceFrom}
            setPriceTo={setPriceTo}
            priceTo={priceTo}
            priceFrom={priceFrom}
            setSort={setSort}
          />
        </div>
        <div className="col-span-9 max-lg:col-span-12">
          {!products?.data || products.data.length === 0 ? (
            <div className="w-full h-[100vh] flex justify-center items-center">
              <NullScreen msg="Sorry, there are no products now." />;
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {renderProducts}
            </div>
          )}

          {pageCount > 1 && (
            <div className="pt-12">
              <Pagination
                pageCount={pageCount}
                onPress={handelPage}
                currentPage={currentPage}
              />
            </div>
          )}
        </div>
        <QuickeModal product={viewedProduct} />
        {/* //======================= SIDE BAR IN MOBILE SCREEN ======== */}
        <div className="fixed right-5 bottom-5 z-[50000] lg:hidden">
          <button
            onClick={toggleDrawer}
            className="bg-[#ff0000cc] rounded-[10px] p-2 cursor-pointer shadow-sm"
            aria-label="Open filters"
          >
            <FiSidebar size={22} className="text-white" />
          </button>
        </div>

        <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      </div>
    </>
  );
};

export default AllProducts;
