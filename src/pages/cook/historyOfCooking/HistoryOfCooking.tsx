import { useContext, useState } from 'react';
import { HistoryOfCookingContext } from '../../../context/HistoryOfCookingContext';
import { useNavigate, Outlet } from 'react-router-dom';
import useTimestampConvert from '../../../hooks/useTimestampConvert';
import { SingleHistoryOfCooking } from '../../../types/type';
import DayHistory from './DayHistory';

const HistoryOfCooking = () => {
  const { historyOfCooking } = useContext(HistoryOfCookingContext);
  const [dayList, setDayList] = useState<SingleHistoryOfCooking[]>([]);

  const displayDate = useTimestampConvert();
  const navigate = useNavigate()

  const downloadData = () => {
    const sumList: SingleHistoryOfCooking[] = [];

    historyOfCooking?.forEach((product) => {
      const index = sumList.findIndex((itemNewList) => {
        return itemNewList.title === product.title;
      });

      const { date, atTime } = displayDate(product.createdAt);

      if (index === -1) {
        sumList.push({
          title: product.title,
          amount: product.amount,
          createdAt: product.createdAt,
          nameOfMeal: product.nameOfMeal,
          id: product.id,
          date: { date, atTime },
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
      setDayList(sumList);
      console.log(dayList);
    });
  };


  const allHistoryDownload = () => {
    navigate('/cook/history/allHistory')   
  }

  return (
    <div>
      <div>
        <h3>History of Cooking</h3>
        <button onClick={downloadData}>fetch data</button>
        <button onClick={allHistoryDownload}>All history</button>
      </div>
      <DayHistory dayList={dayList} />
      <Outlet />
    </div>
  );
};

export default HistoryOfCooking;
