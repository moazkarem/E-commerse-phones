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

const initialState = {
  loading: false,
  getReviews: [],
  addReview: [],
  delReview: [],
  updateReview: [],
  error: null,
};

const reviewsRed = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return { ...state, loading: true, error: null };
    case GET_ALL_REVIEWS_SUCCESS:
      return { ...state, getReviews: action.payload, loading: false };
    case GET_ALL_REVIEWS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_PRODUCT_REVIEW:
      return { ...state, loading: true, error: null };
    case ADD_PRODUCT_REVIEW_SUCCESS:
      return { ...state, addReview: action.payload, loading: false };
    case ADD_PRODUCT_REVIEW_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_PRODUCT_REVIEW:
      return { ...state, loading: true, error: null };
    case DELETE_PRODUCT_REVIEW_SUCCESS:
      return { ...state, delReview: action.payload, loading: false };
    case DELETE_PRODUCT_REVIEW_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_PRODUCT_REVIEW:
      return { ...state, loading: true, error: null };
    case UPDATE_PRODUCT_REVIEW_SUCCESS:
      return { ...state, updateReview: action.payload, loading: false };
    case UPDATE_PRODUCT_REVIEW_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default reviewsRed;
