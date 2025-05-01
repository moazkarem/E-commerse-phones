import { Link } from "react-router-dom";


export default function CartSummary({productsCart}) {
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
             1500
            </h6>
          </li>
          <li className="flex items-center">
            <p className="text-large text-main mr-auto">Discount</p>
            <h6 className="text-[#008000]">
              0
            </h6>
          </li>
          <li className="flex items-center">
            <p className="text-large text-main  mr-auto">Delivery</p>
            <h6 className="text-[#008000]">Free</h6>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-10 py-6">
        <div className="flex items-center">
          <h5 className="text-main mr-auto">Total Price</h5>
          <h3 className="text-main">
           {productsCart?.data?.totalCartPrice}
          </h3>
        </div>
        <Link to={'/cart/checkout'}>
        <button className="full-button">Checkout</button>
        </Link>
      </div>
    </div>
  );
}
