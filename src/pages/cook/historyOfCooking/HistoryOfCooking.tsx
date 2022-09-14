import { useNavigate, Outlet } from 'react-router-dom';

import HistoryRange from './components/HistoryRange';
import './HistoryOfCooking.css';

const HistoryOfCooking = () => {
  const navigate = useNavigate();

  const allHistoryDownload = () => {
    navigate('/cook/history/allHistory');
  };

  const downloadYearHistory = () => {
    navigate('thisYear');
  };
  const downloadTodayHistory = () => {
    navigate('today');
  };

  return (
    <div className="classForAntd">
      <div>
        <h3>History of Cooking</h3>
        <button onClick={allHistoryDownload}>All history</button>
        <button onClick={downloadYearHistory}>This Year</button>
        {/* <button onClick={yearHistoryDownload}>This Month</button> */}
        <button onClick={downloadTodayHistory}>Today</button>
      </div>
      <br />
      <HistoryRange />
      <Outlet />
    </div>
  );
};

export default HistoryOfCooking;
