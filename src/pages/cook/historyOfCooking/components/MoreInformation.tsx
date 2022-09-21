import { useContext, FC } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';
import { SingleHistoryList } from '../../../../types/type';
import close from '../../../../icons/close.svg';

interface PropsMoreInformation {
  //   matchedHistoryItemTitle: string;
  text: string;
  setText: (text: string) => void;

}

const MoreInformation: FC<PropsMoreInformation> = ({ text, setText }) => {
  const { rangeHistoryList } = useContext(NestedHistoryListsContext);

  const closeMoreInformation = () => {
    setText('');
 
  };

  const filteredWithTheSameTitle = rangeHistoryList.filter(
    (filterItem) => filterItem.title === text
  );
  console.log(filteredWithTheSameTitle);

  const displayList = filteredWithTheSameTitle.map((item) => (
    <div className="history-details-single-item" key={item.id}>
      <div className="first-div">
        <p>{item.title}</p>
        <p>{item.amount}</p>
        <p>{item.nameOfMeal}</p>
        <p>
          {item.date?.day}-{item.date?.month}-{item.date?.year}
        </p>
      </div>
    </div>
  ));

  // console.log(filteredWithTheSameTitle);

  return (
    <div >
      {displayList.length ? (
        <div className='details-inner' >
          <img
            src={close}
            alt="close"
            className="more-img"
            onClick={closeMoreInformation}
          />

          {displayList}
        </div>
      ) : null}
    </div>
  );
};

export default MoreInformation;
