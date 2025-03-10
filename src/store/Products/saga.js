import { put, call, takeLatest, fork, all } from "redux-saga/effects";
import {
  getAllproducts,
  getAllproductsFailure,
  getAllproductsSuccess,
} from "./actions";
import { GET_ALL_PRODUCTS } from "./actionTypes";
import { getProductsApi } from "../../../api/products";

function* getAllproductsSaga() {
  if (!navigator.onLine) {
    yield put(getAllproductsFailure("You Are Offline , Please Try Againe"));
  }
  try {
    const data = yield call(getProductsApi);
    yield put(getAllproductsSuccess(data));
  } catch (error) {
    yield put(getAllproductsFailure(error));
  }
}

function* productsWatcher() {
  yield takeLatest(GET_ALL_PRODUCTS, getAllproductsSaga);
}

function* productsSaga() {
  yield all([fork(productsWatcher)]);
}

export default productsSaga;
