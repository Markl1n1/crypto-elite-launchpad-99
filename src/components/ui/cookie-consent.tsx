
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CookieSettingsModal } from './cookie-settings-modal';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { Link } from 'react-router-dom';
import { Cookie, Settings, X } from 'lucide-react';

export const CookieConsent = () => {
  const [showSettings, setShowSettings] = useState(false);
  const { 
    showBanner, 
    consent, 
    acceptAll, 
    rejectNonEssential, 
    updateConsent,
    hideBanner 
  } = useCookieConsent();

  if (!showBanner) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <Card className="mx-auto max-w-4xl bg-[#0a0e1a] border-gray-700 shadow-2xl">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Cookie className="h-6 w-6 text-[#00d4aa]" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    We use cookies to enhance your experience
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We use cookies and similar technologies to provide the best experience on our website. 
                    Some are essential for functionality, while others help us understand how you use our 
                    site and improve our services. You can customize your preferences or accept all cookies.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                  <div className="flex flex-col sm:flex-row gap-2 text-xs">
                    <Link 
                      to="/privacy-policy" 
                      className="text-[#00d4aa] hover:text-[#00d4aa]/80 underline"
                    >
                      Privacy Policy
                    </Link>
                    <span className="hidden sm:inline text-gray-500">•</span>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="text-[#00d4aa] hover:text-[#00d4aa]/80 underline text-left"
                    >
                      Cookie Details
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Button
                      onClick={rejectNonEssential}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 w-full sm:w-auto"
                    >
                      Reject Non-Essential
                    </Button>
                    
                    <Button
                      onClick={() => setShowSettings(true)}
                      variant="outline"
                      size="sm"
                      className="border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa]/10 w-full sm:w-auto inline-flex items-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                      Customize
                    </Button>
                    
                    <Button
                      onClick={acceptAll}
                      size="sm"
                      className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black w-full sm:w-auto"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>

              <button
                onClick={hideBanner}
                className="flex-shrink-0 p-1 text-gray-400 hover:text-white transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Card>
      </div>

      <CookieSettingsModal
        open={showSettings}
        onOpenChange={setShowSettings}
        currentConsent={consent}
        onSave={updateConsent}
      />
    </>
  );
};
