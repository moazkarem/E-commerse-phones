import { useEffect, useState } from "react";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import { useDispatch, useSelector } from "react-redux";
import { getAllbrands } from "../../store/Brands/actions";
import BrandCard from "./BrandCard";
import NullScreen from "../../Components/NullScreen/NullScreen";
import Loading from "../../Components/Loading/Loading";
import Pagination from "../../Components/pagination/Pagination";
import Error from "../../Components/Error/Error";
const Brands = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { brands, loading, error } = useSelector((state) => state.brandsRed);
  const { data } = brands;
  const limit = 9;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllbrands(limit, currentPage));
  }, [dispatch, limit, currentPage]);

  const renderBrands = data?.map((brand, index) => (
    <BrandCard key={brand._id} brand={brand} index={index} />
  ));
  //============================HANDEL LOADING ===========
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  //============================HANDEL LOADING ===========
  if (error)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Error msg={error} />
      </div>
    );
  //============================HANDEL NULL SCREEN ===========
  if (!data || data?.length === 0)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <NullScreen msg="Sorry, there are no categories now." />
      </div>
    );

  //============================HANDEL PAGINATION ===========
  let pageCount = 0;

  if (brands?.paginationResult) {
    pageCount = brands?.paginationResult?.numberOfPages;
  }
  const handelPages = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div>
        <BreadCrumb base={"Home"} page={"Brands"} />
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        {renderBrands}
      </div>
      <Pagination
        pageCount={pageCount}
        onPress={handelPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Brands;
