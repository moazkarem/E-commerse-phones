import React from "react";
import SingleCard from "./SingleCard";
import Seo from "../../Components/Seo/Seo";
import Loading from "../../Components/Loading/Loading";
import NullScreen from "../../Components/NullScreen/NullScreen";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import { useDispatch, useSelector } from "react-redux";
import { getProdByBrand } from "../../store/Products/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBrand = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdByBrand(id));
  }, [dispatch, id]);

  const { prodByBrand, loading } = useSelector((state) => state.productsRed);
  console.log(prodByBrand , 'my braa')
  //============================DATA RENDERING===========
  const renderProducts = prodByBrand?.data?.map((product, idx) => (
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

  if (prodByBrand?.data <= 0)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <NullScreen msg={"No Products Found for This Brand."} />
      </div>
    );
    return (
      <div className="pt-24 pb-40 max-lg:pb-20">
        <Seo currentPage={"Single Brand"} />
        <BreadCrumb base={"Home"} page={"Single Brand"} />
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {renderProducts}
        </div>
      </div>
    );
};

export default SingleBrand;
