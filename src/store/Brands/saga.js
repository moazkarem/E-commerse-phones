import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getBrandsApi } from "../../../api/brands";
import { getAllBrandsFailure, getAllBrandsSuccess } from "./actions";
import {GET_ALL_BRANDS} from './actionTypes'
function* getBrandsSaga({payload}) {
  const{limit , page} = payload
  try {
    const data = yield call(getBrandsApi , {limit , page});
    yield put(getAllBrandsSuccess(data));
  } catch(error) {
    yield put(getAllBrandsFailure(error.message));
  }
}

export function* watcherBrands(){
  yield takeLatest(GET_ALL_BRANDS , getBrandsSaga)
}

function* brands(){
yield all([fork(watcherBrands)])
}

export default brands