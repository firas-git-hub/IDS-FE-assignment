import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesEN from './en/resources.json';
import resourcesAR from './ar/resources.json';

const resources = {
  en: {
    translation: resourcesEN
  },
  ar: {
    translation: resourcesAR
  }
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'en'
  });
  
  export default i18next;