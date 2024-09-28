/* eslint-disable no-unused-vars */
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./ProductComponent";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/ProductsAction";

export const ProductsListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((res) => res.products)
      .catch((err) => console.log(err));
    dispatch(setProducts(response));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products : ", products);

  return (
    <div className="text-3xl">
      <ProductComponent />
    </div>
  );
};
