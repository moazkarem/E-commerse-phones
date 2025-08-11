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
import Seo from "../../Components/Seo/Seo";
import { imageClean } from "../../helpers/imageClean";
const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categoriesRed
  );
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

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
      <Link to={`/categories/${_id}`} key={_id} className="block w-full">
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay={idx * 100}
          className="relative flex flex-col justify-center items-center gap-6 mb-10 w-full overflow-hidden"
        >
          <div className="border border-[#596268] p-3 rounded-[10px] group w-full overflow-hidden">
            <img
              src={imageClean(image)}
              alt={slug}
              className="w-full h-[260px] max-h-[300px] object-contain transform transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <h5 className="text-center text-[18px] text-[#fff]">{name}</h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  );

  return (
    <div className="pb-40 max-lg:pb-20">
      <Seo currentPage={"Categories"} />
      <div>
        <BreadCrumb base="Home" page="Categories" />
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1  gap-4 ">
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
