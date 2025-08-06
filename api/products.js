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
    `/api/v1/products?limit=${limit}&page=${page}&keyword=${
      search || ""
    }&${catQuery}&${brandQuery}&price[gte]=${priceFrom || 0}&price[lte]=${
      priceTo || 10000
    }&sort=${sort}`
  );
  // console.log(response?.data , 'from get products api')
  return response?.data;
};

//===================== GET SPECIFIC PRODUCT

export const getSingleProductApi = async (productId) => {
  const response = await server.get(`/api/v1/products/${productId}`);
  // console.log(response?.data);
  return response;
};

//===================== GET PRODUCT BY CATEGORY

export const getProductsApiByCategory = async (catId) => {
  const response = await server.get(`/api/v1/products?category[in][]=${catId}`);
  // console.log(response?.data, "from get products api by category");
  return response?.data;
};

//===================== GET PRODUCT BY BRAND

export const getProductsApiByBrand = async (brandId) => {
  const response = await server.get(`/api/v1/products?brand[in][]=${brandId}`);
  console.log(response?.data, "from get products api by brands");
  return response?.data;
};

