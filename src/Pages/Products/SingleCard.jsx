import React, { useEffect, useMemo, useState } from "react";
import Rate from "rc-rate";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWhishlist,
  deleteFromWhishlist,
  getWhishlist,
} from "../../store/actions";
import toast from "react-hot-toast";
import { imageClean } from "../../helpers/imageClean";
const SingleCard = ({ product, index, handelQuickView }) => {
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
  const {
    imageCover,
    title,
    price,
    slug,
    ratingsQuantity,
    _id,
    availableColors,
  } = product;

  const parsedColors = (() => {
    if (!Array.isArray(availableColors)) return [];

    if (
      typeof availableColors[0] === "string" &&
      !availableColors[0].startsWith("[")
    ) {
      return availableColors;
    }

    try {
      return JSON.parse(availableColors[0]);
    } catch {
      return [];
    }
  })();

  const renderColors = parsedColors?.map((color, idx) => (
    <span
      key={idx}
      className="w-6 h-6 rounded-full bg-transparent scale-0 group-hover:scale-100 transition-transform duration-300"
      style={{ backgroundColor: color }}
    />
  ));

  //============================HANDEL WHISHLIST  ===========
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("wishlist")) || [];
    const whishlistIds =
      whishlistData?.data?.map((favProduct) => favProduct._id) || savedFavs;
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
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-delay={index * 100}
      className="rounded-[10px] p-4"
    >
      <div className="relative  group rounded-[10px] p-4 overflow-hidden">
        <div>
          <div className="relative  w-full rounded-[10px] overflow-hidden">
            <img
              src={imageClean(imageCover)}
              alt={slug}
              loading="lazy"
              className="w-full h-[270PX] mb-2  "
            />
            <button
              onClick={() => handelQuickView(product)}
              className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[80%] rounded-full py-2 bg-[#a61c00] text-white hover:bg-[#872000] opacity-0 group-hover:opacity-100 group-hover:bottom-[60px] transition-all duration-300"
            >
              Quicke View
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-3">
          {renderColors}
        </div>

        <div className="flex justify-between items-center group w-full">
          <Link
            to={`/products/${_id}`}
            className="flex justify-between items-center gap-2 w-full"
          >
            <span className="text-[18px] text-[#a9afc3] line-clamp-1">
              {title}
            </span>
            <span className="text-md text-[#008000] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Details ?
            </span>
          </Link>
        </div>
        <div className="flex justify-between w-full items-center pt-3 ">
          <div className="rate rc-rate">
            <Rate value={ratingsQuantity} disabled allowHalf />
          </div>
          <button onClick={() => handelFav(_id)}>
            <FaHeart
              className={`text-[20px] ${
                isFav ? "text-[#ed1d24]" : "text-white"
              }`}
            />
          </button>
          <p className="text-[16px] text-[#a61c00]">{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
