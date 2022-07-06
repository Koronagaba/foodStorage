// import { useContext } from 'react';
// import { TranslateContext } from '../../context/TranslationContext';
import { useTranslation } from 'react-i18next';

import './MultiLanguages.css';

const MultiLanguages = () => {
  // const { isEnglish, setIsEnglish } = useContext(TranslateContext);

  const { i18n } = useTranslation();

  const i18nextLecalStorage = localStorage.getItem('i18nextLng');


  return (
    <div className="multi-languages">
      <img
        src="https://flagcdn.com/pl.svg"
        width="30"
        height="16"
        alt="Poland"
        onClick={() => {
          // setIsEnglish(false);
          i18n.changeLanguage('pl');
        }}
        className={i18nextLecalStorage === 'pl' ? 'disabled' : ''}
      />
      <img
        src="https://flagcdn.com/gb.svg"
        width="30"
        alt="United Kingdom"
        onClick={() => {
          // setIsEnglish(true);
          i18n.changeLanguage('en');
        }}
        className={i18nextLecalStorage === 'en' ? 'disabled' : ''}
      />
    </div>
  );
};

export default MultiLanguages;
