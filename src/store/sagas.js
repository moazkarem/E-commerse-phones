import { all } from "redux-saga/effects";
import categorieSaga from "./Categories/saga";
import brands from "./Brands/saga";
import productsSaga from "./Products/saga";
import authSagas from "./auth/saga";
import whishlistSagas from "./whishlist/saga";
import AllAddreessesSagas from "./Addresses/saga";
import allCartSaga from "./cart/saga";
function* rootSaga() {
  yield all([
    categorieSaga(),
    brands(),
    productsSaga(),
    authSagas(),
    whishlistSagas(),
    AllAddreessesSagas(),
    allCartSaga(),
  ]);
}
export default rootSaga;
