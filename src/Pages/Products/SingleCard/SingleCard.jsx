import React, { useMemo } from "react";
import Rate from "rc-rate";
import { Link } from "react-router-dom";
import { images } from "../data";

const SingleCard = ({ product, index }) => {
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
  return (
    <div className="rounded-[10px] p-4">
      <Link to={`/products/${_id}`}>
        <div className="relative  group rounded-[10px] p-4 overflow-hidden">
          <div className="relative  w-full rounded-[10px] overflow-hidden">
            <img
              src={randomImage}
              alt={slug}
              className="w-full h-[270PX] mb-2 rounded-[10px] "
            />
            <button className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[80%] rounded-full py-2 bg-[#a61c00] text-white hover:bg-[#872000] opacity-0 group-hover:opacity-100 group-hover:bottom-[60px] transition-all duration-300">
              Add to Cart
            </button>
          </div>
          <div className="flex justify-center gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-3">
            {renderColors}
          </div>

          <h3 className="text-[18px] text-[#a9afc3] line-clamp-1">{title}</h3>
          <div className="flex justify-between w-full items-center pt-3">
            <div className="rate rc-rate">
              <Rate value={ratingsQuantity} disabled allowHalf />
            </div>
            <p className="text-[16px] text-[#a61c00]">{price}$</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleCard;
