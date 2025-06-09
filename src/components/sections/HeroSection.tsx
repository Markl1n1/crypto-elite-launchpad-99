import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const { t } = useTranslations();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden border-b" style={{ borderColor: 'rgba(0, 212, 170, 0.3)', borderBottomWidth: '1px' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]" />
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Floating Blur Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00d4aa]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#0066ff]/20 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
            <span className="bg-gradient-to-r from-[#00d4aa] via-[#00b896] to-[#0066ff] bg-clip-text text-transparent font-semibold">
              {t('eliteInvestmentOpportunities')}
            </span>
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#00d4aa] via-[#00b896] to-[#0066ff] bg-clip-text text-transparent">
            {t('heroTitle')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection('pricing')} className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200">
              {t('startJourneyNow')}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div 
                  key={num}
                  className="w-10 h-10 rounded-full border-2 border-white/20 bg-cover bg-center" 
                  style={{
                    backgroundImage: `url('https://randomuser.me/api/portraits/${num % 2 === 0 ? 'women' : 'men'}/${num}.jpg')`
                  }} 
                />
              ))}
            </div>
            <span className="text-gray-300">
              <span className="font-semibold text-[#00d4aa]">21,000+</span> {t('investorsTrustUs')}
            </span>
          </div>
        </div>

        {/* Floating Dashboard Cards - Responsive with increased vertical spacing */}
        {/* Card 1 - Portfolio Growth */}
        <div className="absolute top-16 md:top-20 left-2 md:left-8 animate-float w-40 md:w-64">
          <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-2 md:p-4">
            <CardContent className="p-0">
              <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">Record Portfolio Growth</div>
              <div className="text-sm md:text-lg font-bold text-green-400">+782.7%</div>
              <div className="text-xs md:text-sm text-gray-400">April 2025</div>
            </CardContent>
          </Card>
        </div>

        {/* Card 2 - AI Signal */}
        <div className="absolute top-44 md:top-60 right-2 md:right-8 animate-float w-40 md:w-64" style={{
          animationDelay: '1s'
        }}>
          <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-2 md:p-4">
            <CardContent className="p-0">
              <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">AI Says</div>
              <div className="text-sm md:text-lg font-semibold text-[#00d4aa]">Strong Buy Signal for NVIDIA</div>
              <div className="text-xs md:text-sm text-gray-400">{t('confidence')}</div>
            </CardContent>
          </Card>
        </div>

        {/* Card 3 - Average Profit */}
        <div className="absolute bottom-[28rem] md:bottom-[36rem] left-2 md:left-16 animate-float w-40 md:w-64" style={{
          animationDelay: '2s'
        }}>
          <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-2 md:p-4">
            <CardContent className="p-0">
              <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">{t('averageClientProfit')}</div>
              <div className="text-lg md:text-2xl font-bold text-green-400">54.3%</div>
              <div className="text-xs md:text-sm text-gray-400">Monthly</div>
            </CardContent>
          </Card>
        </div>

        {/* Card 4 - Win Rate */}
        <div className="absolute bottom-[22rem] md:bottom-[28rem] right-2 md:right-16 animate-float w-40 md:w-64" style={{
          animationDelay: '3s'
        }}>
          <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-2 md:p-4">
            <CardContent className="p-0">
              <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">{t('clientWinrate')}</div>
              <div className="text-lg md:text-2xl font-bold text-green-400">{t('winratePercentage')}</div>
              <div className="text-xs md:text-sm text-gray-400">{t('successRate')}</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
};
