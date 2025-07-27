import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { postContactFailure, postContactSuccess } from "./actions";
import { POST_CONTACT } from "./actionTypes";
import toast from "react-hot-toast";
import { postContactApi } from "../../../api/contactus";

function* postContactSaga({ payload }) {
  // console.log(payload, "payload ");
  try {
    const contactData = yield call(postContactApi, payload);
    yield put(postContactSuccess(contactData));
    setTimeout(() => {
      toast.success("Your Message Recived Successfully");
    }, 1500);
  } catch (error) {
    yield put(postContactFailure(error?.message));
    toast.error("Error in sending the message ");
  }
}

function* watchContactSaga() {
  yield takeLatest(POST_CONTACT, postContactSaga);
}

function* contactSagas() {
  yield all([fork(watchContactSaga)]);
}
export default contactSagas;
