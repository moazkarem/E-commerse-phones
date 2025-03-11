import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
} from "./actionTypes";

export const getAllproducts = (limit , page , search) => ({
  type: GET_ALL_PRODUCTS,
  payload:{limit , page , search}
});
export const getAllproductsSuccess = (payload) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload,
});
export const getAllproductsFailure = (payload) => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload,
});
