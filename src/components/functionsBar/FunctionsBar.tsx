import React from 'react';
import { useNavigate } from 'react-router-dom';
import DarkMode from '../darkMode/DarkMode';
import HandleRemoval from '../handleRemoval/HandleRemoval';
import MultiLanguages from '../multiLanguages/MultiLanguages';
import calendar_month from '../../icons/calendar_month.svg';
import './FunctionsBar.css';

const FunctionsBar = () => {
  const navigate = useNavigate();

  return (
    <div className="functionsBar-container">
      <div className="functionsBar-inside">
        <DarkMode />
        {window.location.pathname === '/cook/history' ? null : (
          <img
            src={calendar_month}
            alt="calendar icon"
            className="calendar-img"
            onClick={() => navigate('/cook/history')}
          />
        )}

        {window.location.pathname === '/cook' ? <HandleRemoval /> : null}
        <MultiLanguages />
      </div>
    </div>
  );
};

export default FunctionsBar;
