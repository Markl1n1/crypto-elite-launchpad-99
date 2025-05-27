
import { useState, useEffect } from 'react';
import { translations } from '@/data/translations';

type Language = keyof typeof translations;

export const useTranslations = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  // Auto-detect language based on browser location
  useEffect(() => {
    const detectLanguage = () => {
      const browserLang = navigator.language.toLowerCase();
      const languageMap: Record<string, Language> = {
        'en': 'en',
        'pl': 'pl', 
        'de': 'de',
        'es': 'es',
        'ru': 'ru',
        'fr': 'fr',
        'ar': 'ar',
        'tr': 'tr'
      };
      
      for (const [lang, code] of Object.entries(languageMap)) {
        if (browserLang.startsWith(lang)) {
          setCurrentLanguage(code);
          break;
        }
      }
    };
    
    detectLanguage();
  }, []);

  const t = (key: keyof typeof translations.en): string => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return {
    currentLanguage,
    changeLanguage,
    t
  };
};
