import { useContext } from 'react';
import { NestedHistoryListsContext } from '../../../../context/NestedHistoryListsContext';
import expand_more from '../../../../icons/expand_more.svg';
// import more_vert from '../../../../icons/more_vert.svg';

const RangeHistoryList = () => {
  const { rangeList } = useContext(NestedHistoryListsContext);

  const displayRangeHistoryList = rangeList.map((item) => (
    <div className="history-single-item" key={item.id}>
      <div className="first-div">
        <p>{item.title}</p>
        <p>{item.amount}</p>
      </div>
      <img src={expand_more} alt="more information" className="more-img" />
      {/* <img src={more_vert} alt="more information" className='more-img' /> */}
    </div>
  ));
  return (
    <>{rangeList.length ? displayRangeHistoryList : <p>Empty history</p>}</>
  );
};

export default RangeHistoryList;
