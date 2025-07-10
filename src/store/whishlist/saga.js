import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  addToWhishlistFailure,
  addToWhishlistSuccess,
  deleteFromWhishlist,
  deleteFromWhishlistFailure,
  deleteFromWhishlistSuccess,
  getWhishlistFailure,
  getWhishlistSuccess,
} from "./actions";
import {
  addToWhishlistApi,
  deleteFromWhishlistApi,
  getWhishlistApi,
} from "../../../api/whishlist";
import {
  ADD_TO_WHISHLIST,
  DELETE_FROM_WHISHLIST,
  GET_WHISHLIST,
} from "./actionTypes";
import toast from "react-hot-toast";

function* addToWhishlistSaga({ payload }) {
  const { productId } = payload;
  try {
    const whishData = yield call(addToWhishlistApi, { productId });
    yield put(addToWhishlistSuccess(whishData));
    yield put({ type: GET_WHISHLIST });
    toast.success("Product Added To Whishlist");
  } catch (error) {
    yield put(addToWhishlistFailure(error?.message));
    toast.error(
      "Something went wrong. The product has not been added to favorites. "
    );
  }
}

function* watchWhishlistSaga() {
  yield takeLatest(ADD_TO_WHISHLIST, addToWhishlistSaga);
}

//================================ DELETE WHISHLIST ITEM==========

function* deleteFromWhishlistSaga({ payload }) {
  const { productId } = payload;
  try {
    const whishData = yield call(deleteFromWhishlistApi, { productId });
    yield put(deleteFromWhishlistSuccess(whishData));
    yield put({ type: GET_WHISHLIST });
    toast.success("Product Removed From Whishlist");
  } catch (error) {
    toast.error(
      "Something went wrong. The product has not been removed from favorites. "
    );
    yield put(deleteFromWhishlistFailure(error?.message));
  }
}

function* watchdeleteFromWhishlistSaga() {
  yield takeLatest(DELETE_FROM_WHISHLIST, deleteFromWhishlistSaga);
}

//================================ GET WHISHLIST ITEMS==========

function* getWhishlistSaga() {
  try {
    const whishData = yield call(getWhishlistApi);
    yield put(getWhishlistSuccess(whishData));
  } catch (error) {
    yield put(getWhishlistFailure(error?.message));
  }
}

function* watchGetWhishlistSaga() {
  yield takeLatest(GET_WHISHLIST, getWhishlistSaga);
}

function* whishlistSagas() {
  yield all([
    fork(watchWhishlistSaga),
    fork(watchdeleteFromWhishlistSaga),
    fork(watchGetWhishlistSaga),
  ]);
}
export default whishlistSagas;
