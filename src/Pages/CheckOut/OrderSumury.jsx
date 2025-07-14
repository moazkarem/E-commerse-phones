import { images } from "./data";

import Loading from "../../Components/Loading/Loading";
const OrderSumury = ({ getCart, loading }) => {
  const productsCart = getCart?.data?.products;
  const renderProductCart = productsCart?.map(
    ({ _id, product, count, price }) => (
      <div
        key={_id}
        className="flex justify-between items-center gap-2 cursor-pointer mb-4"
      >
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt="product image"
          className="w-24 h-24 rounded-[12px] p-2 object-cover border "
        />
        <div className="flex flex-col gap-1">
          <h4 className="text-md line-clamp-1 text-[#a9afc3]">
            {product?.title.length > 15
              ? product?.title.slice(0, 15) + "..."
              : product?.title}
          </h4>
        </div>
        <h3 className="text-sm  text-[#a9afc3]">{count}</h3>
        <h3 className="text-sm  text-[#008000]">{price * count}$</h3>
      </div>
    )
  );

  //============================HANDEL LOADING
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  return (
    <>
      <div className="mb-4 bg-[#161819] p-5 rounded-[12px]">
        <h2 className="text-[#fff] mb-8">Checkout summary</h2>
        {renderProductCart}
      </div>
      <div className="bg-[#161819] p-5 rounded-[12px]">
        <div className="flex justify-between items-center gap-2 mb-8">
          <h5 className="text-sm text-[#fff]">Total</h5>
          <h5 className="text-sm  text-[#ed1d24]">
            {getCart?.data?.totalAfterDiscount ?getCart?.data?.totalAfterDiscount :getCart?.data?.totalCartPrice }
            $
          </h5>
        </div>
      </div>
    </>
  );
};

export default OrderSumury;
