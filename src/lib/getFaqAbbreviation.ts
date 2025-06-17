
/**
 * Returns language-appropriate FAQ abbreviation/heading for each language code.
 */
const faqAbbreviations: Record<string, string> = {
  en: 'FAQ',
  pl: 'FAQ',
  de: 'FAQ',
  es: 'Preguntas',
  ru: 'ЧЗВ',
  fr: 'FAQ',
  ar: 'الأسئلة',
  tr: 'SSS',
  zh: '常见问题',
};

export function getFaqAbbreviation(language: string, fallback: string = 'FAQ') {
  return faqAbbreviations[language] || fallback;
}
