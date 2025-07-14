import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  addProductReviewFailure,
  addProductReviewSuccess,
  delProductReviewFailure,
  delProductReviewSuccess,
  getAllProductsReviewFailure,
  getAllProductsReviewSuccess,
  getAllReviewsActionFailure,
  getAllReviewsActionSuccess,
  updateProductReviewFailure,
  updateProductReviewSuccess,
} from "./actions";

import {
  ADD_PRODUCT_REVIEW,
  DELETE_PRODUCT_REVIEW,
  GET_ALL_PRODUCTS_REVIEWS,
  GET_ALL_REVIEWS,
  UPDATE_PRODUCT_REVIEW,
} from "./actionTypes";
import toast from "react-hot-toast";
import {
  addReviewsApi,
  delProductReviewApi,
  getAllReviewsApi,
  getReviewsApi,
  updateProductReviewApi,
} from "../../../api/reviews";

//================================ GET  ALL REVIEWS ON PRODUCT==========

function* getReviewsSaga({ payload }) {
  const { productId, limit, currentPage } = payload;
  try {
    const reviewsData = yield call(getReviewsApi, {
      productId,
      limit,
      currentPage,
    });
    yield put(getAllReviewsActionSuccess(reviewsData));
  } catch (error) {
    yield put(getAllReviewsActionFailure(error?.message));
  }
}

function* watchGetAllReviewsSaga() {
  yield takeLatest(GET_ALL_REVIEWS, getReviewsSaga);
}

//================================ GET  ALL REVIEWS ON PRODUCT==========

function* getAllProductsReviesSaga({ payload }) {
  try {
    const reviewsData = yield call(getAllReviewsApi);
    yield put(getAllProductsReviewSuccess(reviewsData));
  } catch (err) {
    yield put(getAllProductsReviewFailure(err?.message));
  }
}

function* watchAllProductsReviews() {
  yield takeLatest(GET_ALL_PRODUCTS_REVIEWS, getAllProductsReviesSaga);
}

//================================ ADD REVIEW ON PRODUCT ==========
function* addProductReviewSaga({ payload }) {
  const { data, productId } = payload;
  try {
    const addreviewData = yield call(addReviewsApi, { data, productId });
    yield put(addProductReviewSuccess(addreviewData));
    // yield put({ type: GET_ALL_REVIEWS });
    toast.success("Review Added Successfully");
  } catch (error) {
    yield put(addProductReviewFailure(error?.message));
    toast.error("Faield To Add Your Review. ");
  }
}

function* watchAddReviewSaga() {
  yield takeLatest(ADD_PRODUCT_REVIEW, addProductReviewSaga);
}

//================================ DEL REVIEW ON PRODUCT ==========
function* delProductReviewSaga({ payload }) {
  const { productId } = payload;
  try {
    const delreviewData = yield call(delProductReviewApi, productId);
    yield put(delProductReviewSuccess(delreviewData));
    // yield put({ type: GET_ALL_REVIEWS });
    toast.success("Review Removed Successfully");
  } catch (error) {
    yield put(delProductReviewFailure(error?.message));
    toast.error("Faield To Remove Your Review. ");
  }
}

function* watchDeleteReviewSaga() {
  yield takeLatest(DELETE_PRODUCT_REVIEW, delProductReviewSaga);
}

//================================ UPDATE REVIEW ON PRODUCT ==========
function* updateProductReviewSaga({ payload }) {
  const { data, productId } = payload;
  try {
    const addreviewData = yield call(updateProductReviewApi, {
      data,
      productId,
    });
    yield put(updateProductReviewSuccess(addreviewData));
    // yield put({ type: GET_ALL_REVIEWS });
    toast.success("Review Updated Successfully");
  } catch (error) {
    yield put(updateProductReviewFailure(error?.message));
    toast.error("Faield To Update Your Review. ");
  }
}

function* watchUpdateReviewSaga() {
  yield takeLatest(UPDATE_PRODUCT_REVIEW, updateProductReviewSaga);
}

function* reviewsSagas() {
  yield all([
    fork(watchGetAllReviewsSaga),
    fork(watchAddReviewSaga),
    fork(watchDeleteReviewSaga),
    fork(watchUpdateReviewSaga),
    fork(watchAllProductsReviews),
  ]);
}
export default reviewsSagas;
