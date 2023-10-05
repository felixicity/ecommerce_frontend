import React, { useEffect } from "react";
import { calculateTotal } from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const SharedLayer = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayer;
