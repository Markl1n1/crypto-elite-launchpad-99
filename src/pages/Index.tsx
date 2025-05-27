
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Lock, Edit, Shield, TrendingUp, ArrowRight, Mail, Phone, MapPin, Facebook, Globe } from 'lucide-react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
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

  // Auto-detect language based on browser location
  useEffect(() => {
    const detectLanguage = () => {
      const browserLang = navigator.language.toLowerCase();
      const languageMap = {
        'en': 'en',
        'pl': 'pl', 
        'de': 'de',
        'es': 'es',
        'ru': 'ru',
        'fr': 'fr',
        'ar': 'ar',
        'tr': 'tr'
      };
      
      for (const [lang, code] of Object.entries(languageMap)) {
        if (browserLang.startsWith(lang)) {
          setCurrentLanguage(code);
          break;
        }
      }
    };
    
    detectLanguage();
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
      setEmailError('Please enter a valid email address');
      hasErrors = true;
    }
    
    // Validate phone
    if (!validatePhone(phoneNumber)) {
      setPhoneError('Please enter a valid phone number (6-15 digits)');
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

  // ... keep existing code (partners array)
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
    { name: 'Susquehanna', logo: 'https://logo.clearbit.com/sig.com' }
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
            <button onClick={() => scrollToSection('home')} className="hover:text-[#00d4aa] transition-colors">Home</button>
            <button onClick={() => scrollToSection('program')} className="hover:text-[#00d4aa] transition-colors">Program</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-[#00d4aa] transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-[#00d4aa] transition-colors">FAQ</button>
            
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:text-[#00d4aa]">
                  <Globe size={16} />
                  <span>{currentLanguageData.flag}</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1f35] border-white/20 z-50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang.code)}
                    className="text-white hover:bg-[#00d4aa]/20 cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span>{lang.code.toUpperCase()}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              onClick={() => scrollToSection('apply')}
              className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold"
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
          <div className="md:hidden bg-[#1a1f35] border-t border-white/10">
            <nav className="container mx-auto px-4 py-4 space-y-4 text-center">
              <button onClick={() => scrollToSection('home')} className="block w-full hover:text-[#00d4aa] transition-colors">Home</button>
              <button onClick={() => scrollToSection('program')} className="block w-full hover:text-[#00d4aa] transition-colors">Program</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full hover:text-[#00d4aa] transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full hover:text-[#00d4aa] transition-colors">FAQ</button>
              <Button 
                onClick={() => scrollToSection('apply')}
                className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold"
              >
                Apply Now
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
              Elite Investment Opportunities
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Multiply Your Capital —{' '}
              <span className="bg-gradient-to-r from-[#00d4aa] to-[#0066ff] bg-clip-text text-transparent">
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
              className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg px-8 py-6 mb-12"
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
                    className="w-10 h-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-sm font-semibold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-300">
                <span className="font-semibold text-[#00d4aa]">2,500+</span> investors trust us
              </span>
            </div>
          </div>

          {/* Floating Dashboard Cards - repositioned to avoid text overlap */}
          <div className="absolute top-28 left-8 hidden xl:block animate-float">
            <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">Portfolio Balance</div>
                <div className="text-2xl font-bold text-green-400">$847,239.52</div>
                <div className="text-sm text-green-400">+12.4% today</div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute top-44 right-8 hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
            <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-4 w-64">
              <CardContent className="p-0">
                <div className="text-sm text-gray-400 mb-2">AI Prediction</div>
                <div className="text-lg font-semibold text-[#00d4aa]">Strong Buy Signal</div>
                <div className="text-sm text-gray-400">Confidence: 94%</div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute bottom-[540px] left-16 hidden xl:block animate-float" style={{ animationDelay: '2s' }}>
            <Card className="bg-[#1a1f35]/80 backdrop-blur-sm border-white/10 p-4 w-64">
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
      <section className="py-20 relative border-b-4 border-[#00d4aa]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/10 to-[#0066ff]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Trading Platform Image */}
            <div className="lg:col-span-2">
              <div className="relative">
                <img 
                  src="/lovable-uploads/e77df26a-aeb5-4528-a9ad-eb9b1e25b21b.png" 
                  alt="Trading Platform Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl mx-auto max-w-sm"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
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
                  <div className="bg-[#00d4aa] p-3 rounded-lg">
                    <Zap size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Predictions</h3>
                    <p className="text-gray-400">Advanced machine learning algorithms analyze market patterns to provide accurate trading signals.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0066ff] p-3 rounded-lg">
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
      <section id="program" className="py-20 bg-[#1a1f35] border-b-4 border-[#00d4aa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              Simple 3-Step Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Steps to Get Started</h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <Card className="bg-[#00d4aa] border-white/10 p-8 text-center relative h-96">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-[#00d4aa] w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  </div>
                  <CardContent className="p-0 h-full flex flex-col justify-center">
                    <div className="bg-white p-4 rounded-lg inline-block mb-6 mx-auto">
                      <Edit size={32} className="text-[#00d4aa]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-black">Leave your application</h3>
                    <p className="text-black/80">Submit your application with basic information. Our team reviews every application personally.</p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <Card className="bg-[#00d4aa] border-white/10 p-8 text-center relative h-96">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-[#00d4aa] w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  </div>
                  <CardContent className="p-0 h-full flex flex-col justify-center">
                    <div className="bg-white p-4 rounded-lg inline-block mb-6 mx-auto">
                      <Shield size={32} className="text-[#00d4aa]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-black">Get guidance & access</h3>
                    <p className="text-black/80">Receive personal consultation and gain access to our exclusive trading platform and tools.</p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <Card className="bg-[#00d4aa] border-white/10 p-8 text-center relative h-96">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-[#00d4aa] w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  </div>
                  <CardContent className="p-0 h-full flex flex-col justify-center">
                    <div className="bg-white p-4 rounded-lg inline-block mb-6 mx-auto">
                      <TrendingUp size={32} className="text-[#00d4aa]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-black">Grow your balance</h3>
                    <p className="text-black/80">Start trading with our AI-powered platform and watch your investments grow with professional guidance.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('apply')}
              className="text-[#00d4aa] hover:text-[#00d4aa]/80 transition-colors text-lg font-semibold underline"
            >
              Start your journey now
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-b-4 border-[#00d4aa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              Flexible Investment Options
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Investment Plans & Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <Card className="bg-[#1a1f35] border-white/10 p-8 relative flex flex-col h-[650px]">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500">8 spots available</Badge>
              </div>
              <CardContent className="p-0 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-white">Standard Plan</h3>
                <div className="text-4xl font-bold mb-6 text-[#00d4aa]">$250</div>
                <ul className="space-y-3 mb-8 flex-grow text-white">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    24/7 Support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Personalised Manager
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Automatic Notification of Trades
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Basic Autotrading
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Limited Number of Simultaneous Trades
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold mt-auto"
                >
                  Start Now
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-[#1a1f35] border-[#00d4aa] p-8 relative transform scale-105 flex flex-col h-[650px]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#00d4aa] text-black font-bold">MOST POPULAR</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500/20 text-red-400 border-red-500">0 spots available</Badge>
              </div>
              <CardContent className="p-0 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-white">Pro Plan</h3>
                <div className="text-4xl font-bold mb-6 text-[#00d4aa]">$1,000</div>
                <ul className="space-y-3 mb-8 flex-grow text-white">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    24/7 Support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Personalised Manager
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Automatic Notification of Trades
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Advanced Autotrading
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Moderated Number of Simultaneous Trades
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Analyse Results
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Meetings with Investors
                  </li>
                </ul>
                <Button disabled className="w-full bg-gray-600 cursor-not-allowed mt-auto">
                  Currently Full
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Plan */}
            <Card className="bg-[#1a1f35] border-white/10 p-8 relative flex flex-col h-[650px]">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500">31 spots available</Badge>
              </div>
              <CardContent className="p-0 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-white">Advanced Plan</h3>
                <div className="text-4xl font-bold mb-6 text-[#00d4aa]">$5,000+</div>
                <ul className="space-y-3 mb-8 flex-grow text-white">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    All features from Pro, plus:
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Premium+ Autotrade
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Unlimited Number of Simultaneous Trades
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Priority Processing of Requests
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mr-3" />
                    Gifts from the Company
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold mt-auto"
                >
                  Start Now
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
            Our Partners
          </h2>
          
          {/* Auto-scrolling carousel */}
          <div className="relative">
            <div className="flex animate-[scroll_8s_linear_infinite]">
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
              Common Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">What security measures do you have in place?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We employ bank-grade security with 256-bit SSL encryption, multi-factor authentication, cold storage for funds, and regular security audits. Your investments are protected by industry-leading security protocols.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">What returns can I expect?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                While we cannot guarantee specific returns, our AI-powered platform has historically delivered consistent results. Returns vary based on market conditions, your chosen plan, and investment timeline. Past performance does not guarantee future results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">What are the qualification requirements?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We accept investors with varying experience levels. Basic requirements include being 18+, having a valid government ID, and meeting the minimum investment threshold for your chosen plan. Our team evaluates each application individually.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">How does the withdrawal process work?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Withdrawals are processed within 1-3 business days. You can withdraw your profits at any time through your dashboard. We support various withdrawal methods including bank transfers and digital wallets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">How does your trading system work?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our proprietary AI system analyzes market data, news sentiment, and technical indicators in real-time. It identifies high-probability trading opportunities and executes trades automatically or provides signals for manual trading, depending on your preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-[#1a1f35] border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-left">Are there any hidden fees?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We believe in complete transparency. All fees are clearly outlined in your plan details. There are no hidden charges, and you'll always know exactly what you're paying for. Our fee structure is simple and straightforward.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <a href="mailto:support@inciteai.com" className="text-[#00d4aa] hover:text-[#00d4aa]/80 transition-colors">
              Contact our support team
            </a>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-20 bg-[#1a1f35] border-b-2 border-[#00d4aa]/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              Begin Your Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Apply Now {applicationStep === 2 ? '- Step 2' : ''}
            </h2>
          </div>

          <Card className="bg-[#0a0e1a] border-white/10 p-8">
            <CardContent className="p-0">
              {applicationStep === 1 ? (
                <form onSubmit={handleStep1Submit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white">
                        First Name <span className="text-red-400">*</span>
                      </Label>
                      <Input 
                        id="firstName" 
                        value={step1Data.firstName}
                        onChange={(e) => setStep1Data({...step1Data, firstName: e.target.value})}
                        className="bg-[#1a1f35] border-white/20 text-white"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">
                        Last Name <span className="text-red-400">*</span>
                      </Label>
                      <Input 
                        id="lastName" 
                        value={step1Data.lastName}
                        onChange={(e) => setStep1Data({...step1Data, lastName: e.target.value})}
                        className="bg-[#1a1f35] border-white/20 text-white"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email Address <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={step1Data.email}
                      onChange={(e) => setStep1Data({...step1Data, email: e.target.value})}
                      className="bg-[#1a1f35] border-white/20 text-white"
                      placeholder="Enter your email address"
                      required
                    />
                    {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone Number <span className="text-red-400">*</span>
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
                      Investment Plan <span className="text-red-400">*</span>
                    </Label>
                    <Select value={step1Data.plan} onValueChange={(value) => setStep1Data({...step1Data, plan: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder="Select your preferred plan" className="text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1f35] border-white/20 z-50">
                        <SelectItem value="standard" className="text-gray-400">Standard Plan - $250 (8 spots available)</SelectItem>
                        <SelectItem value="pro" disabled className="text-gray-400">Pro Plan - $1,000 (0 spots available)</SelectItem>
                        <SelectItem value="advanced" className="text-gray-400">Advanced Plan - $5,000+ (31 spots available)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience" className="text-white">
                      Investment Experience <span className="text-red-400">*</span>
                    </Label>
                    <Select value={step1Data.experience} onValueChange={(value) => setStep1Data({...step1Data, experience: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder="Select your experience level" className="text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1f35] border-white/20 z-50">
                        <SelectItem value="beginner" className="text-gray-400">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate" className="text-gray-400">Intermediate (1-5 years)</SelectItem>
                        <SelectItem value="advanced" className="text-gray-400">Advanced (5+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Additional Information</Label>
                    <Textarea 
                      id="message"
                      value={step1Data.message}
                      onChange={(e) => setStep1Data({...step1Data, message: e.target.value})}
                      className="bg-[#1a1f35] border-white/20 text-white min-h-[100px]"
                      placeholder="Tell us about your investment goals and any questions you have..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg py-6"
                  >
                    Continue to Step 2
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleStep2Submit} className="space-y-6">
                  <div>
                    <Label htmlFor="jobTitle" className="text-white">
                      What is your job title? <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      id="jobTitle" 
                      value={step2Data.jobTitle}
                      onChange={(e) => setStep2Data({...step2Data, jobTitle: e.target.value})}
                      className="bg-[#1a1f35] border-white/20 text-white"
                      placeholder="Enter your job title"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="annualIncome" className="text-white">
                      What is your average annual income? <span className="text-red-400">*</span>
                    </Label>
                    <Select value={step2Data.annualIncome} onValueChange={(value) => setStep2Data({...step2Data, annualIncome: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder="Select your income range" className="text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1f35] border-white/20 z-50">
                        <SelectItem value="up-to-10k" className="text-gray-400">Up to $10,000</SelectItem>
                        <SelectItem value="10k-25k" className="text-gray-400">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k" className="text-gray-400">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k" className="text-gray-400">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-plus" className="text-gray-400">$100,000 and over</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="citizenship" className="text-white">
                      What is your country of citizenship? <span className="text-red-400">*</span>
                    </Label>
                    <Select value={step2Data.citizenship} onValueChange={(value) => setStep2Data({...step2Data, citizenship: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder="Select your country of citizenship" className="text-gray-400" />
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
                      What is your country of living? <span className="text-red-400">*</span>
                    </Label>
                    <Select value={step2Data.residency} onValueChange={(value) => setStep2Data({...step2Data, residency: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder="Select your country of residence" className="text-gray-400" />
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
                      Do you have mortgage or debts? Specify approximate amount in $. <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      id="mortgage" 
                      value={step2Data.mortgage}
                      onChange={(e) => setStep2Data({...step2Data, mortgage: e.target.value})}
                      className="bg-[#1a1f35] border-white/20 text-white"
                      placeholder="Enter amount (e.g., $50,000 or None)"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="financialSituation" className="text-white">
                      Rate your overall financial situation from 1 to 10 <span className="text-red-400">*</span>
                    </Label>
                    <Select value={step2Data.financialSituation} onValueChange={(value) => setStep2Data({...step2Data, financialSituation: value})} required>
                      <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                        <SelectValue placeholder="Select your financial situation (1-10)" className="text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1f35] border-white/20 z-50">
                        <SelectItem value="1" className="text-gray-400">1 - Living paycheck to paycheck</SelectItem>
                        <SelectItem value="2" className="text-gray-400">2</SelectItem>
                        <SelectItem value="3" className="text-gray-400">3</SelectItem>
                        <SelectItem value="4" className="text-gray-400">4</SelectItem>
                        <SelectItem value="5" className="text-gray-400">5</SelectItem>
                        <SelectItem value="6" className="text-gray-400">6</SelectItem>
                        <SelectItem value="7" className="text-gray-400">7</SelectItem>
                        <SelectItem value="8" className="text-gray-400">8</SelectItem>
                        <SelectItem value="9" className="text-gray-400">9</SelectItem>
                        <SelectItem value="10" className="text-gray-400">10 - Can buy anything, 2+ years capital</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="button"
                      onClick={() => setApplicationStep(1)}
                      className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold text-lg py-6"
                    >
                      Back to Step 1
                    </Button>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg py-6"
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              )}

              <div className="flex items-center justify-center space-x-2 mt-6 text-sm text-gray-400">
                <Lock size={16} />
                <span>Your information is secure and encrypted</span>
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
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-[#00d4aa]">Incite</span>
                <span className="text-white"> AI</span>
              </div>
              <p className="text-gray-400 mb-6">
                Elite investment opportunities with cutting-edge technology and institutional-grade security.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} className="text-gray-400 hover:text-[#00d4aa] transition-colors cursor-pointer" />
                </a>
                <a href="https://t.me/inciteai" target="_blank" rel="noopener noreferrer">
                  <Phone size={20} className="text-gray-400 hover:text-[#00d4aa] transition-colors cursor-pointer" />
                </a>
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                  <Phone size={20} className="text-gray-400 hover:text-[#00d4aa] transition-colors cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('program')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">Program</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">FAQ</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-[#00d4aa] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-400 hover:text-[#00d4aa] transition-colors">Terms of Service</Link></li>
                <li><Link to="/risk-disclosure" className="text-gray-400 hover:text-[#00d4aa] transition-colors">Risk Disclosure</Link></li>
                <li><Link to="/compliance" className="text-gray-400 hover:text-[#00d4aa] transition-colors">Compliance</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-400">
                  <Mail size={16} />
                  <span>support@inciteai.com</span>
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
              © 2025 Incite AI. All rights reserved.
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
