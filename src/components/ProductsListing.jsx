/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./ProductComponent";
import { useEffect, useState } from "react";
import { setProducts } from "../redux/actions/ProductsAction";

export const ProductsListing = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Number of products per page

  const fetchCategories = async () => {
    const response = await fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setCategories(response);
  };

  const fetchProducts = async (category = "", query = "") => {
    let url = "";

    if (query) {
      url = `https://dummyjson.com/products/search?q=${query}`; // Fetch products by search query
    } else if (category) {
      url = `https://dummyjson.com/products/category/${category}`; // Fetch products by category
    } else {
      url = "https://dummyjson.com/products?limit=100"; // Fetch all products if no category or search query is specified
    }

    const response = await fetch(url)
      .then((res) => res.json())
      .then((res) => res.products)
      .catch((err) => console.log(err));

    dispatch(setProducts(response)); // Dispatch the products to Redux
  };

  useEffect(() => {
    fetchCategories(); // Fetch categories on initial load
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory, searchQuery); // Fetch products based on the selected category or search
    setCurrentPage(1); // Reset to first page when category or search changes
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category); // Deselect if clicked again
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts("", searchQuery); // Fetch products based on search query
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
  };

  const products = useSelector((state) => state.allProducts.products) || [];
  const totalProducts = products.length; // Total number of products
  const totalPages = Math.ceil(totalProducts / productsPerPage); // Calculate total pages

  // Get the current products to display based on the current page
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="flex flex-col">
      <aside className="w-full bg-gray-100 p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Categories</h2>
        {/* Dropdown Menu for Categories */}
        <div className="relative mb-4">
          <button
            onClick={toggleDropdown}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full text-left"
          >
            {selectedCategory || "Select a Category"}
          </button>

          {isDropdownVisible && (
            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded shadow-lg z-10">
              <ul className="max-h-48 overflow-y-auto">
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer p-2 hover:bg-gray-200 ${
                      selectedCategory === category
                        ? "font-bold bg-gray-200"
                        : ""
                    }`}
                    onClick={() => {
                      handleCategoryClick(category);
                      setDropdownVisible(false); // Close dropdown on selection
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="w-full mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
        >
          Search
        </button>
      </form>

      <main className="w-full p-4">
        <h1 className="text-3xl mb-4 text-center">Products</h1>
        <ProductComponent products={currentProducts} />{" "}
        {/* Display current page's products */}
        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};
