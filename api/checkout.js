import server from "./server";

//====================================== CHECK OUT USING CASH
export const checkoutCashApi = async (payload) => {
  const { cartId, shippingAddress } = payload;
  console.log(shippingAddress , 'shipp')
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.data?.token;

  const response = await server.post(
    `/api/v1/orders/${cartId}`,
    {shippingAddress},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response?.data, "from checkout ");
  return response;
};
