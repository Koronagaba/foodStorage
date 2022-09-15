import { useContext } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';

const MonthHistory = () => {
  const { monthList } = useContext(NestedHistoryListsContext);

  const displayMonthList = monthList.map((item) => (
    <div key={item.id}>
      <p>
        {item.title} -{item.amount} 
      </p>
    </div>
  ));

  return <div>{monthList.length ? displayMonthList : <p>List is empty</p>}</div>;
};

export default MonthHistory;
