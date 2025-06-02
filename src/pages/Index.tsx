
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from '@/hooks/useTranslations';
import { phoneCodes } from '@/data/phoneCodes';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Award, 
  ChevronRight,
  Star,
  CheckCircle,
  BarChart3,
  Brain,
  Target,
  Globe,
  Smartphone,
  Clock,
  DollarSign,
  Lock
} from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const { t, currentLanguage, changeLanguage } = useTranslations();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(phoneCodes[0]);
  const [experience, setExperience] = useState('');

  // Auto-detect and set language based on browser language
  useEffect(() => {
    const detectLanguage = () => {
      const browserLang = navigator.language.toLowerCase();
      const browserLangCode = browserLang.split('-')[0];
      
      const availableLanguages = ['en', 'pl', 'de', 'es', 'ru', 'fr', 'ar', 'tr'];
      
      if (availableLanguages.includes(browserLang)) {
        changeLanguage(browserLang as any);
      } else if (availableLanguages.includes(browserLangCode)) {
        changeLanguage(browserLangCode as any);
      }
      // Default to English if no match (already set in useState)
    };
    
    detectLanguage();
  }, [changeLanguage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully!");
  };

  const testimonials = [
    {
      name: "Tarun Chitra",
      role: "Managing Partner, Robot Ventures",
      content: "Incite AI has revolutionized how we approach market analysis. The AI-driven insights have consistently outperformed traditional methods.",
      rating: 5,
      photo: "https://avatars.githubusercontent.com/u/408976?v=4"
    },
    {
      name: "Jill Malandrino",
      role: "Options Action Host, CNBC",
      content: "The precision and speed of Incite AI's market predictions have given me a significant edge in my trading strategies.",
      rating: 5,
      photo: "https://pbs.twimg.com/profile_images/1260644884/jill_400x400.jpg"
    },
    {
      name: "Rebecca Lynn",
      role: "Co-Founder & General Partner, Canvas Ventures",
      content: "Incite AI's technology represents the future of financial analysis. It's not just a tool; it's a game-changer.",
      rating: 5,
      photo: "https://pbs.twimg.com/profile_images/1731344992398872576/a9YxPzqc_400x400.jpg"
    }
  ];

  const features = [
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: t('advancedTechnology'),
      description: "AI-powered analytics for superior market insights"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: "Real-Time Insights",
      description: "Instant market data and trend analysis"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: "Risk Management",
      description: "Intelligent risk assessment and mitigation"
    },
    {
      icon: <Target className="h-12 w-12 text-orange-600" />,
      title: "Precision Trading",
      description: "Algorithmic precision for optimal execution"
    }
  ];

  const stats = [
    { value: "98.7%", label: "Accuracy Rate" },
    { value: "$2.4B+", label: "Assets Analyzed" },
    { value: "50,000+", label: "Active Traders" },
    { value: "24/7", label: "Market Coverage" }
  ];

  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "$99",
      period: "per month",
      features: [
        "Basic Analytics",
        "Email Support",
        "Mobile App",
        "Basic Reports"
      ],
      popular: false
    },
    {
      name: t('proPlan'),
      price: "$299",
      period: "per month",
      features: [
        "Advanced Analytics",
        "Priority Support",
        "Custom Alerts",
        "Advanced Reports",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Enterprise Plan",
      price: "Custom Pricing",
      period: "",
      features: [
        "Enterprise Analytics",
        "Dedicated Support",
        "White Label",
        "Custom Integration",
        "On-Premise"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Mobile Sticky CTA Bar */}
      <div className="mobile-cta-bar fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg z-50 md:hidden">
        <Button className="w-full animate-pulse bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
          {t('applyNow')}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Incite AI
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{t('home')}</a>
                <a href="#program" className="text-gray-700 hover:text-blue-600 transition-colors">{t('program')}</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">{t('pricing')}</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">{t('faq')}</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={currentLanguage} onValueChange={changeLanguage}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="pl">Polski</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="ru">Русский</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="tr">Türkçe</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">Try Incite AI</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  {t('eliteInvestmentOpportunities')}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {t('heroTitle')}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get ahead of the markets with AI tools built for traders who want real results, not guesswork.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('heroSubtitle')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
                  {t('getStartedNow')}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{t('investorsTrustUs')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.9/5</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {t('joinExclusiveProgram')}
                    </h3>
                    <p className="text-gray-600">{t('limitedSpots')}</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <div className="flex space-x-2">
                        <Select 
                          value={selectedCountry.code} 
                          onValueChange={(value) => {
                            const country = phoneCodes.find(c => c.code === value);
                            if (country) setSelectedCountry(country);
                          }}
                        >
                          <SelectTrigger className="w-[120px]">
                            <SelectValue>{selectedCountry.code}</SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {phoneCodes.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                {country.country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="flex-1"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Investment Experience</Label>
                      <Select value={experience} onValueChange={setExperience}>
                        <SelectTrigger>
                          <SelectValue placeholder="Investment Experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      Start Your Journey Now
                    </Button>
                  </form>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Driven Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of artificial intelligence in financial markets
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results that speak for themselves
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('flexiblePricingPlans')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your trading needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`shadow-md hover:shadow-lg transition-shadow duration-300 ${plan.popular ? 'border-2 border-blue-500' : ''}`}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-600">{plan.price}</div>
                    <p className="text-gray-600">{plan.period}</p>
                    {plan.popular && (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mt-2">
                        {t('mostPopular')}
                      </Badge>
                    )}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    {t('choosePlan')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whatClientsSay')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from industry leaders who trust Incite AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('frequentlyAskedQuestions')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Incite AI
            </p>
          </div>
          <div className="space-y-4">
            <details className="p-4 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <summary className="font-semibold text-gray-900 text-lg cursor-pointer flex items-center justify-between">
                {t('faqQuestion1')}
                <ChevronRight className="h-6 w-6 text-gray-500" />
              </summary>
              <p className="text-gray-600 mt-2">{t('faqAnswer1')}</p>
            </details>
            <details className="p-4 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <summary className="font-semibold text-gray-900 text-lg cursor-pointer flex items-center justify-between">
                {t('faqQuestion2')}
                <ChevronRight className="h-6 w-6 text-gray-500" />
              </summary>
              <p className="text-gray-600 mt-2">{t('faqAnswer2')}</p>
            </details>
            <details className="p-4 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <summary className="font-semibold text-gray-900 text-lg cursor-pointer flex items-center justify-between">
                {t('faqQuestion3')}
                <ChevronRight className="h-6 w-6 text-gray-500" />
              </summary>
              <p className="text-gray-600 mt-2">{t('faqAnswer3')}</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Incite AI</h4>
              <p className="text-gray-400">
                {t('footerAbout')}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">{t('contactUs')}</h4>
              <p className="text-gray-400">Email: support@inciteai.com</p>
              <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Incite AI. {t('allRightsReserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
