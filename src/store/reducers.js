import { combineReducers } from "@reduxjs/toolkit";
import categoriesRed from "./Categories/reducer";
import brandsRed from "./Brands/reducer";
import productsRed from "./Products/reducer";

const rootReducer = combineReducers({
  categoriesRed ,
  brandsRed ,
  productsRed
})

export default rootReducer