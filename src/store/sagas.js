import { all } from "redux-saga/effects";
import categorieSaga from "./Categories/saga";
import brands from './Brands/saga'
function* rootSaga() {
  yield all([categorieSaga() , brands()]);
}
export default rootSaga;
