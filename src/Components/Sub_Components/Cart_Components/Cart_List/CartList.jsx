import { useEffect } from "react";
import CartItem from "./Cart_Item/CartItem";
import img1 from "../../../../../public/images/sonyXb400-1.png";
import { useDispatch, useSelector } from "react-redux";
import { getCartAction } from "../../../../store/cart/actions";
export default function CartList() {
  const cartItems = [
    {
      id: 1,
      images: [img1, img1],
      info: "lorem ipsum dolor",
      brand: "sony",
      originalPrice: 170,
      finalPrice: 220,
      title: "Phone Iohoe",
    },
    {
      id: 2,
      images: [img1, img1],
      info: "lorem ipsum dolor",
      brand: "sony",
      originalPrice: 170,
      finalPrice: 220,
      title: "Phone Iohoe",
    },
    {
      id: 3,
      images: [img1, img1],
      info: "lorem ipsum dolor",
      brand: "sony",
      originalPrice: 170,
      finalPrice: 220,
      title: "Phone Iohoe",
    },
  ];
  const { getCart } = useSelector((state) => state.cartRed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);
  const productsCart = getCart?.data?.products;

  return (
    <ul className="cart-list w-full lg:w-3/5 overflow-y-scroll max-h-[380px] bg-[#161819] px-4 sm:px-8 ">
      {productsCart?.map((item, idx) => (
        <CartItem key={idx} item={item} />
      ))}
    </ul>
  );
}
