const languageKey = 'lang';
const languageDefault = 'en';

export const setLanguage = lang => {
  localStorage.setItem(languageKey, lang);
  window.location.reload();
};

export const getLanguage = () => {
  const language = localStorage.getItem(languageKey);
  if (!language) {
    localStorage.setItem(languageKey, languageDefault);
  }
  if (language) return language;
  return languageDefault;
};
