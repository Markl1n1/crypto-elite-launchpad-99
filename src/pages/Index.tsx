
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Shield, Zap, BarChart3, Users, Star, ChevronDown, Globe, Instagram, Twitter } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "@/hooks/useTranslations";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Index = () => {
  const { t, changeLanguage, currentLanguage } = useTranslations();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'pl', name: 'Polish', nativeName: 'Polski' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' }
  ];

  const features = [
    {
      icon: <TrendingUp className="h-12 w-12 text-[#0c9467]" />,
      title: "AI-Powered Analytics",
      description: "Advanced AI algorithms analyze market trends and provide actionable insights in real-time."
    },
    {
      icon: <Shield className="h-12 w-12 text-[#0c9467]" />,
      title: "Risk Management",
      description: "Intelligent risk assessment tools help you make informed investment decisions with confidence."
    },
    {
      icon: <Zap className="h-12 w-12 text-[#0c9467]" />,
      title: "Precision Trading",
      description: "Execute trades with algorithmic precision and maximize your investment potential."
    }
  ];

  const stats = [
    { value: "94%", label: "Accuracy Rate" },
    { value: "10M+", label: "Assets Analyzed" },
    { value: "50K+", label: "Active Traders" },
    { value: "24/7", label: "Market Coverage" }
  ];

  const plans = [
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
      name: "Pro",
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

  const testimonials = [
    {
      name: "Tarun Chitra",
      role: "Managing Partner at Haun Ventures",
      content: "Incite AI has revolutionized our investment strategy. The precision and insights are unmatched.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jill Malandrino", 
      role: "Global Markets Reporter at Nasdaq",
      content: "The real-time analytics have given us a significant edge in fast-moving markets.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rebecca Lynn",
      role: "Co-Founder and General Partner at Canvas Ventures", 
      content: "Incite AI's risk management tools have helped us navigate volatile markets with confidence.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up in minutes with our streamlined registration process."
    },
    {
      number: "02", 
      title: "Verify Identity",
      description: "Complete secure identity verification to protect your investments."
    },
    {
      number: "03",
      title: "Fund Account",
      description: "Deposit funds using multiple secure payment methods."
    },
    {
      number: "04",
      title: "Start Trading",
      description: "Begin trading with AI-powered insights and advanced tools."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
              <Globe className="h-4 w-4 mr-2" />
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white border shadow-lg">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => changeLanguage(lang.code as any)}
                className={currentLanguage === lang.code ? "bg-gray-100" : ""}
              >
                {lang.nativeName}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center">
            <Badge className="mb-6 bg-[#0c9467]/20 text-[#0c9467] border-[#0c9467]/30">
              {t('eliteInvestmentOpportunities')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-[#0c9467] bg-clip-text text-transparent animate-float">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-[#0c9467] hover:bg-[#0c9467]/90 text-white px-8 py-4 text-lg font-semibold cta-button cta-primary transform hover:scale-105 transition-all duration-300"
              >
                Start Your Journey Now
              </Button>
            </div>
          </div>
        </div>

        {/* Exclusive Program CTA */}
        <div className="bg-gradient-to-r from-[#0c9467] to-blue-600 py-6">
          <div className="container mx-auto px-6 text-center">
            <p className="text-lg font-semibold mb-2">Join Our Exclusive Investment Program</p>
            <p className="text-sm opacity-90">Limited spots available - Apply now for priority access</p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('investorsTrustUs')}</h2>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <img src="/lovable-uploads/d77102a6-0db1-4f68-9154-d76b9c8831b2.png" alt="Partner 1" className="h-12" />
              <img src="/lovable-uploads/d77102a6-0db1-4f68-9154-d76b9c8831b2.png" alt="Partner 2" className="h-12" />
              <img src="/lovable-uploads/d77102a6-0db1-4f68-9154-d76b9c8831b2.png" alt="Partner 3" className="h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('advancedTechnology')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leverage cutting-edge AI technology to make smarter investment decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cutting-Edge Trading Platform Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cutting-Edge Trading Platform</h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the future of trading with our AI-powered platform designed for modern investors.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-[#0c9467] mr-4" />
                  <span className="text-gray-700">Real-time market analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-[#0c9467] mr-4" />
                  <span className="text-gray-700">Advanced charting tools</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-[#0c9467] mr-4" />
                  <span className="text-gray-700">Automated trading strategies</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-[#0c9467] hover:bg-[#0c9467]/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Try Incite AI Now
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0c9467] to-blue-600 rounded-lg p-8 text-white">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">$1.2M</div>
                    <div className="text-sm opacity-80">Portfolio Value</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-300">+24.5%</div>
                    <div className="text-sm opacity-80">Monthly Return</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>AAPL</span>
                    <span className="text-green-300">+2.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>TSLA</span>
                    <span className="text-green-300">+5.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>NVDA</span>
                    <span className="text-green-300">+8.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Get Started */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Steps to Get Started</h2>
            <p className="text-xl text-gray-600">Begin your investment journey in just four simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#0c9467] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-[#0c9467] hover:bg-[#0c9467]/90 text-white px-8 py-4 text-lg font-semibold"
            >
              Start Right Now
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-[#0c9467] mb-2">{stat.value}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your investment needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-[#0c9467] shadow-lg scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0c9467] text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-[#0c9467]">
                    {plan.price}
                    {plan.period && <span className="text-sm text-gray-500 font-normal">/{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#0c9467] mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-[#0c9467] hover:bg-[#0c9467]/90 text-white cta-button cta-primary' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Industry Experts Say */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Industry Experts Say</h2>
            <p className="text-xl text-gray-600">Trusted by leading investors and institutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply for Exclusive Access</h2>
              <p className="text-xl text-gray-600">Join our elite investment program</p>
            </div>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c9467] focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c9467] focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c9467] focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Investment Experience</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c9467] focus:border-transparent">
                      <option>Beginner (Less than 1 year)</option>
                      <option>Intermediate (1-5 years)</option>
                      <option>Advanced (5+ years)</option>
                      <option>Professional</option>
                    </select>
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-[#0c9467] hover:bg-[#0c9467]/90 text-white py-4 text-lg font-semibold"
                  >
                    Apply Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('faq')}</h2>
            <p className="text-xl text-gray-600">Get answers to commonly asked questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">What is Incite AI and how does it work?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">Incite AI is an advanced investment platform that uses artificial intelligence to analyze market data, identify trends, and provide actionable insights for smarter investment decisions.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">How accurate are the AI predictions?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">Our AI models have demonstrated a 94% accuracy rate in market predictions, backed by continuous learning and real-time data analysis across global markets.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Is my investment data secure?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">Yes, we employ bank-grade security measures including end-to-end encryption, multi-factor authentication, and compliance with industry standards to protect your data.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Incite AI</h3>
              <p className="text-gray-400 mb-4">Empowering investors with AI-driven insights and precision trading tools.</p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">support@inciteai.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/risk-disclosure" className="hover:text-white transition-colors">Risk Disclosure</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Incite AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40">
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="flex-1 bg-[#0c9467] hover:bg-[#0c9467]/90 text-white cta-button cta-primary"
          >
            Start Your Journey Now
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1 cta-button cta-secondary"
          >
            Try Incite AI Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
