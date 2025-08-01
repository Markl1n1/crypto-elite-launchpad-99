
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ChatButton = () => {
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

  const openChat = () => {
    // Trigger the Ember chat widget
    if (window.userlike) {
      window.userlike.api.openWidget();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={openChat}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99998] w-14 h-14 rounded-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/30"
      size="icon"
      aria-label="Open chat"
      style={{
        position: 'fixed',
        right: '1.5rem',
        bottom: '1.5rem',
        width: '4rem',
        height: '4rem',
        zIndex: 99998,
      }}
    >
      <MessageCircle size={24} />
    </Button>
  );
};
