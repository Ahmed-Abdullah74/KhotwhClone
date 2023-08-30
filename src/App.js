import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import SideCart from "./components/SideCart";

import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./components/ProductDetails";

import Men from "./components/Men";

function App() {
  return (
    <div className="App me-0">
      <Navbar />
      <SideCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="men" element={<Men />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
