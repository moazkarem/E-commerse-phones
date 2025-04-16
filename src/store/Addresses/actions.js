import {
  GET_ALL_ADDREESSES,
  GET_ALL_ADDREESSES_SUCCESS,
  GET_ALL_ADDREESSES_FAILURE,
} from "./actionTypes.js";

export const getAllAddresses = (payload) => ({
  type: GET_ALL_ADDREESSES,
  payload,
});

export const getAllAddressesSuccess = (payload) => ({
  type: GET_ALL_ADDREESSES_SUCCESS,
  payload,
});

export const getAllAddressesFailure = (payload) => ({
  type: GET_ALL_ADDREESSES_FAILURE,
  payload,
});
