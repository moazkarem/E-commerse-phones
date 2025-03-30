import React, { useEffect, useMemo, useState } from "react";
import Rate from "rc-rate";
import { Link } from "react-router-dom";
import { images } from "../data";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWhishlist,
  deleteFromWhishlist,
  getWhishlist,
} from "../../../store/actions";
const SingleCard = ({ product, index }) => {
  const dispatch = useDispatch();
  const { whishlistData } = useSelector((state) => state.whishlistRed);
  useEffect(() => {
    if (!whishlistData?.data) {
      dispatch(getWhishlist());
    }
  }, [dispatch, whishlistData]);
  const { title, price, slug, ratingsQuantity, _id, availableColors } = product;
  const randomImage = useMemo(() => {
    let selectedImage;
    do {
      selectedImage = images[Math.floor(Math.random() * images.length)];
    } while (index > 0 && selectedImage === images[index - 1]);
    return selectedImage;
  }, [index]);

  const renderColors = availableColors
    .join(",")
    .split(" ")
    ?.map((color, idx) => {
      return (
        color.length > 2 && (
          <span
            key={idx}
            className="w-6 h-6 rounded-full bg-transparent scale-0 group-hover:scale-100 transition-transform duration-300"
            style={{ backgroundColor: color }}
          />
        )
      );
    });

  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const whishlistIds =
      whishlistData?.data?.map((favProduct) => favProduct._id) || savedWishlist;
    setIsFav(whishlistIds.includes(_id));
  }, [whishlistData, _id]);

  const handelFav = (productId) => {
    setIsFav((prev) => !prev);

    let updatedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isFav) {
      updatedWishlist = updatedWishlist.filter((id) => id !== productId);
      dispatch(deleteFromWhishlist(productId)); // حذف من المفضلة
    } else {
      updatedWishlist.push(productId);
      dispatch(addToWhishlist(productId)); // إضافة إلى المفضلة
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // حفظ التحديث
  };
  return (
    <div className="rounded-[10px] p-4">
      <div className="relative  group rounded-[10px] p-4 overflow-hidden">
        <Link to={`/products/${_id}`}>
          <div className="relative  w-full rounded-[10px] overflow-hidden">
            <img
              src={randomImage}
              alt={slug}
              loading="lazy"
              className="w-full h-[270PX] mb-2  "
            />
            <button className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[80%] rounded-full py-2 bg-[#a61c00] text-white hover:bg-[#872000] opacity-0 group-hover:opacity-100 group-hover:bottom-[60px] transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </Link>
        <div className="flex justify-center gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-3">
          {renderColors}
        </div>

        <h3 className="text-[18px] text-[#a9afc3] line-clamp-1">{title}</h3>
        <div className="flex justify-between w-full items-center pt-3">
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
