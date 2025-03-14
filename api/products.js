import server from "./server";

export const getProductsApi = async ({ limit, page, search, catQuery }) => {
  console.log(catQuery , 'from pro api')
  const response = await server.get(
    `/api/v1/products?limit=${limit || 10}&page=${page || 1}&keyword=${
      search || ""
    }&${catQuery}`
  );
  // console.log(response?.data , 'from get products api')
  return response?.data;
};
