import { At } from '../types/type';

const useTimestampConvert = () => {
    
  const displayDate = ({ seconds, nanoseconds }: At) => {
    const firebaseTime = new Date(seconds * 1000 + nanoseconds / 1000000);
    const date = firebaseTime.toDateString();
    const atTime = firebaseTime.toLocaleTimeString();
    return { date, atTime };
  };

  return displayDate;
};

export default useTimestampConvert;
