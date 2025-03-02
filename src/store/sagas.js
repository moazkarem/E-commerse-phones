import { all } from "redux-saga/effects";
import categorieSaga from "./Categories/saga";

function* rootSaga() {
  yield all([categorieSaga()]);
}
export default rootSaga;
