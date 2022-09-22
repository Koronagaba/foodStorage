import { useContext, useState } from 'react';
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

let sumMonthList: SingleHistoryList[] = [];
let sumYearList: SingleHistoryList[] = [];
let sumRangeList: SingleHistoryOfCooking[] = [];
let sumMatchedRangeList: MatchedRangeHistoryList[] = [];

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
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const displayDate = useTimestampConvert();
  const navigate = useNavigate();

  const rangeDateHandler = (value: any) => {
    setStartDate(value[0]);
    setEndDate(value[1]);
    // Calculation datepicker Days from 01/01/1970 - rounded up
    const fromDatepickerDaysFrom1970 = Math.ceil(value[0].getTime() / 86400000);
    const toDatepickerDaysFrom1970 = Math.ceil(value[1].getTime() / 86400000);

    historyOfCooking?.forEach((historyItem) => {
      const { title, amount, id, nameOfMeal, createdAt } = historyItem;
      const { day, month, year, atTime } = displayDate(historyItem.createdAt);

      // Calculation historyItem Days from 1/1/1970 -  rounded up
      const historyItemDaysFrom1970 = Math.floor(
        historyItem.createdAt.seconds / 86400
      );
      console.log(historyItemDaysFrom1970);

      if (
        historyItemDaysFrom1970 >= fromDatepickerDaysFrom1970 &&
        historyItemDaysFrom1970 <= toDatepickerDaysFrom1970
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
    sumRangeList = [];
    setMatchedRangeHistoryList(sumMatchedRangeList);
    sumMatchedRangeList = [];
    navigate('/cook/history/rangeHistory');
  };

  const monthSelect = (dates: any, dateStrings: any) => {
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
      sumMonthList = [];
      navigate('month');
    } else {
      console.log('Clear');
      sumMonthList = [];
      setMonthList([]);
    }
  };

  const yearSelect = (dates: any, dateStrings: any) => {
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
      sumYearList = [];
      navigate('year');
    } else {
      console.log('Clear year');
      sumYearList = [];
      setYearList([]);
    }
  };

  const clearDatepickerField = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    // setRangeHistoryList([]);
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
