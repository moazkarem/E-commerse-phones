import {
  POST_CONTACT,
  POST_CONTACT_SUCCESS,
  POST_CONTACT_FAILURE,
} from "./actionTypes";

const initialState = {
  contactData: [],
  loading: false,
  error: null,
};

const contactRed = (state = initialState, action) => {
  switch (action.type) {
    case POST_CONTACT:
      return { ...state, loading: true, error: null };
    case POST_CONTACT_SUCCESS:
      return { ...state, contactData: action.payload, loading: false };
    case POST_CONTACT_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default contactRed;
