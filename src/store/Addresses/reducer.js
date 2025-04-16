import {
  GET_ALL_ADDREESSES,
  GET_ALL_ADDREESSES_FAILURE,
  GET_ALL_ADDREESSES_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  getAddresses: [],
  error: null,
};

const addressesRed = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ADDREESSES:
      return { ...state, loading: true, error: null };
    case GET_ALL_ADDREESSES_SUCCESS:
      return { ...state, getAddresses: action.payload, loading: false };
    case GET_ALL_ADDREESSES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default addressesRed;
