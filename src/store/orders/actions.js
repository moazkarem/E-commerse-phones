import {
  GET_ALL_ORDERS,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILURE,
} from "./actionsType";

export const getAllOrdersActions = () => ({
  type: GET_ALL_ORDERS,

});

export const getAllOrdersSuccessActions = (payload) => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload,
});

export const getAllOrdersFailureActions = (payload) => ({
  type: GET_ALL_ORDERS_FAILURE,
  payload,
});
