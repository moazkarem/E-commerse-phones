import { all } from "redux-saga/effects";
import categorieSaga from "./Categories/saga";
import brands from "./Brands/saga";
import productsSaga from "./Products/saga";
import authSagas from "./auth/saga";
import whishlistSagas from "./whishlist/saga";
import AllAddreessesSagas from "./Addresses/saga";
import allCartSaga from "./cart/saga";
import reviewsSagas from "./Reviews/saga";
import allOrdersSaga from "./orders/saga";
import allCheckoutSaga from "./checkout/saga";
import homeSectionsSagas from "./HomeSections/saga";
import contactSagas from "./ContactUs/saga";
import blogsSagas from "./Blogs/saga";
function* rootSaga() {
  yield all([
    categorieSaga(),
    brands(),
    productsSaga(),
    authSagas(),
    whishlistSagas(),
    AllAddreessesSagas(),
    allCartSaga(),
    reviewsSagas(),
    allOrdersSaga(),
    allCheckoutSaga(),
    homeSectionsSagas(),
    contactSagas() ,
    blogsSagas()
  ]);
}
export default rootSaga;
