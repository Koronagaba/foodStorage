import { useEffect, useState, useRef, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TranslationContext } from '../context/TranslationContext';
import Hamburger from './Hamburger';

import './Navbar.css';

const Navbar = () => {
  const [stickyStyle, setStickyStyle] = useState('navbar');
  const [toggleOptions, setToggleOptions] = useState(false);
  const { isEnglish } = useContext(TranslationContext);

  const ref: any = useRef();
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

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (toggleOptions && ref.current && !ref.current.contains(e.target)) {
        setToggleOptions(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [toggleOptions]);

  const conditionalStyles = () => {
    if (stickyStyle === 'navbar') {
      return 'inside-options';
    }
  };

  return (
    <>
      <div className={`navigation ${stickyStyle}`}>
        <nav>
          <Link to={'/cook'} className="logo">
            {isEnglish ? "Let's cook with koro!" : 'Gotuj razem z koro!'}
          </Link>
          <div>
            <div className={`sroptions`}>
              <NavLink
                to={'/cook'}
                style={activeLink}
                onClick={() => setToggleOptions(false)}
              >
                {isEnglish ? 'Cook' : 'Gotuj'}
              </NavLink>
              <NavLink
                to={'/createNewProduct'}
                style={activeLink}
                onClick={() => setToggleOptions(false)}
              >
                {isEnglish ? 'Create' : 'Utwórz'}
              </NavLink>
              <NavLink
                to={'/stock'}
                style={activeLink}
                onClick={() => setToggleOptions(false)}
              >
                {isEnglish ? 'Stock' : 'Magazyn'}
              </NavLink>
              <NavLink
                to={'/shoppingList'}
                style={activeLink}
                onClick={() => setToggleOptions(false)}
              >
                {isEnglish ? 'Shopping list' : 'Lista zakupów'}
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      <div ref={ref}>
        <Hamburger
          toggleOptions={toggleOptions}
          setToggleOptions={setToggleOptions}
          activeLink={activeLink}
        />
      </div>
    </>
  );
};

export default Navbar;
