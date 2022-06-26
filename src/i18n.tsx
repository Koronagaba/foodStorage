import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetecor from 'i18next-browser-languagedetector'

i18next
    .use(initReactI18next)
    .use(LanguageDetecor)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    welcome: 'Hi Koronagaba'
                }
            },
            pl: {
                translation: {
                    welcome: 'Cześć Koronagaba'
                }
            }
        }
});
