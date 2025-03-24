import {
  POST_SIGNUP,
  POST_SIGNUP_FAILURE,
  POST_SIGNUP_SUCCES,
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_FORGET_PASSWORD,
  POST_FORGET_PASSWORD_SUCCESS,
  POST_FORGET_PASSWORD_FAILURE,
  POST_VERIFIY_CODE,
  POST_VERIFIY_CODE_SUCCESS,
  POST_VERIFIY_CODE_FAILURE,
  POST_RESET_PASSWORD,
  POST_RESET_PASSWORD_SUCCESS,
  POST_RESET_PASSWORD_FAILURE,
} from "./actionTypes";

const initialState = {
  signupData: [],
  loginData: [],
  forgetData: [],
  verifiyData: [],
  resetData: [],
  loading: false,
  error: null,
};

const authRed = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNUP:
      return { ...state, loading: true, error: null };
    case POST_SIGNUP_SUCCES:
      return { ...state, signupData: action.payload, loading: false };
    case POST_SIGNUP_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case POST_LOGIN:
      return { ...state, loading: true, error: null };
    case POST_LOGIN_SUCCESS:
      return { ...state, loginData: action.payload, loading: false };
    case POST_LOGIN_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case POST_FORGET_PASSWORD:
      return { ...state, loading: true, error: null };
    case POST_FORGET_PASSWORD_SUCCESS:
      return { ...state, forgetData: action.payload, loading: false };
    case POST_FORGET_PASSWORD_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case POST_VERIFIY_CODE:
      return { ...state, loading: true, error: null };
    case POST_VERIFIY_CODE_SUCCESS:
      return { ...state, verifiyData: action.payload, loading: false };
    case POST_VERIFIY_CODE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case POST_RESET_PASSWORD:
      return { ...state, loading: true, error: null };
    case POST_RESET_PASSWORD_SUCCESS:
      return { ...state, resetData: action.payload, loading: false };
    case POST_RESET_PASSWORD_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default authRed;
