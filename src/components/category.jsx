import React from "react";
import { data } from "../data";
import yellowWhite from "../assets/yellow-white.jpg";
import GreyDress from "../assets/judeus-samson-0UECcInuCR4-unsplash.jpg";
import WhiteSuit from "../assets/reza-delkhosh-iRAOJYtPHZE-unsplash.jpg";
import ClothingColloection from "../assets/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg";
import BoardWhite from "../assets/board-white.jpg";
import CartonTrouser from "../assets/carto-trouser.jpg";
import LadyTrouser from "../assets/ahmed-carter-unsplash.jpg";
import DarkWhite from "../assets/dark-white.jpg";
import WhiteRed from "../assets/hero-img.jpg";

const Category = () => {
  return (
    <div className="products-category wrapper">
      <h2>Popular</h2>
      <div className="links">
        <a href="/">Women</a>
        <a href="/">Men</a>
        <a href="/">Kids</a>
        <a href="/">Sports</a>
      </div>
      <div className="products">
        <div className="product">
          <div className="product-img">
            <img src={yellowWhite} alt="" />
          </div>
          <button>Buy now</button>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={DarkWhite} alt="alt" />
          </div>
          <button>Buy now</button>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={GreyDress} alt="alt" />
          </div>
          <button>Buy now</button>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={ClothingColloection} alt="alt" />
          </div>
          <button>Buy now</button>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={WhiteSuit} alt="alt" />
          </div>
          <button>Buy now</button>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={WhiteRed} alt="alt" />
          </div>
          <button>Buy now</button>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={BoardWhite} alt="alt" />
          </div>
          <button>Buy now</button>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={LadyTrouser} alt="alt" />
          </div>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
