
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Lock, Edit, Shield, TrendingUp, ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const partners = [
    'BlackRock', 'Goldman Sachs', 'JPMorgan', 'Wells Fargo', 'Bank of America',
    'PayPal', 'Visa', 'Mastercard', 'Stripe', 'Square', 'American Express',
    'Binance', 'Coinbase', 'Ethereum', 'Fidelity', 'Charles Schwab',
    'TD Ameritrade', 'E*TRADE', 'Robinhood', 'Interactive Brokers'
  ];

  return (
    <div className="min-h-screen bg-[#050614] text-white overflow-x-hidden">
      {/* Header Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050614]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-[#ffc045]">Crypto</span>
              <span className="text-white">Invest</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#ffc045] transition-colors">Home</button>
            <button onClick={() => scrollToSection('program')} className="hover:text-[#ffc045] transition-colors">Program</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-[#ffc045] transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-[#ffc045] transition-colors">FAQ</button>
            <Button 
              onClick={() => scrollToSection('apply')}
              className="bg-[#ffc045] hover:bg-[#ffc045]/90 text-black font-semibold"
            >
              Apply Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0b1e] border-t border-white/10">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-[#ffc045] transition-colors">Home</button>
              <button onClick={() => scrollToSection('program')} className="block w-full text-left hover:text-[#ffc045] transition-colors">Program</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left hover:text-[#ffc045] transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left hover:text-[#ffc045] transition-colors">FAQ</button>
              <Button 
                onClick={() => scrollToSection('apply')}
                className="w-full bg-[#ffc045] hover:bg-[#ffc045]/90 text-black font-semibold"
              >
                Apply Now
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050614] via-[#0a0b1e] to-[#050614]" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Floating Blur Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ffc045]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#22d3ee]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 border-[#ffc045] text-[#ffc045] bg-[#ffc045]/10">
              Elite Investment Opportunities
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Multiply Your Capital —{' '}
              <span className="bg-gradient-to-r from-[#22d3ee] to-[#ffc045] bg-clip-text text-transparent">
                Fast, Smart, Global
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join elite investors accessing global financial powerhouses through exclusive opportunities. 
              Advanced technology meets sophisticated investment strategies.
            </p>
            
            <Button 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="bg-[#ffc045] hover:bg-[#ffc045]/90 text-black font-semibold text-lg px-8 py-6 mb-12"
            >
              Get Started Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex -space-x-2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-[#22d3ee] to-[#ffc045] flex items-center justify-center text-sm font-semibold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-300">
                <span className="font-semibold text-[#ffc045]">2,500+</span> investors trust us
              </span>
            </div>
          </div>

          {/* Floating Dashboard Cards */}
          <div className="absolute top-20 left-10 hidden lg:block animate-float">
            <Card className="bg-[#0f1225]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">Portfolio Balance</div>
                <div className="text-2xl font-bold text-green-400">$847,239.52</div>
                <div className="text-sm text-green-400">+12.4% today</div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute top-40 right-10 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
            <Card className="bg-[#0f1225]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">Active Trades</div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">BTC/USD</span>
                    <span className="text-sm text-green-400">+2.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">ETH/USD</span>
                    <span className="text-sm text-green-400">+5.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
            <Card className="bg-[#0f1225]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">AI Prediction</div>
                <div className="text-lg font-semibold text-[#22d3ee]">Strong Buy Signal</div>
                <div className="text-sm text-gray-400">Confidence: 94%</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* Trading Platform Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#22d3ee]/10 to-[#ffc045]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* iPhone Mockup */}
            <div className="lg:col-span-2">
              <div className="relative mx-auto w-64 h-[520px] bg-black rounded-[50px] p-2">
                <div className="w-full h-full bg-[#0f1225] rounded-[42px] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-2 text-xs">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>
                  
                  {/* Trading Interface */}
                  <div className="px-4 pb-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold">BTC/USD</div>
                      <div className="text-green-400 text-lg">$67,234.52</div>
                      <div className="text-green-400 text-sm">+3.24%</div>
                    </div>
                    
                    {/* Chart Placeholder */}
                    <div className="h-48 bg-gradient-to-t from-green-500/20 to-transparent rounded-lg mb-4 relative overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 200 100">
                        <polyline
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                          points="0,80 20,70 40,60 60,45 80,40 100,35 120,30 140,25 160,20 180,15 200,10"
                        />
                      </svg>
                    </div>
                    
                    {/* Buy/Sell Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <Button className="bg-green-500 hover:bg-green-600 text-white">Buy</Button>
                      <Button className="bg-red-500 hover:bg-red-600 text-white">Sell</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <Badge className="mb-6 border-[#22d3ee] text-[#22d3ee] bg-[#22d3ee]/10">
                Advanced Technology
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cutting-Edge Trading Platform
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of trading with our AI-powered platform. 
                Advanced algorithms, real-time analytics, and institutional-grade security.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ffc045] p-3 rounded-lg">
                    <Zap size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Predictions</h3>
                    <p className="text-gray-400">Advanced machine learning algorithms analyze market patterns to provide accurate trading signals.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#22d3ee] p-3 rounded-lg">
                    <Lock size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bank-Grade Security</h3>
                    <p className="text-gray-400">Military-grade encryption and multi-layer security protocols protect your investments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="program" className="py-20 bg-[#0a0b1e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#ffc045] text-[#ffc045] bg-[#ffc045]/10">
              Simple 3-Step Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Steps to Get Started</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative">
              <Card className="bg-[#0f1225] border-white/10 p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#ffc045] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <CardContent className="p-0">
                  <div className="bg-[#ffc045] p-4 rounded-lg inline-block mb-6">
                    <Edit size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Leave your application</h3>
                  <p className="text-gray-400">Submit your application with basic information. Our team reviews every application personally.</p>
                </CardContent>
              </Card>
              
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight size={24} className="text-[#ffc045]" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <Card className="bg-[#0f1225] border-white/10 p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#ffc045] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <CardContent className="p-0">
                  <div className="bg-[#22d3ee] p-4 rounded-lg inline-block mb-6">
                    <Shield size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Get guidance & access</h3>
                  <p className="text-gray-400">Receive personal consultation and gain access to our exclusive trading platform and tools.</p>
                </CardContent>
              </Card>
              
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight size={24} className="text-[#ffc045]" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <Card className="bg-[#0f1225] border-white/10 p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#ffc045] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <CardContent className="p-0">
                  <div className="bg-green-500 p-4 rounded-lg inline-block mb-6">
                    <TrendingUp size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Grow your balance</h3>
                  <p className="text-gray-400">Start trading with our AI-powered platform and watch your investments grow with professional guidance.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('apply')}
              className="text-[#ffc045] hover:text-[#ffc045]/80 transition-colors text-lg font-semibold underline"
            >
              Start your journey now
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#22d3ee] text-[#22d3ee] bg-[#22d3ee]/10">
              Flexible Investment Options
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Investment Plans & Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <Card className="bg-[#0f1225] border-white/10 p-8 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500">8 spots available</Badge>
              </div>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                <div className="text-4xl font-bold mb-6 text-[#ffc045]">$250</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Basic AI trading signals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Email support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Standard market access
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Monthly reports
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-[#6366f1] hover:bg-[#6366f1]/90"
                >
                  Start Now
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-[#0f1225] border-[#ffc045] p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#ffc045] text-black font-bold">MOST POPULAR</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500/20 text-red-400 border-red-500">No spots available</Badge>
              </div>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                <div className="text-4xl font-bold mb-6 text-[#ffc045]">$1,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Advanced AI predictions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Priority phone support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Premium market access
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Weekly reports & analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Personal account manager
                  </li>
                </ul>
                <Button disabled className="w-full bg-gray-600 cursor-not-allowed">
                  Currently Full
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Plan */}
            <Card className="bg-[#0f1225] border-white/10 p-8 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500">31 spots available</Badge>
              </div>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-2">Advanced Plan</h3>
                <div className="text-4xl font-bold mb-6 text-[#ffc045]">$5,000+</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Elite AI trading suite
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Institutional market access
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Daily reports & live calls
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ffc045] rounded-full mr-3" />
                    Private investment opportunities
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-[#ffc045] hover:bg-[#ffc045]/90 text-black font-semibold"
                >
                  Start Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#0a0b1e] overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Backed by Global Leaders in Finance & Blockchain
          </h2>
          
          {/* Auto-scrolling carousel */}
          <div className="relative">
            <div className="flex animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 h-16 flex items-center justify-center bg-white/5 rounded-lg px-6 hover:bg-white/10 transition-colors"
                  style={{ minWidth: '200px' }}
                >
                  <span className="text-gray-300 font-semibold">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#22d3ee] text-[#22d3ee] bg-[#22d3ee]/10">
              Common Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#0f1225] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">What security measures do you have in place?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We employ bank-grade security with 256-bit SSL encryption, multi-factor authentication, cold storage for funds, and regular security audits. Your investments are protected by industry-leading security protocols.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#0f1225] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">What returns can I expect?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                While we cannot guarantee specific returns, our AI-powered platform has historically delivered consistent results. Returns vary based on market conditions, your chosen plan, and investment timeline. Past performance does not guarantee future results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#0f1225] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">What are the qualification requirements?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We accept investors with varying experience levels. Basic requirements include being 18+, having a valid government ID, and meeting the minimum investment threshold for your chosen plan. Our team evaluates each application individually.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#0f1225] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">How does the withdrawal process work?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Withdrawals are processed within 1-3 business days. You can withdraw your profits at any time through your dashboard. We support various withdrawal methods including bank transfers and digital wallets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#0f1225] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">How does your trading system work?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our proprietary AI system analyzes market data, news sentiment, and technical indicators in real-time. It identifies high-probability trading opportunities and executes trades automatically or provides signals for manual trading, depending on your preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-[#0f1225] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">Are there any hidden fees?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We believe in complete transparency. All fees are clearly outlined in your plan details. There are no hidden charges, and you'll always know exactly what you're paying for. Our fee structure is simple and straightforward.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <a href="mailto:support@cryptoinvest.com" className="text-[#ffc045] hover:text-[#ffc045]/80 transition-colors">
              Contact our support team
            </a>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-20 bg-[#0a0b1e]">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-6 border-[#ffc045] text-[#ffc045] bg-[#ffc045]/10">
              Begin Your Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Apply Now</h2>
          </div>

          <Card className="bg-[#0f1225] border-white/10 p-8">
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      className="bg-[#0a0b1e] border-white/20 text-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      className="bg-[#0a0b1e] border-white/20 text-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    className="bg-[#0a0b1e] border-white/20 text-white"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    className="bg-[#0a0b1e] border-white/20 text-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="plan">Investment Plan</Label>
                  <Select>
                    <SelectTrigger className="bg-[#0a0b1e] border-white/20 text-white">
                      <SelectValue placeholder="Select your preferred plan" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0b1e] border-white/20">
                      <SelectItem value="standard">Standard Plan - $250</SelectItem>
                      <SelectItem value="pro" disabled>Pro Plan - $1,000 (Full)</SelectItem>
                      <SelectItem value="advanced">Advanced Plan - $5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience">Investment Experience</Label>
                  <Select>
                    <SelectTrigger className="bg-[#0a0b1e] border-white/20 text-white">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0b1e] border-white/20">
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-5 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message"
                    className="bg-[#0a0b1e] border-white/20 text-white min-h-[100px]"
                    placeholder="Tell us about your investment goals and any questions you have..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#ffc045] hover:bg-[#ffc045]/90 text-black font-semibold text-lg py-6"
                >
                  Submit Application
                </Button>
              </form>

              <div className="flex items-center justify-center space-x-2 mt-6 text-sm text-gray-400">
                <Lock size={16} />
                <span>Your information is secure and encrypted</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050614] border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-[#ffc045]">Crypto</span>
                <span className="text-white">Invest</span>
              </div>
              <p className="text-gray-400 mb-6">
                Elite investment opportunities with cutting-edge technology and institutional-grade security.
              </p>
              <div className="flex space-x-4">
                <Facebook size={20} className="text-gray-400 hover:text-[#ffc045] transition-colors cursor-pointer" />
                <Twitter size={20} className="text-gray-400 hover:text-[#ffc045] transition-colors cursor-pointer" />
                <Linkedin size={20} className="text-gray-400 hover:text-[#ffc045] transition-colors cursor-pointer" />
                <Instagram size={20} className="text-gray-400 hover:text-[#ffc045] transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-[#ffc045] transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('program')} className="text-gray-400 hover:text-[#ffc045] transition-colors">Program</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-[#ffc045] transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-[#ffc045] transition-colors">FAQ</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#ffc045] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#ffc045] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#ffc045] transition-colors">Risk Disclosure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#ffc045] transition-colors">Compliance</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-400">
                  <Mail size={16} />
                  <span>support@cryptoinvest.com</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <MapPin size={16} />
                  <span>New York, NY</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CryptoInvest. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Investment involves risk. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
