import { useContext, useEffect, useState } from 'react';
import { HistoryOfCookingContext } from '../../../../context/HistoryOfCookingContext';
import useTimestampConvert from '../../../../hooks/useTimestampConvert';
import { SingleHistoryOfCooking } from '../../../../types/type';

const ThisYear = () => {
  const [copySumList, setCopySumList] = useState<SingleHistoryOfCooking[]>([]);
  const { historyOfCooking } = useContext(HistoryOfCookingContext);

  const displayDate = useTimestampConvert();
  const sumList: SingleHistoryOfCooking[] = [];

  useEffect(() => {
    historyOfCooking?.forEach((product) => {
      const index = sumList.findIndex((itemNewList) => {
        return itemNewList.title === product.title;
      });

      const newDate = new Date();
      const currentYear = newDate.getFullYear();
      const productYear = new Date(
        product.createdAt.seconds * 1000
      ).getFullYear();

      if (productYear === currentYear) {
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
      }
    });
    setCopySumList(sumList);
  }, []);

  const displayHistoryList = copySumList.map((item: any) => {
    return (
      <div key={item.id}>
        <p>
          {item.title} -{item.amount} -{item.nameOfMeal} -{item.date?.day}.
          {item.date?.month}.{item.date?.year}, {item.date?.atTime}
        </p>
      </div>
    );
  });

  return (
    <div>
      <h1>ThisYear</h1>
      {displayHistoryList}
    </div>
  );
};

export default ThisYear;
