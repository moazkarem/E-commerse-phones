import toast from "react-hot-toast";
import { call, put, takeLatest, fork, all } from "redux-saga/effects";

import {
  cashCheckoutActions,
  cashCheckoutFailureActions,
  cashCheckoutSuccessActions,
} from "./actions";
import { CASH_CHECKOUT } from "./actionsType";
import { checkoutCashApi } from "../../../api/checkout";

function* cashcheckoutSaga({ payload }) {
  const { navigate } = payload;
  try {
    const ordersData = yield call(checkoutCashApi, payload);
    yield put(cashCheckoutSuccessActions(ordersData));
    toast.success("The order has been placed successfully.");
    setTimeout(() => {
      navigate("/profile/orders");
    }, 1500);
  } catch (error) {
    yield put(cashCheckoutFailureActions(error.message));
  }
}

function* watchCashcheckoutSaga() {
  yield takeLatest(CASH_CHECKOUT, cashcheckoutSaga);
}

function* allCheckoutSaga() {
  yield all([fork(watchCashcheckoutSaga)]);
}

export default allCheckoutSaga;
