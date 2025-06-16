
import { useEffect, useRef, useState, useCallback } from 'react';

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      // Disconnect observer after first trigger to improve performance
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold,
      // Add root margin for better performance
      rootMargin: '50px 0px'
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, handleIntersection]);

  return { ref, isVisible };
};

export const useStaggeredAnimation = <T extends HTMLElement = HTMLDivElement>(count: number, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false));
  const ref = useRef<T>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      // Use requestAnimationFrame for better performance
      for (let i = 0; i < count; i++) {
        const timeout = setTimeout(() => {
          requestAnimationFrame(() => {
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[i] = true;
              return newState;
            });
          });
        }, i * delay);
        timeoutRefs.current.push(timeout);
      }
      
      // Disconnect after triggering
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [count, delay]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.1,
      rootMargin: '50px 0px'
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      // Clean up timeouts
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    };
  }, [handleIntersection]);

  return { ref, visibleItems };
};
