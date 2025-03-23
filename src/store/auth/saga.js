import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import {
  postForgetPassApi,
  postLoginApi,
  postSignUp,
  postVerifiyCodeApi,
} from "../../../api/auth";
import {
  postForgetPasswordFailure,
  postForgetPasswordSuccess,
  postLoginFailure,
  postLoginSuccess,
  postSignUpFailure,
  postSignUpSuccess,
  postVerifiyCodeFailure,
  postVerifiyCodeSuccess,
} from "./action";
import {
  POST_FORGET_PASSWORD,
  POST_LOGIN,
  POST_SIGNUP,
  POST_VERIFIY_CODE,
} from "./actionTypes";
import toast from "react-hot-toast";
//================================ START SIGN UP SAGAS ==========
function* postSignUpSaga({ payload }) {
  console.log(payload, "test payloax");
  const { data, navigate } = payload;
  try {
    const signupData = yield call(postSignUp, { data });
    yield put(postSignUpSuccess(signupData.data));

    toast.success("Success registration ✔");
    setTimeout(() => navigate("/login"), 1800);
  } catch (error) {
    yield put(postSignUpFailure(error.message));
  }
}

function* watchSignUp() {
  yield takeLatest(POST_SIGNUP, postSignUpSaga);
}
//================================ START LOGIN SAGAS ==========

function* postLoginSaga({ payload }) {
  const { data, navigate } = payload;
  try {
    const loginData = yield call(postLoginApi, { data });
    yield put(postLoginSuccess(loginData));
    toast.success("Success Login ✔");
    localStorage.setItem("userData", JSON.stringify(loginData));
    setTimeout(() => navigate("/"), 1800);
  } catch (error) {
    toast.error("Invalid Email Or Password ");
    yield put(postLoginFailure(error.message));
  }
}

function* watchLogin() {
  yield takeLatest(POST_LOGIN, postLoginSaga);
}

//================================ START FORGET PASSWORD SAGAS ==========

function* postForgetSaga({ payload }) {
  const { data, navigate } = payload;
  try {
    const forgetData = yield call(postForgetPassApi, { data });
    yield put(postForgetPasswordSuccess(forgetData));
    toast.success("Success Process ✔");
    setTimeout(() => navigate("/verifiy"), 1800);
  } catch (error) {
    toast.error("Invalid Email Please Try Again ");
    yield put(postForgetPasswordFailure(error.message));
  }
}
function* watchForget() {
  yield takeLatest(POST_FORGET_PASSWORD, postForgetSaga);
}

//================================ START VERIFIY CODE SAGAS ==========

function* postVerifiySaga({ payload }) {
  const { data, navigate } = payload;
  try {
    const forgetData = yield call(postVerifiyCodeApi, { data });
    yield put(postVerifiyCodeSuccess(forgetData));
    toast.success("Success Process ✔");
    setTimeout(() => navigate("/reset-password"), 1800);
  } catch (error) {
    toast.error("Invalid Code Please Try Again ");
    yield put(postVerifiyCodeFailure(error.message));
    console.log(error);
  }
}
function* watchVerify() {
  yield takeLatest(POST_VERIFIY_CODE, postVerifiySaga);
}

//================================ COLLECT ALL WATCHERS TO SEND MAIN SAGA
function* authSagas() {
  yield all([
    fork(watchSignUp),
    fork(watchLogin),
    fork(watchForget),
    fork(watchVerify),
  ]);
}
export default authSagas;
