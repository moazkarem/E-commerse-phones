import server from "./server";

export const getReviewsApi = async ({ productId, limit, currentPage }) => {
  console.log(limit, currentPage);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.get(
    `/api/v1/products/${productId}/reviews?limit=${limit}&page=${currentPage}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(response.data, "get all revies api function");
  return response;
};

//===============ADD ALL REVIEWS
export const getAllReviewsApi = async () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.get("/api/v1/reviews", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response?.data, "from alll reviews ");
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
  // console.log(response, "del revies api function");
  return response;
};

//===============UPDATE REVIEW ON PRODUCT

export const updateProductReviewApi = async ({ data, productId }) => {
  // console.log(data , 'from api add fun');
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.data?.token;
  const response = await server.put(`/api/v1/reviews/${productId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response, "update revies api function");
  return response;
};
