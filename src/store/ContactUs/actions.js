import {
  POST_CONTACT,
  POST_CONTACT_SUCCESS,
  POST_CONTACT_FAILURE,
} from "./actionTypes";

export const postContact = (data) => ({
  type: POST_CONTACT,
  payload: data,
});

export const postContactSuccess = (payload) => ({
  type: POST_CONTACT_SUCCESS,
  payload,
});

export const postContactFailure = (error) => ({
  type: POST_CONTACT_FAILURE,
  error,
});

//======== about page data
