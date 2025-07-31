
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      console.log('Scroll position:', window.pageYOffset); // Debug log
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        console.log('Button should be visible'); // Debug log
      } else {
        setIsVisible(false);
        console.log('Button should be hidden'); // Debug log
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  console.log('Button visibility state:', isVisible); // Debug log

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99999] w-16 h-16 rounded-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/30"
      size="icon"
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        right: '1.5rem',
        bottom: '6rem',
        zIndex: 99999,
      }}
    >
      <ArrowUp size={24} />
    </Button>
  );
};
