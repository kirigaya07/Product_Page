import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id} // Add unique key prop
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <Link to={`/product/${product.id}`}>
            <img
              className="rounded-t-lg"
              src={product.images[0]} // Use the first image if it's an array
              alt={product.title}
            />
          </Link>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {product.category}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
