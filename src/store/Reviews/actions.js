import {
  GET_ALL_REVIEWS,
  GET_ALL_REVIEWS_SUCCESS,
  GET_ALL_REVIEWS_FAILURE,
  ADD_PRODUCT_REVIEW,
  ADD_PRODUCT_REVIEW_SUCCESS,
  ADD_PRODUCT_REVIEW_FAILURE,
  DELETE_PRODUCT_REVIEW,
  DELETE_PRODUCT_REVIEW_SUCCESS,
  DELETE_PRODUCT_REVIEW_FAILURE,
  UPDATE_PRODUCT_REVIEW,
  UPDATE_PRODUCT_REVIEW_SUCCESS,
  UPDATE_PRODUCT_REVIEW_FAILURE,
} from "./actionTypes";

//=====================GET ALL REVIEWS
export const getAllReviewsAction = (productId) => ({
  type: GET_ALL_REVIEWS,
  payload: { productId },
});

export const getAllReviewsActionSuccess = (payload) => ({
  type: GET_ALL_REVIEWS_SUCCESS,
  payload,
});

export const getAllReviewsActionFailure = (payload) => ({
  type: GET_ALL_REVIEWS_FAILURE,
  payload,
});

//===================== ADD REVIEW ON PRODUCT
export const addProductReviewAction = (data, productId) => ({
  type: ADD_PRODUCT_REVIEW,
  payload: { data, productId },
});

export const addProductReviewSuccess = (payload) => ({
  type: ADD_PRODUCT_REVIEW_SUCCESS,
  payload,
});

export const addProductReviewFailure = (payload) => ({
  type: ADD_PRODUCT_REVIEW_FAILURE,
  payload,
});

//===================== DEL REVIEW ON PRODUCT
export const delProductReviewAction = (productId) => ({
  type: DELETE_PRODUCT_REVIEW,
  payload: { productId },
});

export const delProductReviewSuccess = (payload) => ({
  type: DELETE_PRODUCT_REVIEW_SUCCESS,
  payload,
});

export const delProductReviewFailure = (payload) => ({
  type: DELETE_PRODUCT_REVIEW_FAILURE,
  payload,
});

//===================== UPDATE REVIEW ON PRODUCT
export const updateProductReviewAction = (data , productId) => ({
  type: UPDATE_PRODUCT_REVIEW,
  payload: {data , productId },
});

export const updateProductReviewSuccess = (payload) => ({
  type: UPDATE_PRODUCT_REVIEW_SUCCESS,
  payload,
});

export const updateProductReviewFailure = (payload) => ({
  type: UPDATE_PRODUCT_REVIEW_FAILURE,
  payload,
});
