import {
  CASH_CHECKOUT,
  CASH_CHECKOUT_SUCCESS,
  CASH_CHECKOUT_FAILURE,
  VISA_CHECKOUT,
  VISA_CHECKOUT_SUCCESS,
  VISA_CHECKOUT_FAILURE,
} from "./actionsType";

//=================   cash in delivery checkout

export const cashCheckoutActions = (payload) => ({
  type: CASH_CHECKOUT,
  payload,
});

export const cashCheckoutSuccessActions = (payload) => ({
  type: CASH_CHECKOUT_SUCCESS,
  payload,
});

export const cashCheckoutFailureActions = (payload) => ({
  type: CASH_CHECKOUT_FAILURE,
  payload,
});

//=================   visa checkout

export const visaCheckoutActions = (payload) => ({
  type: VISA_CHECKOUT,
  payload,
});

export const visaCheckoutSuccessActions = (payload) => ({
  type: VISA_CHECKOUT_SUCCESS,
  payload,
});

export const visaCheckoutFailureActions = (payload) => ({
  type: VISA_CHECKOUT_FAILURE,
  payload,
});
