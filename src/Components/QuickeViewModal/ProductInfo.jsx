import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { LiaStarSolid } from "react-icons/lia";
import Correct from "../../assets/Correct.svg";
import toast from "react-hot-toast";
import {
  addtCartAction,
  getCartAction,
  updateCartAction,
} from "../../store/actions";

export default function ProductInfo({ product }) {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);
  const { loading } = useSelector((state) => state.productsRed);
  const { getCart } = useSelector((state) => state.cartRed);
  const productsCart = getCart?.data?.products;
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );

  const renderColors = product?.availableColors
    ?.join(",")
    .split(" ")
    ?.map((color, idx) => {
      return (
        color.length > 2 && (
          <span
            key={idx}
            onClick={() => setSelectedColor(color)}
            className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
              selectedColor === color
                ? "border-black !border-3"
                : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
          />
        )
      );
    });

  //============ ADD TO CART HANDELER

  const addToCartHandeler = (productId) => {
    const existProductSameColor = productsCart?.find(
      (item) =>
        item?.product?._id === productId && item?.color === selectedColor
    );
    if (product?.availableColors.length > 0) {
      if (!selectedColor) {
        toast.error("Please Select Color First");
      } else {
        if (existProductSameColor) {
          const count = existProductSameColor?.count + 1;
          dispatch(updateCartAction(existProductSameColor?._id, count));
        } else {
          dispatch(addtCartAction(productId, selectedColor));
        }
      }
    } else {
      const existProductNoColor = productsCart?.find(
        (item) => item?.product?._id === productId && item?.color === ""
      );
      if (existProductNoColor) {
        const count = existProductNoColor?.count + 1;
        dispatch(updateCartAction(existProductNoColor?._id, count));
      } else {
        setSelectedColor("");
        dispatch(addtCartAction(productId, selectedColor));
      }
    }
  };

  return (
    <section className="flex flex-col w-full lg:w-2/5">
      <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6">
        <h5 className="text-main">{product?.title}</h5>
        <p className="text-large text-main mb-4 font-normal">
          {product?.description}
        </p>
        <div className="flex items-center">
          <div className="flex justify-start">
            {Array.from({ length: product?.ratingsQuantity })?.map((_, idx) => (
              <LiaStarSolid key={idx} color="red" />
            ))}
          </div>
          <p className="text-large text-muted pl-2">
            {Math.ceil(product?.ratingsQuantity)} Ratings
          </p>
        </div>
        <div className="mt-3 flex items-center gap-1 w-full">
          <span className="text-[#008000] text-[14px] capitalize ">
            Average Rate : {product?.ratingsAverage || 0}
          </span>
          <span>
            {" "}
            <LiaStarSolid color="#008000" size={14} />
          </span>
        </div>
      </div>

      <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6 gap-6">
        <section className="flex items-center">
          <div className="prices mr-auto">
            <h3 className="text-main">{product?.price}</h3>
            <del className="text-muted">{Math.floor(product?.price * 1.5)}</del>
          </div>
          <div
            className={`in-stock ${
              product?.quantity > 0 ? "!bg-[#008000]" : "!bg-[#ed1d24]"
            }`}
          >
            <span>
              <img src={Correct} alt="" />
            </span>
            <span>{product?.quantity > 0 ? "In Stock" : "Out Stock"}</span>
          </div>
        </section>
        <section className="flex items-center">
          <p className="text-large text-green mr-auto">
            You save {product?.price + 20}
          </p>
          <p className="text-small text-muted">(Inclusive of all taxes)</p>
        </section>
      </div>

      <div className="flex justify-start items-center gap-3 mt-2 py-3">
        {renderColors}
      </div>

      <div className="py-6">
        <button
          onClick={() => addToCartHandeler(product?._id)}
          className={`single-button`}
        >
          Add To Cart
        </button>
      </div>
    </section>
  );
}
