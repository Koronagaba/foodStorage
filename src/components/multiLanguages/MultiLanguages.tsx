import { useContext } from 'react';
import { TranslateContext } from '../../context/TranslationContext';

import './MultiLanguages.css';

const MultiLanguages = () => {
  const { setIsEnglish } = useContext(TranslateContext);


  return (
    <div className="multi-languages">
      <img
        src="https://flagcdn.com/pl.svg"
        width="30"
        height="16"
        alt="Poland"
        onClick={ () => setIsEnglish(false)}
      />
      <img
        src="https://flagcdn.com/gb.svg"
        width="30"
        alt="United Kingdom"
        onClick={ ()=> setIsEnglish(true)}
      />
    </div>
  );
};

export default MultiLanguages;
