import {
  GET_PRODUCTS_CART,
  GET_PRODUCTS_CART_FAILURE,
  GET_PRODUCTS_CART_SUCCESS,
  ADD_PRODUCTS_CART,
  ADD_PRODUCTS_CART_SUCCESS,
  ADD_PRODUCTS_CART_FAILURE,
  DELETE_PRODUCT_CART,
  DELETE_PRODUCT_CART_SUCCESS,
  DELETE_PRODUCT_CART_FAILURE,
  UPDATE_PRODUCT_CONTATY,
  UPDATE_PRODUCT_CONTATY_SUCCESS,
  UPDATE_PRODUCT_CONTATY_FAILURE,
  CLEAR_PRODUCT_CART,
  CLEAR_PRODUCT_CART_SUCCESS,
  CLEAR_PRODUCT_CART_FAILURE,
} from "./actionTypes";

export const getCartAction = () => ({
  type: GET_PRODUCTS_CART,

});

export const getCartActionSuccess = (payload) => ({
  type: GET_PRODUCTS_CART_SUCCESS,
  payload,
});

export const getCartActionFailure = (payload) => ({
  type: GET_PRODUCTS_CART_FAILURE,
  payload,
});

//==================================

export const addtCartAction = (payload) => ({
  type: ADD_PRODUCTS_CART,
  payload,
});

export const addCartActionSuccess = (payload) => ({
  type: ADD_PRODUCTS_CART_SUCCESS,
  payload,
});

export const addCartActionFailure = (payload) => ({
  type: ADD_PRODUCTS_CART_FAILURE,
  payload,
});

//==================================

export const delCartAction = (payload) => ({
  type: DELETE_PRODUCT_CART,
  payload,
});

export const delCartActionSuccess = (payload) => ({
  type: DELETE_PRODUCT_CART_SUCCESS,
  payload,
});

export const delCartActionFailure = (payload) => ({
  type: DELETE_PRODUCT_CART_FAILURE,
  payload,
});

//==================================

export const clearCartAction = (payload) => ({
  type: CLEAR_PRODUCT_CART,
  payload,
});

export const clearCartActionSuccess = (payload) => ({
  type: CLEAR_PRODUCT_CART_SUCCESS,
  payload,
});

export const clearCartActionFailure = (payload) => ({
  type: CLEAR_PRODUCT_CART_FAILURE,
  payload,
});

//==================================

export const updateCartAction = (payload) => ({
  type: UPDATE_PRODUCT_CONTATY,
  payload,
});

export const updateCartActionSuccess = (payload) => ({
  type: UPDATE_PRODUCT_CONTATY_SUCCESS,
  payload,
});

export const updateCartActionFailure = (payload) => ({
  type: UPDATE_PRODUCT_CONTATY_FAILURE,
  payload,
});
