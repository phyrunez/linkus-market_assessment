import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom/umd/react-router-dom.development";

import Cart from "../pages/Cart";
import Shop from "../pages/Shop";

import Checkout from "../pages/Checkout";


const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='shop' />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
    </Routes>
  )
}

export default Routers