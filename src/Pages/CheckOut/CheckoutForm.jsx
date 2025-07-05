import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  cashCheckoutActions,
  getAllAddresses,
  getCartAction,
} from "../../store/actions";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ getCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getAddresses } = useSelector((state) => state.addressesRed);
  const { data } = getAddresses;
  const cartId = getCart?.data?._id;

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(getAllAddresses());
  }, [dispatch]);

  //=====================  RENDER ADDRESS
  const renderAddresses = data?.data?.map((address) => (
    <option
      key={address?._id}
      // stringfiy becous value dont accepted objects , convert to string and parse it in handel submit
      value={JSON.stringify({
        alias: address?.alias,
        details: address?.details,
        phone: address?.phone,
        city: address?.city,
        postalCode: address?.postalCode,
      })}
      className="bg-[#111] text-white hover:bg-red-500"
    >
      {address?.alias}
    </option>
  ));
  //=====================  FORM HANDELER

  const onSubmit = (data) => {
    const shippingAddress = JSON.parse(data.shippingAddress);
    dispatch(cashCheckoutActions({ cartId, shippingAddress, navigate }));
    dispatch(getCartAction());
  };

  return (
    <>
      <h2 className="text-[#fff] mb-8">Checkout Details</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-start gap-4 mb-6">
          <input
            type="checkbox"
            className="accent-[#ed1d24] w-4 h-4 mb-2 cursor-pointer"
          />
          <label className="capitalize text-sm ps-2 text-[#a9afc3]">
            Cash on Delivery
          </label>
        </div>

        <div className="flex items-start gap-4 mb-6">
          <input
            type="checkbox"
            className="accent-[#ed1d24] w-4 h-4 mb-2 cursor-pointer"
          />
          <label className="capitalize text-sm ps-2 text-[#a9afc3]">
            Pay with Visa
          </label>
        </div>

        <div className="flex flex-col items-start gap-4 mb-6 w-full relative">
          <select
            {...register("shippingAddress", { required: true })}
            defaultValue={"  Select Address"}
            className="w-full appearance-none px-4 py-3 rounded-[10px] bg-transparent border outline-none text-sm text-[#a9afc3]"
          >
            <option
              className="bg-[#111] text-white hover:bg-red-500"
              value=""
              disabled
              selected
            >
              Select Address
            </option>
            {data?.data?.length > 0 ? (
              renderAddresses
            ) : (
              <option
                className="bg-[#111] text-white hover:bg-red-500"
                value=""
                disabled
              >
                No addresses available
              </option>
            )}
          </select>

          <IoIosArrowDown className="absolute right-[15px] bottom-[18px] text-[#a9afc3] pointer-events-none -translate-y-1/2 top-1/2" />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-[#ff0000cc] w-1/4 rounded-[10px] h-[40px] text-white text-sm max-md:w-full "
          >
            Complete Order
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
