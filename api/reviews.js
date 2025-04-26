import server from "./server";

export const getReviewsApi = async (productId) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.get(`/api/v1/products/${productId}/reviews`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response.data, "get all revies api function");
  return response;
};

//===============ADD REVIEW ON PRODUCT

export const addReviewsApi = async ({ data, productId }) => {
  // console.log(data , 'from api add fun');
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.post(
    `/api/v1/products/${productId}/reviews`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(response, "add all revies api function");
  return response;
};

//===============DELETE REVIEW ON PRODUCT

export const delProductReviewApi = async (productId) => {
  // console.log(data , 'from api add fun');
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.delete(`/api/v1/reviews/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response, "del revies api function");
  return response;
};
