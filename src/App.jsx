import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/Home";

import ProductDetails from "./pages/ProductDetails";

import Cart from "./pages/Cart";

import "./App.css";

import { ToastContainer } from "react-toastify";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <ToastContainer position="top-center" />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} /> 

        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;