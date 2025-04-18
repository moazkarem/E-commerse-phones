import {
  ADD_ADDREESSE,
  ADD_ADDREESSE_FAILURE,
  ADD_ADDREESSE_SUCCESS,
  DEL_ADDREESSE,
  DEL_ADDREESSE_FAILURE,
  DEL_ADDREESSE_SUCCESS,
  EDIT_ADDREESSE,
  EDIT_ADDREESSE_FAILURE,
  EDIT_ADDREESSE_SUCCESS,
  GET_ALL_ADDREESSES,
  GET_ALL_ADDREESSES_FAILURE,
  GET_ALL_ADDREESSES_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  getAddresses: [],
  editAddress: [],
  addAddress: [],
  delAddress: [],
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

    case EDIT_ADDREESSE:
      return { ...state, loading: true, error: null };
    case EDIT_ADDREESSE_SUCCESS:
      return { ...state, editAddress: action.payload, loading: false };
    case EDIT_ADDREESSE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_ADDREESSE:
      return { ...state, loading: true, error: null };
    case ADD_ADDREESSE_SUCCESS:
      return { ...state, addAddress: action.payload, loading: false };
    case ADD_ADDREESSE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DEL_ADDREESSE:
      return { ...state, loading: true, error: null };
    case DEL_ADDREESSE_SUCCESS:
      return { ...state, delAddress: action.payload, loading: false };
    case DEL_ADDREESSE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default addressesRed;
