

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Lock, Edit, Shield, TrendingUp, ArrowRight, Mail, Phone, MapPin, Send, MessageCircle, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { phoneCodes } from '@/data/phoneCodes';
import { useTranslations } from '@/hooks/useTranslations';

// Language data
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
];

// Countries data
const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
  'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
  'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt',
  'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon',
  'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
  'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
  'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos',
  'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
  'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova',
  'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
  'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau',
  'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
  'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal',
  'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea',
  'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan',
  'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
  'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela',
  'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

const Index = () => {
  const navigate = useNavigate();
  const { currentLanguage, changeLanguage, t } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [applicationStep, setApplicationStep] = useState(1);
  const [phoneCode, setPhoneCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  
  // Form state for step 1
  const [step1Data, setStep1Data] = useState({
    firstName: '',
    lastName: '',
    email: '',
    plan: '',
    experience: '',
    message: ''
  });

  // Form state for step 2
  const [step2Data, setStep2Data] = useState({
    jobTitle: '',
    annualIncome: '',
    citizenship: '',
    residency: '',
    mortgage: '',
    financialSituation: ''
  });

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

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation
  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{6,15}$/;
    return phoneRegex.test(phone);
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError('');
    setPhoneError('');
    
    let hasErrors = false;
    
    // Validate email
    if (!validateEmail(step1Data.email)) {
      setEmailError(t('validEmailRequired'));
      hasErrors = true;
    }
    
    // Validate phone
    if (!validatePhone(phoneNumber)) {
      setPhoneError(t('validPhoneRequired'));
      hasErrors = true;
    }
    
    if (hasErrors) return;
    
    setApplicationStep(2);
  };

  const submitToGoogleSheets = async (formData: any) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzQ8_example/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      console.log('Data submitted to Google Sheets');
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare form data for Google Sheets
    const formData = {
      firstName: step1Data.firstName,
      lastName: step1Data.lastName,
      email: step1Data.email,
      phone: `${phoneCode}${phoneNumber}`,
      plan: step1Data.plan,
      experience: step1Data.experience,
      message: step1Data.message,
      jobTitle: step2Data.jobTitle,
      annualIncome: step2Data.annualIncome,
      citizenship: step2Data.citizenship,
      residency: step2Data.residency,
      mortgage: step2Data.mortgage,
      financialSituation: step2Data.financialSituation,
      timestamp: new Date().toISOString()
    };
    
    // Submit to Google Sheets
    await submitToGoogleSheets(formData);
    
    // Navigate to success page
    navigate('/success');
  };

  const currentLanguageData = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const partners = [
    { name: 'BlackRock', logo: 'https://logo.clearbit.com/blackrock.com' },
    { name: 'Goldman Sachs', logo: 'https://logo.clearbit.com/goldmansachs.com' },
    { name: 'JPMorgan', logo: 'https://logo.clearbit.com/jpmorgan.com' },
    { name: 'Wells Fargo', logo: 'https://logo.clearbit.com/wellsfargo.com' },
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
    { name: 'Interactive Brokers', logo: 'https://logo.clearbit.com/interactivebrokers.com' },
    { name: 'Morgan Stanley', logo: 'https://logo.clearbit.com/morganstanley.com' },
    { name: 'Credit Suisse', logo: 'https://logo.clearbit.com/credit-suisse.com' },
    { name: 'Deutsche Bank', logo: 'https://logo.clearbit.com/db.com' },
    { name: 'Barclays', logo: 'https://logo.clearbit.com/barclays.com' },
    { name: 'UBS', logo: 'https://logo.clearbit.com/ubs.com' },
    { name: 'HSBC', logo: 'https://logo.clearbit.com/hsbc.com' },
    { name: 'Citigroup', logo: 'https://logo.clearbit.com/citigroup.com' },
    { name: 'Vanguard', logo: 'https://logo.clearbit.com/vanguard.com' },
    { name: 'State Street', logo: 'https://logo.clearbit.com/statestreet.com' },
    { name: 'T. Rowe Price', logo: 'https://logo.clearbit.com/troweprice.com' },
    { name: 'Franklin Templeton', logo: 'https://logo.clearbit.com/franklintempleton.com' },
    { name: 'Northern Trust', logo: 'https://logo.clearbit.com/northerntrust.com' },
    { name: 'BNY Mellon', logo: 'https://logo.clearbit.com/bnymellon.com' },
    { name: 'Invesco', logo: 'https://logo.clearbit.com/invesco.com' },
    { name: 'Prudential', logo: 'https://logo.clearbit.com/prudential.com' },
    { name: 'MetLife', logo: 'https://logo.clearbit.com/metlife.com' },
    { name: 'Allianz', logo: 'https://logo.clearbit.com/allianz.com' },
    { name: 'AIG', logo: 'https://logo.clearbit.com/aig.com' },
    { name: 'Berkshire Hathaway', logo: 'https://logo.clearbit.com/berkshirehathaway.com' },
    { name: 'KKR', logo: 'https://logo.clearbit.com/kkr.com' },
    { name: 'Blackstone', logo: 'https://logo.clearbit.com/blackstone.com' },
    { name: 'Apollo', logo: 'https://logo.clearbit.com/apollo.com' },
    { name: 'Carlyle', logo: 'https://logo.clearbit.com/carlyle.com' },
    { name: 'TPG', logo: 'https://logo.clearbit.com/tpg.com' },
    { name: 'Bain Capital', logo: 'https://logo.clearbit.com/baincapital.com' },
    { name: 'Bridgewater Associates', logo: 'https://logo.clearbit.com/bridgewater.com' },
    { name: 'Renaissance Technologies', logo: 'https://logo.clearbit.com/rentec.com' },
    { name: 'Two Sigma', logo: 'https://logo.clearbit.com/twosigma.com' },
    { name: 'Citadel', logo: 'https://logo.clearbit.com/citadel.com' },
    { name: 'DE Shaw', logo: 'https://logo.clearbit.com/deshaw.com' },
    { name: 'AQR Capital', logo: 'https://logo.clearbit.com/aqr.com' },
    { name: 'Millennium Management', logo: 'https://logo.clearbit.com/mlp.com' },
    { name: 'Point72', logo: 'https://logo.clearbit.com/point72.com' },
    { name: 'Susquehanna', logo: 'https://logo.clearbit.com/sig.com' },
    { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
    { name: 'Google', logo: 'https://logo.clearbit.com/google.com' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      {/* Header Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0e1a]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-[#00d4aa]">Incite</span>
              <span className="text-white"> AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#00d4aa] transition-colors">{t('home')}</button>
            <button onClick={() => scrollToSection('program')} className="hover:text-[#00d4aa] transition-colors">{t('program')}</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-[#00d4aa] transition-colors">{t('pricing')}</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-[#00d4aa] transition-colors">{t('faq')}</button>
            
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:text-[#00d4aa]">
                  <span className="text-2xl">{currentLanguageData.flag}</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1f35] border-white/20 z-50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code as any)}
                    className="text-white hover:bg-[#00d4aa]/20 cursor-pointer flex items-center space-x-3"
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              onClick={() => scrollToSection('apply')}
              className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold transform hover:scale-105 transition-all duration-200"
            >
              {t('applyNow')}
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
          <div className="md:hidden bg-[#1a1f35] border-t border-white/10">
            <nav className="container mx-auto px-4 py-4 space-y-4 text-center">
              <button onClick={() => scrollToSection('home')} className="block w-full hover:text-[#00d4aa] transition-colors">{t('home')}</button>
              <button onClick={() => scrollToSection('program')} className="block w-full hover:text-[#00d4aa] transition-colors">{t('program')}</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full hover:text-[#00d4aa] transition-colors">{t('pricing')}</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full hover:text-[#00d4aa] transition-colors">{t('faq')}</button>
              <Button 
                onClick={() => scrollToSection('apply')}
                className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold"
              >
                {t('applyNow')}
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden border-b-4 border-[#00d4aa]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Floating Blur Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00d4aa]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#0066ff]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              {t('eliteInvestmentOpportunities')}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('heroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                onClick={() => scrollToSection('pricing')}
                className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200"
              >
                {t('getStartedNow')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button 
                size="lg"
                onClick={() => scrollToSection('program')}
                variant="outline"
                className="border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa]/10 font-semibold text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200"
              >
                See Live Demo
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-cover bg-center"
                     style={{ backgroundImage: `url('https://randomuser.me/api/portraits/men/1.jpg')` }} />
                <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-cover bg-center"
                     style={{ backgroundImage: `url('https://randomuser.me/api/portraits/women/2.jpg')` }} />
                <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-cover bg-center"
                     style={{ backgroundImage: `url('https://randomuser.me/api/portraits/men/3.jpg')` }} />
                <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-cover bg-center"
                     style={{ backgroundImage: `url('https://randomuser.me/api/portraits/women/4.jpg')` }} />
                <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-cover bg-center"
                     style={{ backgroundImage: `url('https://randomuser.me/api/portraits/men/5.jpg')` }} />
                <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-cover bg-center"
                     style={{ backgroundImage: `url('https://randomuser.me/api/portraits/women/6.jpg')` }} />
                <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-cover bg-center"
                     style={{ backgroundImage: `url('https://randomuser.me/api/portraits/men/7.jpg')` }} />
                <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-cover bg-center"
                     style={{ backgroundImage: `url('https://randomuser.me/api/portraits/women/8.jpg')` }} />
              </div>
              <span className="text-gray-300">
                <span className="font-semibold text-[#00d4aa]">21,000+</span> {t('investorsTrustUs')}
              </span>
            </div>
          </div>

          {/* Floating Dashboard Cards - repositioned to avoid text overlap */}
          <div className="absolute top-28 left-8 hidden xl:block animate-float">
            <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">{t('recordPortfolioMay')}</div>
                <div className="text-lg font-bold text-green-400">{t('portfolioGrowth')}</div>
                <div className="text-sm text-green-400">{t('growthPercentage')}</div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute top-44 right-8 hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
            <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">{t('aiSays')}</div>
                <div className="text-lg font-semibold text-[#00d4aa]">Strong Buy Signal for NVIDIA</div>
                <div className="text-sm text-gray-400">{t('confidence')}</div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute bottom-[540px] left-16 hidden xl:block animate-float" style={{ animationDelay: '2s' }}>
            <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">{t('averageClientProfit')}</div>
                <div className="text-2xl font-bold text-green-400">{t('monthlyProfit')}</div>
                <div className="text-sm text-gray-400">{t('last12Months')}</div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute bottom-[400px] right-16 hidden xl:block animate-float" style={{ animationDelay: '3s' }}>
            <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">{t('clientWinrate')}</div>
                <div className="text-2xl font-bold text-green-400">{t('winratePercentage')}</div>
                <div className="text-sm text-gray-400">{t('successRate')}</div>
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
      <section className="py-20 relative border-b-4 border-[#00d4aa]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/10 to-[#0066ff]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Trading Platform Image */}
            <div className="lg:col-span-2">
              <div className="relative">
                <img 
                  src="/lovable-uploads/98f528c7-6c3b-4fa4-907f-eeb151c5e95f.png" 
                  alt="Trading Platform Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
                {t('advancedTechnology')}
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('cuttingEdgeTradingPlatform')}
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                {t('tradingPlatformDescription')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00d4aa] p-3 rounded-lg">
                    <Zap size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('aiPoweredPredictions')}</h3>
                    <p className="text-gray-400">{t('aiPredictionsDescription')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0066ff] p-3 rounded-lg">
                    <Lock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('bankGradeSecurity')}</h3>
                    <p className="text-gray-400">{t('securityDescription')}</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('apply')}
                className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-200"
              >
                Try Incite AI Free
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="program" className="py-20 bg-[#1a1f35] border-b-4 border-[#00d4aa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              {t('simpleProcess')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('stepsToGetStarted')}</h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <Card className="bg-[#0066ff] border-white/10 p-8 text-center relative h-96 transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-[#0066ff] w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  </div>
                  <CardContent className="p-0 h-full flex flex-col justify-center">
                    <div className="bg-white p-4 rounded-lg inline-block mb-6 mx-auto">
                      <Edit size={32} className="text-[#0066ff]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{t('leaveApplication')}</h3>
                    <p className="text-white/80">{t('applicationDescription')}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <Card className="bg-[#0066ff] border-white/10 p-8 text-center relative h-96 transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-[#0066ff] w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  </div>
                  <CardContent className="p-0 h-full flex flex-col justify-center">
                    <div className="bg-white p-4 rounded-lg inline-block mb-6 mx-auto">
                      <Shield size={32} className="text-[#0066ff]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{t('getGuidanceAccess')}</h3>
                    <p className="text-white/80">{t('guidanceDescription')}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <Card className="bg-[#0066ff] border-white/10 p-8 text-center relative h-96 transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-[#0066ff] w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  </div>
                  <CardContent className="p-0 h-full flex flex-col justify-center">
                    <div className="bg-white p-4 rounded-lg inline-block mb-6 mx-auto">
                      <TrendingUp size={32} className="text-[#0066ff]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{t('growBalance')}</h3>
                    <p className="text-white/80">{t('growDescription')}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection('apply')}
              className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
            >
              {t('startJourneyNow')}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="py-20 border-b-4 border-[#00d4aa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              <Users className="mr-2" size={16} />
              Real User Experiences
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Users Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Incite AI has transformed the investment journey for thousands of users worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="bg-[#1a1f35] border-white/10 p-8 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Your AI stock app seems doing great so far. I tested asking last weekend what would be the best 5 NYSE stocks to buy last Monday, 100% of the 5, had price increases for that day, & 80% during the week. I am further testing it for this week including currency pairs. If it turns out consistent, thru further testing, I would likely recommend this to my clients & trading, investment groups. Wishing you best."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-lg">
                    L
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">Lodrino M.</h4>
                    <p className="text-gray-400 text-sm">Investment Advisor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-[#1a1f35] border-white/10 p-8 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "I think this is a game changer for me and lots of others who do not really understand how to navigate the money market. Good Job!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">Justin F.</h4>
                    <p className="text-gray-400 text-sm">Retail Investor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-[#1a1f35] border-white/10 p-8 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "As a full time trader, Incite can help me source some information regarding market trends/news quickly. I purchased out of curiosity for the future 'trader x' feature to see what that entails."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-lg">
                    L
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">Loxton G.</h4>
                    <p className="text-gray-400 text-sm">Full-Time Trader</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="bg-[#1a1f35] border-white/10 p-8 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "I think your product has an awesome concept, and I really like it. I've used it for a month. Enhancing its ability to crawl more real-time data could make it truly outstanding!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">Anton T.</h4>
                    <p className="text-gray-400 text-sm">Data Analyst</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection('apply')}
              className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
            >
              Get Early Access
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Experts Section */}
      <section className="py-20 bg-[#1a1f35] border-b-4 border-[#00d4aa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              <Award className="mr-2" size={16} />
              Industry Recognition
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Industry Experts Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading financial experts and industry veterans recognize the power of Incite AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Expert 1 */}
            <Card className="bg-[#0a0e1a] border-[#00d4aa]/30 p-8 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    JM
                  </div>
                  <h4 className="font-semibold text-white text-lg">Jill Malandrino</h4>
                  <p className="text-[#00d4aa] text-sm font-medium">Global Markets Reporter & Host, Nasdaq TradeTalks</p>
                </div>
                <p className="text-gray-300 italic text-center">
                  "Incite AI helped us identify market shifts faster than ever—our portfolio returns speak for it."
                </p>
              </CardContent>
            </Card>

            {/* Expert 2 */}
            <Card className="bg-[#0a0e1a] border-[#00d4aa]/30 p-8 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    TC
                  </div>
                  <h4 className="font-semibold text-white text-lg">Tarun Chitra</h4>
                  <p className="text-[#00d4aa] text-sm font-medium">CEO & Founder, Gauntlet</p>
                </div>
                <p className="text-gray-300 italic text-center">
                  "The predictive modeling of Incite AI is best-in-class—essential for DeFi risk analytics."
                </p>
              </CardContent>
            </Card>

            {/* Expert 3 */}
            <Card className="bg-[#0a0e1a] border-[#00d4aa]/30 p-8 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    RL
                  </div>
                  <h4 className="font-semibold text-white text-lg">Rebecca Lynn</h4>
                  <p className="text-[#00d4aa] text-sm font-medium">General Partner, Canvas Ventures</p>
                </div>
                <p className="text-gray-300 italic text-center">
                  "Incite AI gave our analysts a serious edge. It's like going from candlelight to floodlights."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection('apply')}
              className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
            >
              Join the Experts
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-b-4 border-[#00d4aa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              {t('flexibleInvestmentOptions')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('investmentPlansTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <Card className="bg-[#1a1f35] border-white/10 p-8 relative flex flex-col h-[680px]">
              <CardContent className="p-0 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-white">{t('standardPlan')}</h3>
                <div className="text-4xl font-bold mb-6 text-[#00d4aa]">$250</div>
                <ul className="space-y-3 mb-8 flex-grow text-white">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('support247')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('personalisedManager')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('automaticNotification')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('basicAutotrading')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('limitedTrades')}
                  </li>
                </ul>
                <Badge className="bg-green-500/20 text-green-400 border-green-500 mb-4 self-start">8 {t('spotsAvailable')}</Badge>
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold mt-auto"
                >
                  {t('startNow')}
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-[#1a1f35] border-[#00d4aa] p-8 relative flex flex-col h-[680px]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#00d4aa] text-black font-bold">{t('mostPopular')}</Badge>
              </div>
              <CardContent className="p-0 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-white">{t('proPlan')}</h3>
                <div className="text-4xl font-bold mb-6 text-[#00d4aa]">$1,000</div>
                <ul className="space-y-3 mb-8 flex-grow text-white">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('support247')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('personalisedManager')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('automaticNotification')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('advancedAutotrading')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('moderatedTrades')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('analyseResults')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('meetingsInvestors')}
                  </li>
                </ul>
                <Badge className="bg-red-500/20 text-red-400 border-red-500 mb-4 self-start">0 {t('spotsAvailable')}</Badge>
                <Button disabled className="w-full bg-gray-600 cursor-not-allowed mt-auto">
                  {t('currentlyFull')}
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Plan */}
            <Card className="bg-[#1a1f35] border-white/10 p-8 relative flex flex-col h-[680px]">
              <CardContent className="p-0 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-white">{t('advancedPlan')}</h3>
                <div className="text-4xl font-bold mb-6 text-[#00d4aa]">$5,000+</div>
                <ul className="space-y-3 mb-8 flex-grow text-white">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('allProFeatures')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('premiumAutotrade')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('unlimitedTrades')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('priorityProcessing')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    {t('companyGifts')}
                  </li>
                </ul>
                <Badge className="bg-green-500/20 text-green-400 border-green-500 mb-4 self-start">31 {t('spotsAvailable')}</Badge>
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold mt-auto"
                >
                  {t('startNow')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#1a1f35] overflow-hidden border-b-4 border-[#00d4aa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('ourPartners')}
          </h2>
          
          {/* Auto-scrolling carousel - faster speed (20s instead of 30s) */}
          <div className="relative">
            <div className="flex animate-[scroll_20s_linear_infinite]">
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
      <section id="faq" className="py-20 border-b-2 border-[#00d4aa]/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              {t('commonQuestions')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('frequentlyAskedQuestions')}</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">{t('securityMeasuresQ')}</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {t('securityMeasuresA')}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">{t('returnsQ')}</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {t('returnsA')}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">{t('qualificationQ')}</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {t('qualificationA')}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">{t('withdrawalQ')}</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {t('withdrawalA')}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">{t('tradingSystemQ')}</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {t('tradingSystemA')}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">{t('hiddenFeesQ')}</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {t('hiddenFeesA')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">{t('stillHaveQuestions')}</p>
            <a href="mailto:support@inciteai.com" className="text-[#00d4aa] hover:text-[#00d4aa]/80 transition-colors">
              {t('contactSupport')}
            </a>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-20 bg-[#1a1f35] border-b-2 border-[#00d4aa]/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              {t('beginJourney')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('applyNowTitle')} {applicationStep === 2 ? t('step2') : ''}
            </h2>
          </div>

          <Card className="bg-[#0a0e1a] border-white/10 p-8">
            <CardContent className="p-0">
              {applicationStep === 1 ? (
                <form onSubmit={handleStep1Submit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white">
                        {t('firstName')} <span className="text-red-400">{t('required')}</span>
                      </Label>
                      <Input 
                        id="firstName" 
                        value={step1Data.firstName}
                        onChange={(e) => setStep1Data({...step1Data, firstName: e.target.value})}
                        className="bg-[#1a1f35] border-white/20 text-white"
                        placeholder={`${t('firstName')}...`}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">
                        {t('lastName')} <span className="text-red-400">{t('required')}</span>
                      </Label>
                      <Input 
                        id="lastName" 
                        value={step1Data.lastName}
                        onChange={(e) => setStep1Data({...step1Data, lastName: e.target.value})}
                        className="bg-[#1a1f35] border-white/20 text-white"
                        placeholder={`${t('lastName')}...`}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">
                      {t('emailAddress')} <span className="text-red-400">{t('required')}</span>
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={step1Data.email}
                      onChange={(e) => setStep1Data({...step1Data, email: e.target.value})}
                      className="bg-[#1a1f35] border-white/20 text-white"
                      placeholder={`${t('emailAddress')}...`}
                      required
                    />
                    {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">
                      {t('phoneNumber')} <span className="text-red-400">{t('required')}</span>
                    </Label>
                    <div className="flex gap-2">
                      <Select value={phoneCode} onValueChange={setPhoneCode}>
                        <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white w-32">
                          <SelectValue className="text-gray-400" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1f35] border-white/20 z-50 max-h-48">
                          {phoneCodes.map((phone, index) => (
                            <SelectItem key={index} value={phone.code} className="text-gray-400">
                              {phone.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input 
                        id="phone" 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="bg-[#1a1f35] border-white/20 text-white flex-1"
                        placeholder="123456789"
                        required
                      />
                    </div>
                    {phoneError && <p className="text-red-400 text-sm mt-1">{phoneError}</p>}
                  </div>

                  <div>
                    <Label htmlFor="plan" className="text-white">
                      {t('investmentPlan')} <span className="text-red-400">{t('required')}</span>
                    </Label>
                    <Select value={step1Data.plan} onValueChange={(value) => setStep1Data({...step1Data, plan: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder={t('selectPlan')} className="text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1f35] border-white/20 z-50">
                        <SelectItem value="standard" className="text-gray-400">{t('standardPlanOption')}</SelectItem>
                        <SelectItem value="pro" disabled className="text-gray-400">{t('proPlanOption')}</SelectItem>
                        <SelectItem value="advanced" className="text-gray-400">{t('advancedPlanOption')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience" className="text-white">
                      {t('investmentExperience')} <span className="text-red-400">{t('required')}</span>
                    </Label>
                    <Select value={step1Data.experience} onValueChange={(value) => setStep1Data({...step1Data, experience: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder={t('selectExperience')} className="text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1f35] border-white/20 z-50">
                        <SelectItem value="beginner" className="text-gray-400">{t('beginnerExperience')}</SelectItem>
                        <SelectItem value="intermediate" className="text-gray-400">{t('intermediateExperience')}</SelectItem>
                        <SelectItem value="advanced" className="text-gray-400">{t('advancedExperience')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">{t('additionalInformation')}</Label>
                    <Textarea 
                      id="message"
                      value={step1Data.message}
                      onChange={(e) => setStep1Data({...step1Data, message: e.target.value})}
                      className="bg-[#1a1f35] border-white/20 text-white min-h-[100px]"
                      placeholder={t('additionalInfoPlaceholder')}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg py-6"
                  >
                    {t('continueStep2')}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleStep2Submit} className="space-y-6">
                  <div>
                    <Label htmlFor="jobTitle" className="text-white">
                      {t('jobTitle')} <span className="text-red-400">{t('required')}</span>
                    </Label>
                    <Input 
                      id="jobTitle" 
                      value={step2Data.jobTitle}
                      onChange={(e) => setStep2Data({...step2Data, jobTitle: e.target.value})}
                      className="bg-[#1a1f35] border-white/20 text-white"
                      placeholder={`${t('jobTitle')}...`}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="annualIncome" className="text-white">
                      {t('annualIncome')} <span className="text-red-400">{t('required')}</span>
                    </Label>
                    <Select value={step2Data.annualIncome} onValueChange={(value) => setStep2Data({...step2Data, annualIncome: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder={t('annualIncome')} className="text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1f35] border-white/20 z-50">
                        <SelectItem value="up-to-10k" className="text-gray-400">{t('upTo10k')}</SelectItem>
                        <SelectItem value="10k-25k" className="text-gray-400">{t('income10k25k')}</SelectItem>
                        <SelectItem value="25k-50k" className="text-gray-400">{t('income25k50k')}</SelectItem>
                        <SelectItem value="50k-100k" className="text-gray-400">{t('income50k100k')}</SelectItem>
                        <SelectItem value="100k-plus" className="text-gray-400">{t('income100kPlus')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="citizenship" className="text-white">
                      {t('citizenship')} <span className="text-red-400">{t('required')}</span>
                    </Label>
                    <Select value={step2Data.citizenship} onValueChange={(value) => setStep2Data({...step2Data, citizenship: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder={t('citizenship')} className="text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1f35] border-white/20 z-50 max-h-48">
                        {countries.map((country) => (
                          <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, '-')} className="text-gray-400">
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="residency" className="text-white">
                      {t('residency')} <span className="text-red-400">{t('required')}</span>
                    </Label>
                    <Select value={step2Data.residency} onValueChange={(value) => setStep2Data({...step2Data, residency: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder={t('residency')} className="text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1f35] border-white/20 z-50 max-h-48">
                        {countries.map((country) => (
                          <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, '-')} className="text-gray-400">
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mortgage" className="text-white">
                      {t('mortgage')} <span className="text-red-400">{t('required')}</span>
                    </Label>
                    <Input 
                      id="mortgage" 
                      value={step2Data.mortgage}
                      onChange={(e) => setStep2Data({...step2Data, mortgage: e.target.value})}
                      className="bg-[#1a1f35] border-white/20 text-white"
                      placeholder="$50,000 or None"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="financialSituation" className="text-white">
                      {t('financialSituation')} <span className="text-red-400">{t('required')}</span>
                    </Label>
                    <Select value={step2Data.financialSituation} onValueChange={(value) => setStep2Data({...step2Data, financialSituation: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder={t('financialSituation')} className="text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1f35] border-white/20 z-50">
                        <SelectItem value="1" className="text-gray-400">{t('financialSit1')}</SelectItem>
                        <SelectItem value="2" className="text-gray-400">2</SelectItem>
                        <SelectItem value="3" className="text-gray-400">3</SelectItem>
                        <SelectItem value="4" className="text-gray-400">4</SelectItem>
                        <SelectItem value="5" className="text-gray-400">5</SelectItem>
                        <SelectItem value="6" className="text-gray-400">6</SelectItem>
                        <SelectItem value="7" className="text-gray-400">7</SelectItem>
                        <SelectItem value="8" className="text-gray-400">8</SelectItem>
                        <SelectItem value="9" className="text-gray-400">9</SelectItem>
                        <SelectItem value="10" className="text-gray-400">{t('financialSit10')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="button"
                      onClick={() => setApplicationStep(1)}
                      className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold text-lg py-6"
                    >
                      {t('backStep1')}
                    </Button>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg py-6"
                    >
                      {t('submitApplication')}
                    </Button>
                  </div>
                </form>
              )}

              <div className="flex items-center justify-center space-x-2 mt-6 text-sm text-gray-400">
                <Lock size={16} />
                <span>{t('secureEncrypted')}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0e1a] border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-4">
                <span className="text-[#00d4aa]">Incite</span>
                <span className="text-white"> AI</span>
              </div>
              <p className="text-gray-400 mb-6">
                {t('footerDescription')}
              </p>
              <div className="flex space-x-6 justify-center md:justify-start">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1877F2]/80 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </a>
                <a href="https://t.me/inciteai" target="_blank" rel="noopener noreferrer">
                  <div className="w-8 h-8 bg-[#0088cc] rounded-full flex items-center justify-center hover:bg-[#0088cc]/80 transition-colors">
                    <Send size={16} className="text-white" />
                  </div>
                </a>
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                  <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#25D366]/80 transition-colors">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links and Legal */}
            <div className="grid grid-cols-2 gap-8 md:col-span-2">
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-4">{t('quickLinks')}</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">{t('home')}</button></li>
                  <li><button onClick={() => scrollToSection('program')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">{t('program')}</button></li>
                  <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">{t('pricing')}</button></li>
                  <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">{t('faq')}</button></li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-4">{t('legal')}</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy-policy" className="text-gray-400 hover:text-[#00d4aa] transition-colors">{t('privacyPolicy')}</Link></li>
                  <li><Link to="/terms-of-service" className="text-gray-400 hover:text-[#00d4aa] transition-colors">{t('termsOfService')}</Link></li>
                  <li><Link to="/risk-disclosure" className="text-gray-400 hover:text-[#00d4aa] transition-colors">{t('riskDisclosure')}</Link></li>
                  <li><Link to="/compliance" className="text-gray-400 hover:text-[#00d4aa] transition-colors">{t('compliance')}</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-4">{t('contact')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
                  <Mail size={16} />
                  <span>support@inciteai.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
                  <Send size={16} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
                  <MapPin size={16} />
                  <span>New York, NY</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('allRightsReserved')}
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              {t('footerDisclaimer')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
