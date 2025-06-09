
import { useTranslations } from '@/hooks/useTranslations';

const partners = [
  {
    name: 'BlackRock',
    logo: 'https://logo.clearbit.com/blackrock.com',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=120&fit=crop'
  },
  {
    name: 'Two Sigma',
    logo: '/lovable-uploads/45dda7d1-3fda-4b64-8cce-43971e7d5555.png',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=120&fit=crop'
  },
  {
    name: 'JPMorgan',
    logo: 'https://logo.clearbit.com/jpmorgan.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=120&fit=crop'
  },
  {
    name: 'Wells Fargo',
    logo: 'https://logo.clearbit.com/wellsfargo.com',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=120&fit=crop'
  },
  {
    name: 'PayPal',
    logo: 'https://logo.clearbit.com/paypal.com',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=120&fit=crop'
  },
  {
    name: 'Mastercard',
    logo: 'https://logo.clearbit.com/mastercard.com',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=120&fit=crop'
  },
  {
    name: 'Stripe',
    logo: 'https://logo.clearbit.com/stripe.com',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=120&fit=crop'
  },
  {
    name: 'Square',
    logo: 'https://logo.clearbit.com/squareup.com',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=120&fit=crop'
  },
  {
    name: 'American Express',
    logo: 'https://logo.clearbit.com/americanexpress.com',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=120&fit=crop'
  },
  {
    name: 'Binance',
    logo: 'https://logo.clearbit.com/binance.com',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=120&fit=crop'
  }
];

export const PartnersSection = () => {
  const { t } = useTranslations();
  
  return (
    <section className="py-20 bg-[#0a0e1a] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex animate-[scroll_20s_linear_infinite]">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-8 h-16 flex items-center justify-center rounded-lg px-6 hover:opacity-80 transition-opacity" 
                style={{ minWidth: '200px' }}
              >
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="h-12 w-auto object-cover rounded opacity-70 hover:opacity-100 transition-opacity" 
                  loading="eager" 
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    const textSpan = target.nextElementSibling as HTMLElement;
                    target.style.display = 'none';
                    if (textSpan) {
                      textSpan.style.display = 'block';
                      textSpan.className = 'text-gray-300 font-semibold text-sm';
                    }
                  }} 
                />
                <span className="text-gray-300 font-semibold text-sm hidden">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
