
import { ArrowRight, MessageCircle, Edit, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { useTranslations } from '@/hooks/useTranslations';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

interface HowItWorksSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HowItWorksSection = ({ scrollToSection }: HowItWorksSectionProps) => {
  const { t } = useTranslations();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: stepsRef, visibleItems: stepVisibility } = useStaggeredAnimation(3, 200);

  return (
    <section ref={sectionRef} id="program" className="py-8 sm:py-12 lg:py-14 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/10 to-[#0066ff]/10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Screenshot - Order 2 on mobile, 1 on desktop */}
          <div className={`lg:col-span-2 order-2 lg:order-1 ${sectionVisible ? 'animate-fade-in-left' : ''}`}>
            <div className="relative text-center lg:text-left">
              <OptimizedImage 
                src="/lovable-uploads/12132be5-2229-43c7-93d9-43f5df5ca0a8.png" 
                alt="Incite AI Simple Request Process" 
                className="w-full h-auto rounded-2xl shadow-2xl max-w-sm sm:max-w-md mx-auto lg:mx-0 hover-lift hover-tilt transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content - Order 1 on mobile, 2 on desktop */}
          <div className="lg:col-span-3 order-1 lg:order-2 text-center lg:text-left px-4 sm:px-0">
            <Badge className={`mb-4 sm:mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10 inline-flex items-center hover-lift text-xs sm:text-sm ${sectionVisible ? 'animate-scale-in animate-delay-200' : ''}`}>
              <MessageCircle className="mr-2" size={14} />
              Simple Process
            </Badge>
            
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text ${sectionVisible ? 'animate-fade-in-up animate-delay-300' : ''}`}>
              {t('simplyHowItWorksTitle')}
            </h2>
            
            <p className={`text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 ${sectionVisible ? 'animate-fade-in-up animate-delay-400' : ''}`}>
              {t('simplyHowItWorksSubtitle')}
            </p>
            
            <div className={`space-y-4 sm:space-y-6 mb-6 sm:mb-8 ${sectionVisible ? 'animate-fade-in-up animate-delay-500' : ''}`}>
              <div className="flex items-start space-x-3 sm:space-x-4 text-left hover-lift transition-all duration-300">
                <div className="bg-[#00d4aa] text-black w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0 hover-lift">1</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{t('askYourQuestion')}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{t('askYourQuestionDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4 text-left hover-lift transition-all duration-300">
                <div className="bg-[#0066ff] text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0 hover-lift">2</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{t('aiProcessesData')}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{t('aiProcessesDataDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 text-left hover-lift transition-all duration-300">
                <div className="bg-[#00d4aa] text-black w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0 hover-lift">3</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{t('getClearRecommendations')}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{t('getClearRecommendationsDesc')}</p>
                </div>
              </div>
            </div>

            <div className={`text-center lg:text-left ${sectionVisible ? 'animate-fade-in-up animate-delay-600' : ''}`}>
              <Button 
                onClick={() => scrollToSection('apply')} 
                className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base cta-button cta-primary hover-lift w-full sm:w-auto"
              >
                {t('tryInciteAiNow')}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Three Easy Steps Cards */}
        <div ref={stepsRef} className="relative max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className={`relative ${stepVisibility[0] ? 'animate-scale-in' : 'opacity-0'}`}>
              <Card className="glass-card glass-card-hover p-4 sm:p-6 lg:p-8 text-center relative h-40 sm:h-48 hover-lift hover-tilt">
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00d4aa] text-black w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base hover-lift">1</div>
                </div>
                <CardContent className="p-0 h-full flex flex-col justify-center">
                  <div className="bg-[#00d4aa] p-3 sm:p-4 rounded-lg inline-block mb-4 sm:mb-6 mx-auto hover-lift">
                    <Edit size={24} className="text-black sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-white">{t('leaveApplication')}</h3>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className={`relative ${stepVisibility[1] ? 'animate-scale-in animate-delay-200' : 'opacity-0'}`}>
              <Card className="glass-card glass-card-hover p-4 sm:p-6 lg:p-8 text-center relative h-40 sm:h-48 hover-lift hover-tilt">
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00d4aa] text-black w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base hover-lift">2</div>
                </div>
                <CardContent className="p-0 h-full flex flex-col justify-center">
                  <div className="bg-[#00d4aa] p-3 sm:p-4 rounded-lg inline-block mb-4 sm:mb-6 mx-auto hover-lift">
                    <Shield size={24} className="text-black sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-white">{t('getAdvisor')}</h3>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className={`relative sm:col-span-2 md:col-span-1 ${stepVisibility[2] ? 'animate-scale-in animate-delay-400' : 'opacity-0'}`}>
              <Card className="glass-card glass-card-hover p-4 sm:p-6 lg:p-8 text-center relative h-40 sm:h-48 hover-lift hover-tilt">
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00d4aa] text-black w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base hover-lift">3</div>
                </div>
                <CardContent className="p-0 h-full flex flex-col justify-center">
                  <div className="bg-[#00d4aa] p-3 sm:p-4 rounded-lg inline-block mb-4 sm:mb-6 mx-auto hover-lift">
                    <TrendingUp size={24} className="text-black sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-white">{t('growPortfolio')}</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
