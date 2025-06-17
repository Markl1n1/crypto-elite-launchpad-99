
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from '@/hooks/useTranslations';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export const Footer = ({ scrollToSection }: FooterProps) => {
  const { t } = useTranslations();
  
  return (
    <footer className="bg-[#0a0e1a] border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/16901b7b-f4dd-4180-a419-e2b56caae6c3.png" 
                alt="Incite AI Logo" 
                className="w-8 h-8"
              />
              <div className="text-2xl font-bold text-white">
                Incite AI
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00d4aa] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00d4aa] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00d4aa] transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('quickLinks')}</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('program')} className="block text-gray-400 hover:text-[#00d4aa] transition-colors text-sm">
                {t('overview')}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-gray-400 hover:text-[#00d4aa] transition-colors text-sm">
                {t('testimonials')}
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block text-gray-400 hover:text-[#00d4aa] transition-colors text-sm">
                {t('plans')}
              </button>
              <button onClick={() => scrollToSection('faq')} className="block text-gray-400 hover:text-[#00d4aa] transition-colors text-sm">
                {t('faq')}
              </button>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="/terms" className="block text-gray-400 hover:text-[#00d4aa] transition-colors text-sm">
                {t('termsOfService')}
              </a>
              <a href="/privacy" className="block text-gray-400 hover:text-[#00d4aa] transition-colors text-sm">
                {t('privacyPolicy')}
              </a>
              <a href="/risk-disclosure" className="block text-gray-400 hover:text-[#00d4aa] transition-colors text-sm">
                {t('riskDisclosure')}
              </a>
              <a href="/compliance" className="block text-gray-400 hover:text-[#00d4aa] transition-colors text-sm">
                Compliance
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} />
                <span>support@inciteai.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            {t('allRightsReserved')}
          </p>
          <p className="text-gray-400 text-sm">
            {t('footerDisclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};
