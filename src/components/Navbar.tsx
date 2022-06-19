import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [stickyStyle, setStickyStyle] = useState('navbar');
  const [toggleClass, setToggleClass] = useState(false);

  const activeLink = ({ isActive }: any) => ({ color: isActive ? '#fff' : '' });

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setStickyStyle('sticky');
    } else {
      setStickyStyle('navbar');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleToggle = () => {
    setToggleClass(!toggleClass);
  };

  return (
    <div className={`navigation ${stickyStyle}`}>
      <nav>
        <Link to={'/cook'} className="logo">
          Let's cook with koro!
        </Link>
        <div onClick={handleToggle} className="hamburger-icon">
          <div className={`icon-1 ${toggleClass ? 'icon-a' : null}`}></div>
          <div className={`icon-2 ${toggleClass ? 'icon-b' : null} `}></div>
          <div className={`icon-3 ${toggleClass ? 'icon-c' : null} `}></div>
          <div className="clear"></div>
        </div>
        <div className={`options ${toggleClass ? 'show-options' : null} `}>
          <div className="inside-options">
            <NavLink to={'/cook'} style={activeLink}>
              Cook
            </NavLink>
            <NavLink to={'/createNewProduct'} style={activeLink}>
              Create
            </NavLink>
            <NavLink to={'/stock'} style={activeLink}>
              Stock
            </NavLink>
            <NavLink to={'/shoppingList'} style={activeLink}>
              Shopping List
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
