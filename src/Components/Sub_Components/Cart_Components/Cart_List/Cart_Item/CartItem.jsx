import { Link } from "react-router-dom";
import QuantityButton from "../../../Buttons/Quantity_Button/QuantityButton";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { memo } from "react";
import PropTypes from "prop-types";
import { images } from "./data";
import { useDispatch } from "react-redux";
import {
  delCartAction,
  updateCartAction,
} from "./../../../../../store/cart/actions";
import { useState } from "react";

function CartItem({ item }) {
  images[Math.floor(Math.random() * images.length)];

  const dispatch = useDispatch();

  const removeCartItem = (productId) => {
    dispatch(delCartAction(productId));
  };

  const [count, setCount] = useState(item?.count);
  const updateCount = (productId) => {
    dispatch(updateCartAction(productId, count));
  };
  return (
    <>
      <li className="w-full  flex gap-4  border-b-[1px] border-[#ffffff30] py-6  md:max-h-[200px]">
        <Link
          to={`/product-details/${item?.product?._id}`}
          className="w-2/5 md:w-1/5 "
        >
          <img
            src={images[Math.floor(Math.random() * images.length)]}
            alt={item?.product?.brand?.name}
          />
        </Link>
        <div className="flex flex-col w-3/5 md:w-4/5 relative gap-2 justify-center">
          <p className="item-description text-main w-3/4 md:w-auto" href="#">
            {item?.product?.title} <br />
          </p>
          <div className="prices">
            <h3 className="text-main">${item?.price.toLocaleString()}</h3>
            <del className="text-muted">
              ${(item?.price * 1.4).toLocaleString()}
            </del>
          </div>
          <div>
            <div className=" flex items-center gap-2 mb-3">
              <span className="text-[16px] mb-0 text-main">Color : </span>
              <span
                className="px-1 rounded-[10px]"
                style={{ backgroundColor: `${item?.color}` }}
              >
                {item?.color || "NoT Found Colors"} 
              </span>
            </div>
          </div>
          <div className="relative">
            <input
              className="w-full  py-2 rounded-[10px] ps-3 border outline-none"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button
              onClick={() => updateCount(item?._id)}
              className="text-white absolute right-4 top-1/2 -translate-y-1/2 px-5 py-[2px] rounded-[8px] bg-[#ff0000cc] bg-"
            >
              {" "}
              Update
            </button>
          </div>

          <button
            className="remove-button"
            onClick={() => removeCartItem(item?._id)}
          >
            <MdOutlineRemoveShoppingCart />
          </button>
        </div>
      </li>
    </>
  );
}

export default memo(CartItem);
