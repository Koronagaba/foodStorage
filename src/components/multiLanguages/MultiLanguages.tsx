import { useContext } from 'react';
import { TranslateContext } from '../../context/TranslationContext';
import { useTranslation } from 'react-i18next';

import './MultiLanguages.css';

const lngs = {
  en: {
    nativeName: 'English',
    src: 'https://flagcdn.com/gb.svg',
    alt: 'United Kingdom',
  },
  pl: {
    nativeName: 'Poland',
    src: 'https://flagcdn.com/pl.svg',
    alt: 'Poland',
  },
};

const MultiLanguages = () => {
  const { isEnglish, setIsEnglish } = useContext(TranslateContext);

  const { i18n } = useTranslation();
  // console.log(Object.keys(lngs[en].nativeName));

  return (
    <div className="multi-languages">
      {/* <img
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
      /> */}

      <img
        src="https://flagcdn.com/pl.svg"
        width="30"
        height="16"
        alt="Poland"
        onClick={() => {
          setIsEnglish(false);
          i18n.changeLanguage('pl');
        }}
        className={!isEnglish ? 'disabled' : ''}
      />
      <img
        src="https://flagcdn.com/gb.svg"
        width="30"
        alt="United Kingdom"
        onClick={() => {
          setIsEnglish(true);
          i18n.changeLanguage('en');
        }}
        className={isEnglish ? 'disabled' : ''}
      />
    </div>
  );
};

export default MultiLanguages;
