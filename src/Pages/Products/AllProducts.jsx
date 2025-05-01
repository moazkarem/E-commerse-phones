import React, { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import SingleCard from "./SingleCard/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import { getAllproducts } from "../../store/actions";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import Pagination from "../../Components/pagination/Pagination";
import NullScreen from "../../Components/NullScreen/NullScreen";
import QuickeModal from "../../Components/QuickeViewModal/QuickeModal";

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;
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
  console.log(sort, "sor");
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
 
  const [viewedProduct , setViewedProduct] = useState('')
  const handelQuickView = (product)=>{
    document.getElementById("Quicke_view").showModal()
    setViewedProduct(product)
  }

  const renderProducts = products?.data?.map((product, index) => (
    <SingleCard product={product} key={product._id} index={index} handelQuickView={handelQuickView}/>
  ));

  //============================HANDEL PAGINATION ===========
  const handelPage = (page) => setCurrentPage(page);
  const pageCount = products?.paginationResult?.numberOfPages || 0;

  //============================HANDEL LOADING ===========
  if (loading) {
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Loading />
    </div>;
  }

  //============================HANDEL ERROR ===========
  if (error) {
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Error msg={msg} />
    </div>;
  }

  //============================START JSX ===========
  return (
    <>
      <BreadCrumb base="Home" page="Products" />
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3 max-md:hidden">
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
        <div className="col-span-9 max-md:col-span-12">
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
        <QuickeModal product={viewedProduct}/>
      </div>
    </>
  );
};

export default AllProducts;
