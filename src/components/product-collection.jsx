import React, { useState } from "react";
import { collection } from "../data";

import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import Product from "./Product";

const HomeProducts = () => {
  const [products, setProducts] = useState(collection);
  const dispatch = useDispatch();

  const animate = (itemId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        return product.id === itemId
          ? { ...product, hasLiked: !product.hasLiked }
          : product;
        const { cartItems } = useSelector((state) => state.cart);
      });
    });
  };

  return (
    <div className="grid-container wrapper">
      <h3 className="collection">Our Top Collection</h3>
      <div className="collection-items">
        {products.map((item) => (
          <Product
            key={item.id}
            item={item}
            addItem={() => addItem(item.id)}
            animate={animate}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
