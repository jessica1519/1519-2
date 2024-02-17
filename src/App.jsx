import { useState } from "react";
import * as React from "react";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop.jsx";
import ItemProduct from "./components/ItemProduct/ItemProduct.jsx";
import ArticleShop from "./pages/ArticleShop/ArticleShop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Payment from "./pages/Payment/Payment.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:articleId" element={<ArticleShop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
