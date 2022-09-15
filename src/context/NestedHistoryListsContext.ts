import { createContext } from 'react';
import { SingleHistoryList } from '../types/type';

interface HistoryCollection {
  monthList: SingleHistoryList[];
  yearList: SingleHistoryList[];
  rangeList: SingleHistoryList[];
}

const initialValue = {
  monthList: [],
  yearList: [],
  rangeList: [],
};

export const NestedHistoryListsContext =
  createContext<HistoryCollection>(initialValue);
