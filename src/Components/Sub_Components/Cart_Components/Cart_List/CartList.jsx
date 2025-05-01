import { useEffect } from "react";
import CartItem from "./Cart_Item/CartItem";
import img1 from "../../../../../public/images/sonyXb400-1.png";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearCartAction, getCartAction } from "../../../../store/cart/actions";
export default function CartList() {
  const { getCart } = useSelector((state) => state.cartRed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);
  const productsCart = getCart?.data?.products;
  const clearHandeler = () => {
    dispatch(clearCartAction());
  };

  return (
    <div className="w-full lg:w-3/5">
      <ul className="cart-list w-full  overflow-y-scroll max-h-[380px] bg-[#161819] px-4 sm:px-8 ">
        {productsCart?.map((item, idx) => (
          <CartItem key={idx} item={item} />
        ))}
      </ul>

      <button
        onClick={clearHandeler}
        className="relative  w-1/4 max-sm:w-full py-6 mt-10 text-[16px] text-white  border-b-2"
      >
        <span className="absolute left-0 top-1/2 -translate-y-1/2">
          Clear All
        </span>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center bg-[#ff0000cc] rounded-full">
          <MdDeleteOutline size={22} className="" />
        </span>
      </button>
    </div>
  );
}
