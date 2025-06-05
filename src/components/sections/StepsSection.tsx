
import { Edit, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

interface StepsSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const StepsSection = ({ scrollToSection }: StepsSectionProps) => {
  const { t } = useTranslations();

  return (
    <section id="program" className="py-20 bg-[#1a1f35] border-b-4 border-[#00d4aa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
            {t('simpleProcess')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('stepsToGetStarted')}</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <Card className="bg-[#0066ff] border-white/10 p-8 text-center relative h-96 transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-[#0066ff] w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <CardContent className="p-0 h-full flex flex-col justify-center">
                  <div className="bg-white p-4 rounded-lg inline-block mb-6 mx-auto">
                    <Edit size={32} className="text-[#0066ff]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{t('leaveApplication')}</h3>
                  <p className="text-white/80">{t('applicationDescription')}</p>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <Card className="bg-[#0066ff] border-white/10 p-8 text-center relative h-96 transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-[#0066ff] w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <CardContent className="p-0 h-full flex flex-col justify-center">
                  <div className="bg-white p-4 rounded-lg inline-block mb-6 mx-auto">
                    <Shield size={32} className="text-[#0066ff]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{t('getGuidanceAccess')}</h3>
                  <p className="text-white/80">{t('guidanceDescription')}</p>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <Card className="bg-[#0066ff] border-white/10 p-8 text-center relative h-96 transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-[#0066ff] w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <CardContent className="p-0 h-full flex flex-col justify-center">
                  <div className="bg-white p-4 rounded-lg inline-block mb-6 mx-auto">
                    <TrendingUp size={32} className="text-[#0066ff]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{t('growBalance')}</h3>
                  <p className="text-white/80">{t('growDescription')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => scrollToSection('apply')} className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200">
            {t('startJourneyNow')}
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
