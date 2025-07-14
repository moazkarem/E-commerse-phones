import toast from "react-hot-toast";
import { call, put, takeLatest, fork, all } from "redux-saga/effects";

import {
  cashCheckoutActions,
  cashCheckoutFailureActions,
  cashCheckoutSuccessActions,
  visaCheckoutFailureActions,
  visaCheckoutSuccessActions,
} from "./actions";
import { CASH_CHECKOUT, VISA_CHECKOUT } from "./actionsType";
import { checkoutCashApi, checkoutVisaApi } from "../../../api/checkout";

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

//====================== visa
function* visaCheckoutSaga({ payload }) {
  const { navigate } = payload;
  try {
    const ordersData = yield call(checkoutVisaApi, payload);
    console.log(ordersData, "my orders visa saga");
    yield put(visaCheckoutSuccessActions(ordersData));
    toast.success("The card order has been placed successfully.");
    // console.log(ordersData?.data?.session?.url, 'my url')
    setTimeout(() => {
      window.open(ordersData?.data?.session?.url)
    }, 1500);
  } catch (error) {
    yield put(visaCheckoutFailureActions(error.message));
    console.log(error?.message, "error saga");
  }
}

function* watchVisacheckoutSaga() {
  yield takeLatest(VISA_CHECKOUT, visaCheckoutSaga);
}

function* allCheckoutSaga() {
  yield all([fork(watchCashcheckoutSaga), fork(watchVisacheckoutSaga)]);
}

export default allCheckoutSaga;
