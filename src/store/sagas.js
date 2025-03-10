import { all } from "redux-saga/effects";
import categorieSaga from "./Categories/saga";
import brands from "./Brands/saga";
import productsSaga from "./Products/saga";
function* rootSaga() {
  yield all([categorieSaga(), brands(), productsSaga()]);
}
export default rootSaga;
