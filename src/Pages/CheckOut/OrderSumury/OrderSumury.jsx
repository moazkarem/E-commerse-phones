import img1 from "../../../../public/images/boat110-1.png";
const OrderSumury = () => {
  return (
    <>
      <div className="mb-4 bg-[#161819] p-5 rounded-[12px]">
        <h2 className="text-[#a9afc3] mb-8">Checkout summary</h2>
        <div className="flex justify-between items-center gap-2 cursor-pointer mb-4">
          <img
            src={img1}
            alt="product image"
            className="w-24 h-24 rounded-[12px] p-1 object-cover border "
          />
          <div className="flex flex-col gap-1">
            <h4 className="text-md line-clamp-1 text-[#596268]">
              Product Name{" "}
            </h4>
            <p className="text-md text-[#454a4d]"> $123.00</p>
          </div>
          <h3 className="text-sm  text-[#596268]">3</h3>
          <h3 className="text-sm  text-[#ed1d24]">300$</h3>
        </div>
        <div className="flex justify-between items-center gap-2 cursor-pointer mb-4">
          <img
            src={img1}
            alt="product image"
            className="w-24 h-24 rounded-[12px] p-1 object-cover border "
          />
          <div className="flex flex-col gap-1">
            <h4 className="text-md line-clamp-1 text-[#596268]">
              Product Name{" "}
            </h4>
            <p className="text-md text-[#454a4d]"> $123.00</p>
          </div>
          <h3 className="text-sm  text-[#596268]">3</h3>
          <h3 className="text-sm  text-[#ed1d24]">300$</h3>
        </div>
        <div className="flex justify-between items-center gap-2 cursor-pointer mb-4">
          <img
            src={img1}
            alt="product image"
            className="w-24 h-24 rounded-[12px] p-1 object-cover border "
          />
          <div className="flex flex-col gap-1">
            <h4 className="text-md line-clamp-1 text-[#596268]">
              Product Name{" "}
            </h4>
            <p className="text-md text-[#454a4d]"> $123.00</p>
          </div>
          <h3 className="text-sm  text-[#596268]">3</h3>
          <h3 className="text-sm  text-[#ed1d24]">300$</h3>
        </div>
      </div>
      <div className="bg-[#161819] p-5 rounded-[12px]">
        <div className="flex justify-between items-center gap-2 my-8">
          <h5 className="text-sm text-[#596268]">Subtotal</h5>
          <h5 className="text-sm  text-[#ed1d24]">$369.00</h5>
        </div>
        <div className="flex justify-between items-center gap-2 mb-8">
          <h5 className="text-sm text-[#596268]">Shipping</h5>
          <h5 className="text-sm  text-[#ed1d24]">$10.00</h5>
        </div>
        <div className="flex justify-between items-center gap-2 mb-8">
          <h5 className="text-sm text-[#596268]">Discount</h5>
          <h5 className="text-sm  text-[#ed1d24]">$10.00</h5>
        </div>
        <div className="flex justify-between items-center gap-2 mb-8">
          <h5 className="text-sm text-[#fff]">Total</h5>
          <h5 className="text-sm  text-[#ed1d24]">$10.00</h5>
        </div>
        <div className="">
          <button className="bg-[#ed1d24] w-full rounded-full h-[40px] text-white text-sm">
            Complete Order
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSumury;
