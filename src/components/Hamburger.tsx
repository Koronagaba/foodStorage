import { FC, Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

interface HamburgerProps {
  toggleOptions: boolean;
  setToggleOptions: Dispatch<SetStateAction<boolean>>;
  activeLink: any;
}

const Hamburger: FC<HamburgerProps> = ({
  toggleOptions,
  setToggleOptions,
  activeLink,
}) => {
  const handleToggle = () => {
    setToggleOptions(!toggleOptions);
  };
  return (
    <>
      <div onClick={handleToggle} className="hamburger-icon">
        <div className={`icon-1 ${toggleOptions ? 'icon-a' : null}`}></div>
        <div className={`icon-2 ${toggleOptions ? 'icon-b' : null} `}></div>
        <div className={`icon-3 ${toggleOptions ? 'icon-c' : null} `}></div>
        <div className="clear"></div>
      </div>
      <div className={`options ${toggleOptions ? 'show-options' : null} `}>
        <div className="inside-hamburger">
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
    </>
  );
};

export default Hamburger;
