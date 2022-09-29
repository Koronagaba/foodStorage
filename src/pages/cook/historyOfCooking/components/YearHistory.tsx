import { useContext } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';

import DisplayHistory from './DisplayHistory';

const YearHistory = () => {
  const { matchedRangeHistoryList } = useContext(NestedHistoryListsContext);

  return <DisplayHistory displayList={matchedRangeHistoryList} />;
};

export default YearHistory;
