import React, { useEffect, useMemo, useState } from "react";
import Filter from "./Filter/Filter";
import SingleCard from "./SingleCard/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import { getAllproducts } from "../../store/actions";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import Pagination from "../../Components/pagination/Pagination";
import NullScreen from "../../Components/NullScreen/NullScreen";
const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productsRed
  );
  console.log(products, "test pagi");
  useEffect(() => {
    dispatch(getAllproducts(limit, currentPage));
  }, [dispatch, limit, currentPage]);
  //============================HANDEL DATA ===========
  const { data } = products;
  const renderProducts = data?.map((product, index) => (
    <SingleCard product={product} key={product._id} index={index} />
  ));
  //============================HANDEL LOADING ===========
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  //============================HANDEL ERROR ===========
  if (error)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Error msg={error} />
      </div>
    );
  //============================HANDEL NULL SCREEN ===========
  if (!data || data.length === 0)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <NullScreen msg="Sorry, there are no products now." />
      </div>
    );
  //============================HANDEL PAGINATION ===========
  let pageCount = 0;

  if (products?.paginationResult) {
    pageCount = products?.paginationResult?.numberOfPages;
  }
  const handelPage = (page) => {
    setCurrentPage(page);
  };

  //============================START JSX ===========
  return (
    <>
      <div>
        <BreadCrumb base={"Home"} page={"Blogs"} />
      </div>
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-3 max-md:hidden">
          <Filter />
        </div>
        <div className="col-span-9 max-md:col-span-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderProducts}
          </div>
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
      </div>
    </>
  );
};

export default AllProducts;
