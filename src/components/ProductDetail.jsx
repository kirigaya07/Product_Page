/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/ProductsAction.js";

export const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const { images, title, price, category, description } = product;
  console.log(product);

  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response));
  };

  useEffect(() => {
    fetchProductDetail();
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="container mx-auto p-4">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col lg:flex-row bg-gray-100 p-6 rounded-lg shadow-md">
          {/* Image Section */}
          <div className="relative flex items-center justify-center w-full lg:w-1/2">
            <img
              className="w-full h-auto max-h-97 object-contain rounded-lg" // Set max height and object-contain
              src={images[0]}
              alt={title}
            />
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
            <h2 className="text-3xl text-teal-600 font-semibold mb-2">
              ${price}
            </h2>
            <h3 className="text-xl font-medium text-brown-600 mb-4">
              {category}
            </h3>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-600 flex items-center justify-center">
              <span className="mr-2">Add to Cart</span>
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
