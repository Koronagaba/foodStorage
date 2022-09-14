import { useContext } from 'react';
import { HistoryOfCookingContext } from '../context/HistoryOfCookingContext';
import { SingleHistoryOfCooking } from '../types/type';
import useTimestampConvert from './useTimestampConvert';

const useSearchHisory = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);

  const displayDate = useTimestampConvert();

  const sumList: SingleHistoryOfCooking[] = [];

  const summingTheSameNameHistoryItem = () => {
    historyOfCooking?.forEach((product) => {
      const index = sumList.findIndex((itemNewList) => {
        return itemNewList.title === product.title;
      });
      const { day, month, year, atTime } = displayDate(product.createdAt);
      if (index === -1) {
        sumList.push({
          title: product.title,
          amount: product.amount,
          createdAt: product.createdAt,
          nameOfMeal: product.nameOfMeal,
          id: product.id,
          date: { day, month, year, atTime },
        });
      } else {
        sumList[index] = {
          title: sumList[index].title,
          amount: sumList[index].amount + product.amount,
          createdAt: sumList[index].createdAt,
          nameOfMeal: sumList[index].nameOfMeal,
          id: sumList[index].id,
          date: sumList[index].date,
        };
      }
    });
    return [sumList];
  };
  return summingTheSameNameHistoryItem;
};

export default useSearchHisory;
