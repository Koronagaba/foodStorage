import { At } from '../types/type';

const useTimestampConvert = () => {
  const displayDate = ({ seconds, nanoseconds }: At) => {
    const firebaseTime = new Date(seconds * 1000 + nanoseconds / 1000000);

    const day = firebaseTime.getDate();
    const month = firebaseTime.getMonth() + 1;
    const year = firebaseTime.getFullYear();
    const atTime = firebaseTime.toLocaleTimeString();
    return { day, month, year, atTime };
  };

  return displayDate;
};

export default useTimestampConvert;
