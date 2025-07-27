import {
  GET_BLOGS_DATA,
  GET_BLOGS_DATA_SUCCESS,
  GET_BLOGS_DATA_FAILURE,
} from "./actionTypes";

const initialState = {
  blogsData: [],
  loading: false,
  error: null,
};

const blogsRed = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS_DATA:
      return { ...state, loading: true, error: null };
    case GET_BLOGS_DATA_SUCCESS:
      return { ...state, blogsData: action.payload, loading: false };
    case GET_BLOGS_DATA_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default blogsRed;
