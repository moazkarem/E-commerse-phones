import React, { useEffect, useMemo } from "react";
import { BsHandbag } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromWhishlist, getWhishlist } from "../../../store/actions";
import { images } from "./data";
import Loading from "../../../Components/Loading/Loading";
import NullScreen from "../../../Components/NullScreen/NullScreen";
import { useNavigate } from "react-router-dom";
const Whishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { whishlistData, loading } = useSelector((state) => state.whishlistRed);
  useEffect(() => {
    if (!whishlistData?.data) {
      dispatch(getWhishlist());
    }
  }, [dispatch, whishlistData]);
  //============================HANDEL DATA ===========
  const renderWhishCards = whishlistData?.data?.map((item) => (
    <div
      key={item._id}
      className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-700 last:border-none mb-6 md:mb-0"
    >
      <div className="w-[90%] h-[300px] md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 md:mb-0 max-[768px]:w-full">
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt="product name"
          className="w-full h-full p-2 rounded-[10px]  border border-[#a9afc3]"
        />
      </div>
      <div className="w-full flex justify-center gap-3 max-md:justify-between items-center mb-4 md:mb-0 md:w-auto md:flex-grow md:mx-4 md:flex-col lg:flex-row">
        <span className="capitalize text-[16px] line-clamp-1 text-[#a9afc3] md:mr-3">
          {item.title}
        </span>
        <span className="capitalize text-[16px] text-[#008000]">
          {item.price}$
        </span>
      </div>
      <div className="w-full flex justify-between gap-8 items-center md:w-auto md:flex-shrink-0">
        <button
          onClick={() => navigate(`/products/${item?._id}`)}
          className="bg-[#008000] py-2 px-6 md:px-4 lg:px-8 rounded-[8px] flex items-center justify-center gap-2 flex-shrink-0"
        >
          <span className="capitalize text-[14px] lg:text-[16px] text-white">
            View
          </span>
        </button>
        <div className="flex-shrink-0">
          <span
            onClick={() => handelRemove(item._id)}
            className="cursor-pointer"
          >
            <MdDeleteOutline size={24} className="text-[#ff0000cc]" />
          </span>
        </div>
      </div>
    </div>
  ));
  //============================REMOVE ACTION ===========
  const handelRemove = (productId) => {
    dispatch(deleteFromWhishlist(productId));
  };
  //============================HANDEL LOADING ===========
  if (loading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-[#161819] py-5">
      {!whishlistData?.data || whishlistData?.data?.length === 0 ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <NullScreen msg="Sorry, there are no products now." />;
        </div>
      ) : (
        renderWhishCards
      )}
    </div>
  );
};

export default Whishlist;
