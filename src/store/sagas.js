import { all } from "redux-saga/effects";
import categorieSaga from "./Categories/saga";
import brands from "./Brands/saga";
import productsSaga from "./Products/saga";
import authSagas from "./auth/saga";
function* rootSaga() {
  yield all([categorieSaga(), brands(), productsSaga(), authSagas()]);
}
export default rootSaga;
