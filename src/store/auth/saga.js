import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { postSignUp } from "../../../api/auth";
import { postSignUpFailure, postSignUpSuccess } from "./action";
import { POST_SIGNUP } from "./actionTypes";
import toast from "react-hot-toast";
function* postSignUpSaga({ payload }) {
  console.log(payload, "test payloax");
  const { data, navigate } = payload;
  try {
    const signupData = yield call(postSignUp, { data });
    yield put(postSignUpSuccess(signupData.data));

    toast.success("Success registration!");
    setTimeout(() => navigate("/login"), 1800);
  } catch (error) {
    yield put(postSignUpFailure(error.message));
  }
}

function* watchSignUp() {
  yield takeLatest(POST_SIGNUP, postSignUpSaga);
}

function* authSagas() {
  yield all([fork(watchSignUp)]);
}
export default authSagas;
