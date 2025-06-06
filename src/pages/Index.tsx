
import { useState, useEffect } from 'react';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { IndustryExperts } from '@/components/sections/IndustryExperts';
import { CEOSection } from '@/components/sections/CEOSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ApplicationSection } from '@/components/sections/ApplicationSection';
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
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      <Header isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <HowItWorksSection scrollToSection={scrollToSection} />
      <StepsSection scrollToSection={scrollToSection} />
      <Testimonials scrollToSection={scrollToSection} />
      <IndustryExperts scrollToSection={scrollToSection} />
      <CEOSection />
      <PricingSection scrollToSection={scrollToSection} />
      <PartnersSection />
      <FAQSection />
      <ApplicationSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
