
import { useState, useCallback, useMemo } from 'react';
import { ChevronDown, ArrowRight, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const { t } = useTranslations();
  const isMobile = useIsMobile();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, visibleItems: cardVisibility } = useStaggeredAnimation(4, 150);
  const { ref: countRef1, count: portfolioGrowth } = useCounterAnimation<HTMLDivElement>(782.7, 1500, '%');
  const { ref: countRef2, count: clientProfit } = useCounterAnimation<HTMLDivElement>(54.3, 1200, '%');
  const { ref: countRef3, count: winRate } = useCounterAnimation<HTMLDivElement>(87.2, 1400, '%');
  const { ref: countRef4, count: investorCount } = useCounterAnimation<HTMLSpanElement>(156000, 2000, '+');
  
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    card1: true,
    card2: true,
    card3: true,
    card4: true
  });

  const toggleCard = useCallback((cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  }, []);

  const handleStartJourney = useCallback(() => {
    scrollToSection('pricing');
  }, [scrollToSection]);

  // Memoize avatar images to prevent re-rendering
  const avatarImages = useMemo(() => 
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => ({
      id: num,
      src: `https://randomuser.me/api/portraits/${num % 2 === 0 ? 'women' : 'men'}/${num}.jpg`,
      delay: `animate-delay-${600 + num * 50}`
    })), []
  );

  // Memoize card data to prevent unnecessary re-renders
  const cardData = useMemo(() => [
    {
      id: 'card1',
      title: t('recordPortfolioGrowth'),
      value: portfolioGrowth,
      suffix: '%',
      subtitle: t('april2025'),
      color: 'text-green-400',
      ref: countRef1,
      animation: 'animate-fade-in-left'
    },
    {
      id: 'card2',
      title: t('aiSays'),
      value: t('strongBuySignal'),
      subtitle: t('confidence'),
      color: 'text-[#4ADE80]',
      animation: 'animate-fade-in-right animate-delay-200'
    },
    {
      id: 'card3',
      title: t('averageClientProfit'),
      value: clientProfit,
      suffix: '%',
      subtitle: t('monthly'),
      color: 'text-green-400',
      ref: countRef2,
      animation: 'animate-fade-in-left animate-delay-400'
    },
    {
      id: 'card4',
      title: t('clientWinrate'),
      value: winRate,
      suffix: '%',
      subtitle: t('successRate'),
      color: 'text-green-400',
      ref: countRef3,
      animation: 'animate-fade-in-right animate-delay-600'
    }
  ], [t, portfolioGrowth, clientProfit, winRate, countRef1, countRef2, countRef3]);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden border-b particle-bg" 
      style={{ borderColor: 'rgba(0, 212, 170, 0.3)', borderBottomWidth: '1px' }}
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]" />
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Optimized Floating Blur Elements with reduced complexity */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#00d4aa]/15 rounded-full blur-2xl animate-pulse opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#0066ff]/15 rounded-full blur-2xl animate-pulse opacity-50" style={{
        animationDelay: '1s'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto ${heroVisible ? 'animate-fade-in-up' : ''}`}>
          <Badge className={`mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10 hover-lift ${heroVisible ? 'animate-scale-in animate-delay-200' : ''}`}>
            <span className="gradient-text font-semibold">
              {t('eliteInvestmentOpportunities')}
            </span>
          </Badge>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight gradient-text ${heroVisible ? 'animate-fade-in-up animate-delay-300' : ''}`}>
            {t('heroTitle')}
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto ${heroVisible ? 'animate-fade-in-up animate-delay-400' : ''}`}>
            {t('heroSubtitle')}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${heroVisible ? 'animate-fade-in-up animate-delay-500' : ''}`}>
            <Button 
              size="lg" 
              onClick={handleStartJourney} 
              className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg px-8 py-6 cta-button cta-primary hover-lift"
            >
              {t('startJourneyNow')}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
          
          {/* Optimized Social Proof */}
          <div className={`flex items-center justify-center space-x-4 mb-8 ${heroVisible ? 'animate-fade-in-up animate-delay-600' : ''}`}>
            <div className="flex -space-x-2">
              {avatarImages.map((avatar) => (
                <div 
                  key={avatar.id}
                  className={`w-10 h-10 rounded-full border-2 border-white/20 bg-cover bg-center hover-lift transition-all duration-200 ${heroVisible ? `animate-scale-in ${avatar.delay}` : ''}`}
                  style={{
                    backgroundImage: `url('${avatar.src}')`
                  }} 
                />
              ))}
            </div>
            <span className="text-gray-300" ref={countRef4}>
              <span className="font-semibold text-[#00d4aa]">{investorCount}</span> {t('investorsTrustUs')}
            </span>
          </div>
        </div>

        {/* Optimized Floating Dashboard Cards */}
        <div ref={cardsRef}>
          {/* Card 1 - Portfolio Growth */}
          <div className={`absolute top-48 md:top-56 left-2 md:left-8 animate-orbit-1 orbit-card w-40 md:w-64 ${cardVisibility[0] ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <Card className="glass-card glass-card-hover p-2 md:p-4 hover-tilt">
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">{cardData[0].title}</div>
                    {(expandedCards.card1 || !isMobile) && (
                      <>
                        <div ref={cardData[0].ref} className="text-sm md:text-lg font-bold text-green-400">+{cardData[0].value}</div>
                        <div className="text-xs md:text-sm text-gray-400">{cardData[0].subtitle}</div>
                      </>
                    )}
                  </div>
                  {isMobile && (
                    <button 
                      onClick={() => toggleCard('card1')}
                      className="ml-2 text-gray-400 hover:text-white transition-colors hover-lift"
                    >
                      {expandedCards.card1 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 2 - AI Signal */}
          <div className={`absolute top-44 md:top-60 right-2 md:right-8 animate-orbit-2 orbit-card w-40 md:w-64 ${cardVisibility[1] ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
            <Card className="glass-card glass-card-hover p-2 md:p-4 hover-tilt">
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">{cardData[1].title}</div>
                    {(expandedCards.card2 || !isMobile) && (
                      <>
                        <div className="text-sm md:text-lg font-semibold" style={{ color: '#4ADE80' }}>{cardData[1].value}</div>
                        <div className="text-xs md:text-sm text-gray-400">{cardData[1].subtitle}</div>
                      </>
                    )}
                  </div>
                  {isMobile && (
                    <button 
                      onClick={() => toggleCard('card2')}
                      className="ml-2 text-gray-400 hover:text-white transition-colors hover-lift"
                    >
                      {expandedCards.card2 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 3 - Average Profit */}
          <div className={`absolute bottom-[18rem] md:bottom-[26rem] left-2 md:left-16 animate-orbit-3 orbit-card w-40 md:w-64 ${cardVisibility[2] ? 'animate-fade-in-left animate-delay-400' : 'opacity-0'}`}>
            <Card className="glass-card glass-card-hover p-2 md:p-4 hover-tilt">
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">{cardData[2].title}</div>
                    {(expandedCards.card3 || !isMobile) && (
                      <>
                        <div ref={cardData[2].ref} className="text-lg md:text-2xl font-bold text-green-400">{cardData[2].value}</div>
                        <div className="text-xs md:text-sm text-gray-400">{cardData[2].subtitle}</div>
                      </>
                    )}
                  </div>
                  {isMobile && (
                    <button 
                      onClick={() => toggleCard('card3')}
                      className="ml-2 text-gray-400 hover:text-white transition-colors hover-lift"
                    >
                      {expandedCards.card3 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 4 - Win Rate */}
          <div className={`absolute bottom-[22rem] md:bottom-[28rem] right-2 md:right-16 animate-orbit-4 orbit-card w-40 md:w-64 ${cardVisibility[3] ? 'animate-fade-in-right animate-delay-600' : 'opacity-0'}`}>
            <Card className="glass-card glass-card-hover p-2 md:p-4 hover-tilt">
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">{cardData[3].title}</div>
                    {(expandedCards.card4 || !isMobile) && (
                      <>
                        <div ref={cardData[3].ref} className="text-lg md:text-2xl font-bold text-green-400">{cardData[3].value}</div>
                        <div className="text-xs md:text-sm text-gray-400">{cardData[3].subtitle}</div>
                      </>
                    )}
                  </div>
                  {isMobile && (
                    <button 
                      onClick={() => toggleCard('card4')}
                      className="ml-2 text-gray-400 hover:text-white transition-colors hover-lift"
                    >
                      {expandedCards.card4 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Optimized Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover-lift">
        <ChevronDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
};
