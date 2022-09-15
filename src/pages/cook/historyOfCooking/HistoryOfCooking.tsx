import { useContext, useState } from 'react';
import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';
import { useNavigate, Outlet } from 'react-router-dom';
import { HistoryOfCookingContext } from '../../../context/HistoryOfCookingContext';
import { SingleHistoryOfCooking } from '../../../types/type';
import useSearchHisory from '../../../hooks/useSearchHistory';
import './HistoryOfCooking.css';
import { NestedHistoryListsContext } from '../../../context/NestedHistoryListsContext';
import useTimestampConvert from '../../../hooks/useTimestampConvert';

const { RangePicker } = DatePicker;

// const range = (start: number, end: number) => {
//   const result = [];
//   for (let i = start; i < end; i++) {
//     result.push(i);
//   }
//   return result;
// };

// const disabledDateTime = () => ({
//   disabledHours: () => range(0, 24).splice(4, 20),
//   disabledMinutes: () => range(30, 60),
//   disabledSeconds: () => [55, 56],
// });

// const disabledRangeTime: RangePickerProps['disabledTime'] = (_, type) => {
//   if (type === 'start') {
//     return {
//       disabledHours: () => range(0, 60).splice(4, 20),
//       disabledMinutes: () => range(30, 60),
//       disabledSeconds: () => [55, 56],
//     };
//   }
//   return {
//     disabledHours: () => range(0, 60).splice(20, 4),
//     disabledMinutes: () => range(0, 31),
//     disabledSeconds: () => [55, 56],
//   };
// };

const sumMonthList: SingleHistoryOfCooking[] = [];
const sumYearList: SingleHistoryOfCooking[] = [];
let sumRangeList: SingleHistoryOfCooking[] = [];

const HistoryRange: React.FC = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);
  const summingTheSameNameHistoryItem = useSearchHisory();
  const [monthList, setMonthList] = useState<SingleHistoryOfCooking[]>([]);
  const [yearList, setYearList] = useState<SingleHistoryOfCooking[]>([]);
  const [rangeList, setRangeList] = useState<SingleHistoryOfCooking[]>([]);
  const displayDate = useTimestampConvert();
  const navigate = useNavigate();

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days after today and
    return current > moment().endOf('day');
  };

  const rangeDateSelect: RangePickerProps['onChange'] = (dates, dateStrings) => {
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
        const { day, month, year, atTime } = displayDate(historyItem.createdAt);

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
              nameOfMeal: historyItem.nameOfMeal,
              createdAt: historyItem.createdAt,
              id: historyItem.id,
              date: { day, month, year, atTime },
            });
          } else {
            sumRangeList[index] = {
              title: sumRangeList[index].title,
              amount: sumRangeList[index].amount + historyItem.amount,
              nameOfMeal: sumRangeList[index].nameOfMeal,
              createdAt: sumRangeList[index].createdAt,
              id: sumRangeList[index].id,
              date: { day, month, year, atTime },
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
    const singleDatepickerMonth = parseInt(dateStrings.slice(5));

    const [sumList] = summingTheSameNameHistoryItem();
   

    sumList.forEach((item) => {
      const monthFromHistory =
        new Date(item.createdAt.seconds * 1000).getMonth() + 1;
      if (singleDatepickerMonth === monthFromHistory) {
        sumMonthList.push({
          title: item.title,
          amount: item.amount,
          createdAt: item.createdAt,
          nameOfMeal: item.nameOfMeal,
          id: item.id,
          date: item.date,
        });
      }
    });
    setMonthList(sumMonthList);
    navigate('month');
  };

  const yearSelect = (dates: any, dateStrings: any) => {
    const singleDatepickerYear = parseInt(dateStrings.slice(0, 4));

    const [sumList] = summingTheSameNameHistoryItem();


    sumList.forEach((item) => {
      const yearFromHistory = new Date(
        item.createdAt.seconds * 1000
      ).getFullYear();
      if (singleDatepickerYear === yearFromHistory) {
        sumYearList.push({
          title: item.title,
          amount: item.amount,
          createdAt: item.createdAt,
          nameOfMeal: item.nameOfMeal,
          id: item.id,
          date: item.date,
        });
      }
    });
    setYearList(sumYearList);
    navigate('year');
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
