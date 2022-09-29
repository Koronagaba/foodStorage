import { useContext } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';

import DisplayHistory from './DisplayHistory';

const MonthHistory = () => {
  const { matchedRangeHistoryList } = useContext(NestedHistoryListsContext);

  return <DisplayHistory displayList={matchedRangeHistoryList} />;
};

export default MonthHistory;
