import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/dark-red.jpg";
import { useParams } from "react-router-dom";
import { collection } from "../data";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import {
  addItem,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

import {
  increaseAmount,
  decreaseAmount,
} from "../features/product/productSlice";

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const product = collection.filter((item) => item.id === params.id);
  const { amount } = useSelector((state) => state.product);

  return (
    <div className="product-page wrapper">
      <img
        src={product[0].img}
        alt={product[0].title}
        className="product-img"
      />
      <div>
        <p className="product-category">{product[0].category}</p>
        <h4 className="product-title">{product[0].title}</h4>
        <p className="product-desc">{product[0].description}</p>
        <p className="product-price">${product[0].price}</p>
        <div className="item-quantity">
          <div
            className="subtract"
            onClick={() =>
              amount > 0 && dispatch(decreaseAmount(product[0].id))
            }
          >
            -
          </div>
          <div className="quantity">{amount}</div>
          <div className="add" onClick={() => dispatch(increaseAmount())}>
            +
          </div>
        </div>

        <button
          className="addCart-btn"
          onClick={() => dispatch(addItem(product[0].id))}
        >
          Add to Cart
        </button>
        <Link to="/" className="homelink">
          <span>
            {" "}
            <FaArrowLeft />{" "}
          </span>
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
