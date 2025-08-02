import React, { useEffect, useMemo, useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import "swiper/css/pagination";
import "swiper/css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { images } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import {
  addToWhishlist,
  deleteFromWhishlist,
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
  const { title, quantity, price, slug, ratingsQuantity, _id, description } =
    product;
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
    <>
      <div className="relative bg-[#111] rounded-[10px] py-6 px-6 w-full  text-white pb-20 mb-8">
        <div
          className="absolute bottom-[15px] left-[15px] cursor-pointer p-3 flex justify-center items-center bg-[#161819] rounded-full "
          onClick={() => quickeViewHandeler(product)}
        >
          <FaEye className="text-[#fff] text-xl" />
        </div>
        <Link to={`/products/${_id}`}>
          <div className="flex justify-center ">
            <img
              src={randomImage}
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
              <span className="text-[#a9afc3] text-[20px] ">{ratingsQuantity}</span>
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
