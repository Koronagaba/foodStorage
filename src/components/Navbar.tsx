import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [stickyStyle, setStickyStyle] = useState("navbar");

  const activeLink = ({ isActive }: any) => ({ color: isActive ? "#fff" : "" });

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setStickyStyle("sticky sticky-opacity");
    } else {
      setStickyStyle("navbar");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={stickyStyle}>
      <nav>
        <Link to={"/cook"} className="logo">
          Let's cook with koro!
        </Link>
        <div>
          <NavLink to={"/cook"} style={activeLink}>
            Cook
          </NavLink>
          <NavLink to={"/createNewProduct"}  style={activeLink}>
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
