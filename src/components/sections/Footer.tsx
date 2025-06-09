
import { Link } from 'react-router-dom';
import { Mail, Send, MapPin, Instagram, X } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export const Footer = ({ scrollToSection }: FooterProps) => {
  const { t } = useTranslations();

  return (
    <footer className="bg-[#0a0e1a] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src="/lovable-uploads/16901b7b-f4dd-4180-a419-e2b56caae6c3.png" 
                alt="Incite AI Logo" 
                className="w-8 h-8"
              />
              <div className="text-2xl font-bold text-white">
                Incite AI
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1877F2]/80 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </a>
              <a href="https://t.me/inciteai" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-[#0088cc] rounded-full flex items-center justify-center hover:bg-[#0088cc]/80 transition-colors">
                  <Send size={16} className="text-white" />
                </div>
              </a>
              <a href="https://www.instagram.com/incite.ai/" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-gradient-to-r from-[#E4405F] to-[#F56040] rounded-full flex items-center justify-center hover:opacity-80 transition-colors">
                  <Instagram size={16} className="text-white" />
                </div>
              </a>
              <a href="https://x.com/Incite_corp" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <X size={16} className="text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links and Contact - Two columns in one row */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-4">{t('quickLinks')}</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('program')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">Overview</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">Plans</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-[#00d4aa] transition-colors">{t('faq')}</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-4">{t('contact')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
                  <Mail size={16} />
                  <span>support@inciteai.org</span>
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
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Incite AI. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            {t('footerDisclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};
