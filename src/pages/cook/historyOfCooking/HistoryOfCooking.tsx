import { useContext, useState } from 'react';
import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';
import { useNavigate, Outlet } from 'react-router-dom';
import { HistoryOfCookingContext } from '../../../context/HistoryOfCookingContext';
import { SingleHistoryList } from '../../../types/type';

import './HistoryOfCooking.css';
import { NestedHistoryListsContext } from '../../../context/NestedHistoryListsContext';
import useTimestampConvert from '../../../hooks/useTimestampConvert';

const { RangePicker } = DatePicker;

let sumMonthList: SingleHistoryList[] = [];
let sumYearList: SingleHistoryList[] = [];
let sumRangeList: SingleHistoryList[] = [];

const HistoryRange: React.FC = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);

  const [monthList, setMonthList] = useState<SingleHistoryList[]>([]);
  const [yearList, setYearList] = useState<SingleHistoryList[]>([]);
  const [rangeList, setRangeList] = useState<SingleHistoryList[]>([]);
  const displayDate = useTimestampConvert();
  const navigate = useNavigate();

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days after today and
    return current > moment().endOf('day');
  };

  const rangeDateSelect: RangePickerProps['onChange'] = (
    dates,
    dateStrings
  ) => {
    if (dates) {
      // console.log('From: ', dates[0], ', to: ', dates[1]);
      // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);

      // Single day, month, year from datepicker
      const fromDatepickerDay = parseInt(dateStrings[0].slice(0, 2));
      const fromDatepickerMonth = parseInt(dateStrings[0].slice(3, 5));
      const fromDatepickerYear = parseInt(dateStrings[0].slice(6));
      const toDatepickerDay = parseInt(dateStrings[1].slice(0, 2));
      const toDatepickerMonth = parseInt(dateStrings[1].slice(3, 5));
      const toDatepickerYear = parseInt(dateStrings[1].slice(6));

      historyOfCooking?.forEach((historyItem) => {
        const { day, month, year } = displayDate(historyItem.createdAt);

        // const historyItemTimestamp = historyItem.createdAt.seconds * 1000;
        // const historyItemDay = new Date(historyItemTimestamp).getDate();
        // const historyItemMonth = new Date(historyItemTimestamp).getMonth() + 1;
        // const historyItemYear = new Date(historyItemTimestamp).getFullYear();
        // const atTime = new Date(historyItemTimestamp).toLocaleTimeString()

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
    } else {
      console.log('Clear');
      sumRangeList = [];
      setRangeList([]);
    }
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
      setMonthList([])
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
      <Space direction="vertical" size={12}>
        <DatePicker
          picker="month"
          disabledDate={disabledDate}
          onChange={monthSelect}
        />
        <DatePicker
          picker="year"
          disabledDate={disabledDate}
          onChange={yearSelect}
        />
        <RangePicker
          disabledDate={disabledDate}
          onChange={rangeDateSelect}
          format="DD-MM-YYYY"
        />
      </Space>
      <NestedHistoryListsContext.Provider
        value={{ monthList, yearList, rangeList }}
      >
        <Outlet />
      </NestedHistoryListsContext.Provider>
    </>
  );
};

export default HistoryRange;
