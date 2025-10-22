import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonRu from '@/locales/ru/common.json';
import commonKgz from '@/locales/kgz/common.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  lng: 'ru', 
  resources: {
    ru: { common: commonRu },
    kgz: { common: commonKgz }
  },
  interpolation: { escapeValue: false },
});

export default i18n;
