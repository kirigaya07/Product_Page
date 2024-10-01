import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsListing } from "./components/ProductsListing";
import Header from "./components/Header";
import { ProductDetail } from "./components/ProductDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

// The current implementation fetches data from the API on every page change,
// instead of fetching all data at once and simply displaying it across pages.
// This can result in slower loading times and unnecessary API requests, especially for
// categories or searches with large amounts of data. An optimization could involve fetching
// all the required data once and using local state or Redux to manage pagination on the frontend.
