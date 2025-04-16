import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { getAddresssesApi } from "../../../api/address";
import { getAllAddressesFailure, getAllAddressesSuccess } from "./actions";
import { GET_ALL_ADDREESSES } from "./actionTypes";

function* getAllAddressesSaga() {
  try {
    const addressesdata = yield call(getAddresssesApi);
    yield put(getAllAddressesSuccess(addressesdata));
  } catch (error) {
    yield put(getAllAddressesFailure(error.message));
  }
}

function* watcherAddresseSaga() {
  yield takeLatest(GET_ALL_ADDREESSES, getAllAddressesSaga);
}

function* AllAddreessesSagas() {
  yield all([fork(watcherAddresseSaga)]);
}

export default AllAddreessesSagas;
