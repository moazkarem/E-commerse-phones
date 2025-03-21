import {
  POST_SIGNUP,
  POST_SIGNUP_FAILURE,
  POST_SIGNUP_SUCCES,
} from "./actionTypes";

const initialState = {
  signupData: [],
  loading: false,
  error: null,
};

const signUpRed = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNUP:
      return { ...state, loading: true, error: null };
    case POST_SIGNUP_SUCCES:
      return { ...state, signupData: action.payload, loading: false };
    case POST_SIGNUP_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default signUpRed;
