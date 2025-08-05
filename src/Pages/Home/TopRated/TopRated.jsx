import React, { useEffect, useState } from "react";
import img1 from "../../../../public/images/brands/img5.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducts } from "../../../store/actions";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

import useActive from "../../../Components/Hooks/useActive";
import { Fade } from "react-awesome-reveal";
import TabButton from "../../../Components/Sub_Components/Buttons/Tab_Button/TabButton";
import { useIntl } from 'react-intl';

const TopRatedTabs = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsRed);
 const {formatMessage} = useIntl()
  const [active, activeHandler] = useActive("Top Rated");
  const [currentTab, setCurrentTab] = useState("Top Rated");

  useEffect(() => {
    dispatch(getAllproducts());
  }, [dispatch]);

  const topRated = Array.isArray(products?.data)
    ? [...products.data]
        .sort((a, b) => b.ratingsQuantity - a.ratingsQuantity)
        .slice(0, 6)
    : [];

  const heighstPrice = Array.isArray(products?.data)
    ? [...products.data].sort((a, b) => b.price - a.price).slice(0, 4)
    : [];

  const latestArrived = Array.isArray(products?.data)
    ? [...products.data]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)
    : [];

  const renderProducts = (arr) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {arr.map((item) => (
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
            <div className="w-full flex justify-between items-center ">
              <span className="text-[#ed1d24] text-[16px] font-medium">
                {item.price} $
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: item?.ratingsQuantity }, (_, idx) => (
                  <AiFillStar className="text-[#ed1d24]" key={idx} />
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="w-full pb-40 max-lg:pb-20">
      <div className="flex flex-wrap m-auto mb-16 gap-4 md:gap-10 justify-center">
        {["Top Rated", "Latest Arrived", "Most Selling"].map((t) => (
          <TabButton
            key={t}
            tab={t}
            onClick={(e) => {
              activeHandler(e);
              setCurrentTab(t);
            }}
            active={active}
          />
        ))}
      </div>

      <Fade duration={200}>
        {currentTab === "Top Rated" && renderProducts(topRated)}
        {currentTab === "Latest Arrived" && renderProducts(latestArrived)}
        {currentTab === "Most Selling" && renderProducts(heighstPrice)}
      </Fade>
    </div>
  );
};

export default TopRatedTabs;
