import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_BY_CATEGORY_FAILURE,
  GET_PRODUCT_BY_BRAND,
  GET_PRODUCT_BY_BRAND_SUCCESS,
  GET_PRODUCT_BY_BRAND_FAILURE,
} from "./actionTypes";

export const getAllproducts = (
  limit,
  page,
  search,
  catQuery,
  brandQuery,
  priceFrom,
  priceTo,
  sort
) => ({
  type: GET_ALL_PRODUCTS,
  payload: {
    limit,
    page,
    search,
    catQuery,
    brandQuery,
    priceFrom,
    priceTo,
    sort,
  },
});
export const getAllproductsSuccess = (payload) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload,
});
export const getAllproductsFailure = (payload) => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload,
});

//================== GET SINGLE PRODUCT

export const getSingleProd = (productId) => ({
  type: GET_SINGLE_PRODUCT,
  payload: { productId },
});
export const getSingleProdSuccess = (payload) => ({
  type: GET_SINGLE_PRODUCT_SUCCESS,
  payload,
});
export const getSingleProdFailure = (payload) => ({
  type: GET_SINGLE_PRODUCT_FAILURE,
  payload,
});

//================== GET PRODUCT BY CATEGORY

export const getProdByCategory = (catId) => ({
  type: GET_PRODUCT_BY_CATEGORY,
  payload: catId,
});
export const getProdByCategorySuccess = (payload) => ({
  type: GET_PRODUCT_BY_CATEGORY_SUCCESS,
  payload,
});
export const getProdByCategoryFailure = (payload) => ({
  type: GET_PRODUCT_BY_CATEGORY_FAILURE,
  payload,
});

//================== GET PRODUCT BY BRAND

export const getProdByBrand = (brandId) => ({
  type: GET_PRODUCT_BY_BRAND,
  payload: brandId,
});
export const getProdByBrandSuccess = (payload) => ({
  type: GET_PRODUCT_BY_BRAND_SUCCESS,
  payload,
});
export const getProdByBrandFailure = (payload) => ({
  type: GET_PRODUCT_BY_BRAND_FAILURE,
  payload,
});
