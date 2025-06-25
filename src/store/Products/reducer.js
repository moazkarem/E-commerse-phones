import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
} from "./actionTypes";
const initialState = {
  loading: false,
  products: [],
  singleProduct:{},
  error: null,
};

const productsRed = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, loading: true, error: null };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case GET_ALL_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case GET_SINGLE_PRODUCT:
      return { ...state, loading: true, error: null };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, singleProduct: action.payload, loading: false };
    case GET_SINGLE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productsRed;
