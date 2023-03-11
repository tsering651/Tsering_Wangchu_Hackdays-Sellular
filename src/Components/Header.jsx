import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../Styling/Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"

export default function Header() {
  return (
    <nav className="header">
      <img className="headerLogo" src="./shop.png" alt="logo" />
      <div className="headerSearch">
        <input type="text" className="headerSearch_input" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNav">
      <Link to="/" className="headerLink">
        <div className="headerOption">
          <span className="headerOptionLineOne">Hello,user</span>
          <span className="headerOptionLineTwo">login or logout</span>
        </div>
      </Link>

      <Link to="/" className="headerLink">
        <div className="headerOption">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">& orders</span>
        </div>
      </Link>

      <Link to="/" className="headerLink">
        <div className="headerOption">
          <span className="headerOptionLineOne">You</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
      </Link>
      </div>
      <Link to="/checkout" className="headerLink">
        <div className="headerOptionBasket">
          <ShoppingBasketIcon/>
          <span className="headerOptionLineTwo headerBasketCount">2</span>
        </div>
      </Link>
    </nav>
  );
}
