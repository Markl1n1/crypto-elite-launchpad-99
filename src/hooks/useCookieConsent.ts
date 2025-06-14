
import { useState, useEffect, useCallback } from 'react';
import { 
  CookieConsent, 
  getCookieConsent, 
  setCookieConsent as saveCookieConsent,
  acceptAllCookies,
  rejectNonEssentialCookies,
  defaultConsent,
  CookieCategory
} from '@/lib/cookieManager';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedConsent = getCookieConsent();
    setConsent(storedConsent);
    setShowBanner(!storedConsent);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleConsentChange = (event: CustomEvent<CookieConsent>) => {
      setConsent(event.detail);
      setShowBanner(false);
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    };
  }, []);

  const updateConsent = useCallback((newConsent: Partial<CookieConsent>) => {
    saveCookieConsent(newConsent);
  }, []);

  const acceptAll = useCallback(() => {
    acceptAllCookies();
  }, []);

  const rejectNonEssential = useCallback(() => {
    rejectNonEssentialCookies();
  }, []);

  const hasConsent = useCallback((category: CookieCategory): boolean => {
    return consent ? consent[category] : false;
  }, [consent]);

  const hideBanner = useCallback(() => {
    setShowBanner(false);
  }, []);

  return {
    consent: consent || defaultConsent,
    showBanner,
    isLoading,
    updateConsent,
    acceptAll,
    rejectNonEssential,
    hasConsent,
    hideBanner,
  };
};
