import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetecor from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translationEn from './locales/en/translationEn.json';
import translationPl from './locales/pl/translationPl.json';

const resources = {
  en: {
    translation: translationEn,
  },
  pl: {
    translation: translationPl,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetecor)
  .use(Backend)
  .init({
    resources,
    detection: {
      // order: ['localStorage', 'path', 'htmlTag', 'cookie', 'subdomain'],
      // caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    // debug: true,
    fallbackLng: 'en',
    lng: localStorage.getItem('i18nextLng') || 'en', // keep language preference
    // keySeparator: false, //  the line that I had to remove to make nesting i18n
    react: {
      useSuspense: false,
    },
  });
export default i18n;
