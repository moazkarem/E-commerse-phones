import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormsg from "../../../../Components/Error/Errormsg";
import { couponSchema } from "../../../../helpers/validation.js";
import { useDispatch, useSelector } from "react-redux";
import { applyUserCouponAction } from "../../../../store/cart/actions.js";
const CartSummary = ({ productsCart }) => {
  const { couponData } = useSelector((state) => state.cartRed);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(couponSchema),
  });

  const onSubmit = (data) => {
    dispatch(applyUserCouponAction(data));
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };

  return (
    <div className="w-full lg:w-2/5 cart-summary">
      <div className=" py-6 border-b-[1px] border-[#ffffff30]">
        <h5 className="text-main mb-10">
          Order Summary ( {productsCart?.data?.products?.length} )
        </h5>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center">
            <p className="text-large text-main mr-auto">Original Price</p>
            <h6 className="text-main">
              {productsCart?.data?.totalCartPrice} $
            </h6>
          </li>
          <li className="flex items-center">
            <p className="text-large text-main mr-auto">Discount</p>
            <h6 className="text-[#008000]">
              {productsCart?.data?.totalAfterDiscount ?(
                productsCart?.data?.totalCartPrice -
                productsCart?.data?.totalAfterDiscount
              ).toFixed(2) : 0 }
           
              $
            </h6>
          </li>
          <li className="flex items-center">
            <p className="text-large text-main  mr-auto">Delivery</p>
            <h6 className="text-[#008000]">Free</h6>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-8 py-6">
        <div className="flex items-center">
          <h5 className="text-main mr-auto">Total Price</h5>
          {productsCart?.data?.totalAfterDiscount >= 0 ? (
            <div className="flex gap-1 items-center">
              <span className="text-[#008000] text-[18px]">
                {" "}
                {productsCart?.data?.totalAfterDiscount}{" "}
              </span>
              <span className="text-[14px] text-main line-through">
                {productsCart?.data?.totalCartPrice} $
              </span> 
            </div>
          ) : (
            <h3 className="text-main text-[16px]">
              {productsCart?.data?.totalCartPrice} $
            </h3>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <input
              className="w-full bg-transparent py-2 rounded-sm ps-3 border outline-none"
              placeholder="Apply Coupon"
              {...register("couponName")}
            />

            <button
              type="submit"
              className="text-white absolute right-0 top-1/2 -translate-y-1/2 px-5 h-full bg-[#ff0000cc]"
            >
              Apply
            </button>
          </div>
          {errors?.couponName?.message && (
            <Errormsg msg={errors.couponName.message} />
          )}
        </form>

        <Link to={"/cart/checkout"}>
          <button className="full-button">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
