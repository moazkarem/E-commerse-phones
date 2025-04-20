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

const initialState = {
  loading: false,
  getCart: [],
  addCart: [],
  delCart: [],
  updateCart: [],
  clearCart: [],
  error: null,
};

const cartRed = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_CART:
      return { ...state, loading: true, error: null };
    case GET_PRODUCTS_CART_SUCCESS:
      return { ...state, getCart: action.payload, loading: false };
    case GET_PRODUCTS_CART_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case ADD_PRODUCTS_CART:
      return { ...state, loading: true, error: null };
    case ADD_PRODUCTS_CART_SUCCESS:
      return { ...state, addCart: action.payload, loading: false };
    case ADD_PRODUCTS_CART_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case DELETE_PRODUCT_CART:
      return { ...state, loading: true, error: null };
    case DELETE_PRODUCT_CART_SUCCESS:
      return { ...state, delCart: action.payload, loading: false };
    case DELETE_PRODUCT_CART_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case UPDATE_PRODUCT_CONTATY:
      return { ...state, loading: true, error: null };
    case UPDATE_PRODUCT_CONTATY_SUCCESS:
      return { ...state, updateCart: action.payload, loading: false };
    case UPDATE_PRODUCT_CONTATY_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case CLEAR_PRODUCT_CART:
      return { ...state, loading: true, error: null };
    case CLEAR_PRODUCT_CART_SUCCESS:
      return { ...state, clearCart: action.payload, loading: false };
    case CLEAR_PRODUCT_CART_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default cartRed;
