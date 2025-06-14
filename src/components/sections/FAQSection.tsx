
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from '@/hooks/useTranslations';

export const FAQSection = () => {
  const { t } = useTranslations();

  // FAQ data for rendering
  const faqItems = [
    { value: "item-1", question: t('whereLocatedQ'), answer: t('whereLocatedA') },
    { value: "item-2", question: t('returnsQ'), answer: t('returnsA') },
    { value: "item-3", question: t('qualificationQ'), answer: t('qualificationA') },
    { value: "item-4", question: t('withdrawalQ'), answer: t('withdrawalA') },
    { value: "item-5", question: t('tradingSystemQ'), answer: t('tradingSystemA') },
    { value: "item-6", question: t('howMakeMoneyQ'), answer: t('howMakeMoneyA') },
    { value: "item-7", question: t('howMoneyHoldQ'), answer: t('howMoneyHoldA') },
    { value: "item-8", question: t('guaranteesQ'), answer: t('guaranteesA') },
  ];

  return (
    <section id="faq" className="py-12 border-t border-b" style={{ borderColor: 'rgba(0, 212, 170, 0.3)', borderTopWidth: '1px', borderBottomWidth: '1px' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
            {t('commonQuestions')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('frequentlyAskedQuestions')}</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="bg-[#1a1f35] border-white/10 rounded-lg px-6"
            >
              <div className="relative flex items-center min-h-[3.5rem] gap-4"> {/* container for icon + text */}
                <span className="flex-shrink-0 flex items-center justify-center bg-white rounded-full w-8 h-8 md:w-10 md:h-10">
                  <img
                    src="/lovable-uploads/afb8fcef-6454-4f8f-8564-b83c9983d92f.png"
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 md:w-7 md:h-7 object-contain"
                    draggable={false}
                  />
                </span>
                <div className="flex-1">
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                </div>
              </div>
              <AccordionContent className="text-gray-400">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">{t('stillHaveQuestions')}</p>
          <a href="mailto:support@inciteai.com" className="text-[#00d4aa] hover:text-[#00d4aa]/80 transition-colors">
            {t('contactSupport')}
          </a>
        </div>
      </div>
    </section>
  );
};

