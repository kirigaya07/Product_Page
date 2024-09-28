import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./ProductsReducer.js";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
