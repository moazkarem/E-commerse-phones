import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import CheckoutForm from "./CheckoutForm";
import OrderSumury from "./OrderSumury";
import { getCartAction } from "../../store/actions";
import { useEffect } from "react";
import Seo from "../../Components/Seo/Seo";

const Checkout = () => {
  const dispatch = useDispatch();
  const { getCart, loading } = useSelector((state) => state.cartRed);
  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);
  return (
    <>
      <Seo currentPage={"Checkout"} />
      <div>
        <BreadCrumb base={"Home / Cart"} page={"Checkout"} />
      </div>
      <div className="grid grid-cols-12 gap-4 pb-40 max-lg:pb-40">
        <div className="col-span-8 p-5 bg-[#111] max-lg:col-span-12 rounded-[12px] max-lg:order-2">
          <CheckoutForm getCart={getCart} loading={loading} />
        </div>
        <div className="col-span-4 max-lg:col-span-12 rounded-[12px] h-fit max-lg:order-1">
          <OrderSumury getCart={getCart} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default Checkout;
