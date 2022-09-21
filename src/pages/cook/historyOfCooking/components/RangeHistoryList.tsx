import { useContext, useState } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';
import expand_more from '../../../../icons/expand_more.svg';
import { MatchedRangeHistoryList, SingleHistoryOfCooking } from '../../../../types/type';
import MoreInformation from './MoreInformation';
// import more_vert from '../../../../icons/more_vert.svg';


const RangeHistoryList = () => {
  // const [filteredRangeHistory, setFilteredRangeHistory] = useState<SingleHistoryOfCooking[]>()
  const [text, setText] = useState('')

  const { rangeHistoryList, matchedRangeHistoryList } = useContext(
    NestedHistoryListsContext
  );

  const moreInformation = (
    matchedHistoryItem: MatchedRangeHistoryList
  ) => {
    // const filteredWithTheSameTitle = rangeHistoryList.filter(
    //   (filterItem) => filterItem.title === matchedHistoryItemTitle
    // );
    // // setFilteredRangeHistory(filteredWithTheSameTitle);
    // console.log(filteredWithTheSameTitle);
    // matchedHistoryItem = {
    //   title: matchedHistoryItem.title,
    //   amount: matchedHistoryItem.amount,
    //   id: matchedHistoryItem.id,
    //   details: true
    // }

    setText(matchedHistoryItem.title);
 
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
          text={text}
          setText={setText}
        
          />
     
    </>
  );
};

export default RangeHistoryList;
