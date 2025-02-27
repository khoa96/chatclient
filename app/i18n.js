import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguage } from 'utils/sessionStorage';
import en from './translations/en';
import vi from './translations/vi';

const lang = getLanguage(); // get language form local storage;
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    lng: lang,
    fallbackLng: lang,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
