import { createContext } from 'react';
import { SingleHistoryOfCooking } from '../types/type';

interface HistoryCollection {
  monthList: SingleHistoryOfCooking[];
  yearList: SingleHistoryOfCooking[];
  rangeList: SingleHistoryOfCooking[];
}

const initialValue = {
  monthList: [],
  yearList: [],
  rangeList: [],
};

export const NestedHistoryListsContext =
  createContext<HistoryCollection>(initialValue);
