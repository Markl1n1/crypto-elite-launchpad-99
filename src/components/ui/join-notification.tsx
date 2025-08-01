
import React, { useState, useEffect } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

interface Notification {
  id: string;
  name: string;
  countryCode: string;
  country: string;
}

const notifications: Notification[] = [
  { id: '1', name: 'Alexander Müller-Schmidt', countryCode: 'DE', country: 'Germany' },
  { id: '2', name: 'María José Fernández-García', countryCode: 'ES', country: 'Spain' },
  { id: '3', name: 'James Pemberton-Williams', countryCode: 'GB', country: 'United Kingdom' },
  { id: '4', name: 'Hans-Christian Bergström', countryCode: 'SE', country: 'Sweden' },
  { id: '5', name: 'Sophie Dubois-Laurent', countryCode: 'FR', country: 'France' },
  { id: '6', name: 'Liu Xiaoming', countryCode: 'CN', country: 'China' },
  { id: '7', name: 'Yuki Nakamura-Sato', countryCode: 'JP', country: 'Japan' },
  { id: '8', name: 'Anna Kowalska-Nowak', countryCode: 'PL', country: 'Poland' },
  { id: '9', name: 'David MacDonald-Brown', countryCode: 'CA', country: 'Canada' },
  { id: '10', name: 'Emma Wilson-Thompson', countryCode: 'AU', country: 'Australia' },
  { id: '11', name: 'Alexandros Papadopoulos', countryCode: 'GR', country: 'Greece' },
  { id: '12', name: 'Isabella Romano-Rossi', countryCode: 'IT', country: 'Italy' },
  { id: '13', name: 'Ahmed Al-Rashid', countryCode: 'AE', country: 'United Arab Emirates' },
  { id: '14', name: 'Priya Sharma-Gupta', countryCode: 'IN', country: 'India' },
  { id: '15', name: 'João Silva-Santos', countryCode: 'BR', country: 'Brazil' },
  { id: '16', name: 'Vladimir Petrov-Ivanov', countryCode: 'RU', country: 'Russia' },
  { id: '17', name: 'Kim Min-jun', countryCode: 'KR', country: 'South Korea' },
  { id: '18', name: 'Erik van der Berg', countryCode: 'NL', country: 'Netherlands' },
  { id: '19', name: 'Fatima Al-Zahra', countryCode: 'SA', country: 'Saudi Arabia' },
  { id: '20', name: 'Anastasia Volkov-Petrov', countryCode: 'RU', country: 'Russia' },
  { id: '21', name: 'Chen Wei-Ming', countryCode: 'TW', country: 'Taiwan' },
  { id: '22', name: 'Olaf Andersson-Nielsen', countryCode: 'NO', country: 'Norway' },
  { id: '23', name: 'Amara Okonkwo-Nkem', countryCode: 'NG', country: 'Nigeria' },
  { id: '24', name: 'Dmitri Volkov-Kozlov', countryCode: 'RU', country: 'Russia' },
  { id: '25', name: 'Leila Hosseini-Ahmadi', countryCode: 'IR', country: 'Iran' },
  { id: '26', name: 'Björn Svensson-Larsson', countryCode: 'SE', country: 'Sweden' },
  { id: '27', name: 'Aaliyah Johnson-Washington', countryCode: 'US', country: 'United States' },
  { id: '28', name: 'Mikhail Fedorov-Sokolov', countryCode: 'RU', country: 'Russia' },
  { id: '29', name: 'Zara Al-Mansouri', countryCode: 'AE', country: 'United Arab Emirates' },
  { id: '30', name: 'Sebastian Hoffmann-Weber', countryCode: 'AT', country: 'Austria' },
  { id: '31', name: 'Noor Hassan-Abdullah', countryCode: 'EG', country: 'Egypt' },
  { id: '32', name: 'Kai Nakamura-Yamamoto', countryCode: 'JP', country: 'Japan' },
  { id: '33', name: 'Valentina Rossi-Ferrari', countryCode: 'IT', country: 'Italy' },
  { id: '34', name: 'Mohammed Al-Farisi', countryCode: 'OM', country: 'Oman' },
  { id: '35', name: 'Ingrid Larsen-Hansen', countryCode: 'DK', country: 'Denmark' },
  { id: '36', name: 'Rajesh Patel-Shah', countryCode: 'IN', country: 'India' },
  { id: '37', name: 'Camila Rodríguez-López', countryCode: 'MX', country: 'Mexico' },
  { id: '38', name: 'Thabo Mthembu-Dlamini', countryCode: 'ZA', country: 'South Africa' },
  { id: '39', name: 'Hiroshi Tanaka-Watanabe', countryCode: 'JP', country: 'Japan' },
  { id: '40', name: 'Elsa Johansson-Eriksson', countryCode: 'FI', country: 'Finland' },
  { id: '41', name: 'Omar Al-Khalifa', countryCode: 'BH', country: 'Bahrain' },
  { id: '42', name: 'Natasha Volkov-Romanova', countryCode: 'RU', country: 'Russia' },
  { id: '43', name: 'Xavier Dubois', countryCode: 'BE', country: 'Belgium' },
  { id: '44', name: 'Aisha Ibrahim-Hassan', countryCode: 'SD', country: 'Sudan' },
  { id: '45', name: 'Leonardo da Silva-Costa', countryCode: 'PT', country: 'Portugal' },
  { id: '46', name: 'Astrid Olsen-Kristensen', countryCode: 'NO', country: 'Norway' },
  { id: '47', name: 'Hassan Al-Mahmoud', countryCode: 'QA', country: 'Qatar' },
  { id: '48', name: 'Yuki Hashimoto', countryCode: 'JP', country: 'Japan' },
  { id: '49', name: 'Eszter Nagy', countryCode: 'HU', country: 'Hungary' },
  { id: '50', name: 'Gabriel Mendoza', countryCode: 'CO', country: 'Colombia' },
  { id: '51', name: 'Klara Novák-Svoboda', countryCode: 'CZ', country: 'Czech Republic' },
  { id: '52', name: 'Arjun Kapoor-Malhotra', countryCode: 'IN', country: 'India' },
  { id: '53', name: 'Lila Andersson-Johansson', countryCode: 'SE', country: 'Sweden' },
  { id: '54', name: 'Kenji Takahashi-Kobayashi', countryCode: 'JP', country: 'Japan' },
  { id: '55', name: 'Yasmin Al-Hashemi', countryCode: 'KW', country: 'Kuwait' },
  { id: '56', name: 'Magnus Pedersen', countryCode: 'DK', country: 'Denmark' },
  { id: '57', name: 'Zara Okafor-Emeka', countryCode: 'NG', country: 'Nigeria' },
  { id: '58', name: 'Viktor Novák', countryCode: 'SK', country: 'Slovakia' },
  { id: '59', name: 'Amina Al-Zahra', countryCode: 'MA', country: 'Morocco' },
  { id: '60', name: 'Santiago Morales-Herrera', countryCode: 'AR', country: 'Argentina' }
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
