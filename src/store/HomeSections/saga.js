import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getHeroDataFailure, getHeroDataSuccess } from "./actions";

import { GET_HERO_DATA } from "./actionTypes";
import toast from "react-hot-toast";
import { getHeroDataApi } from "../../../api/homeSections";

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

//================================ DELETE WHISHLIST ITEM==========

function* homeSectionsSagas() {
  yield all([fork(watchHeroSaga)]);
}
export default homeSectionsSagas;
