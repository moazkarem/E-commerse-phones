import server from "./server";

export const getProductsApi = async () => {
  const response = await server.get("/api/v1/products");
  console.log(response?.data , 'from get products api')
  return response?.data
};
