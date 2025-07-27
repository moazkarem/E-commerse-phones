import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  getAboutPageDataFailure,
  getAboutPageDataSuccess,
  getHeroDataFailure,
  getHeroDataSuccess,
} from "./actions";
import { GET_ABOUT_DATA, GET_HERO_DATA } from "./actionTypes";
import toast from "react-hot-toast";
import { getAboutPageDataApi, getHeroDataApi } from "../../../api/homeSections";

function* getHeroSage() {
  try {
    const heroData = yield call(getHeroDataApi);
    yield put(getHeroDataSuccess(heroData));
  } catch (error) {
    yield put(getHeroDataFailure(error?.message));
  }
}

function* watchHeroSaga() {
  yield takeLatest(GET_HERO_DATA, getHeroSage);
}

//============ about page asage

function* getAboutPageSaga() {
  try {
    const heroData = yield call(getAboutPageDataApi);
    yield put(getAboutPageDataSuccess(heroData));
  } catch (error) {
    yield put(getAboutPageDataFailure(error?.message));
  }
}

function* watchAboutPageSaga() {
  yield takeLatest(GET_ABOUT_DATA, getAboutPageSaga);
}

function* homeSectionsSagas() {
  yield all([fork(watchHeroSaga), fork(watchAboutPageSaga)]);
}
export default homeSectionsSagas;
