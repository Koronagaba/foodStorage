import { createContext } from 'react';
import { SingleHistoryOfCooking } from '../types/type';

interface HistoryCollection {
  monthList: SingleHistoryOfCooking[];
  yearList: SingleHistoryOfCooking[];
}

const initialValue = {
  monthList: [],
  yearList: [],
};

export const NestedHistoryListsContext =
  createContext<HistoryCollection>(initialValue);
