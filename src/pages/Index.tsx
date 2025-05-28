
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslations } from '@/hooks/useTranslations';
import { TrendingUp, Shield, Zap, Globe, CheckCircle, ArrowRight, Star, Users, Trophy, Target } from 'lucide-react';
import { toast } from "sonner";
import { phoneCodes } from '@/data/phoneCodes';

const Index = () => {
  const { t, currentLanguage, changeLanguage } = useTranslations();

  const scrollToApplyNow = () => {
    document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const moveSlider = () => {
      const slider = document.querySelector('.partners-slider');
      if (slider) {
        const firstChild = slider.firstElementChild;
        if (firstChild) {
          slider.appendChild(firstChild);
        }
      }
    };

    const interval = setInterval(moveSlider, 2000); // Move every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('formSubmitted'));
  };

  const languageFlags = {
    en: '🇺🇸',
    pl: '🇵🇱', 
    de: '🇩🇪',
    es: '🇪🇸',
    ru: '🇷🇺',
    fr: '🇫🇷',
    ar: '🇸🇦',
    tr: '🇹🇷'
  };

  const getLanguageName = (code: string) => {
    const names = {
      en: 'English',
      pl: 'Polski',
      de: 'Deutsch', 
      es: 'Español',
      ru: 'Русский',
      fr: 'Français',
      ar: 'العربية',
      tr: 'Türkçe'
    };
    return names[code as keyof typeof names] || code;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-white">Incite AI</div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={currentLanguage} onValueChange={changeLanguage}>
                <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                  <SelectValue>
                    <span className="text-lg mr-1">{languageFlags[currentLanguage as keyof typeof languageFlags]}</span>
                    <span className="text-sm">{currentLanguage.toUpperCase()}</span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  {Object.entries(languageFlags).map(([code, flag]) => (
                    <SelectItem key={code} value={code} className="text-white hover:bg-slate-700">
                      <span className="text-lg mr-2">{flag}</span>
                      <span>{getLanguageName(code)}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={scrollToApplyNow} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                {t('getStarted')}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-purple-900/30 to-blue-900/30"></div>
        <div className="container relative mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="animate-fade-in">
                <h1 className="text-white font-semibold text-5xl mb-6 leading-tight">
                  {t('heroTitle')}
                </h1>
                <p className="mt-4 text-lg text-gray-200 leading-relaxed">
                  {t('heroSubtitle')}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={scrollToApplyNow} size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 animate-pulse">
                    <ArrowRight className="ml-2 h-5 w-5" />
                    {t('getEarlyAccess')}
                  </Button>
                  <Button onClick={scrollToApplyNow} variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                    {t('learnMore')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Platform Preview */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('tradingPlatform')}</h2>
            <p className="text-xl text-gray-300">{t('platformDescription')}</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <img 
              src="/lovable-uploads/d77102a6-0db1-4f68-9154-d76b9c8831b2.png" 
              alt="Trading Platform Interface" 
              className="w-full rounded-lg shadow-2xl border border-white/10"
            />
          </div>
          <div className="text-center mt-8">
            <Button onClick={scrollToApplyNow} size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
              <Target className="mr-2 h-5 w-5" />
              {t('tryLiveDemo')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('features')}</h2>
            <p className="text-xl text-gray-300">{t('featuresDescription')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">{t('aiPredictions')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {t('aiPredictionsDesc')}
                </CardDescription>
                <Button onClick={scrollToApplyNow} variant="ghost" className="mt-4 text-purple-400 hover:text-purple-300 p-0">
                  {t('learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">{t('riskManagement')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {t('riskManagementDesc')}
                </CardDescription>
                <Button onClick={scrollToApplyNow} variant="ghost" className="mt-4 text-green-400 hover:text-green-300 p-0">
                  {t('learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">{t('realTimeAlerts')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {t('realTimeAlertsDesc')}
                </CardDescription>
                <Button onClick={scrollToApplyNow} variant="ghost" className="mt-4 text-orange-400 hover:text-orange-300 p-0">
                  {t('learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Strong Buy Signal for NVDA</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  AI detected bullish momentum with 89% confidence score for NVIDIA stock
                </CardDescription>
                <Button onClick={scrollToApplyNow} variant="ghost" className="mt-4 text-blue-400 hover:text-blue-300 p-0">
                  {t('learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('trustedPartners')}</h2>
            <p className="text-gray-300">{t('partnersDescription')}</p>
          </div>
          <div className="overflow-hidden">
            <div className="partners-slider flex items-center space-x-12 animate-[slide-left_20s_linear_infinite]">
              <img src="/lovable-uploads/56d38ce7-8f1e-4893-8651-5591dea78890.png" alt="Visa" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <img src="/lovable-uploads/98f528c7-6c3b-4fa4-907f-eeb151c5e95f.png" alt="Microsoft" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <img src="/lov8able-uploads/a2dabffc-b0b6-4eb0-9751-60a6dae1cd48.png" alt="Apple" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <img src="/lovable-uploads/3d8173dd-fbc5-4012-8a4a-71b279a74ee6.png" alt="MoneyCheck" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <img src="/lovable-uploads/3cb12800-d420-419f-b4a8-2617a446f7c8.png" alt="Yahoo" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <img src="/lovable-uploads/b3ec5cdf-cebe-408d-a156-11b798a92ea0.png" alt="Benzinga" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <img src="/lovable-uploads/61a7602a-8426-4bfc-8809-578a5e20e368.png" alt="Investing.com" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <img src="/lovable-uploads/0bac76b5-2f20-4225-9c0e-d3b30d244361.png" alt="Markets Insider" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <img src="/lovable-uploads/c1da2c49-fcbb-4258-92dc-59ce47477622.png" alt="Bloomberg" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <img src="/lovable-uploads/b8840667-fadc-4406-a9b7-23bf5febf2ee.png" alt="Finance Magnates" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <img src="/lovable-uploads/e2e3d57b-c708-4712-aa7b-0c497d71f301.png" alt="Business Insider" className="h-12 opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('userTestimonials')}</h2>
            <p className="text-xl text-gray-300">What Our Users Say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600">
                      <img src="/photo-1582562124811-c09040d0a901" alt="Lodrino M." className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold">Lodrino M.</h4>
                    <div className="flex items-center mt-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-300">
                      "Your AI stock app seems doing great so far.
                      I tested asking last weekend what would be the best 5 NYSE stocks to buy last Monday, 100% of the 5, had price increases for that day, & 80% during the week.
                      I am further testing it for this week including currency pairs. If it turns out consistent, thru further testing, I would likely recommend this to my clients & trading, investment groups.
                      Wishing you best."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600">
                      <img src="/photo-1501286353178-1ec871214838" alt="Justin F." className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold">Justin F.</h4>
                    <div className="flex items-center mt-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-300">
                      "I think this is a game changer for me and lots of others who do not really understand how to navigate the money market. Good Job!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600">
                      <img src="/photo-1618160702438-9b02ab6515c9" alt="Loxton G." className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold">Loxton G.</h4>
                    <div className="flex items-center mt-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-300">
                      "As a full time trader, Incite can help me source some information regarding market trends/news quickly. I purchased out of curiosity for the future 'trader x' feature to see what that entails."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600">
                      <img src="/photo-1721322800607-8c38375eef04" alt="Anton T." className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold">Anton T.</h4>
                    <div className="flex items-center mt-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-300">
                      "I think your product has an awesome concept, and I really like it. I've used it for a month. Enhancing its ability to crawl more real-time data could make it truly outstanding!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button onClick={scrollToApplyNow} variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              <CheckCircle className="mr-2 h-5 w-5" />
              {t('joinOurCommunity')}
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Experts Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Industry Experts Say</h2>
            <p className="text-xl text-gray-300">Trusted by Leading Industry Professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
                    <img src="/photo-1618160702438-9b02ab6515c9" alt="Jill Malandrino" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-white text-lg font-bold">Jill Malandrino</h4>
                  <p className="text-purple-300 font-medium text-sm my-2">Global Markets Reporter & Host, Nasdaq TradeTalks</p>
                  <p className="text-gray-300 mt-4">
                    "Incite AI helped us identify market shifts faster than ever—our portfolio returns speak for it."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
                    <img src="/photo-1501286353178-1ec871214838" alt="Tarun Chitra" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-white text-lg font-bold">Tarun Chitra</h4>
                  <p className="text-purple-300 font-medium text-sm my-2">CEO & Founder, Gauntlet</p>
                  <p className="text-gray-300 mt-4">
                    "The predictive modeling of Incite AI is best-in-class—essential for DeFi risk analytics."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
                    <img src="/photo-1582562124811-c09040d0a901" alt="Rebecca Lynn" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-white text-lg font-bold">Rebecca Lynn</h4>
                  <p className="text-purple-300 font-medium text-sm my-2">General Partner, Canvas Ventures</p>
                  <p className="text-gray-300 mt-4">
                    "Incite AI gave our analysts a serious edge. It's like going from candlelight to floodlights."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button onClick={scrollToApplyNow} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 animate-pulse">
              <ArrowRight className="ml-2 h-5 w-5" />
              {t('getEarlyAccess')}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA / Apply Now Section */}
      <section id="apply-now" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{t('readyToStart')}</h2>
              <p className="text-xl text-gray-300">{t('applyDescription')}</p>
            </div>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-white">{t('firstName')}</Label>
                      <Input id="first-name" placeholder={t('firstNamePlaceholder')} required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-white">{t('lastName')}</Label>
                      <Input id="last-name" placeholder={t('lastNamePlaceholder')} required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">{t('email')}</Label>
                    <Input id="email" type="email" placeholder={t('emailPlaceholder')} required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">{t('phone')}</Label>
                    <div className="flex">
                      <Select defaultValue="+1">
                        <SelectTrigger className="w-24 bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="+1" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          {phoneCodes.map(code => (
                            <SelectItem key={code.value} value={code.value} className="text-white hover:bg-slate-700">
                              {code.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input id="phone" type="tel" placeholder={t('phonePlaceholder')} className="flex-1 ml-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-white">{t('tradingExperience')}</Label>
                    <Select defaultValue="intermediate">
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder={t('selectExperience')} />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="beginner" className="text-white hover:bg-slate-700">{t('beginner')}</SelectItem>
                        <SelectItem value="intermediate" className="text-white hover:bg-slate-700">{t('intermediate')}</SelectItem>
                        <SelectItem value="advanced" className="text-white hover:bg-slate-700">{t('advanced')}</SelectItem>
                        <SelectItem value="professional" className="text-white hover:bg-slate-700">{t('professional')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-102">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    {t('submit')}
                  </Button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    {t('privacyNote')}
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-4">Incite AI</h3>
              <p className="text-gray-400 mb-4">{t('footerDescription')}</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-4">{t('quickLinks')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('about')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('features')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('pricing')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('blog')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('contact')}</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold text-white mb-4">{t('legal')}</h3>
              <ul className="space-y-2">
                <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">{t('termsOfService')}</a></li>
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">{t('privacyPolicy')}</a></li>
                <li><a href="/risk-disclosure" className="text-gray-400 hover:text-white transition-colors">{t('riskDisclosure')}</a></li>
                <li><a href="/compliance" className="text-gray-400 hover:text-white transition-colors">{t('compliance')}</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-white/10" />
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Incite AI. {t('allRightsReserved')}
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .partners-slider {
          display: flex;
          width: 200%;
          animation: slide-left 20s linear infinite;
        }
        
        .partners-slider img {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}

export default Index;
