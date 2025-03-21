import {
  POST_SIGNUP,
  POST_SIGNUP_SUCCES,
  POST_SIGNUP_FAILURE,
} from "./actionTypes";

export const postSignUp = (data, navigate) => ({
  type: POST_SIGNUP,
  payload: { data, navigate }
});

export const postSignUpSuccess = (payload) => ({
  type: POST_SIGNUP_SUCCES,
  payload,
});

export const postSignUpFailure = (payload) => ({
  type: POST_SIGNUP_FAILURE,
  payload,
});
