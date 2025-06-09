
import { Check, Star, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/useTranslations';

interface PricingSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const PricingSection = ({ scrollToSection }: PricingSectionProps) => {
  const { t } = useTranslations();
  
  const plans = [
    {
      name: t('basicPlan'),
      price: '$99',
      period: t('monthly'),
      description: t('basicPlanDescription'),
      features: [
        t('basicFeature1'),
        t('basicFeature2'),
        t('basicFeature3'),
        t('basicFeature4')
      ],
      icon: Star,
      popular: false,
      buttonText: t('getStarted'),
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: t('proPlan'),
      price: '$199',
      period: t('monthly'),
      description: t('proPlanDescription'),
      features: [
        t('proFeature1'),
        t('proFeature2'),
        t('proFeature3'),
        t('proFeature4'),
        t('proFeature5')
      ],
      icon: Crown,
      popular: true,
      buttonText: t('mostPopular'),
      gradient: 'from-[#00d4aa] to-green-400'
    },
    {
      name: t('enterprisePlan'),
      price: t('custom'),
      period: '',
      description: t('enterprisePlanDescription'),
      features: [
        t('enterpriseFeature1'),
        t('enterpriseFeature2'),
        t('enterpriseFeature3'),
        t('enterpriseFeature4'),
        t('enterpriseFeature5')
      ],
      icon: Zap,
      popular: false,
      buttonText: t('contactUs'),
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0a0e1a] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00d4aa] bg-clip-text text-transparent">
            {t('pricingTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-b from-[#1a1f35] to-[#0a0e1a] p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular ? 'border-2 border-[#00d4aa] shadow-lg shadow-[#00d4aa]/20' : 'border border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#00d4aa] to-green-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                      {t('mostPopular')}
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.gradient} mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400 ml-2">/{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-[#00d4aa] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollToSection('apply')}
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">{t('pricingNote')}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ {t('guarantee1')}</span>
            <span>✓ {t('guarantee2')}</span>
            <span>✓ {t('guarantee3')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
