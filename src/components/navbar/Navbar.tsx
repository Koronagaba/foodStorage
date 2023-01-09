import { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Hamburger from '../Hamburger';

import './Navbar.css';

const Navbar = () => {
  const [stickyStyle, setStickyStyle] = useState('navbar');
  const [toggleOptions, setToggleOptions] = useState(false);

  const { t } = useTranslation();

  const hamburgerRef = useRef<HTMLDivElement>(null);
  const activeLink = ({ isActive }: any) => ({ color: isActive ? '#fff' : '' });

  const handleScroll = () => {
    if (window.scrollY > 10) {
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
      if (
        toggleOptions &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setToggleOptions(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [toggleOptions]);

  return (
    <>
      <div className={`navigation ${stickyStyle}`}>
        <nav>
          <h1 className="logo">{t('welcome')}</h1>
          <div>
            <div className={`options`}>
              <NavLink
                to={'/cook'}
                style={activeLink}
                onClick={() => setToggleOptions(false)}
              >
                {t('cook')}
              </NavLink>
              {/* <NavLink
                to={'/createNewProduct'}
                style={activeLink}
                onClick={() => setToggleOptions(false)}
              >
                {t('create')}
              </NavLink> */}
              <NavLink
                to={'/stock'}
                style={activeLink}
                onClick={() => setToggleOptions(false)}
              >
                {t('stock')}
              </NavLink>
              <NavLink
                to={'/shoppingList'}
                style={activeLink}
                onClick={() => setToggleOptions(false)}
              >
                {t('shopping_list')}
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      <div ref={hamburgerRef}>
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
