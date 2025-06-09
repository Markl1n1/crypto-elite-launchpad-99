
import { ArrowRight, Star, TrendingUp, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/useTranslations';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const { t } = useTranslations();
  
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a] flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300d4aa" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#00d4aa]/20 rounded-full border border-[#00d4aa]/30 mb-8">
            <Star className="w-4 h-4 text-[#00d4aa] mr-2" />
            <span className="text-sm font-medium text-[#00d4aa]">{t('exclusiveAccess')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-[#00d4aa] bg-clip-text text-transparent leading-tight">
            {t('heroTitle')}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center text-gray-300">
              <TrendingUp className="w-5 h-5 text-[#00d4aa] mr-2" />
              <span>{t('aiPowered')}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Shield className="w-5 h-5 text-[#00d4aa] mr-2" />
              <span>{t('secureTrading')}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Users className="w-5 h-5 text-[#00d4aa] mr-2" />
              <span>{t('expertSupport')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('apply')}
              size="lg" 
              className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold px-8 py-4 text-lg cta-button cta-primary group"
            >
              {t('getStarted')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('how-it-works')}
              variant="outline" 
              size="lg" 
              className="border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa]/10 px-8 py-4 text-lg cta-button cta-secondary"
            >
              {t('learnMore')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8">
            <p className="text-gray-400 mb-6">{t('trustedBy')}</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-gray-400">{t('activeTraders')}</div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-2xl font-bold">$2M+</div>
              <div className="text-sm text-gray-400">{t('tradingVolume')}</div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-gray-400">{t('satisfaction')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#00d4aa]/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};
