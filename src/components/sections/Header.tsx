import { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTranslations } from '@/hooks/useTranslations';
import { getFaqAbbreviation } from '@/lib/getFaqAbbreviation';

// Language data
const languages = [{
  code: 'en',
  name: 'English',
  flag: '🇺🇸'
}, {
  code: 'pl',
  name: 'Polski',
  flag: '🇵🇱'
}, {
  code: 'de',
  name: 'Deutsch',
  flag: '🇩🇪'
}, {
  code: 'es',
  name: 'Español',
  flag: '🇪🇸'
}, {
  code: 'ru',
  name: 'Русский',
  flag: '🇷🇺'
}, {
  code: 'fr',
  name: 'Français',
  flag: '🇫🇷'
}, {
  code: 'ar',
  name: 'العربية',
  flag: '🇸🇦'
}, {
  code: 'tr',
  name: 'Türkçe',
  flag: '🇹🇷'
}, {
  code: 'zh',
  name: '中文',
  flag: '🇨🇳'
}];

interface HeaderProps {
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

export const Header = ({ isScrolled, scrollToSection }: HeaderProps) => {
  const { currentLanguage, changeLanguage, t } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use our new abbreviation mapping utility
  const faqLabel = getFaqAbbreviation(currentLanguage, t('faq'));

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0e1a]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-3">
          <img 
            src="/lovable-uploads/16901b7b-f4dd-4180-a419-e2b56caae6c3.png" 
            alt="Incite AI Logo" 
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <div className="text-xl md:text-2xl font-bold text-white">
            Incite AI
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button onClick={() => scrollToSection('program')} className="hover:text-[#00d4aa] transition-colors text-sm lg:text-base">{t('overview')}</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-[#00d4aa] transition-colors text-sm lg:text-base">{t('testimonials')}</button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-[#00d4aa] transition-colors text-sm lg:text-base">{t('plans')}</button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-[#00d4aa] transition-colors text-sm lg:text-base">{faqLabel}</button>
          
          {/* Language Switcher */}
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:text-[#00d4aa] relative p-1 md:p-2">
                  <Globe size={18} className="md:w-5 md:h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-[#1a1f35] border-white/20 z-[60] min-w-[160px] md:min-w-[180px]" 
                align="end"
                sideOffset={5}
                avoidCollisions={true}
              >
                {languages.map(lang => 
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => changeLanguage(lang.code as any)} 
                    className="text-white hover:bg-[#00d4aa]/20 cursor-pointer flex items-center space-x-2 md:space-x-3 text-sm"
                  >
                    <span className="text-lg md:text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button onClick={() => scrollToSection('apply')} className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold transform hover:scale-105 transition-all duration-200 text-sm lg:text-base px-4 lg:px-6">
            {t('applyNow')}
          </Button>
        </nav>

        {/* Mobile Menu Toggle & Language Switcher */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:text-[#00d4aa] relative p-1">
                <Globe size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="bg-[#1a1f35] border-white/20 z-[60] min-w-[160px]" 
              align="end"
              sideOffset={5}
              avoidCollisions={true}
            >
              {languages.map(lang => 
                <DropdownMenuItem 
                  key={lang.code} 
                  onClick={() => changeLanguage(lang.code as any)} 
                  className="text-white hover:bg-[#00d4aa]/20 cursor-pointer flex items-center space-x-2 text-sm"
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1f35] border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 space-y-3 text-center">
            <button onClick={() => scrollToSection('program')} className="block w-full hover:text-[#00d4aa] transition-colors text-sm">{t('overview')}</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full hover:text-[#00d4aa] transition-colors text-sm">{t('testimonials')}</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full hover:text-[#00d4aa] transition-colors text-sm">{t('plans')}</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full hover:text-[#00d4aa] transition-colors text-sm">{faqLabel}</button>
            <Button onClick={() => scrollToSection('apply')} className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-sm">
              {t('applyNow')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
