import server from "./server";

//====================================== CHECK OUT USING CASH
export const checkoutCashApi = async (payload) => {
  const { cartId, shippingAddress } = payload;
  console.log(shippingAddress, "shipp");
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.data?.token;

  const response = await server.post(
    `/api/v1/orders/${cartId}`,
    { shippingAddress },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response?.data, "from checkout cash");
  return response;
};

//====================================== CHECK OUT USING VISA
export const checkoutVisaApi = async (payload) => {
  const { cartId } = payload;
  console.log(cartId, "my visssss");
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.data?.token;
  const response = await server.get(
    `/api/v1/orders/checkout-session/${cartId}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(response, "from checkout  visa");
  return response;
};

// https://checkout.stripe.com/c/pay/cs_test_a1K8vb7gRst0eAjK1GAynSP38T2pqJ7Odc5OiUn2deH1fuIfNQpLBrthWN#fidkdWxOYHwnPyd1blpxYHZxWjA0V29JbW1BTH02bTYwd2liMmtNRmtyNHJQZkNIPTY9THEwcWFDdEMwXGliTH1LQjVcbE9xf05HYXFddzdqPVNuZDNTZE9ra09IYUN%2FRkEyUjc8VEt1SVRGNTVsXTFUXXViUicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl
