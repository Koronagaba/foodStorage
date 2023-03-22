import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Navbar.css';
import MultiLanguages from '../multiLanguages/MultiLanguages';
import logo_no_background from '../../icons/logo_no_background.png'

const Navbar = () => {
  const [stickyStyle, setStickyStyle] = useState('navbar');

  const { t } = useTranslation();

  const hamburgerRef = useRef<HTMLDivElement>(null);
  const activeLink = ({ isActive }: any) => ({
    color: isActive ? '#b69033' : '',
  });

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

  return (
    <>
      <div className={`navigation ${stickyStyle}`}>
        <nav>
          {/* <h1 className="logo">{t('welcome')}</h1> */}
          <h1 className="logo">
            <img src={logo_no_background} alt="Logo: 'Let's cook, Senior Forest Home" height={50} />
          </h1>
  
          <div>
            <div className={`options`}>
              <NavLink to={'/cook'} style={activeLink}>
                {t('cook')}
              </NavLink>
              <NavLink to={'/stock'} style={activeLink}>
                {t('stock')}
              </NavLink>
              <NavLink to={'/shoppingList'} style={activeLink}>
                {t('shopping_list')}
              </NavLink>
              <NavLink to={'/history'} style={activeLink}>
                {t('history')}
              </NavLink>
            </div>
          </div>
          <MultiLanguages />
        </nav>
      </div>
      <div ref={hamburgerRef}></div>
    </>
  );
};

export default Navbar;
