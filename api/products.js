import server from "./server";

export const getProductsApi = async ({limit , page}) => {
  const response = await server.get(`/api/v1/products?limit=${limit}&page=${page}`);
  // console.log(response?.data , 'from get products api')
  return response?.data
};
