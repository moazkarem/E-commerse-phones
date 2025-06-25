import React, { useEffect, useState } from "react";
import img1 from "../../../../public/images/brands/img5.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducts } from "../../../store/actions";
import { Link } from "react-router-dom";

const TopRated = () => {
  const { products } = useSelector((state) => state.productsRed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllproducts());
  }, [dispatch]);
  const topRated = Array.isArray(products?.data)
    ? [...products.data]

        .sort((a, b) => b.ratingsQuantity - a.ratingsQuantity)
        .slice(0, 3)
    : [];

  const heighstPrice = Array.isArray(products?.data)
    ? [...products.data].sort((a, b) => b.price - a.price).slice(0, 3)
    : [];

  const latestArrived = Array.isArray(products?.data)
    ? [...products.data]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3)
    : [];

  const columns = [
    { title: "Top Rated", data: topRated },
    { title: "Latest Arrived", data: latestArrived },
    { title: "Most Selling", data: heighstPrice },
  ];
  return (
    <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-6 pb-40">
      {columns.map((column, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <h3 className="text-[#ed1d24] text-[18px] font-light">
            {column.title}
          </h3>

          {column?.data?.map((item) => (
            <Link
              to={`/products/${item?._id}`}
              key={item._id}
              className="bg-[#161819] border border-[#6c757d] rounded-[10px] p-3 flex gap-3 h-32 
              transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-[80px] h-[80px] flex-shrink-0">
                <img
                  src={img1}
                  alt="product"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
              </div>

              <div className="flex flex-col justify-between gap-3">
                <p className="text-white text-[16px] leading-snug line-clamp-3">
                  {item.description}
                </p>
                <span className="text-[#ed1d24] text-[16px] font-medium">
                  {item.price} $
                </span>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TopRated;
