
import React, { useState, useEffect } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

interface Notification {
  id: string;
  name: string;
  countryCode: string;
  country: string;
}

const notifications: Notification[] = [
  { id: '1', name: 'Alex Johnson', countryCode: 'US', country: 'United States' },
  { id: '2', name: 'Maria Garcia', countryCode: 'ES', country: 'Spain' },
  { id: '3', name: 'James Smith', countryCode: 'GB', country: 'United Kingdom' },
  { id: '4', name: 'Hans Mueller', countryCode: 'DE', country: 'Germany' },
  { id: '5', name: 'Sophie Martin', countryCode: 'FR', country: 'France' },
  { id: '6', name: 'Liu Wei', countryCode: 'CN', country: 'China' },
  { id: '7', name: 'Yuki Tanaka', countryCode: 'JP', country: 'Japan' },
  { id: '8', name: 'Anna Kowalski', countryCode: 'PL', country: 'Poland' },
  { id: '9', name: 'David Brown', countryCode: 'CA', country: 'Canada' },
  { id: '10', name: 'Emma Wilson', countryCode: 'AU', country: 'Australia' }
];

export const JoinNotification = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslations();

  useEffect(() => {
    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      const notification = notifications[randomIndex];
      
      setCurrentNotification(notification);
      setIsVisible(true);
      
      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
        setCurrentNotification(null);
      }, 4000);
    };

    // Show first notification after 10 seconds
    const initialTimeout = setTimeout(showRandomNotification, 10000);
    
    // Then show a notification every 15-25 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 10000 + 15000; // 15-25 seconds
      setTimeout(showRandomNotification, randomDelay);
    }, 25000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification || !isVisible) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50 transform transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex items-center space-x-3">
        <img
          src={`https://flagcdn.com/24x18/${currentNotification.countryCode.toLowerCase()}.png`}
          alt={currentNotification.country}
          className="w-6 h-4 rounded"
        />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">
            {currentNotification.name}
          </p>
          <p className="text-xs text-gray-500">
            {t('joinedRecently')}
          </p>
        </div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      </div>
    </div>
  );
};
