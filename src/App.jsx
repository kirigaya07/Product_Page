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
