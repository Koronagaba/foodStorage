import { useContext, FC } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';
import close from '../../../../icons/close.svg';

interface PropsMoreInformation {
  historyTitle: string;
  setHistoryTitle: (text: string) => void;
  showModal: boolean;
  setShowModal: (isModal: boolean) => void;
  historyTotalAmount: number;
}

const MoreInformation: FC<PropsMoreInformation> = ({
  historyTitle,
  setHistoryTitle,
  showModal,
  setShowModal,
  historyTotalAmount,
}) => {
  const { rangeHistoryList } = useContext(NestedHistoryListsContext);

  const historyTitleCapitalFirst = historyTitle.charAt(0).toUpperCase() + historyTitle.slice(1);

  const closeMoreInformation = () => {
    setHistoryTitle('');
    setShowModal(false);
  };

  const filteredWithTheSameTitle = rangeHistoryList.filter(
    (filterItem) => filterItem.title.toLowerCase() === historyTitle.toLocaleLowerCase()
  );

  const displayList = filteredWithTheSameTitle.map((item) => (
      <div className="history-details-single-item" key={item.id}>
        <div className="first-div">
          <p className="date">
            {item.date?.day.toString().length === 1
              ? 0 + item.date?.day.toString()
              : item.date?.day}
            /
            {item.date?.month.toString().length === 1
              ? 0 + item.date?.month.toString()
              : item.date?.month}
            /{item.date?.year} - {item.date?.atTime}
          </p>
        </div>
        <div className="second-div">
          <p>{item.nameOfMeal}</p>
          <p className="amount">{item.amount}</p>
        </div>
      </div>
  ));

  const modalStyle = showModal ? 'details-modal-container' : '';

  return (
    <div className={modalStyle}>
      {displayList.length ? (
        <div className="details-inner">
          <div className="details-header">
            <div>
              <p>Total amount: {historyTotalAmount}</p>
              <img
                src={close}
                alt="close"
                className="close-img"
                onClick={closeMoreInformation}
              />
            </div>
            <h1>{historyTitleCapitalFirst}</h1>
          </div>

          {displayList}
        </div>
      ) : null}
    </div>
  );
};

export default MoreInformation;
