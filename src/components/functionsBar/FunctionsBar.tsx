import React from 'react';
import DarkMode from '../darkMode/DarkMode';
import HandleRemoval from '../handleRemoval/HandleRemoval';
import './FunctionsBar.css';

const FunctionsBar = () => {
  return (
    <div className="functionsBar-container">
      <div className="functionsBar-inside">
        <DarkMode />
        {window.location.pathname === '/cook' ? <HandleRemoval /> : null}
      </div>
    </div>
  );
};

export default FunctionsBar;
