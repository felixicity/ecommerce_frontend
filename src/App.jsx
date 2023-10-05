import React from "react";
import Home from "./pages/home";
import ProductPage from "./pages/productPage";
import SharedLayer from "./components/sharedLayer";
import CheckOut from "./pages/checkOut";
import Login from "./pages/login";
import AdminLogin from "./pages/adminLogin";
import CreateAdmin from "./pages/adminRegister";
import Register from "./pages/register";
import SuperAdminLogin from "./pages/superAdmin";
import AdminDashboard from "./pages/adminDashboard";
import ErrorPage from "./pages/errorPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayer />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="checkout" element={<CheckOut />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="products/:id" element={<ProductPage />}></Route>
        </Route>
        <Route path="adminlogin" element={<AdminLogin />}></Route>
        <Route path="register/admin" element={<CreateAdmin />}></Route>
        <Route path="admin/login" element={<SuperAdminLogin />}></Route>
        <Route path="admin/dashboard" element={<AdminDashboard />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
