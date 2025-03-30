import {
  ADD_TO_WHISHLIST,
  ADD_TO_WHISHLIST_FAILURE,
  ADD_TO_WHISHLIST_SUCCESS,
  DELETE_FROM_WHISHLIST,
  DELETE_FROM_WHISHLIST_SUCCESS,
  DELETE_FROM_WHISHLIST_FAILURE,
  GET_WHISHLIST,
  GET_WHISHLIST_SUCCESS,
  GET_WHISHLIST_FAILURE,
} from "./actionTypes";

export const addToWhishlist = (productId) => ({
  type: ADD_TO_WHISHLIST,
  payload: { productId },
});

export const addToWhishlistSuccess = (payload) => ({
  type: ADD_TO_WHISHLIST_SUCCESS,
  payload,
});

export const addToWhishlistFailure = (payload) => ({
  type: ADD_TO_WHISHLIST_FAILURE,
  payload,
});

//================================ DELETE WHISHLIST ITEM==========

export const deleteFromWhishlist = (productId) => ({
  type: DELETE_FROM_WHISHLIST,
  payload: { productId },
});

export const deleteFromWhishlistSuccess = (payload) => ({
  type: DELETE_FROM_WHISHLIST_SUCCESS,
  payload,
});

export const deleteFromWhishlistFailure = (payload) => ({
  type: DELETE_FROM_WHISHLIST_FAILURE,
  payload,
});

//================================ DELETE WHISHLIST ITEM==========

export const getWhishlist = () => ({
  type: GET_WHISHLIST,
});

export const getWhishlistSuccess = (payload) => ({
  type: GET_WHISHLIST_SUCCESS,
  payload,
});

export const getWhishlistFailure = (payload) => ({
  type: GET_WHISHLIST_FAILURE,
  payload,
});
