import CheckoutForm from "./CheckoutForm/CheckoutForm";
import OrderSumury from "./OrderSumury/OrderSumury";

const Checkout = () => {
  return (
    <div className="grid grid-cols-12 gap-4 pt-28">
      <div className="col-span-8 p-5 bg-[#161819] max-md:col-span-12 rounded-[12px]">
        <CheckoutForm />
      </div>
      <div className="col-span-4   max-md:col-span-12 rounded-[12px] h-fit">
       <OrderSumury />
      </div>
    </div>
  );
};

export default Checkout;
