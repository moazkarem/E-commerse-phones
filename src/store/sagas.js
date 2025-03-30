import { all } from "redux-saga/effects";
import categorieSaga from "./Categories/saga";
import brands from "./Brands/saga";
import productsSaga from "./Products/saga";
import authSagas from "./auth/saga";
import whishlistSagas from "./whishlist/saga";
function* rootSaga() {
  yield all([categorieSaga(), brands(), productsSaga(), authSagas() , whishlistSagas()]);
}
export default rootSaga;
