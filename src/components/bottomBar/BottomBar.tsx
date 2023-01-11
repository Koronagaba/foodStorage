import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import './BottomBar.css';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

const BottomBar = () => {
  const [selectedPath, setSelectedPath] = useState('');
  const stylePath = {
    COOK: 'COOK',
    HISTORY: 'HISTORY',
    STOCK: 'STOCK',
    SHOPPINGLIST: 'SHOPPINGLIST',
  };

  useEffect(() => {
setSelectedPath(stylePath.COOK)
  }, [])

  return (
    <div className="bottomBar-container">
      <NavLink to={'/cook'} onClick={() => setSelectedPath(stylePath.COOK)}>
        <RestaurantOutlinedIcon
          fontSize="medium"
          className={classnames(`bottomBar-icon
            ${selectedPath === stylePath.COOK ? 'bottomBar-icon_clicked' : ''}
    
          }`)}
        />
      </NavLink>
      <NavLink to={'/stock'} onClick={() => setSelectedPath(stylePath.STOCK)}>
        <CottageOutlinedIcon
          fontSize="medium"
          className={classnames(`bottomBar-icon
            ${selectedPath === stylePath.STOCK ? 'bottomBar-icon_clicked' : ''}
          }`)}
        />
      </NavLink>
      <NavLink
        to={'/history'}
        onClick={() => setSelectedPath(stylePath.HISTORY)}
      >
        <CalendarTodayOutlinedIcon
          fontSize="medium"
          className={classnames(`bottomBar-icon
            ${
              selectedPath === stylePath.HISTORY ? 'bottomBar-icon_clicked' : ''
            }
          }`)}
        />
      </NavLink>
      <NavLink
        to={'/shoppingList'}
        onClick={() => setSelectedPath(stylePath.SHOPPINGLIST)}
      >
        <InventoryOutlinedIcon
          fontSize="medium"
          className={classnames(`bottomBar-icon
            ${
              selectedPath === stylePath.SHOPPINGLIST
                ? 'bottomBar-icon_clicked'
                : ''
            }
          }`)}
        />
      </NavLink>
    </div>
  );
};

export default BottomBar;
