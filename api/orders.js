import server from "./server";

//====================================== GET ALL ORDERS DATA
export const getAllOrdersApi = async () => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.data?.token;
  const response = await server.get("/api/v1/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response, "from get orders api function");
  return response?.data;
};

//====================================== ADD ORDER
export const addOrderApi = async (cartId, data) => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.data?.token;

  const response = await server.post(
    `/api/v1/orders/${cartId}`,
    { shippingAddress: data },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
