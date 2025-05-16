import {
  CASH_CHECKOUT,
  CASH_CHECKOUT_SUCCESS,
  CASH_CHECKOUT_FAILURE,
} from "./actionsType";

const initialState = {
  loading: false,
  cashCheckout: [],
  error: null,
};

const checkoutRed = (state = initialState, action) => {
  switch (action.type) {
    case CASH_CHECKOUT:
      return { ...state, loading: true, error: null };
    case CASH_CHECKOUT_SUCCESS:
      return { ...state, cashCheckout: action.payload, loading: false };
    case CASH_CHECKOUT_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default checkoutRed;
