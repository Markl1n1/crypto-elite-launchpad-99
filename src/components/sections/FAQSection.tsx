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
            <AccordionTrigger className="text-left">Where are we located?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Incite AI is a software company with head office located in Los Angeles, California. However we have our representatives in every branch of companies partners who provide additional services using our product.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('returnsQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Our AI systen has delivered an average of 54.3% monthly returns, though past performance doesn`t guarantee future results.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('qualificationQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              For Standard plan we require 250$ to activate software and trading environment for you. Experience in trading or markets not necessary.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('withdrawalQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Standard withdrawal are processed within 24-72 hours during business days.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">{t('tradingSystemQ')}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {t('tradingSystemA')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">How do we make money?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              We make a percentage from the total turnover and its profit on the Trading Accounts of our product service providers, therefore, we are the first interested side to grow your portfolio.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">How does my money hold?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              To safeguard your funds, Incite AI holds your funds in top-tier banks of USA and Switzerland. In major cases - UBS Group and JPMorgan Chase.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
            <AccordionTrigger className="text-left">Do we give any guarantees?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Our financial guarantee is based on private agreements with the companies that provide services through our software. These companies are globally regulated and operate under their own individual insurance and compliance frameworks.
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
