import toast from "react-hot-toast";
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
function* addCartSaga({ payload }) {
  const { productId } = payload;
  try {
    const cartData = yield call(addToCartApi, productId);
    yield put(addCartActionSuccess(cartData));
    toast.success("Product  Added To Cart Successfully");
  } catch (error) {
    yield put(addCartActionFailure(error.message));
    toast.error("Failed Add Product To Cart");
  }
}

function* watchAddCart() {
  yield takeLatest(ADD_PRODUCTS_CART, addCartSaga);
}

//================ DEL CART SAGA
function* delCartSaga({ payload }) {
  const { productId } = payload;
  try {
    const cartData = yield call(delFromCartApi, productId);
    yield put(delCartActionSuccess(cartData));
    toast.success("Product Removed From Cart Successfully");
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
    toast.success("All Product Removed From Cart Successfully");
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

function* watchUpdateCart() {
  yield takeLatest(UPDATE_PRODUCT_CONTATY, updateCartSaga);
}

function* allCartSaga() {
  yield all([
    fork(watchGetCart),
    fork(watchAddCart),
    fork(watchDelCart),
    fork(watchClearCart),
    fork(watchUpdateCart),
  ]);
}

export default allCartSaga;
