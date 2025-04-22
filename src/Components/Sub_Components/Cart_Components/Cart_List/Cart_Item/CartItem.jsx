import { Link } from "react-router-dom";
import QuantityButton from "../../../Buttons/Quantity_Button/QuantityButton";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { memo } from "react";
import PropTypes from "prop-types";
import { images } from "./data";
import { useDispatch } from "react-redux";
import { delCartAction, updateCartAction } from "./../../../../../store/cart/actions";
import { useState } from "react";

function CartItem({ item }) {
  images[Math.floor(Math.random() * images.length)];

  const dispatch = useDispatch();

  const removeCartItem = (productId) => {
    // console.log(productId , 'from cart item delete')
    dispatch(delCartAction(productId));
  };

  const [count, setCount] = useState(item?.count);
  const updateCount = (productId)=>{
    dispatch(updateCartAction(productId ,count))
  }
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
          <div className="flex items-center justifiy-center">
            <input
              className="w-20 h-12 border outline-none"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button onClick={()=>updateCount(item?._id)} className="px-2 py-1 bg-white text-red-500"> Add</button>
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
