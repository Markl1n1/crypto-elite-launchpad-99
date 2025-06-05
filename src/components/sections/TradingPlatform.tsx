
import { Zap, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from '@/hooks/useTranslations';

interface TradingPlatformProps {
  scrollToSection: (sectionId: string) => void;
}

export const TradingPlatform = ({ scrollToSection }: TradingPlatformProps) => {
  const { t } = useTranslations();

  return (
    <section className="py-20 relative border-b-4 border-[#00d4aa]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/10 to-[#0066ff]/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Trading Platform Image */}
          <div className="lg:col-span-2">
            <div className="relative">
              <img src="/lovable-uploads/98f528c7-6c3b-4fa4-907f-eeb151c5e95f.png" alt="Trading Platform Interface" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              {t('advancedTechnology')}
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('cuttingEdgeTradingPlatform')}
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              {t('tradingPlatformDescription')}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00d4aa] p-3 rounded-lg">
                  <Zap size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('aiPoweredPredictions')}</h3>
                  <p className="text-gray-400">{t('aiPredictionsDescription')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#0066ff] p-3 rounded-lg">
                  <Lock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('bankGradeSecurity')}</h3>
                  <p className="text-gray-400">{t('securityDescription')}</p>
                </div>
              </div>
            </div>

            <Button onClick={() => scrollToSection('apply')} className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-200">
              Try Incite AI Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
