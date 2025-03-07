import {
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_SUCCESS,
  GET_ALL_BRANDS_FAILURE,
} from "./actionTypes";
const initialState = {
  loading: false,
  brands: [],
  error: null,
};

const brandsRed = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return { ...state, loading: true, error: null };
    case GET_ALL_BRANDS_SUCCESS:
      return { ...state, brands: action.payload, loading: false };
    case GET_ALL_BRANDS_FAILURE:
      return { ...state, loading: false, error: action.payload };
      default:
        return state;  
  }
};
export default brandsRed;
