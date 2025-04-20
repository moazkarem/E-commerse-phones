import { combineReducers } from "@reduxjs/toolkit";
import categoriesRed from "./Categories/reducer";
import brandsRed from "./Brands/reducer";
import productsRed from "./Products/reducer";
import authRed from "./auth/reducer";
import whishlistRed from "./whishlist/reducer";
import addressesRed from "./Addresses/reducer";
import cartRed from "./cart/reducer";
const rootReducer = combineReducers({
  categoriesRed,
  brandsRed,
  productsRed,
  authRed,
  whishlistRed,
  addressesRed,
  cartRed,
});

export default rootReducer;
