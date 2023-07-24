import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = ({ showMenu }) => {
  const NavigationRef = useRef(null);

  if (showMenu) {
    NavigationRef.current.style.display = "block";
  }

  return (
    <nav className="navigation" ref={NavigationRef}>
      <FaTimes
        style={{ fontSize: "1.5rem" }}
        className="close-menu"
        onClick=""
      />
      <ul>
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/products" className="link">
          <li>Shop</li>
        </Link>
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
        <Link to="/contact" className="link">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
