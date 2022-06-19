import { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [stickyStyle, setStickyStyle] = useState('navbar');
  const [toggleOptions, setToggleOptions] = useState(false);

  const ref: any = useRef()
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
    setToggleOptions(!toggleOptions);
  };


  useEffect(() => {
    const checkIfClickedOutside = (e:any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (toggleOptions && ref.current && !ref.current.contains(e.target)) {
        setToggleOptions(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [toggleOptions])
 


  return (
    <div  className={`navigation ${stickyStyle}`}>
      <nav>
        <Link to={'/cook'} className="logo">
          Let's cook with koro!
        </Link>
        <div ref={ref} >
        <div onClick={handleToggle} className="hamburger-icon">
          <div className={`icon-1 ${toggleOptions ? 'icon-a' : null}`}></div>
          <div className={`icon-2 ${toggleOptions ? 'icon-b' : null} `}></div>
          <div className={`icon-3 ${toggleOptions ? 'icon-c' : null} `}></div>
          <div className="clear"></div>
        </div>
        <div className={`options ${toggleOptions ? 'show-options' : null} `}>
          <div className="inside-options">
            <NavLink
              to={'/cook'}
              style={activeLink}
              onClick={() => setToggleOptions(false)}
            >
              Cook
            </NavLink>
            <NavLink
              to={'/createNewProduct'}
              style={activeLink}
              onClick={() => setToggleOptions(false)}
            >
              Create
            </NavLink>
            <NavLink
              to={'/stock'}
              style={activeLink}
              onClick={() => setToggleOptions(false)}
            >
              Stock
            </NavLink>
            <NavLink
              to={'/shoppingList'}
              style={activeLink}
              onClick={() => setToggleOptions(false)}
            >
              Shopping List
            </NavLink>
          </div>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
