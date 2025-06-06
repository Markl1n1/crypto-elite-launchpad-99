
import { useState, useEffect } from 'react';
import { translations } from '@/data/translations';

type Language = keyof typeof translations;

export const useTranslations = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  // Auto-detect language based on browser language with better matching
  useEffect(() => {
    const detectLanguage = () => {
      // Check if there's a stored language from application form
      const storedLanguage = localStorage.getItem('applicationLanguage');
      if (storedLanguage && Object.keys(translations).includes(storedLanguage)) {
        setCurrentLanguage(storedLanguage as Language);
        return;
      }

      const browserLang = navigator.language.toLowerCase();
      const browserLangCode = browserLang.split('-')[0]; // Get just the language part (e.g., 'en' from 'en-US')
      
      const availableLanguages: Language[] = ['en', 'pl', 'de', 'es', 'ru', 'fr', 'ar', 'tr'];
      
      // First try exact match with full language code
      if (availableLanguages.includes(browserLang as Language)) {
        setCurrentLanguage(browserLang as Language);
        return;
      }
      
      // Then try match with just the language part
      if (availableLanguages.includes(browserLangCode as Language)) {
        setCurrentLanguage(browserLangCode as Language);
        return;
      }
      
      // Default to English if no match found
      setCurrentLanguage('en');
    };
    
    detectLanguage();
  }, []);

  const t = (key: keyof typeof translations.en): string => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    // Clear stored application language when manually changing language
    localStorage.removeItem('applicationLanguage');
  };

  return {
    currentLanguage,
    changeLanguage,
    t
  };
};
