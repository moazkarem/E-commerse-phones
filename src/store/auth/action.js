import {
  POST_SIGNUP,
  POST_SIGNUP_SUCCES,
  POST_SIGNUP_FAILURE,
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_FORGET_PASSWORD,
  POST_FORGET_PASSWORD_SUCCESS,
  POST_FORGET_PASSWORD_FAILURE,
} from "./actionTypes";
//================================ POST SIGN UP ==========
export const postSignUp = (data, navigate) => ({
  type: POST_SIGNUP,
  payload: { data, navigate },
});

export const postSignUpSuccess = (payload) => ({
  type: POST_SIGNUP_SUCCES,
  payload,
});

export const postSignUpFailure = (payload) => ({
  type: POST_SIGNUP_FAILURE,
  payload,
});
//================================ POST LOGIN ==========
export const postLogin = (data, navigate) => ({
  type: POST_LOGIN,
  payload: { data, navigate },
});

export const postLoginSuccess = (payload) => ({
  type: POST_LOGIN_SUCCESS,
  payload,
});

export const postLoginFailure = (payload) => ({
  type: POST_LOGIN_FAILURE,
  payload,
});
//================================ POST FORGET PASSWORD ==========
export const postForgetPassword = (data, navigate) => ({
  type: POST_FORGET_PASSWORD,
  payload: { data, navigate },
});
export const postForgetPasswordSuccess = (payload) => ({
  type: POST_FORGET_PASSWORD_SUCCESS,
  payload,
});
export const postForgetPasswordFailure = (payload) => ({
  type: POST_FORGET_PASSWORD_FAILURE,
  payload,
});
