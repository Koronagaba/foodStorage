import { useContext } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';

const MonthHistory = () => {
  const { monthList } = useContext(NestedHistoryListsContext);

  const displayMonthList = monthList.map((item) => (
    <div key={item.id}>
      <p>
        {item.title} -{item.amount} -{item.nameOfMeal} -{item.date?.day}.
        {item.date?.month}.{item.date?.year}, {item.date?.atTime}
      </p>
    </div>
  ));

  return <div>{displayMonthList}</div>;
};

export default MonthHistory;
