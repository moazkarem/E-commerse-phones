import {
  CASH_CHECKOUT,
  CASH_CHECKOUT_SUCCESS,
  CASH_CHECKOUT_FAILURE,
} from "./actionsType";

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
