import { useContext, useState } from 'react';
import { HistoryOfCookingContext } from '../../../context/HistoryOfCookingContext';
import { SingleHistoryOfCooking } from '../../../types/type';

const HistoryOfCooking = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);
  const [dayList, setDayList] = useState<SingleHistoryOfCooking[]>([]);
 

  const downloadData = () => {
    const sumList: SingleHistoryOfCooking[] = [];

    historyOfCooking?.forEach((product) => {
      const index = sumList.findIndex((itemNewList) => {
        return itemNewList.title === product.title;
      });
      if (index === -1) {
        sumList.push({
          title: product.title,
          amount: product.amount,
          createdAt: product.createdAt,
          nameOfMeal: product.nameOfMeal,
          id: product.id,
        });
      } else {
        sumList[index] = {
          title: sumList[index].title,
          amount: sumList[index].amount + product.amount,
          createdAt: sumList[index].createdAt,
          nameOfMeal: sumList[index].nameOfMeal,
          id: sumList[index].id,
        };
      }
      setDayList(sumList);
    });

  };


  return (
    <div>
      <div>
        <h3>History of Cooking</h3>
        <button onClick={downloadData}>fetch data</button>
      </div>
 
    </div>
  );
};

export default HistoryOfCooking;
