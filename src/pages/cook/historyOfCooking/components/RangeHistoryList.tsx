import { useContext } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';

const RangeHistoryList = () => {
  const { rangeList } = useContext(NestedHistoryListsContext);

  const displayRangeHistoryList = rangeList.map((item) => (
    <div key={item.id}>
      <p>
        {item.title} -{item.amount}
      </p>
    </div>
  ));
  return (
    <>
      RangeHistory
      {rangeList.length ? displayRangeHistoryList : <p>Empty history</p>}
    </>
  );
};

export default RangeHistoryList;
