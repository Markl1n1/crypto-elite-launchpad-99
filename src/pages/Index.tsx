
import { useState, useEffect } from 'react';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CEOSection } from '@/components/sections/CEOSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { IndustryExperts } from '@/components/sections/IndustryExperts';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ApplicationSection } from '@/components/sections/ApplicationSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Map the new menu items to their corresponding section IDs
    let targetId = sectionId;
    if (sectionId === 'testimonials') {
      targetId = 'testimonials';
    } else if (sectionId === 'pricing') {
      targetId = 'pricing';
    }
    
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      <Header isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <PartnersSection />
      <CEOSection />
      <Testimonials scrollToSection={scrollToSection} />
      <IndustryExperts scrollToSection={scrollToSection} />
      <HowItWorksSection scrollToSection={scrollToSection} />
      <PricingSection scrollToSection={scrollToSection} />
      <ApplicationSection />
      <FAQSection />
      <NewsSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
