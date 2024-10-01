/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const ProductComponent = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700"
        >
          <Link to={`/product/${product.id}`}>
            <img
              className="rounded-t-lg w-full h-auto max-h-80 object-contain"
              src={product.images[0]} // Display full image
              alt={product.title}
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-extrabold text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <p className="text-xl font-semibold text-teal-500 mb-2">
              ${product.price}
            </p>
            <p className="text-sm font-light text-gray-600 dark:text-gray-400 mb-4">
              {product.description.slice(0, 50)}...
            </p>
            <Link
              to={`/category/${product.category}`}
              className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:from-teal-500 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors"
            >
              {product.category}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
