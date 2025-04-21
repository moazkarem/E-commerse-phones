import server from "./server";

//====================================== ADD PRODUCT TO CART
export const getProductsCartApi = async () => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.data?.token;
  const response = await server.get("/api/v1/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response?.data, "from get cart api function");
  return response?.data;
};

//====================================== ADD PRODUCT TO CART
export const addToCartApi = async () => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.data?.token;
  const response = await server.post(
    "/api/v1/cart",
    { data },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response?.data, "from add to cart api function");
  return response;
};

//====================================== DELETE FROM CART
export const delFromCartApi = async (productId) => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.data?.token;
  const response = await server.delete(
    `/api/v1/cart/${productId}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(response?.data, "from delete api function");
  return response;
};

//====================================== CLEAR ALL FROM  CART
export const clearCartApi = async () => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.data?.token;
  const response = await server.delete(`/api/v1/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response?.data, "from clear api function");
  return response;
};

//====================================== UPDATE CART CONATTY
export const updataCartContatyApi = async ({ selectedProduct, count }) => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.data?.token;
  const response = await server.put(
    `/api/v1/cart/${selectedProduct}`,
    { count },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(response?.data, "from update contaty");
  return response;
};
