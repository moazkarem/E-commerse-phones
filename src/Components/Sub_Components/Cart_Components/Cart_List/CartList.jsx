import { useContext } from "react";
import CartItem from "./Cart_Item/CartItem";
import img1 from "../../../../../public/images/sonyXb400-1.png";
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
  return (
    <ul className="cart-list w-full lg:w-3/5 overflow-y-scroll max-h-[380px] bg-[#161819] px-4 sm:px-8 ">
      {cartItems?.map((item) => (
        <CartItem
          key={item.id}
          itemId={item.id}
          itemImage={item.images[0]}
          itemInfo={item.info}
          itemBrand={item.brand}
          itemOriginalPrice={item.originalPrice}
          itemFinalPrice={item.finalPrice}
          itemTitle={item.title}
        />
      ))}
    </ul>
  );
}
