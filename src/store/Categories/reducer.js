import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
} from "./actionTypes";
const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesRed = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state, loading: true, error: null };
    case GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, loading: false };
    case GET_ALL_CATEGORIES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
export default categoriesRed
