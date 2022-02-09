import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const activeStyle = { color: "#fff" };

  const activeLink = ({ isActive }) => (isActive ? activeStyle : null);

  return (
    <div className="navbar">
      <nav>
        <Link to={"/"} className="logo">
          Let's cook with koro!
        </Link>
        <div>
          <NavLink to={"/"} style={activeLink}>
            Cook
          </NavLink>
          <NavLink to={"/createProduct"} style={activeLink}>
            Create
          </NavLink>
          <NavLink to={"/stock"} style={activeLink}>
            Stock
          </NavLink>
          <NavLink to={"/shoppingList"} style={activeLink}>
            Shopping List
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
