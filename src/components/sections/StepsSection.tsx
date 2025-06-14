
import { Edit, Shield, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

interface StepsSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const StepsSection = ({ scrollToSection }: StepsSectionProps) => {
  const { t } = useTranslations();

  return (
    <section id="program" className="py-12 bg-[#1a1f35] border-t border-b" style={{ borderColor: 'rgba(0, 212, 170, 0.3)', borderTopWidth: '1px', borderBottomWidth: '1px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 whitespace-nowrap">{t('threeSteps')}</h2>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <Card className="bg-[#0a0e1a] border-white/10 p-8 text-center relative h-48 transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00d4aa] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <CardContent className="p-0 h-full flex flex-col justify-center">
                  <div className="bg-[#00d4aa] p-4 rounded-lg inline-block mb-6 mx-auto">
                    <Edit size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{t('leaveApplication')}</h3>
                </CardContent>
              </Card>
            </div>
            {/* Step 2 */}
            <div className="relative">
              <Card className="bg-[#0a0e1a] border-white/10 p-8 text-center relative h-48 transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00d4aa] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <CardContent className="p-0 h-full flex flex-col justify-center">
                  <div className="bg-[#00d4aa] p-4 rounded-lg inline-block mb-6 mx-auto">
                    <Shield size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Get Advisor</h3>
                </CardContent>
              </Card>
            </div>
            {/* Step 3 */}
            <div className="relative">
              <Card className="bg-[#0a0e1a] border-white/10 p-8 text-center relative h-48 transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00d4aa] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <CardContent className="p-0 h-full flex flex-col justify-center">
                  <div className="bg-[#00d4aa] p-4 rounded-lg inline-block mb-6 mx-auto">
                    <TrendingUp size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Grow Portfolio</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
