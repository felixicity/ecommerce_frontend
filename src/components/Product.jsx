import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Product = ({ item, addItem, animate, dispatch }) => {
  // console.log(cartItems)
  const iconStyle = {
    color: item.hasLiked ? "rgb(255, 105, 155)" : "#000",
    animation: item.hasLiked ? "scale-up 500ms" : "",
  };

  return (
    <div className="collection-item">
      <div className="item-img">
        <Link to={`/products/${item.id}`}>
          <img src={item.img} alt="shirt" />
        </Link>
        <button onClick={() => dispatch(addItem())}>Add to Cart</button>
      </div>
      <div className="item-desc">
        <div className="item-collection">
          <span className="title">{item.category}</span>
          <span style={iconStyle}>
            <FaHeart onClick={() => animate(item.id)} />
          </span>
        </div>
        <p className="item-price">${item.price}</p>
      </div>
    </div>
  );
};

export default Product;
