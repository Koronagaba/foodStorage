import { useContext, FC, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();``

  const closeMoreInformation = () => {
    setHistoryTitle('');
    setShowModal(false);
  };

  const filteredWithTheSameTitle = rangeHistoryList.filter(
    (filterItem) =>
      filterItem.title.toLowerCase() === historyTitle.toLocaleLowerCase()
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
        <p>{t(`key_name_of_meal.${item.nameOfMeal}`)}</p>
        <p className="amount">{item.amount}</p>
      </div>
    </div>
  ));

  const modalStyle = showModal ? 'details-modal-container' : '';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        console.log('You clicked outside of me!');
        setShowModal(false);
        setHistoryTitle('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowModal, setHistoryTitle]);

  return (
      <div className={modalStyle}>
        {displayList.length ? (
          <div ref={wrapperRef} className="details-inner">
            <div className="details-header">
              <div>
                <p>
                  {t('total_amount')}: {historyTotalAmount}
                </p>
                <img
                  src={close}
                  alt="close"
                  className="close-img"
                  onClick={closeMoreInformation}
                />
              </div>
              <h1>{t(`key_ingredients.${historyTitle}`)}</h1>
            </div>

            {displayList}
          </div>
        ) : null}
      </div>
  );
};

export default MoreInformation;
