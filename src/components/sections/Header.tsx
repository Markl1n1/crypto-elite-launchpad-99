
import { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTranslations } from '@/hooks/useTranslations';

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
}];

interface HeaderProps {
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

export const Header = ({ isScrolled, scrollToSection }: HeaderProps) => {
  const { currentLanguage, changeLanguage, t } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0e1a]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/8cea484c-1f52-4aee-84ba-e8fb9cb7e7e3.png" 
            alt="Incite AI Logo" 
            className="w-8 h-8"
          />
          <div className="text-2xl font-bold text-white">
            Incite AI
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
                <Globe size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1a1f35] border-white/20 z-50">
              {languages.map(lang => 
                <DropdownMenuItem 
                  key={lang.code} 
                  onClick={() => changeLanguage(lang.code as any)} 
                  className="text-white hover:bg-[#00d4aa]/20 cursor-pointer flex items-center space-x-3"
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button onClick={() => scrollToSection('apply')} className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold transform hover:scale-105 transition-all duration-200">
            {t('applyNow')}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            <Button onClick={() => scrollToSection('apply')} className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold">
              {t('applyNow')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
