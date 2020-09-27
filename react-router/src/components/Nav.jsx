import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const token = localStorage.getItem("token");
  if (token && token !== "") {
    return (
      <nav>
        <h3>Nav</h3>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/secret">
            <li>Secret</li>
          </Link>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <h3>Nav</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
