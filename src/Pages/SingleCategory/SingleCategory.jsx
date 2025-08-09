import React, { useEffect } from "react";
import SingleCard from "./SingleCard";
import Seo from "../../Components/Seo/Seo";
import { useDispatch, useSelector } from "react-redux";
import { getProdByCategory } from "./../../store/Products/actions";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import Loading from "../../Components/Loading/Loading";
import NullScreen from "../../Components/NullScreen/NullScreen";

const SingleBrand = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdByCategory(id));
  }, [dispatch, id]);

  const { prodByCategory, loading } = useSelector((state) => state.productsRed);

  //============================DATA RENDERING===========
  const renderProducts = prodByCategory?.data?.map((product, idx) => (
    <SingleCard idx={idx} product={product} key={idx} />
  ));

  //============================HANDEL LOADING ===========

  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );

  //============================HANDEL LOADING ===========

  if (prodByCategory?.data <= 0)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <NullScreen msg={"No Products Found for This Category."} />
      </div>
    );

  return (
    <div className="pt-24 px-4">
      <Seo currentPage={"Single Category"} />
      <div>
        <BreadCrumb base={"Home"} page={"Single Category"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-40 max-lg:pb-20">
        {renderProducts}
      </div>
    </div>
  );
};

export default SingleBrand;
