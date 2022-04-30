import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import translationES from './locales/es.json';
import translationEN from './locales/en.json';
import { changeLanguage } from '../config/changeLanguage';

console.log('change lang:', changeLanguage())

// the translations
const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: changeLanguage(),

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;