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

const sumList: SingleHistoryOfCooking[] = [];

const HistoryRange: React.FC = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);
  const summingTheSameNameHistoryItem = useSearchHisory();
  const [monthList, setMonthList] = useState<SingleHistoryOfCooking[]>([]);
  const [yearList, setYearList] = useState<SingleHistoryOfCooking[]>([]);
  const navigate = useNavigate();

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days after today and
    return current > moment().endOf('day');
  };

  const onChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
    if (dates) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
      // console.log(dateStrings);

      // Single day, month, year from datepicker
      const fromDatepickerDay = parseInt(dateStrings[0].slice(0, 2));
      const fromDatepickerMonth = parseInt(dateStrings[0].slice(3, 5));
      const fromDatepickerYear = parseInt(dateStrings[0].slice(6));
      const toDatepickerDay = parseInt(dateStrings[1].slice(0, 2));
      const toDatepickerMonth = parseInt(dateStrings[1].slice(3, 5));
      const toDatepickerYear = parseInt(dateStrings[1].slice(6));

      historyOfCooking?.forEach((historyItem) => {
        const historyItemTimestamp = historyItem.createdAt.seconds * 1000;
        const historyItemDay = new Date(historyItemTimestamp).getDate();
        const historyItemMonth = new Date(historyItemTimestamp).getMonth() + 1;
        const historyItemYear = new Date(historyItemTimestamp).getFullYear();

        if (
          historyItemDay >= fromDatepickerDay &&
          historyItemDay <= toDatepickerDay &&
          historyItemMonth >= fromDatepickerMonth &&
          historyItemMonth <= toDatepickerMonth &&
          historyItemYear >= fromDatepickerYear &&
          historyItemYear <= toDatepickerYear
        ) {
          const index = sumList.findIndex((sumItem) => {
            return sumItem.title === historyItem.title;
          });
          if (index === -1) {
            sumList.push({
              title: historyItem.title,
              amount: historyItem.amount,
              nameOfMeal: historyItem.nameOfMeal,
              createdAt: historyItem.createdAt,
              id: historyItem.id,
            });
          } else {
            sumList[index] = {
              title: sumList[index].title,
              amount: sumList[index].amount + historyItem.amount,
              nameOfMeal: sumList[index].nameOfMeal,
              createdAt: sumList[index].createdAt,
              id: sumList[index].id,
            };
          }
        }
      });
      navigate('/cook/history');
    } else {
      console.log('Clear');
    }
  };

  const handleSelectMonth = (dates: any, dateStrings: any) => {
    const singleDatepickerMonth = parseInt(dateStrings.slice(5));

    const [sumList] = summingTheSameNameHistoryItem();
    const sumMonthList: SingleHistoryOfCooking[] = [];

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

  const handleSelectYear = (dates: any, dateStrings: any) => {
    const singleDatepickerYear = parseInt(dateStrings.slice(0, 4));

    const [sumList] = summingTheSameNameHistoryItem();
    const sumYearList: SingleHistoryOfCooking[] = [];

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
          onChange={handleSelectMonth}
        />
        <DatePicker
          picker="year"
          disabledDate={disabledDate}
          onChange={handleSelectYear}
        />
        <RangePicker
          disabledDate={disabledDate}
          onChange={onChange}
          format="DD-MM-YYYY"
        />
      </Space>
      <NestedHistoryListsContext.Provider value={{ monthList, yearList }}>
        <Outlet />
      </NestedHistoryListsContext.Provider>
    </>
  );
};

export default HistoryRange;
