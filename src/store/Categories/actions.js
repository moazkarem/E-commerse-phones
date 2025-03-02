import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
} from "./actionTypes.js";

export const getAllCategories = () => ({
  type: GET_ALL_CATEGORIES,
});

export const getAllCategoriesSuccess = (payload) => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload
});

export const getAllCategoriesFailure = (payload) => ({
  type: GET_ALL_CATEGORIES_FAILURE,
  payload
});
