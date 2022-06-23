import { useContext, FC, Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { TranslationContext } from '../context/TranslationContext';

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
  const { isEnglish } = useContext(TranslationContext);

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
    </>
  );
};

export default Hamburger;
