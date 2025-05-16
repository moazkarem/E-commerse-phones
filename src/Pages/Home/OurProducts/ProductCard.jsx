import React, { useEffect, useMemo, useState } from "react";
import Rate from "rc-rate";
import "swiper/css/pagination";
import "swiper/css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { images } from "./data";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWhishlist,
  deleteFromWhishlist,
  getSingleProd,
  getWhishlist,
} from "../../../store/actions";
import toast from "react-hot-toast";
const ProductCard = ({ product, index, quickeViewHandeler }) => {
  const navigate = useNavigate();
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
  const { title, quantity, price, slug, ratingsQuantity, _id } = product;
  const randomImage = useMemo(() => {
    let selectedImage;
    do {
      selectedImage = images[Math.floor(Math.random() * images.length)];
    } while (index > 0 && selectedImage === images[index - 1]);
    return selectedImage;
  }, [index]);
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
    <div className="rounded-[10px]">
      <div className="relative overflow-hidden w-full cursor-pointer rounded-[10px] pt-[100%] group bg-[#111]">
        <Link to={`products/${_id}`}>
          <div className="flex justify-center items-center w-full mx-auto ">
            <img
              src={randomImage}
              alt={slug}
              className="rounded-[10px] w-[90%] h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 transition-all duration-300 group-hover:scale-110"
            />
          </div>
        </Link>
      </div>

      <div className="flex justify-center flex-col">
        <div className="flex justify-between items-center py-5 px-3">
          <div className="rate rc-rate">
            <Rate value={ratingsQuantity} disabled allowHalf />
          </div>
          <div className="flex">
            <h3 className="text-[16px] text-[#fff]">{quantity} Piese</h3>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 px-0">
          <h3 className="text-[#ed1d24] text-[18px] line-clamp-1">{title}</h3>
          <h3 className="text-[#a9afc3] text-[16px]">{price}$</h3>
        </div>
        <div className="flex justify-between items-center gap-3 mt-4">
          <button
            onClick={() => quickeViewHandeler(product)}
            className="text-white rounded-[6px] border px-6 max-[380px]:px-1 max-[380px]:justify-center max-[380px]:gap-2 h-12 flex justify-between items-center w-full max-[330px]:text-[16px]"
          >
            Quicke View
          </button>
          <button
            onClick={() => handelFav(_id)}
            className="text-[#ed1d24] border rounded-[6px] px-6 h-12"
          >
            <FaHeart
              className={`text-[20px] ${
                isFav ? "text-[#ed1d24]" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
