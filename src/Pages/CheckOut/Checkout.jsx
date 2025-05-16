import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import CheckoutForm from "./CheckoutForm";
import OrderSumury from "./OrderSumury";
import { getCartAction } from "../../store/actions";
import { useEffect } from "react";

const Checkout = () => {
  const dispatch = useDispatch();
  const { getCart, loading } = useSelector((state) => state.cartRed);
  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);
  return (
    <>
      <div>
        <BreadCrumb base={"Home / Cart"} page={"Checkout"} />
      </div>
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-8 p-5 bg-[#161819] max-md:col-span-12 rounded-[12px]">
          <CheckoutForm getCart={getCart} loading={loading} />
        </div>
        <div className="col-span-4   max-md:col-span-12 rounded-[12px] h-fit">
          <OrderSumury getCart={getCart} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default Checkout;
