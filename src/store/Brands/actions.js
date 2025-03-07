import {
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_SUCCESS,
  GET_ALL_BRANDS_FAILURE,
} from "./actionTypes";

export const getAllbrands = (limit , page) => ({
  type: GET_ALL_BRANDS,
  payload:{limit , page}
});

export const getAllBrandsSuccess = (payload) => ({
  type: GET_ALL_BRANDS_SUCCESS,
  payload,
});

export const getAllBrandsFailure = (payload) => ({
  type: GET_ALL_BRANDS_FAILURE,
  payload,
});
