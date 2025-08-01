
import { useEffect, useState } from 'react';

export const useScrollAnimation = (threshold: number = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > threshold) {
        if (!isVisible) {
          setIsVisible(true);
        }
      } else {
        if (isVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, isVisible]);

  return isVisible;
};
