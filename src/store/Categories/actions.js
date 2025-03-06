import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
} from "./actionTypes.js";

export const getAllCategories = (limit , page) => ({
  type: GET_ALL_CATEGORIES,
  payload:{limit , page}
});

export const getAllCategoriesSuccess = (payload) => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload
});

export const getAllCategoriesFailure = (payload) => ({
  type: GET_ALL_CATEGORIES_FAILURE,
  payload
});
