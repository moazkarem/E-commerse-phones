import {
  GET_ALL_ADDREESSES,
  GET_ALL_ADDREESSES_SUCCESS,
  GET_ALL_ADDREESSES_FAILURE,
  EDIT_ADDREESSE,
  EDIT_ADDREESSE_SUCCESS,
  EDIT_ADDREESSE_FAILURE,
  ADD_ADDREESSE,
  ADD_ADDREESSE_SUCCESS,
  ADD_ADDREESSE_FAILURE,
  DEL_ADDREESSE,
  DEL_ADDREESSE_SUCCESS,
  DEL_ADDREESSE_FAILURE,
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

//========================================

export const editAddressAction = (address, selectedAddress) => ({
  type: EDIT_ADDREESSE,
  payload: { address, selectedAddress },
});

export const editAddressActionSuccess = (payload) => ({
  type: EDIT_ADDREESSE_SUCCESS,
  payload,
});

export const editAddressActionFailure = (payload) => ({
  type: EDIT_ADDREESSE_FAILURE,
  payload,
});

//========================================

export const addAddressAction = (address) => ({
  type: ADD_ADDREESSE,
  payload: { address },
});

export const addAddressActionSuccess = (payload) => ({
  type: ADD_ADDREESSE_SUCCESS,
  payload,
});

export const addAddressActionFailure = (payload) => ({
  type: ADD_ADDREESSE_FAILURE,
  payload,
});

//========================================

export const delAddressAction = (address) => ({
  type: DEL_ADDREESSE,
  payload: { address },
});

export const delAddressActionSuccess = (payload) => ({
  type: DEL_ADDREESSE_SUCCESS,
  payload,
});

export const delAddressActionFailure = (payload) => ({
  type: DEL_ADDREESSE_FAILURE,
  payload,
});
