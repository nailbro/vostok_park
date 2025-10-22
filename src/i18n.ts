import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonRu from './locales/ru/common.json';
import commonKgz from './locales/kgz/common.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  lng: 'ru', // язык по умолчанию
  resources: {
    ru: { common: commonRu },
    kz: { common: commonKgz }
  },
  interpolation: { escapeValue: false },
});

export default i18n;
