import { put, call, takeLatest, fork, all } from "redux-saga/effects";
import {
  getAllproductsFailure,
  getAllproductsSuccess,
  getProdByBrandFailure,
  getProdByBrandSuccess,
  getProdByCategoryFailure,
  getProdByCategorySuccess,
  getSingleProdFailure,
  getSingleProdSuccess,
} from "./actions";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_BRAND,
  GET_PRODUCT_BY_CATEGORY,
  GET_SINGLE_PRODUCT,
} from "./actionTypes";
import {
  getProductsApi,
  getProductsApiByBrand,
  getProductsApiByCategory,
  getSingleProductApi,
} from "../../../api/products";

function* getAllproductsSaga({ payload }) {
  const {
    limit,
    page,
    search,
    catQuery,
    brandQuery,
    priceFrom,
    priceTo,
    sort,
  } = payload;
  if (!navigator.onLine) {
    yield put(getAllproductsFailure("You Are Offline , Please Try Againe"));
  }
  try {
    const data = yield call(getProductsApi, {
      limit,
      page,
      search,
      catQuery,
      brandQuery,
      priceFrom,
      priceTo,
      sort,
    });
    yield put(getAllproductsSuccess(data));
  } catch (error) {
    yield put(getAllproductsFailure(error.message));
  }
}

function* productsWatcher() {
  yield takeLatest(GET_ALL_PRODUCTS, getAllproductsSaga);
}

//============================== GET SINGLE PRODUCT

function* getSingleProductSaga({ payload }) {
  console.log(payload, "payyy");
  const { productId } = payload;
  try {
    const whishData = yield call(getSingleProductApi, productId);
    yield put(getSingleProdSuccess(whishData));
  } catch (error) {
    yield put(getSingleProdFailure(error?.message));
  }
}

function* getSingleWatcher() {
  yield takeLatest(GET_SINGLE_PRODUCT, getSingleProductSaga);
}

//============================== GET PRODUCT BY CATEGORY

function* getProductBycategorySaga({ payload }) {
  console.log(payload, "payyy");

  // const { productId } = payload;
  try {
    const productsData = yield call(getProductsApiByCategory, payload);
    yield put(getProdByCategorySuccess(productsData));
  } catch (error) {
    yield put(getProdByCategoryFailure(error?.message));
  }
}

function* getProdCategWatcher() {
  yield takeLatest(GET_PRODUCT_BY_CATEGORY, getProductBycategorySaga);
}

//============================== GET PRODUCT BY BRAND

function* getProductByBrandSaga({ payload }) {
  console.log(payload, "payyy");

  // const { productId } = payload;
  try {
    const productsData = yield call(getProductsApiByBrand, payload);
    console.log(productsData , 'saaa')
    yield put(getProdByBrandSuccess(productsData));
  } catch (error) {
    yield put(getProdByBrandFailure(error?.message));
  }
}

function* getProdBrandgWatcher() {
  yield takeLatest(GET_PRODUCT_BY_BRAND, getProductByBrandSaga);
}

//=========== all saga

function* productsSaga() {
  yield all([
    fork(productsWatcher),
    fork(getSingleWatcher),
    fork(getProdCategWatcher),
    fork(getProdBrandgWatcher),
  ]);
}

export default productsSaga;
