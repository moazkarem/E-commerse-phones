import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getAllCategoriesApi } from "../../../api/categories";
import { getAllCategoriesFailure, getAllCategoriesSuccess } from "./actions";
import { GET_ALL_CATEGORIES } from "./actionTypes";
function* getCategoriesSaga() {
  try {
    const data = yield call(getAllCategoriesApi);
    yield put(getAllCategoriesSuccess(data));
  } catch (error) {
    yield put(getAllCategoriesFailure(error));
  }
}

export function* watchFetchCategories() {
  yield takeLatest(GET_ALL_CATEGORIES, getCategoriesSaga);
}

function* categorieSaga() {
  yield all([fork(watchFetchCategories)]);
}
export default categorieSaga;
