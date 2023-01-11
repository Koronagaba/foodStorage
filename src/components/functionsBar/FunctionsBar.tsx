import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DarkMode from '../darkMode/DarkMode';
import HandleRemoval from '../handleRemoval/HandleRemoval';
import './FunctionsBar.css';

const FunctionsBar = () => {
  return (
    <div className="functionsBar-container">
      <div className="functionsBar-inside">
        <DarkMode />
        <Routes>
          <Route path="/cook" element={<HandleRemoval />} />
        </Routes>
      </div>
    </div>
  );
};

export default FunctionsBar;
