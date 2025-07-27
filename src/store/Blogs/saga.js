import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getBlogsDataFailure, getBlogsDataSuccess } from "./actions";
import { GET_BLOGS_DATA } from "./actionTypes";
import { getBlogsApi } from "../../../api/blogs";

function* getBlogsSage() {
  try {
    const blogsData = yield call(getBlogsApi);
    yield put(getBlogsDataSuccess(blogsData));
  } catch (error) {
    yield put(getBlogsDataFailure(error?.message));
  }
}

function* watchBlogsSaga() {
  yield takeLatest(GET_BLOGS_DATA, getBlogsSage);
}

function* blogsSagas() {
  yield all([fork(watchBlogsSaga)]);
}
export default blogsSagas;
