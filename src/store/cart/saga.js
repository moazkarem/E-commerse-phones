import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import {
  addToCartApi,
  clearCartApi,
  delFromCartApi,
  getProductsCartApi,
  updataCartContatyApi,
} from "../../../api/cart";
import {
  addCartActionFailure,
  addCartActionSuccess,
  clearCartActionFailure,
  clearCartActionSuccess,
  delCartActionFailure,
  delCartActionSuccess,
  getCartActionFailure,
  getCartActionSuccess,
  updateCartActionFailure,
  updateCartActionSuccess,
} from "./actions";
import {
  ADD_PRODUCTS_CART,
  CLEAR_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  GET_PRODUCTS_CART,
  UPDATE_PRODUCT_CONTATY,
} from "./actionTypes";

function* getCartSaga() {
  try {
    const cartData = yield call(getProductsCartApi);
    yield put(getCartActionSuccess(cartData));
  } catch (error) {
    yield put(getCartActionFailure(error.message));
  }
}

function* watchGetCart() {
  yield takeLatest(GET_PRODUCTS_CART, getCartSaga);
}

//================ ADD CART SAGA
function* addCartSaga() {
  try {
    const cartData = yield call(addToCartApi);
    yield put(addCartActionSuccess(cartData));
  } catch (error) {
    yield put(addCartActionFailure(error.message));
  }
}

function* watchAddCart() {
  yield takeLatest(ADD_PRODUCTS_CART, addCartSaga);
}

//================ DEL CART SAGA
function* delCartSaga() {
  try {
    const cartData = yield call(delFromCartApi);
    yield put(delCartActionSuccess(cartData));
  } catch (error) {
    yield put(delCartActionFailure(error.message));
  }
}

function* watchDelCart() {
  yield takeLatest(DELETE_PRODUCT_CART, delCartSaga);
}

//================ CLEAR CART SAGA
function* clearCartSaga() {
  try {
    const cartData = yield call(clearCartApi);
    yield put(clearCartActionSuccess(cartData));
  } catch (error) {
    yield put(clearCartActionFailure(error.message));
  }
}

function* watchClearCart() {
  yield takeLatest(CLEAR_PRODUCT_CART, clearCartSaga);
}

//================ UPDATE  CART SAGA
function* updateCartSaga() {
  try {
    const cartData = yield call(updataCartContatyApi);
    yield put(updateCartActionSuccess(cartData));
  } catch (error) {
    yield put(updateCartActionFailure(error.message));
  }
}

function* watchClearCart() {
  yield takeLatest(UPDATE_PRODUCT_CONTATY, updateCartSaga);
}

function* allCartSaga() {
  yield all([
    fork(watchGetCart),
    fork(watchAddCart),
    fork(watchDelCart),
    fork(watchClearCart),
  ]);
}

export default allCartSaga;
