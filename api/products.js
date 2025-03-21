import server from "./server";

export const getProductsApi = async ({
  limit,
  page,
  search,
  catQuery,
  brandQuery,
  priceFrom,
  priceTo,
  sort,
}) => {
  const response = await server.get(
    `/api/v1/products?limit=${limit }&page=${page}&keyword=${
      search || ""
    }&${catQuery}&${brandQuery}&price[gte]=${priceFrom || 0 }&price[lte]=${priceTo||10000}&sort=${sort}`
  );
  // console.log(response?.data , 'from get products api')
  return response?.data;
};
