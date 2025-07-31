import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  getBlogsDataFailure,
  getBlogsDataSuccess,
  getSingleBlogFailure,
  getSingleBlogSuccess,
} from "./actions";
import { GET_BLOGS_DATA, GET_SINGLE_BLOG_DATA } from "./actionTypes";
import { getBlogsApi, getSingleBlogApi } from "../../../api/blogs";

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

//=============== SINGLE BLOG

function* getSingleBlogSage({ payload }) {

  try {
    const blogData = yield call(getSingleBlogApi, payload);
    yield put(getSingleBlogSuccess(blogData));
  } catch (error) {
    yield put(getSingleBlogFailure(error?.message));
  }
}

function* watchSingleBlogSaga() {
  yield takeLatest(GET_SINGLE_BLOG_DATA, getSingleBlogSage);
}

function* blogsSagas() {
  yield all([fork(watchBlogsSaga), fork(watchSingleBlogSaga)]);
}
export default blogsSagas;
