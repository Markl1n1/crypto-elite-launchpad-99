
export type CookieCategory = 'essential' | 'analytics' | 'marketing' | 'functional';

export interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: number;
  version: string;
}

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const CONSENT_VERSION = '1.0';

export const defaultConsent: CookieConsent = {
  essential: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false,
  timestamp: Date.now(),
  version: CONSENT_VERSION,
};

export const cookieCategories = {
  essential: {
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services.',
    required: true,
  },
  analytics: {
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
    required: false,
  },
  marketing: {
    name: 'Marketing Cookies',
    description: 'These cookies are used to track visitors across websites to display relevant advertisements and marketing campaigns.',
    required: false,
  },
  functional: {
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
    required: false,
  },
};

export const getCookieConsent = (): CookieConsent | null => {
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    
    const consent = JSON.parse(stored) as CookieConsent;
    
    // Check if consent is outdated
    if (consent.version !== CONSENT_VERSION) {
      return null;
    }
    
    return consent;
  } catch {
    return null;
  }
};

export const setCookieConsent = (consent: Partial<CookieConsent>): void => {
  const fullConsent: CookieConsent = {
    ...defaultConsent,
    ...consent,
    essential: true, // Always true
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(fullConsent));
  
  // Dispatch custom event to notify other parts of the app
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: fullConsent }));
};

export const acceptAllCookies = (): void => {
  setCookieConsent({
    essential: true,
    analytics: true,
    marketing: true,
    functional: true,
  });
};

export const rejectNonEssentialCookies = (): void => {
  setCookieConsent({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });
};

export const hasConsentFor = (category: CookieCategory): boolean => {
  const consent = getCookieConsent();
  return consent ? consent[category] : false;
};
