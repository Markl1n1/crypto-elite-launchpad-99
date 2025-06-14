
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { useTranslations } from '@/hooks/useTranslations';
import { CookieConsent, CookieCategory } from '@/lib/cookieManager';
import { ExternalLink, Shield, BarChart3, Target, Settings } from 'lucide-react';

interface CookieSettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentConsent: CookieConsent;
  onSave: (consent: Partial<CookieConsent>) => void;
}

const categoryIcons = {
  essential: Shield,
  analytics: BarChart3,
  marketing: Target,
  functional: Settings,
};

export const CookieSettingsModal = ({ 
  open, 
  onOpenChange, 
  currentConsent, 
  onSave 
}: CookieSettingsModalProps) => {
  const [tempConsent, setTempConsent] = useState<CookieConsent>(currentConsent);
  const { t } = useTranslations();

  const cookieCategories = {
    essential: {
      name: t('essentialCookies'),
      description: t('essentialCookiesDesc'),
      required: true,
    },
    analytics: {
      name: t('analyticsCookies'),
      description: t('analyticsCookiesDesc'),
      required: false,
    },
    marketing: {
      name: t('marketingCookies'),
      description: t('marketingCookiesDesc'),
      required: false,
    },
    functional: {
      name: t('functionalCookies'),
      description: t('functionalCookiesDesc'),
      required: false,
    },
  };

  const handleCategoryChange = (category: CookieCategory, enabled: boolean) => {
    setTempConsent(prev => ({
      ...prev,
      [category]: enabled,
    }));
  };

  const handleSave = () => {
    onSave(tempConsent);
    onOpenChange(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setTempConsent(prev => ({ ...prev, ...allAccepted }));
    onSave(allAccepted);
    onOpenChange(false);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setTempConsent(prev => ({ ...prev, ...onlyEssential }));
    onSave(onlyEssential);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-[#0a0e1a] border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{t('cookieSettings')}</DialogTitle>
          <DialogDescription className="text-gray-300">
            {t('cookieConsentDescription')}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {(Object.entries(cookieCategories) as [CookieCategory, typeof cookieCategories.essential][]).map(
            ([category, config]) => {
              const Icon = categoryIcons[category];
              
              return (
                <div key={category} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon className="h-5 w-5 text-[#00d4aa]" />
                      <div>
                        <Label 
                          htmlFor={category} 
                          className="text-base font-semibold text-white cursor-pointer"
                        >
                          {config.name}
                        </Label>
                        {config.required && (
                          <span className="ml-2 text-xs text-gray-400">({t('cookieRequired')})</span>
                        )}
                      </div>
                    </div>
                    <Switch
                      id={category}
                      checked={tempConsent[category]}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked)}
                      disabled={config.required}
                      className="data-[state=checked]:bg-[#00d4aa]"
                    />
                  </div>
                  <p className="text-sm text-gray-400 ml-8">
                    {config.description}
                  </p>
                  <Separator className="bg-gray-700" />
                </div>
              );
            }
          )}

          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-sm text-gray-300 mb-2">
              <strong>{t('cookieNeedMoreInfo')}</strong>
            </p>
            <p className="text-sm text-gray-400">
              {t('cookieLearnMore')}{' '}
              <Link 
                to="/privacy-policy" 
                className="text-[#00d4aa] hover:text-[#00d4aa]/80 underline inline-flex items-center gap-1"
                onClick={() => onOpenChange(false)}
              >
                {t('privacyPolicy')}
                <ExternalLink className="h-3 w-3" />
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            onClick={handleRejectAll}
            variant="outline"
            className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            {t('rejectNonEssential')}
          </Button>
          <Button
            onClick={handleSave}
            variant="outline"
            className="flex-1 border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa]/10"
          >
            {t('savePreferences')}
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="flex-1 bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black"
          >
            {t('acceptAllCookies')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
