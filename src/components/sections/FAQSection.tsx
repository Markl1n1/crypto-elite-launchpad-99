
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

export const FAQSection = () => {
  const { t } = useTranslations();
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: t('faq1Question'),
      answer: t('faq1Answer')
    },
    {
      question: t('faq2Question'),
      answer: t('faq2Answer')
    },
    {
      question: t('faq3Question'),
      answer: t('faq3Answer')
    },
    {
      question: t('faq4Question'),
      answer: t('faq4Answer')
    },
    {
      question: t('faq5Question'),
      answer: t('faq5Answer')
    },
    {
      question: t('faq6Question'),
      answer: t('faq6Answer')
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-[#0a0e1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00d4aa]/20 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-[#00d4aa]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00d4aa] bg-clip-text text-transparent">
            {t('faqTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('faqSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#1a1f35] to-[#0a0e1a] rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#00d4aa]/30"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-[#00d4aa] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#00d4aa] flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">{t('stillHaveQuestions')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@inciteai.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold rounded-lg transition-colors"
              >
                {t('emailSupport')}
              </a>
              <a 
                href="tel:+1-555-INCITE-AI" 
                className="inline-flex items-center justify-center px-6 py-3 border border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa]/10 font-semibold rounded-lg transition-colors"
              >
                {t('callSupport')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
