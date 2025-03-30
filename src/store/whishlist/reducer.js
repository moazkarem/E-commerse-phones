import {
  ADD_TO_WHISHLIST,
  ADD_TO_WHISHLIST_SUCCESS,
  DELETE_FROM_WHISHLIST,
  DELETE_FROM_WHISHLIST_FAILURE,
  DELETE_FROM_WHISHLIST_SUCCESS,
  GET_WHISHLIST,
  GET_WHISHLIST_FAILURE,
  GET_WHISHLIST_SUCCESS,
} from "./actionTypes";

const initialState = {
  whishlist: [],
  delWhishlist: [],
  whishlistData: [],
  loading: false,
  error: null,
};

const whishlistRed = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WHISHLIST:
      return { ...state, loading: true, error: null };
    case ADD_TO_WHISHLIST_SUCCESS:
      return { ...state, whishlist: action.payload, loading: false };
    case ADD_TO_WHISHLIST:
      return { ...state, error: action.payload, loading: false };
    case DELETE_FROM_WHISHLIST:
      return { ...state, loading: true, error: null };
    case DELETE_FROM_WHISHLIST_SUCCESS:
      return { ...state, delWhishlist: action.payload, loading: false };
    case DELETE_FROM_WHISHLIST_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case GET_WHISHLIST:
      return { ...state, loading: true, error: null };
    case GET_WHISHLIST_SUCCESS:
      return { ...state, whishlistData: action.payload, loading: false };
    case GET_WHISHLIST_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default whishlistRed;
