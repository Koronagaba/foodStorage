import { FC, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';
import expand_more from '../../../../icons/expand_more.svg';
import { MatchedRangeHistoryList } from '../../../../types/type';
import MoreInformation from './MoreInformation';

interface DisplayHistoryProps {
  displayList: MatchedRangeHistoryList[];
}

const DisplayHistory: FC<DisplayHistoryProps> = () => {
  const [historyTitle, setHistoryTitle] = useState('');
  const [historyTotalAmount, setHistoryTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { matchedRangeHistoryList } = useContext(NestedHistoryListsContext);

  const { t } = useTranslation();

  const handleShowDetails = (matchedHistoryItem: MatchedRangeHistoryList) => {
    setHistoryTitle(matchedHistoryItem.title);
    setShowModal(true);
    setHistoryTotalAmount(matchedHistoryItem.amount);
  };

  const displayHistory = matchedRangeHistoryList.map((matchedHistoryItem) => {
    return (
      <>
        <div
          onClick={() => handleShowDetails(matchedHistoryItem)}
          key={matchedHistoryItem.id}
          className="history-single-item"
        >
          <div className="first-div">
            <p>{t(`key_ingredients.${matchedHistoryItem.title}`)}</p>
            <p>{matchedHistoryItem.amount}</p>
          </div>
          <img
            src={expand_more}
            alt="more information"
            className="more-img"
            onClick={() => handleShowDetails(matchedHistoryItem)}
          />
        </div>
      </>
    );
  });

  return (
    <div className="range-history-lisit-container">
      {displayHistory}
      <MoreInformation
        historyTitle={historyTitle}
        setHistoryTitle={setHistoryTitle}
        showModal={showModal}
        setShowModal={setShowModal}
        historyTotalAmount={historyTotalAmount}
      />
    </div>
  );
};

export default DisplayHistory;
