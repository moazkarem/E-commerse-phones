import { put, call, takeLatest, fork, all } from "redux-saga/effects";
import {
  getAllproductsFailure,
  getAllproductsSuccess,
  getSingleProdFailure,
  getSingleProdSuccess,
} from "./actions";
import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT } from "./actionTypes";
import { getProductsApi, getSingleProductApi } from "../../../api/products";

function* getAllproductsSaga({ payload }) {
  const {
    limit,
    page,
    search,
    catQuery,
    brandQuery,
    priceFrom,
    priceTo,
    sort,
  } = payload;
  if (!navigator.onLine) {
    yield put(getAllproductsFailure("You Are Offline , Please Try Againe"));
  }
  try {
    const data = yield call(getProductsApi, {
      limit,
      page,
      search,
      catQuery,
      brandQuery,
      priceFrom,
      priceTo,
      sort,
    });
    yield put(getAllproductsSuccess(data));
  } catch (error) {
    yield put(getAllproductsFailure(error.message));
  }
}

function* productsWatcher() {
  yield takeLatest(GET_ALL_PRODUCTS, getAllproductsSaga);
}

//============================== GET SINGLE PRODUCT

function* getSingleProductSaga({ payload }) {
  const { productId } = payload;
  try {
    const whishData = yield call(getSingleProductApi, productId);
    yield put(getSingleProdSuccess(whishData));
  } catch (error) {
    yield put(getSingleProdFailure(error?.message));
  }
}

function* getSingleWatcher() {
  yield takeLatest(GET_SINGLE_PRODUCT, getSingleProductSaga);
}

function* productsSaga() {
  yield all([fork(productsWatcher), fork(getSingleWatcher)]);
}

export default productsSaga;
