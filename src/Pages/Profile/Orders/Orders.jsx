import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersActions } from "../../../store/orders/actions";
import { formatDate } from "../../../helpers/validDate";
import Loading from "../../../Components/Loading/Loading";
import NullScreen from "../../../Components/NullScreen/NullScreen";
const Orders = () => {
  const { getOrders, loading } = useSelector((state) => state.ordersRed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersActions());
  }, [dispatch]);

  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  return (
    <>
      {getOrders?.data?.length > 0 ? (
        <div className="overflow-x-auto ">
          <table className="w-full bg-[#161819] rounded-md overflow-hidden">
            <thead className="bg-[#111] text-[#fff]">
              <tr>
                <th className="text-left px-4 py-3 whitespace-nowrap">Code</th>
                <th className="text-left px-4 py-3 whitespace-nowrap">Date</th>
                <th className="text-left px-4 py-3 whitespace-nowrap">
                  Products
                </th>
                <th className="text-left px-4 py-3 whitespace-nowrap">
                  Shipping Price
                </th>
                <th className="text-left px-4 py-3 whitespace-nowrap">Total</th>
                <th className="text-left px-4 py-3 whitespace-nowrap">
                  Is Paid
                </th>
                <th className="text-left px-4 py-3 whitespace-nowrap">
                  Delivered
                </th>

                <th className="text-left px-4 py-3 whitespace-nowrap">
                  Payment Type
                </th>
              </tr>
            </thead>
            <tbody>
              {getOrders?.data?.map((order, index) => (
                <tr
                  key={order.code}
                  className={index % 2 === 0 ? "bg-[#161819]" : "bg-[#1e1f23]"}
                >
                  <td className="px-4 py-3 text-[#a9afc3]"># {index + 1}</td>
                  <td className="px-4 py-3 text-[#a9afc3] whitespace-nowrap">
                    {formatDate(order.createdAt)}
                  </td>
                  <td className="px-4 py-3 text-[#a9afc3] whitespace-nowrap">
                    {order?.cartItems?.length}
                  </td>
                  <td className="px-4 py-3 text-[#a9afc3] whitespace-nowrap">
                    {order?.shippingPrice} $
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#a9afc3]">
                    {order.totalOrderPrice} $
                  </td>
                  <td
                    className={`px-4 py-3 whitespace-nowrap ${
                      order?.isPaid ? "text-[#008000]" : "text-[#ed1d24]"
                    }`}
                  >
                    {order?.isPaid ? "Paided" : "Not Paid"}
                  </td>
                  <td className=" px-4 py-3 text-[#a9afc3]">
                    {order?.isDelivered ? (
                      <span className="bg-[#008000] text-white px-[6px] rounded-[8px]">
                        Delivered
                      </span>
                    ) : (
                      <span className="bg-[#ed1d24] text-white px-[6px] rounded-[8px]">
                        Pending
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-[#a9afc3] capitalize">
                    {order?.paymentMethodType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <NullScreen msg="Sorry, there are no orders now." />
        </div>
      )}
    </>
  );
};

export default Orders;
