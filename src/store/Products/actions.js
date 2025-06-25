import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
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
