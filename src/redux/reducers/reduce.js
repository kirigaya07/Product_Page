import { combineReducers } from "redux";
import { productsReducer } from "./ProductsReducer.js";

const reducers = combineReducers({
  allProducts: productsReducer,
});
export default reducers;
