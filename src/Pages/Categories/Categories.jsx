import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import { getAllCategories } from "../../store/Categories/actions";
import Loading from "../../Components/Loading/Loading";
import NullScreen from "../../Components/NullScreen/NullScreen";
import Pagination from "../../Components/pagination/Pagination";
import { useMemo } from "react";
import Error from "../../Components/Error/Error";
import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categoriesRed
  );
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;

  useEffect(() => {
    dispatch(getAllCategories(limit, currentPage));
  }, [dispatch, currentPage, limit]);

  //============================HANDEL PAGINATION ===========
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const pageCount = useMemo(() => {
    return categories.paginationResult?.numberOfPages || 0;
  }, [categories]);
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
  if (!categories.data || categories.data.length === 0)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <NullScreen msg="Sorry, there are no categories now." />
      </div>
    );
  const renderCategoies = categories?.data.map(
    ({ image, name, slug, _id }, idx) => (
      <Link key={idx} to={`/categories/${_id}`}>
        <div className="flex flex-col justify-center items-center gap-6 mb-10">
          <div className="border border-[#596268] p-3 rounded-[10px] overflow-hidden group">
            <img
              src={image}
              alt={slug}
              className="w-full h-[260px] max-h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            />
          </div>
          <h5 className="text-center text-[18px] text-[#a9afc3]">{name}</h5>
        </div>
      </Link>
    )
  );

  return (
    <div className="pb-20">
      <div>
        <BreadCrumb base="Home" page="Categories" />
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1  gap-4 mb-16">
        {renderCategoies}
      </div>
      {pageCount > 1 ? (
        <Pagination
          pageCount={pageCount}
          onPress={handlePageChange}
          currentPage={currentPage}
        />
      ) : null}
    </div>
  );
};

export default Categories;
