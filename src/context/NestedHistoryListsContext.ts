import { createContext } from 'react';
import { MatchedRangeHistoryList, SingleHistoryList, SingleHistoryOfCooking } from '../types/type';

interface HistoryCollection {
  monthList: SingleHistoryList[];
  yearList: SingleHistoryList[];
  rangeHistoryList: SingleHistoryOfCooking[];
  matchedRangeHistoryList:  MatchedRangeHistoryList[];
}

const initialValue = {
  monthList: [],
  yearList: [],
  rangeHistoryList: [],
  matchedRangeHistoryList: []
};

export const NestedHistoryListsContext =
  createContext<HistoryCollection>(initialValue);
