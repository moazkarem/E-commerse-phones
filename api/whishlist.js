import server from "./server";

export const addToWhishlistApi = async ({ productId }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.post(
    "/api/v1/wishlist",
    { productId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(response?.data , 'from add whish api ')
  return response?.data;
};

export const deleteFromWhishlistApi = async ({ productId }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.delete(`/api/v1/wishlist/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response?.data , 'from delete whish api ')
  return response;
};

export const getWhishlistApi = async () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.get(`/api/v1/wishlist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response?.data , 'from get whish api ')
  return response?.data;
};
