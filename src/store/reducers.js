import { combineReducers } from "@reduxjs/toolkit";
import categoriesRed from "./Categories/reducer";
import brandsRed from "./Brands/reducer";
import productsRed from "./Products/reducer";
import authRed from "./auth/reducer";
import whishlistRed from "./whishlist/reducer";
import addressesRed from "./Addresses/reducer";
import cartRed from "./cart/reducer";
import reviewsRed from "./Reviews/reducer";
import ordersRed from "./orders/reducer";
import checkoutRed from "./checkout/reducer";
import homeSections from "./HomeSections/reducer";
import contactRed from "./ContactUs/reducer";
const rootReducer = combineReducers({
  categoriesRed,
  brandsRed,
  productsRed,
  authRed,
  whishlistRed,
  addressesRed,
  cartRed,
  reviewsRed,
  ordersRed,
  checkoutRed,
  homeSections ,
  contactRed
});

export default rootReducer;
