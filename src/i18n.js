// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import en from'./locales/en.json'
import hi from'./locales/hi.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      hi: { translation: hi},
      en: { translation: en},
    },
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
