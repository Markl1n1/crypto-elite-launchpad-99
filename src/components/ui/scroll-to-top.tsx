
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="
        fixed
        bottom-6 right-6
        md:bottom-12 md:right-12
        z-[9999]
        w-12 h-12
        rounded-full
        bg-[#00d4aa] hover:bg-[#00d4aa]/90
        text-black
        shadow-lg
        hover:scale-105
        transition-all duration-200
        focus-visible:outline-none
        border-2 border-white/40
      "
      size="icon"
      aria-label="Scroll to top"
      style={{
        // Remove any left offset issues, enforce right-bottom only
        left: 'auto'
      }}
    >
      <ArrowUp size={20} />
    </Button>
  );
};
