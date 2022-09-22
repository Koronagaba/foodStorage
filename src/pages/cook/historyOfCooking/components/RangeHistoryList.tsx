import { useContext, useState } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';
import expand_more from '../../../../icons/expand_more.svg';
import { MatchedRangeHistoryList } from '../../../../types/type';
import MoreInformation from './MoreInformation';
// import more_vert from '../../../../icons/more_vert.svg';

const RangeHistoryList = () => {
  const [historyTitle, setHistoryTitle] = useState('');
  const [historyTotalAmount, setHistoryTotalAmount] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const { matchedRangeHistoryList } = useContext(NestedHistoryListsContext);

  const moreInformation = (matchedHistoryItem: MatchedRangeHistoryList) => {
    setHistoryTitle(matchedHistoryItem.title);
    setShowModal(true);
    setHistoryTotalAmount(matchedHistoryItem.amount)
  };

  const displayRangeHistoryList = matchedRangeHistoryList.map(
    (matchedHistoryItem) => (
      <>
        <div className="history-single-item" key={matchedHistoryItem.id}>
          <div className="first-div">
            <p>{matchedHistoryItem.title}</p>
            <p>{matchedHistoryItem.amount}</p>
          </div>
          <img
            src={expand_more}
            alt="more information"
            className="more-img"
            onClick={() => moreInformation(matchedHistoryItem)}
          />
          {/* <img src={more_vert} alt="more information" className='more-img' /> */}
        </div>
      </>
    )
  );

  return (
    <>
      {matchedRangeHistoryList.length ? (
        displayRangeHistoryList
      ) : (
        <p>Empty history</p>
      )}
      <MoreInformation
        // matchedHistoryItemTitle={matchedHistoryItem.title}
        historyTitle={historyTitle}
        setHistoryTitle={setHistoryTitle}
        showModal={showModal}
        setShowModal={setShowModal}
        historyTotalAmount={historyTotalAmount}
      />
    </>
  );
};

export default RangeHistoryList;
