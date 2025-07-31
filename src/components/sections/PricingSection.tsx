import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

interface PricingSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const PricingSection = ({ scrollToSection }: PricingSectionProps) => {
  const { t } = useTranslations();

  return (
    <section id="pricing" className="py-20 border-t border-b" style={{ borderColor: 'rgba(0, 212, 170, 0.3)', borderTopWidth: '1px', borderBottomWidth: '1px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
            {t('flexibleInvestmentOptions')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('investmentPlansTitle')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Standard Plan */}
          <Card className="bg-[#1a1f35] border-white/10 p-8 relative flex flex-col h-[680px]">
            <CardContent className="p-0 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-2 text-white">{t('standardPlan')}</h3>
              <div className="text-4xl font-bold mb-6 text-[#00d4aa]">$250</div>
              <ul className="space-y-3 mb-8 flex-grow text-white">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('support247')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('personalisedManager')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('automaticNotification')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('basicAutotrading')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('limitedTrades')}
                </li>
              </ul>
              <div className="flex justify-center mb-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500">11 {t('spotsAvailable')}</Badge>
              </div>
              <Button onClick={() => scrollToSection('apply')} className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold mt-auto">
                {t('startNow')}
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="bg-[#1a1f35] border-[#00d4aa] p-8 relative flex flex-col h-[680px]">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-[#00d4aa] text-black font-bold">{t('mostPopular')}</Badge>
            </div>
            <CardContent className="p-0 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-2 text-white">{t('proPlan')}</h3>
              <div className="text-4xl font-bold mb-6 text-[#00d4aa]">$1,000</div>
              <ul className="space-y-3 mb-8 flex-grow text-white">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('support247')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('personalisedManager')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('automaticNotification')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('advancedAutotrading')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('moderatedTrades')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('analyseResults')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('meetingsInvestors')}
                </li>
              </ul>
              <div className="flex justify-center mb-4">
                <Badge className="bg-red-500/20 text-red-400 border-red-500">0 {t('spotsAvailable')}</Badge>
              </div>
              <Button disabled className="w-full bg-gray-600 cursor-not-allowed mt-auto">
                {t('currentlyFull')}
              </Button>
            </CardContent>
          </Card>

          {/* Advanced Plan */}
          <Card className="bg-[#1a1f35] border-white/10 p-8 relative flex flex-col h-[680px]">
            <CardContent className="p-0 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-2 text-white">{t('advancedPlan')}</h3>
              <div className="text-4xl font-bold mb-6 text-[#00d4aa]">$20,000+</div>
              <ul className="space-y-3 mb-8 flex-grow text-white">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('allProFeatures')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('premiumAutotrade')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('unlimitedTrades')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('priorityProcessing')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                  {t('companyGifts')}
                </li>
              </ul>
              <div className="flex justify-center mb-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500">31 {t('spotsAvailable')}</Badge>
              </div>
              <Button onClick={() => scrollToSection('apply')} className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold mt-auto">
                {t('startNow')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
