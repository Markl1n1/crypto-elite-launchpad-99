
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
    { name: 'BlackRock', logo: 'https://logo.clearbit.com/blackrock.com' },
    { name: 'Goldman Sachs', logo: 'https://logo.clearbit.com/goldmansachs.com' },
    { name: 'JPMorgan', logo: 'https://logo.clearbit.com/jpmorgan.com' },
    { name: 'Wells Fargo', logo: 'https://logo.clearbit.com/wellsfargo.com' },
    { name: 'Bank of America', logo: 'https://logo.clearbit.com/bankofamerica.com' },
    { name: 'PayPal', logo: 'https://logo.clearbit.com/paypal.com' },
    { name: 'Visa', logo: 'https://logo.clearbit.com/visa.com' },
    { name: 'Mastercard', logo: 'https://logo.clearbit.com/mastercard.com' },
    { name: 'Stripe', logo: 'https://logo.clearbit.com/stripe.com' },
    { name: 'Square', logo: 'https://logo.clearbit.com/squareup.com' },
    { name: 'American Express', logo: 'https://logo.clearbit.com/americanexpress.com' },
    { name: 'Binance', logo: 'https://logo.clearbit.com/binance.com' },
    { name: 'Coinbase', logo: 'https://logo.clearbit.com/coinbase.com' },
    { name: 'Fidelity', logo: 'https://logo.clearbit.com/fidelity.com' },
    { name: 'Charles Schwab', logo: 'https://logo.clearbit.com/schwab.com' },
    { name: 'TD Ameritrade', logo: 'https://logo.clearbit.com/tdameritrade.com' },
    { name: 'E*TRADE', logo: 'https://logo.clearbit.com/etrade.com' },
    { name: 'Robinhood', logo: 'https://logo.clearbit.com/robinhood.com' },
    { name: 'Interactive Brokers', logo: 'https://logo.clearbit.com/interactivebrokers.com' }
  ];

  return (
    <div className="min-h-screen bg-[#1a237e] text-white overflow-x-hidden">
      {/* Header Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a237e]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-[#3349ab]">Crypto</span>
              <span className="text-white">Invest</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#3349ab] transition-colors">Home</button>
            <button onClick={() => scrollToSection('program')} className="hover:text-[#3349ab] transition-colors">Program</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-[#3349ab] transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-[#3349ab] transition-colors">FAQ</button>
            <Button 
              onClick={() => scrollToSection('apply')}
              className="bg-[#3349ab] hover:bg-[#3349ab]/90 text-white font-semibold"
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
          <div className="md:hidden bg-[#283593] border-t border-white/10">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-[#3349ab] transition-colors">Home</button>
              <button onClick={() => scrollToSection('program')} className="block w-full text-left hover:text-[#3349ab] transition-colors">Program</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left hover:text-[#3349ab] transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left hover:text-[#3349ab] transition-colors">FAQ</button>
              <Button 
                onClick={() => scrollToSection('apply')}
                className="w-full bg-[#3349ab] hover:bg-[#3349ab]/90 text-white font-semibold"
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#1a237e]" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Floating Blur Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3349ab]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#5c6bc0]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 border-[#3349ab] text-[#3349ab] bg-[#3349ab]/10">
              Elite Investment Opportunities
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Multiply Your Capital —{' '}
              <span className="bg-gradient-to-r from-[#5c6bc0] to-[#3349ab] bg-clip-text text-transparent">
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
              className="bg-[#3349ab] hover:bg-[#3349ab]/90 text-white font-semibold text-lg px-8 py-6 mb-12"
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
                    className="w-10 h-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-[#5c6bc0] to-[#3349ab] flex items-center justify-center text-sm font-semibold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-300">
                <span className="font-semibold text-[#3349ab]">2,500+</span> investors trust us
              </span>
            </div>
          </div>

          {/* Floating Dashboard Cards */}
          <div className="absolute top-20 left-10 hidden lg:block animate-float">
            <Card className="bg-[#283593]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">Portfolio Balance</div>
                <div className="text-2xl font-bold text-green-400">$847,239.52</div>
                <div className="text-sm text-green-400">+12.4% today</div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute top-40 right-10 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
            <Card className="bg-[#283593]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">AI Prediction</div>
                <div className="text-lg font-semibold text-[#5c6bc0]">Strong Buy Signal</div>
                <div className="text-sm text-gray-400">Confidence: 94%</div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute bottom-20 left-1/4 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
            <Card className="bg-[#283593]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">Average Client Monthly Profit</div>
                <div className="text-2xl font-bold text-green-400">+24.7%</div>
                <div className="text-sm text-gray-400">Last 12 months</div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#5c6bc0]/10 to-[#3349ab]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Complex Trading Interface Mockup */}
            <div className="lg:col-span-2">
              <div className="relative mx-auto w-80 h-[600px] bg-black rounded-[20px] p-3">
                <div className="w-full h-full bg-[#283593] rounded-[15px] overflow-hidden relative">
                  {/* Header Bar */}
                  <div className="bg-[#1a237e] px-4 py-3 border-b border-white/10">
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-semibold">TradingView Pro</div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main Trading Interface */}
                  <div className="p-3">
                    {/* Symbol and Price */}
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="text-lg font-bold">BTCUSD</div>
                        <div className="text-xs text-gray-400">Bitcoin / US Dollar</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-400">67,234.52</div>
                        <div className="text-xs text-green-400">+1,987.34 (+3.04%)</div>
                      </div>
                    </div>
                    
                    {/* Chart Area */}
                    <div className="h-64 bg-[#1a237e] rounded-lg mb-3 relative overflow-hidden">
                      {/* Grid Lines */}
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="absolute w-full border-t border-white/5" style={{ top: `${i * 12.5}%` }} />
                        ))}
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="absolute h-full border-l border-white/5" style={{ left: `${i * 20}%` }} />
                        ))}
                      </div>
                      
                      {/* Candlestick Chart */}
                      <svg className="w-full h-full absolute inset-0" viewBox="0 0 320 200">
                        {/* Green candles */}
                        <rect x="20" y="80" width="8" height="40" fill="#22c55e" />
                        <rect x="40" y="70" width="8" height="50" fill="#22c55e" />
                        <rect x="60" y="85" width="8" height="35" fill="#ef4444" />
                        <rect x="80" y="75" width="8" height="45" fill="#22c55e" />
                        <rect x="100" y="65" width="8" height="55" fill="#22c55e" />
                        <rect x="120" y="60" width="8" height="60" fill="#22c55e" />
                        <rect x="140" y="70" width="8" height="50" fill="#ef4444" />
                        <rect x="160" y="55" width="8" height="65" fill="#22c55e" />
                        <rect x="180" y="50" width="8" height="70" fill="#22c55e" />
                        <rect x="200" y="45" width="8" height="75" fill="#22c55e" />
                        <rect x="220" y="40" width="8" height="80" fill="#22c55e" />
                        <rect x="240" y="35" width="8" height="85" fill="#22c55e" />
                        <rect x="260" y="30" width="8" height="90" fill="#22c55e" />
                        <rect x="280" y="25" width="8" height="95" fill="#22c55e" />
                        
                        {/* Trend line */}
                        <polyline
                          fill="none"
                          stroke="#3349ab"
                          strokeWidth="2"
                          points="20,120 40,110 60,115 80,105 100,95 120,90 140,95 160,85 180,80 200,75 220,70 240,65 260,60 280,55 300,50"
                        />
                      </svg>
                      
                      {/* Volume bars */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-end space-x-1">
                        {[...Array(15)].map((_, i) => (
                          <div key={i} className="bg-[#3349ab]/60 flex-1" style={{ height: `${Math.random() * 20 + 5}px` }} />
                        ))}
                      </div>
                    </div>
                    
                    {/* Order Book */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-[#1a237e] rounded p-2">
                        <div className="text-xs text-gray-400 mb-1">Order Book</div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span className="text-red-400">67,250</span>
                            <span>0.245</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-red-400">67,245</span>
                            <span>0.532</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-400">67,235</span>
                            <span>0.421</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#1a237e] rounded p-2">
                        <div className="text-xs text-gray-400 mb-1">24h Stats</div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>High:</span>
                            <span>68,432</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Low:</span>
                            <span>65,123</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Volume:</span>
                            <span>2.4B</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Trading Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white text-xs">
                        BUY BTCUSD
                      </Button>
                      <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white text-xs">
                        SELL BTCUSD
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <Badge className="mb-6 border-[#5c6bc0] text-[#5c6bc0] bg-[#5c6bc0]/10">
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
                  <div className="bg-[#3349ab] p-3 rounded-lg">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Predictions</h3>
                    <p className="text-gray-400">Advanced machine learning algorithms analyze market patterns to provide accurate trading signals.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#5c6bc0] p-3 rounded-lg">
                    <Lock size={24} className="text-white" />
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
      <section id="program" className="py-20 bg-[#283593]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#3349ab] text-[#3349ab] bg-[#3349ab]/10">
              Simple 3-Step Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Steps to Get Started</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <Card className="bg-[#3349ab] border-white/10 p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-[#3349ab] w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <CardContent className="p-0">
                  <div className="bg-white p-4 rounded-lg inline-block mb-6">
                    <Edit size={32} className="text-[#3349ab]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Leave your application</h3>
                  <p className="text-gray-200">Submit your application with basic information. Our team reviews every application personally.</p>
                </CardContent>
              </Card>
              
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                <ArrowRight size={32} className="text-white" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <Card className="bg-[#3349ab] border-white/10 p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-[#3349ab] w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <CardContent className="p-0">
                  <div className="bg-white p-4 rounded-lg inline-block mb-6">
                    <Shield size={32} className="text-[#3349ab]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Get guidance & access</h3>
                  <p className="text-gray-200">Receive personal consultation and gain access to our exclusive trading platform and tools.</p>
                </CardContent>
              </Card>
              
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                <ArrowRight size={32} className="text-white" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <Card className="bg-[#3349ab] border-white/10 p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-[#3349ab] w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <CardContent className="p-0">
                  <div className="bg-white p-4 rounded-lg inline-block mb-6">
                    <TrendingUp size={32} className="text-[#3349ab]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Grow your balance</h3>
                  <p className="text-gray-200">Start trading with our AI-powered platform and watch your investments grow with professional guidance.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('apply')}
              className="text-[#3349ab] hover:text-[#3349ab]/80 transition-colors text-lg font-semibold underline"
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
            <Badge className="mb-6 border-[#5c6bc0] text-[#5c6bc0] bg-[#5c6bc0]/10">
              Flexible Investment Options
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Investment Plans & Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <Card className="bg-[#283593] border-white/10 p-8 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500">8 spots available</Badge>
              </div>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                <div className="text-4xl font-bold mb-6 text-[#3349ab]">$250</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Basic AI trading signals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Email support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Standard market access
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Monthly reports
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-[#3349ab] hover:bg-[#3349ab]/90"
                >
                  Start Now
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-[#283593] border-[#3349ab] p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#3349ab] text-white font-bold">MOST POPULAR</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500/20 text-red-400 border-red-500">No spots available</Badge>
              </div>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                <div className="text-4xl font-bold mb-6 text-[#3349ab]">$1,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Advanced AI predictions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Priority phone support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Premium market access
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Weekly reports & analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Personal account manager
                  </li>
                </ul>
                <Button disabled className="w-full bg-gray-600 cursor-not-allowed">
                  Currently Full
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Plan */}
            <Card className="bg-[#283593] border-white/10 p-8 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500">31 spots available</Badge>
              </div>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-2">Advanced Plan</h3>
                <div className="text-4xl font-bold mb-6 text-[#3349ab]">$5,000+</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Elite AI trading suite
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Institutional market access
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Daily reports & live calls
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3349ab] rounded-full mr-3" />
                    Private investment opportunities
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-[#3349ab] hover:bg-[#3349ab]/90 text-white font-semibold"
                >
                  Start Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#283593] overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Partners
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
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-8 object-contain filter brightness-0 invert opacity-70"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      const fallback = target.nextElementSibling as HTMLElement;
                      target.style.display = 'none';
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-300 font-semibold hidden">{partner.name}</span>
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
            <Badge className="mb-6 border-[#5c6bc0] text-[#5c6bc0] bg-[#5c6bc0]/10">
              Common Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#283593] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">What security measures do you have in place?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We employ bank-grade security with 256-bit SSL encryption, multi-factor authentication, cold storage for funds, and regular security audits. Your investments are protected by industry-leading security protocols.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#283593] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">What returns can I expect?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                While we cannot guarantee specific returns, our AI-powered platform has historically delivered consistent results. Returns vary based on market conditions, your chosen plan, and investment timeline. Past performance does not guarantee future results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#283593] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">What are the qualification requirements?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We accept investors with varying experience levels. Basic requirements include being 18+, having a valid government ID, and meeting the minimum investment threshold for your chosen plan. Our team evaluates each application individually.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#283593] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">How does the withdrawal process work?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Withdrawals are processed within 1-3 business days. You can withdraw your profits at any time through your dashboard. We support various withdrawal methods including bank transfers and digital wallets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#283593] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">How does your trading system work?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our proprietary AI system analyzes market data, news sentiment, and technical indicators in real-time. It identifies high-probability trading opportunities and executes trades automatically or provides signals for manual trading, depending on your preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-[#283593] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">Are there any hidden fees?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We believe in complete transparency. All fees are clearly outlined in your plan details. There are no hidden charges, and you'll always know exactly what you're paying for. Our fee structure is simple and straightforward.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <a href="mailto:support@cryptoinvest.com" className="text-[#3349ab] hover:text-[#3349ab]/80 transition-colors">
              Contact our support team
            </a>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-20 bg-[#283593]">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-6 border-[#3349ab] text-[#3349ab] bg-[#3349ab]/10">
              Begin Your Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Apply Now</h2>
          </div>

          <Card className="bg-[#1a237e] border-white/10 p-8">
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      className="bg-[#283593] border-white/20 text-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      className="bg-[#283593] border-white/20 text-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    className="bg-[#283593] border-white/20 text-white"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    className="bg-[#283593] border-white/20 text-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="plan">Investment Plan</Label>
                  <Select>
                    <SelectTrigger className="bg-[#283593] border-white/20 text-white">
                      <SelectValue placeholder="Select your preferred plan" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#283593] border-white/20">
                      <SelectItem value="standard">Standard Plan - $250</SelectItem>
                      <SelectItem value="pro" disabled>Pro Plan - $1,000 (Full)</SelectItem>
                      <SelectItem value="advanced">Advanced Plan - $5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience">Investment Experience</Label>
                  <Select>
                    <SelectTrigger className="bg-[#283593] border-white/20 text-white">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#283593] border-white/20">
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
                    className="bg-[#283593] border-white/20 text-white min-h-[100px]"
                    placeholder="Tell us about your investment goals and any questions you have..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#3349ab] hover:bg-[#3349ab]/90 text-white font-semibold text-lg py-6"
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
      <footer className="bg-[#1a237e] border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-[#3349ab]">Crypto</span>
                <span className="text-white">Invest</span>
              </div>
              <p className="text-gray-400 mb-6">
                Elite investment opportunities with cutting-edge technology and institutional-grade security.
              </p>
              <div className="flex space-x-4">
                <Facebook size={20} className="text-gray-400 hover:text-[#3349ab] transition-colors cursor-pointer" />
                <Twitter size={20} className="text-gray-400 hover:text-[#3349ab] transition-colors cursor-pointer" />
                <Linkedin size={20} className="text-gray-400 hover:text-[#3349ab] transition-colors cursor-pointer" />
                <Instagram size={20} className="text-gray-400 hover:text-[#3349ab] transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-[#3349ab] transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('program')} className="text-gray-400 hover:text-[#3349ab] transition-colors">Program</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-[#3349ab] transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-[#3349ab] transition-colors">FAQ</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#3349ab] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#3349ab] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#3349ab] transition-colors">Risk Disclosure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#3349ab] transition-colors">Compliance</a></li>
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
