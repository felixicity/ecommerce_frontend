import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = ({ showMenu, setShowMenu }) => {
  return (
    <div className="navigation">
      {showMenu && (
        <nav className="mobile-nav">
          <FaTimes
            style={{ fontSize: "1.5rem" }}
            className="close-menu"
            onClick={() => setShowMenu(false)}
          />
          <ul onClick={() => setShowMenu(false)}>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="products" className="link">
              <li>Shop</li>
            </Link>
            <Link to="about" className="link">
              <li>About</li>
            </Link>
            <Link to="contact" className="link">
              <li>Contact</li>
            </Link>
            <Link to="login" className="link">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      )}
      <nav className="desktop-nav">
        <ul>
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="products" className="link">
            <li>Shop</li>
          </Link>
          <Link to="about" className="link">
            <li>About</li>
          </Link>
          <Link to="contact" className="link">
            <li>Contact</li>
          </Link>
          <Link to="login" className="link">
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
