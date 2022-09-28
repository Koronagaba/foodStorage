import { createContext } from 'react';
import { MatchedRangeHistoryList, SingleHistoryOfCooking } from '../types/type';

interface HistoryCollection {
  rangeHistoryList: SingleHistoryOfCooking[];
  matchedRangeHistoryList:  MatchedRangeHistoryList[];
}

const initialValue = {
  rangeHistoryList: [],
  matchedRangeHistoryList: []
};

export const NestedHistoryListsContext =
  createContext<HistoryCollection>(initialValue);
