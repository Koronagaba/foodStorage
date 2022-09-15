import { useContext } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';

const RangeHistoryList = () => {
  const { rangeList } = useContext(NestedHistoryListsContext);
  
  const displayRangeHistoryList = rangeList.map((item) => (
    <div key={item.id}>
      <p>
        {item.title} -{item.amount} -{item.nameOfMeal} -{item.date?.day}.
        {item.date?.month}.{item.date?.year}, {item.date?.atTime}
      </p>
    </div>
  ));
  return <>
  RangeHistory
  {displayRangeHistoryList}</>;
};

export default RangeHistoryList;
