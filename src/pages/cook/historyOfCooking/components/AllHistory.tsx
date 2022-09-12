import { useContext } from 'react';
import { HistoryOfCookingContext } from '../../../../context/HistoryOfCookingContext';
import useTimestampConvert from '../../../../hooks/useTimestampConvert';

const AllHistory = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);
  const displayDate = useTimestampConvert();

  const allHistoryList = historyOfCooking?.map((historyItem) => {
    const { day, month, year, atTime } = displayDate(historyItem.createdAt);

    return (
      <div key={historyItem.id}>
        <p>
          {historyItem.title} - {historyItem.amount} - {day}.{month}.{year}-{' '}
          {atTime} -{historyItem.nameOfMeal}
        </p>
      </div>
    );
  });

  return (
    <div>
      <h1>AllHistory</h1>
      {allHistoryList}
    </div>
  );
};

export default AllHistory;
