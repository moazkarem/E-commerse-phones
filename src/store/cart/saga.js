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
  const { productId , color } = payload;
  try {
    const cartData = yield call(addToCartApi, {productId , color});
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
    toast.error("Failed To Remove Product  From Cart");
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
    toast.error("Failed To Clear All From Cart");
  }
}

function* watchClearCart() {
  yield takeLatest(CLEAR_PRODUCT_CART, clearCartSaga);
}

//================ UPDATE  CART SAGA
function* updateCartSaga({ payload }) {
  const { productId, count } = payload;
  try {
    const cartData = yield call(updataCartContatyApi, { productId, count });
    yield put(updateCartActionSuccess(cartData));
    toast.success("Quantity Updated Successfully");
  } catch (error) {
    console.log(error.message , 'my saga updated ');
    yield put(updateCartActionFailure(error));
    toast.error("Failed to update quantity");
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
