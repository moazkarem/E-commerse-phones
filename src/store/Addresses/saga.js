import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import {
  addAddressApi,
  delAddressApi,
  editAddressApi,
  getAddresssesApi,
} from "../../../api/address";
import {
  addAddressActionFailure,
  addAddressActionSuccess,
  delAddressActionFailure,
  delAddressActionSuccess,
  editAddressActionFailure,
  editAddressActionSuccess,
  getAllAddressesFailure,
  getAllAddressesSuccess,
} from "./actions";
import {
  ADD_ADDREESSE,
  DEL_ADDREESSE,
  EDIT_ADDREESSE,
  GET_ALL_ADDREESSES,
} from "./actionTypes";
import toast from "react-hot-toast";

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

//============================== EDIT ADDRESS SAGA ==========
function* editAddressSaga({ payload }) {
  const { address, selectedAddress } = payload;
  try {
    const data = yield call(editAddressApi, { address, selectedAddress });
    yield put(editAddressActionSuccess(data));
    toast.success("Addreess Updated Successfully ✔");
  } catch (error) {
    yield put(editAddressActionFailure(error.message));
    toast.error("Failed To Edit This Address ");
  }
}

function* watcherEditAddresseSaga() {
  yield takeLatest(EDIT_ADDREESSE, editAddressSaga);
  
}

//============================== ADD ADDRESS SAGA ==========
function* addAddressSaga({ payload }) {
  console.log(payload, " from payload from saga");
  const { address } = payload;
  try {
    const addAddressData = yield call(addAddressApi, { address });
    yield put(addAddressActionSuccess(addAddressData));
    toast.success("Addreess Added Successfully ✔");
  } catch (error) {
    yield put(addAddressActionFailure(error.message));
    toast.error("Failed To Add This Address ");
  }
}

function* watcherAddAddresseSaga() {
  yield takeLatest(ADD_ADDREESSE, addAddressSaga);
}

//============================== DELETE ADDRESS SAGA ==========
function* delAddressSaga({ payload }) {
  const { address } = payload;
  try {
    const data = yield call(delAddressApi, { address });
    yield put(delAddressActionSuccess(data));
    toast.success("Addreess Deleted Successfully ✔");
  } catch (error) {
    yield put(delAddressActionFailure(error.message));
    toast.error("Failed Deleted ");
  }
}

function* watcherDelAddresseSaga() {
  yield takeLatest(DEL_ADDREESSE, delAddressSaga);
}

function* AllAddreessesSagas() {
  yield all([
    fork(watcherAddresseSaga),
    fork(watcherEditAddresseSaga),
    fork(watcherAddAddresseSaga),
    fork(watcherDelAddresseSaga),
  ]);
}

export default AllAddreessesSagas;
