import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Navigation from "./navigation";
import { ToastContainer } from "react-toastify";
import Login from "./login";
import { HiOutlineShoppingBag, HiSearch, HiMenuAlt2 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../components/cart";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);
  // const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const HeaderRef = useRef(null);

  const toggleUserOptions = () => {
    setShowOptions((prevOptions) => !prevOptions);
  };

  const toggleCart = () => {
    setShowCart((prevOptions) => !prevOptions);
  };

  useEffect(() => {
    const scrollWatcher = document.createElement("div");

    scrollWatcher.setAttribute("data-scroll-watcher", "");
    HeaderRef.current.before(scrollWatcher);

    const navObserver = new IntersectionObserver(
      (entries) => {
        HeaderRef.current.classList.toggle(
          "sticking",
          !entries[0].isIntersecting
        );
      },
      { rootMargin: "180px 0px 0px 0px" }
    );

    navObserver.observe(scrollWatcher);
  }, []);

  return (
    <header ref={HeaderRef} className="primary-header">
      <ToastContainer />
      <div className="wrapper">
        <div className="container">
          <p className="logo">Babreux</p>
          <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
          {showCart && <Cart toggleCart={toggleCart} />}
          <div className="header-items">
            <div className="bag-icon">
              <HiOutlineShoppingBag
                className="icon"
                style={{ fontSize: "1.8rem" }}
                onClick={toggleCart}
              />
              <span className="item-amount">{amount}</span>
            </div>
            <a>
              <HiSearch className="icon" style={{ fontSize: "1.5rem" }} />
            </a>
            <div className="user-options">
              <Login
                showOptions={showOptions}
                toggleUserOptions={toggleUserOptions}
              />
              {showOptions && (
                <div className="options-list">
                  <Link className="option">dashboard</Link>
                  <Link href="login" className="option">
                    LogIn
                  </Link>
                </div>
              )}
            </div>
            <HiMenuAlt2
              style={{ fontSize: "1.8rem" }}
              className="menu icon"
              onClick={() => setShowMenu(true)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
