import server from "./server";

export const getProductsApi = async ({ limit, page, search }) => {
  const response = await server.get(
    `/api/v1/products?limit=${limit || 10}&page=${page || 1}&keyword=${
      search || ""
    }`
  );
  // console.log(response?.data , 'from get products api')
  return response?.data;
};
