import { useContext } from 'react';
import { HistoryOfCookingContext } from '../../../../context/HistoryOfCookingContext';
import useTimestampConvert from '../../../../hooks/useTimestampConvert';

const AllHistory = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);
  const displayDate = useTimestampConvert();

    const allHistoryList = historyOfCooking?.map((historyItem) => {
      const { date, atTime } = displayDate(historyItem.createdAt);

      return (
        <>
          <p>
            {historyItem.title} - {historyItem.amount} - {date}, {atTime} -
            {historyItem.nameOfMeal}
          </p>
        </>
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
