import { useContext } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';

const YearHistory = () => {
  const { yearList } = useContext(NestedHistoryListsContext);

  const displayYearList = yearList.map((item) => {
    return (
      <div key={item.id}>
        <p>
          {item.title} -{item.amount}
        </p>
      </div>
    );
  });

  return (
    <div>
      <h1>ThisYear</h1>
      {yearList.length ? displayYearList : <p>empty history</p>}
    </div>
  );
};

export default YearHistory;
