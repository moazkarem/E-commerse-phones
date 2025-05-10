import {
  GET_ALL_ORDERS,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILURE,
} from "./actionsType";

const initialState = {
  loading: false,
  getOrders: [],
  error: null,
};

const ordersRed = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return { ...state, loading: true, error: null };
    case GET_ALL_ORDERS_SUCCESS:
      return { ...state, getOrders: action.payload, loading: false };
    case GET_ALL_ORDERS_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default ordersRed;
