import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import {
  changePasswordApi,
  postForgetPassApi,
  postLoginApi,
  postResetPasswordApi,
  postSignUp,
  postVerifiyCodeApi,
} from "../../../api/auth";
import {
  changePassActionFailure,
  changePassActionSuccess,
  postForgetPasswordFailure,
  postForgetPasswordSuccess,
  postLoginFailure,
  postLoginSuccess,
  postResetPasswordFailure,
  postResetPasswordSuccess,
  postSignUpFailure,
  postSignUpSuccess,
  postVerifiyCodeFailure,
  postVerifiyCodeSuccess,
} from "./action";
import {
  CHANGE_PASSWORD,
  POST_FORGET_PASSWORD,
  POST_LOGIN,
  POST_RESET_PASSWORD,
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
    // console.log(error);
  }
}
function* watchVerify() {
  yield takeLatest(POST_VERIFIY_CODE, postVerifiySaga);
}

//================================ START VERIFIY CODE SAGAS ==========

function* postResetSaga({ payload }) {
  const { data, navigate } = payload;
  try {
    const forgetData = yield call(postResetPasswordApi, { data });
    yield put(postResetPasswordSuccess(forgetData));
    toast.success("Success Process ✔");
    setTimeout(() => navigate("/login"), 1800);
  } catch (error) {
    toast.error("Invalid Procees Please Try Again  ");
    yield put(postResetPasswordFailure(error.message));
    // console.log(error);
  }
}
function* watchResetPasword() {
  yield takeLatest(POST_RESET_PASSWORD, postResetSaga);
}

//================================ START CHANGE PASS SAGAS ==========

function* changePassSaga({ payload }) {
  const { navigate } = payload;
  try {
    const changeData = yield call(changePasswordApi, payload);
    yield put(changePassActionSuccess(changeData));
    toast.success("Password Changed Successfully");

    setTimeout(() => navigate("/login"), 1800);
  } catch (error) {
    toast.error("Invalid  Password  Please Try Again ");
    yield put(changePassActionFailure(error.message));
  }
}

function* watchChnge() {
  yield takeLatest(CHANGE_PASSWORD, changePassSaga);
}

//================================ COLLECT ALL WATCHERS TO SEND MAIN SAGA
function* authSagas() {
  yield all([
    fork(watchSignUp),
    fork(watchLogin),
    fork(watchForget),
    fork(watchVerify),
    fork(watchResetPasword),
    fork(watchChnge),
  ]);
}
export default authSagas;
