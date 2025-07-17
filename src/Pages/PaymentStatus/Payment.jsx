import paymentStatus from "../../../public/svgs/payment-status.svg";
const Payment = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[80vh] text-center">
          <Seo currentPage={'Payment Status'}/>
      <img
        src={paymentStatus}
        alt="payment status"
        className="w-[150px] h-[150px]"
      />
      <h1 className="text-[28px] max-sm:text-[18px] font-bold text-[#a9afc3]">
        Thank you. Your order has been received.
      </h1>
      <p className="text-sm text-[#454a4d] text-center max-w-[50%]">
        Thank you for your order! Your order is being processed and will be
        completed within 3-6 hours. You will receive an email confirmation when
        your order is complete.
      </p>
      <div>
        <button className="py-4 px-6 text-sm text-[#a9afc3] bg-[#ed1d24] rounded-full hover:bg-[#ed1d24] max-sm:px-2 max-sm:py-2">
          Return to Homepage
        </button>
        <button className="py-4 px-6 text-sm text-[#a9afc3] border rounded-full  ml-4 max-sm:px-2 max-sm:py-2">
          View invoice
        </button>
      </div>
    </div>
  );
};

export default Payment;
