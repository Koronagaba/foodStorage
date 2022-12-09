import { useContext, useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { HistoryOfCookingContext } from '../../../context/HistoryOfCookingContext';
import {
  MatchedRangeHistoryList, 
  SingleHistoryOfCooking,
} from '../../../types/type';

import './HistoryOfCooking.css';
import { NestedHistoryListsContext } from '../../../context/NestedHistoryListsContext';
import useTimestampConvert from '../../../hooks/useTimestampConvert';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HistoryOfCooking: React.FC = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);

  const [rangeHistoryList, setRangeHistoryList] = useState<
    SingleHistoryOfCooking[]
  >([]);
  const [matchedRangeHistoryList, setMatchedRangeHistoryList] = useState<
    MatchedRangeHistoryList[]
  >([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const displayDate = useTimestampConvert();
  const navigate = useNavigate();

  const matchedRangeList: MatchedRangeHistoryList[] = [];
  const rangeList: SingleHistoryOfCooking[] = [];

  useEffect(() => {
    if (startDate && endDate) {
      // Calculation datepicker Days from 01/01/1970 - rounded up
      const datePickerFrom = Math.ceil(startDate.getTime() / 86400000);

      const datePickerTo = Math.ceil(endDate.getTime() / 86400000);

      historyOfCooking?.forEach((historyItem) => {
        const { title, amount, id, nameOfMeal, createdAt } = historyItem;
        const { day, month, year, atTime } = displayDate(historyItem.createdAt);

        // Calculation historyItem Days from 1/1/1970 -  rounded up
        const historyItemDaysFrom1970 = Math.floor(
          historyItem.createdAt.seconds / 86400
        );

        if (
          historyItemDaysFrom1970 >= datePickerFrom &&
          historyItemDaysFrom1970 <= datePickerTo
        ) {
          // Adding a product of history from selected time interval
          rangeList.push({
            title,
            amount,
            date: { day, month, year, atTime },
            createdAt,
            id,
            nameOfMeal,
          });

          // Adding a product of history from selected time interval with the same title
          const index = matchedRangeList.findIndex((sumItem) => {
            return sumItem.title === historyItem.title;
          });
          if (index === -1) {
            matchedRangeList.push({
              title: historyItem.title,
              amount: historyItem.amount,
              id: historyItem.id,
              details: false,
            });
          } else {
            matchedRangeList[index] = {
              title: matchedRangeList[index].title,
              amount: matchedRangeList[index].amount + historyItem.amount,
              id: matchedRangeList[index].id,
              details: false,
            };
          }
        }
      });
      setRangeHistoryList(rangeList);
      setMatchedRangeHistoryList(matchedRangeList);
      navigate('/cook/history/rangeHistory');
    }
  }, [startDate, endDate]);

  const rangeDateHandler = (dates: Array<Date | null>) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  const monthSelect = () => {
    historyOfCooking?.forEach((historyItem) => {
      const { title, amount, id, nameOfMeal, createdAt } = historyItem;
      const { day, month, year, atTime } = displayDate(historyItem.createdAt);
      const currentMonth = new Date().getMonth() + 1;
      const monthFromHistory =
        new Date(historyItem.createdAt.seconds * 1000).getMonth() + 1;
      console.log(currentMonth, monthFromHistory);

      if (currentMonth === monthFromHistory) {
        rangeList.push({
          title,
          amount,
          id,
          nameOfMeal,
          createdAt,
          date: { day, month, year, atTime },
        });

        const index = matchedRangeList.findIndex(
          (monthItem) => monthItem.title === historyItem.title
        );

        if (index === -1) {
          matchedRangeList.push({
            title: historyItem.title,
            amount: historyItem.amount,
            id: historyItem.id,
            details: false,
          });
        } else {
          matchedRangeList[index] = {
            title: matchedRangeList[index].title,
            amount: matchedRangeList[index].amount + historyItem.amount,
            id: matchedRangeList[index].id,
            details: false,
          };
        }
      }
      setRangeHistoryList(rangeList);
      setMatchedRangeHistoryList(matchedRangeList);
      navigate(`month_${monthFromHistory}`);
    });
  };

  const yearSelect = () => {
    historyOfCooking?.forEach((historyItem) => {
      const { day, month, year, atTime } = displayDate(historyItem.createdAt);
      const currentYear = new Date().getFullYear();

      const yearFromHistory = new Date(
        historyItem.createdAt.seconds * 1000
      ).getFullYear();

      if (currentYear === yearFromHistory) {
        rangeList.push({
          title: historyItem.title,
          amount: historyItem.amount,
          id: historyItem.id,
          createdAt: historyItem.createdAt,
          nameOfMeal: historyItem.nameOfMeal,
          date: { day, month, year, atTime },
        });

        const index = matchedRangeList.findIndex(
          (yearItem) => yearItem.title === historyItem.title
        );
        if (index === -1) {
          matchedRangeList.push({
            title: historyItem.title,
            amount: historyItem.amount,
            id: historyItem.id,
            details: false,
          });
        } else {
          matchedRangeList[index] = {
            title: matchedRangeList[index].title,
            amount: matchedRangeList[index].amount + historyItem.amount,
            id: matchedRangeList[index].id,
            details: false,
          };
        }
      }
      setRangeHistoryList(rangeList);
      setMatchedRangeHistoryList(matchedRangeList);
      navigate(`year_${yearFromHistory}`);
    });
  };

  const clearDatepickerField = () => {
    setStartDate(null);
    setEndDate(null);
    setMatchedRangeHistoryList([]);
    navigate('/cook/history');
  };

  return (
    <div className="datepicker-container">
      <div className="datepicker-wrapper">
        <div className="datepicker-inner">
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={rangeDateHandler}
            dateFormat="dd/MM/yyyy"
            className="datepicker"
            placeholderText="Please select date..."
            inline
          ></DatePicker>
          <div className="btns-datepicker">
            <button onClick={monthSelect}>Month</button>
            <button onClick={yearSelect}>Year</button>
            <button onClick={clearDatepickerField}>Clear</button>
          </div>
        </div>

        <div className="space-beetwen"></div>

        <NestedHistoryListsContext.Provider
          value={{
            rangeHistoryList,
            matchedRangeHistoryList,
          }}
        >
          <Outlet />
        </NestedHistoryListsContext.Provider>
      </div>
    </div>
  );
};

export default HistoryOfCooking;
