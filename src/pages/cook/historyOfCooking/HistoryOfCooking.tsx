import { useContext, useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { HistoryOfCookingContext } from '../../../context/HistoryOfCookingContext';
import {
  MatchedRangeHistoryList,
  SingleHistoryList,
  SingleHistoryOfCooking,
} from '../../../types/type';

import './HistoryOfCooking.css';
import { NestedHistoryListsContext } from '../../../context/NestedHistoryListsContext';
import useTimestampConvert from '../../../hooks/useTimestampConvert';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import close from '../../../icons/close.svg';

const HistoryOfCooking: React.FC = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);

  const [monthList, setMonthList] = useState<SingleHistoryList[]>([]);
  const [yearList, setYearList] = useState<SingleHistoryList[]>([]);
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

  useEffect(() => {
    const sumRangeList: SingleHistoryOfCooking[] = [];
    const sumMatchedRangeList: MatchedRangeHistoryList[] = [];

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
          sumRangeList.push({
            title,
            amount,
            date: { day, month, year, atTime },
            createdAt,
            id,
            nameOfMeal,
          });

          // Adding a product of history from selected time interval with the same title
          const index = sumMatchedRangeList.findIndex((sumItem) => {
            return sumItem.title === historyItem.title;
          });
          if (index === -1) {
            sumMatchedRangeList.push({
              title: historyItem.title,
              amount: historyItem.amount,
              id: historyItem.id,
              details: false,
            });
          } else {
            sumMatchedRangeList[index] = {
              title: sumMatchedRangeList[index].title,
              amount: sumMatchedRangeList[index].amount + historyItem.amount,
              id: sumMatchedRangeList[index].id,
              details: false,
            };
          }
        }
      });
      setRangeHistoryList(sumRangeList);
      setMatchedRangeHistoryList(sumMatchedRangeList);
      navigate('/cook/history/rangeHistory');
    }
  }, [startDate, endDate]);

  const rangeDateHandler = (dates: Array<Date | null>) => {
    const [start, end] = dates;
    console.log(start, end);

    setStartDate(start);
    setEndDate(end);
  };

  const monthSelect = (dates: any, dateStrings: any) => {
    let sumMonthList: SingleHistoryList[] = [];
    if (dates) {
      const singleDatepickerMonth = parseInt(dateStrings.slice(5));

      historyOfCooking?.forEach((historyItem) => {
        const monthFromHistory =
          new Date(historyItem.createdAt.seconds * 1000).getMonth() + 1;

        if (singleDatepickerMonth === monthFromHistory) {
          const index = sumMonthList.findIndex(
            (monthItem) => monthItem.title === historyItem.title
          );

          if (index === -1) {
            sumMonthList.push({
              title: historyItem.title,
              amount: historyItem.amount,
              id: historyItem.id,
            });
          } else {
            sumMonthList[index] = {
              title: sumMonthList[index].title,
              amount: sumMonthList[index].amount + historyItem.amount,
              id: sumMonthList[index].id,
            };
          }
        }
      });

      setMonthList(sumMonthList);
      navigate('month');
    } else {
      console.log('Clear');
      setMonthList([]);
    }
  };

  const yearSelect = (dates: any, dateStrings: any) => {
    let sumYearList: SingleHistoryList[] = [];
    if (dates) {
      const singleDatepickerYear = parseInt(dateStrings.slice(0, 4));

      historyOfCooking?.forEach((historyItem) => {
        const yearFromHistory = new Date(
          historyItem.createdAt.seconds * 1000
        ).getFullYear();
        if (singleDatepickerYear === yearFromHistory) {
          const index = sumYearList.findIndex(
            (yearItem) => yearItem.title === historyItem.title
          );
          if (index === -1) {
            sumYearList.push({
              title: historyItem.title,
              amount: historyItem.amount,
              id: historyItem.id,
            });
          } else {
            sumYearList[index] = {
              title: sumYearList[index].title,
              amount: sumYearList[index].amount,
              id: sumYearList[index].id,
            };
          }
        }
      });
      setYearList(sumYearList);
      navigate('year');
    } else {
      console.log('Clear year');
      setYearList([]);
    }
  };

  const clearDatepickerField = () => {
    setStartDate(null);
    setEndDate(null);
    setMatchedRangeHistoryList([]);
  };

  return (
    <div className="datepicker-container">
      <div className="datepicker-wrapper">
        <div className="datepicker">
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={rangeDateHandler}
            dateFormat="dd/MM/yyyy"
            className="datepicker-input"
            placeholderText="Please select date..."
          ></DatePicker>
          <img
            src={close}
            alt="cancel datepicker input"
            className="cancel-datepicker-img"
            onClick={clearDatepickerField}
          />
        </div>
        <div className="space-beetwen"></div>
        <NestedHistoryListsContext.Provider
          value={{
            monthList,
            yearList,
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
