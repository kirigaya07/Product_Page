/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const ProductComponent = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <Link to={`/product/${product.id}`}>
            <img
              className="rounded-t-lg w-full h-auto max-h-80 object-contain"
              src={product.images[0]} // Display full image
              alt={product.title}
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              $ {product.price}
            </p>
            <Link
              to={`/category/${product.category}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {product.category}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
