import { combineReducers } from "@reduxjs/toolkit";
import categoriesRed from "./Categories/reducer";
import brandsRed from "./Brands/reducer";

const rootReducer = combineReducers({
  categoriesRed ,
  brandsRed
})

export default rootReducer