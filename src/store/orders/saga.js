import toast from "react-hot-toast";
import { call, put, takeLatest, fork, all } from "redux-saga/effects";

import {
  getAllOrdersFailureActions,
  getAllOrdersSuccessActions,
} from "./actions";

import { getAllOrdersApi } from "../../../api/orders";
import { GET_ALL_ORDERS } from "./actionsType";

function* getOrdersSaga() {
  try {
    const ordersData = yield call(getAllOrdersApi);
    yield put(getAllOrdersSuccessActions(ordersData));
  } catch (error) {
    yield put(getAllOrdersFailureActions(error.message));
  }
}

function* watchGetOrders() {
  yield takeLatest(GET_ALL_ORDERS, getOrdersSaga);
}

function* allOrdersSaga() {
  yield all([fork(watchGetOrders)]);
}

export default allOrdersSaga;
