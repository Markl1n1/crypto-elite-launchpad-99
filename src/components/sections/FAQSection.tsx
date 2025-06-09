
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from '@/hooks/useTranslations';

export const FAQSection = () => {
  const { t } = useTranslations();

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
          <AccordionItem value="item-1" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('whereLocatedQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {t('whereLocatedA')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('returnsQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {t('returnsA')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('qualificationQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {t('qualificationA')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('withdrawalQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {t('withdrawalA')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('tradingSystemQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {t('tradingSystemA')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('howMakeMoneyQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {t('howMakeMoneyA')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('howMoneyHoldQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {t('howMoneyHoldA')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('guaranteesQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {t('guaranteesA')}
            </AccordionContent>
          </AccordionItem>
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
