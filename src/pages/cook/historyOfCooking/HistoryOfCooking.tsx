import { useContext, useState } from 'react';

import { useNavigate, Outlet } from 'react-router-dom';
import { HistoryOfCookingContext } from '../../../context/HistoryOfCookingContext';
import { SingleHistoryList } from '../../../types/type';

import './HistoryOfCooking.css';
import { NestedHistoryListsContext } from '../../../context/NestedHistoryListsContext';
import useTimestampConvert from '../../../hooks/useTimestampConvert';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

let sumMonthList: SingleHistoryList[] = [];
let sumYearList: SingleHistoryList[] = [];
let sumRangeList: SingleHistoryList[] = [];

const HistoryRange: React.FC = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);

  const [monthList, setMonthList] = useState<SingleHistoryList[]>([]);
  const [yearList, setYearList] = useState<SingleHistoryList[]>([]);
  const [rangeList, setRangeList] = useState<SingleHistoryList[]>([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const displayDate = useTimestampConvert();
  const navigate = useNavigate();

  const dateHandler = (value: any) => {
    setStartDate(value[0]);
    setEndDate(value[1]);
    const fromDatepickerDay = value[0].getDate();
    const fromDatepickerMonth = value[0].getMonth() + 1;
    const fromDatepickerYear = value[0].getFullYear();
    const toDatepickerDay = value[1].getDate();
    const toDatepickerMonth = value[1].getMonth() + 1;
    const toDatepickerYear = value[1].getFullYear();

    historyOfCooking?.forEach((historyItem) => {
      const { day, month, year } = displayDate(historyItem.createdAt);

      if (
        day >= fromDatepickerDay &&
        day <= toDatepickerDay &&
        month >= fromDatepickerMonth &&
        month <= toDatepickerMonth &&
        year >= fromDatepickerYear &&
        year <= toDatepickerYear
      ) {
        const index = sumRangeList.findIndex((sumItem) => {
          return sumItem.title === historyItem.title;
        });
        if (index === -1) {
          sumRangeList.push({
            title: historyItem.title,
            amount: historyItem.amount,
            id: historyItem.id,
          });
        } else {
          sumRangeList[index] = {
            title: sumRangeList[index].title,
            amount: sumRangeList[index].amount + historyItem.amount,
            id: sumRangeList[index].id,
          };
        }
      }
    });
    setRangeList(sumRangeList);
    sumRangeList = [];
    navigate('/cook/history/rangeHistory');

    // //if clear
    // console.log('Clear');
    // sumRangeList = [];
    // setRangeList([]);
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

  return (
    <>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={dateHandler}
        dateFormat="dd/MM/yyyy"
      />
      <NestedHistoryListsContext.Provider
        value={{ monthList, yearList, rangeList }}
      >
        <Outlet />
      </NestedHistoryListsContext.Provider>
    </>
  );
};

export default HistoryRange;
