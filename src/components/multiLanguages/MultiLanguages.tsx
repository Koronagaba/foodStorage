import i18n from '../../i18n';

import './MultiLanguages.css';

const MultiLanguages = () => {
  const i18nextLecalStorage = localStorage.getItem('i18nextLng');

  return (
    <div className="multi-languages">
      <img
        src="https://flagcdn.com/pl.svg"
        width="30"
        height="16"
        alt="Poland flag - you can change language to polish"
        onClick={() => {
          i18n.changeLanguage('pl');
        }}
        className={i18nextLecalStorage === 'pl' ? 'disabled' : ''}
      />
      <img
        src="https://flagcdn.com/gb.svg"
        width="30"
        height="16"
        alt="United Kingdom flag -  you can change language to english"
        onClick={() => {
          i18n.changeLanguage('en');
        }}
        className={i18nextLecalStorage === 'en' ? 'disabled' : ''}
      />
    </div>
  );
};

export default MultiLanguages;
