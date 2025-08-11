import React, { useEffect, useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import "swiper/css/pagination";
import "swiper/css";
import { Link, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import {
  addToWhishlist,
  deleteFromWhishlist,
  getWhishlist,
} from "../../../store/actions";
import toast from "react-hot-toast";
import { imageClean } from "../../../helpers/imageClean";
const ProductCard = ({ product, index, quickeViewHandeler }) => {
  const { id } = useParams();
  const storageKey = "userData";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const dispatch = useDispatch();
  const { whishlistData } = useSelector((state) => state.whishlistRed);
  useEffect(() => {
    if (!whishlistData?.data) {
      dispatch(getWhishlist());
    }
  }, [dispatch, whishlistData]);
  const { title, imageCover, price, slug, ratingsQuantity, _id, description } =
    product;

  //============================HANDEL WHISHLIST  ===========
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const whishlistIds =
      whishlistData?.data?.map((favProduct) => favProduct._id) || savedWishlist;
    setIsFav(whishlistIds.includes(_id));
  }, [whishlistData, _id]);

  const handelFav = (productId) => {
    if (userData) {
      setIsFav((prev) => !prev);
      let updatedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      if (isFav) {
        updatedWishlist = updatedWishlist.filter((id) => id !== productId);
        dispatch(deleteFromWhishlist(productId));
      } else {
        updatedWishlist.push(productId);
        dispatch(addToWhishlist(productId));
      }

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      toast.error("Please Login First To Add Product To Wishlist");
    }
  };

  //============================HANDEL  SINGLE PRODUCT NAVIGATION ===========

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay={index * 100}
        className="relative bg-[#111] rounded-[10px] py-6 px-6 w-full  text-white pb-20 "
      >
        <div
          className="absolute bottom-[15px] left-[15px] cursor-pointer p-3 flex justify-center items-center bg-[#161819] rounded-full "
          onClick={() => quickeViewHandeler(product)}
        >
          <FaEye className="text-[#fff] text-xl" />
        </div>
        <Link to={`/products/${_id}`}>
          <div className="flex justify-center ">
            <img
              src={imageClean(imageCover)}
              alt={slug}
              className="w-[150px] h-[150px] object-contain rounded-full border-2 border-[#a9afc3] p-3"
            />
          </div>

          <h3 className="mt-4 text-[18px] line-clamp-1">{title}</h3>
          <p className="text-[#a9afc3] text-[16px] mt-1 line-clamp-3 min-h-[72px]">
            {description}
          </p>
          <div className="w-full flex justify-between items-center">
            <p className="text-[#ed1d24] text-[20px] mt-2 ">{price} $</p>
            <p className="flex justify-center gap-1 items-center">
              <span className="text-[#a9afc3] text-[20px] ">
                {ratingsQuantity}
              </span>
              <span>
                <LiaStarSolid color="#ed1d24" />
              </span>
            </p>
          </div>
        </Link>

        <div className=" absolute bottom-[15px] right-[15px] ">
          <button
            onClick={() => handelFav(_id)}
            className="bg-[#111] rounded-full p-2 border-2 border-[#ed1d24]"
          >
            <FaHeart
              className={`text-xl ${isFav ? "text-[#ed1d24]" : "text-white"}`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
