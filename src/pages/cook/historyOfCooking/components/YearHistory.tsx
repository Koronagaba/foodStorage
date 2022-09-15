import { useContext } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';

const YearHistory = () => {
  const { yearList } = useContext(NestedHistoryListsContext);

  const displayYearList = yearList.map((item) => {
    return (
      <div key={item.id}>
        <p>
          {item.title} -{item.amount} -{item.nameOfMeal} -{item.date?.day}.
          {item.date?.month}.{item.date?.year}, {item.date?.atTime}
        </p>
      </div>
    );
  });

  return (
    <div>
      <h1>ThisYear</h1>
      {displayYearList}
    </div>
  );
};

export default YearHistory;
