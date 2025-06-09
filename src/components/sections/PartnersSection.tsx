
import { useTranslations } from '@/hooks/useTranslations';

const partners = [
  {
    name: 'eToro',
    logo: '/lovable-uploads/e59035d9-f669-4cfa-8950-b47136ce6e92.png',
    image: '/lovable-uploads/e59035d9-f669-4cfa-8950-b47136ce6e92.png'
  },
  {
    name: 'Goldman Sachs',
    logo: '/lovable-uploads/550fe1bb-f31a-4442-a22c-2b5c811ebd67.png',
    image: '/lovable-uploads/550fe1bb-f31a-4442-a22c-2b5c811ebd67.png'
  },
  {
    name: 'Interactive Brokers',
    logo: '/lovable-uploads/ab6cea58-304a-4395-b66f-0d4defce421f.png',
    image: '/lovable-uploads/ab6cea58-304a-4395-b66f-0d4defce421f.png'
  },
  {
    name: 'Webull',
    logo: '/lovable-uploads/f6841162-b0f5-42ea-9b03-d77b188fb803.png',
    image: '/lovable-uploads/f6841162-b0f5-42ea-9b03-d77b188fb803.png'
  },
  {
    name: 'JB',
    logo: '/lovable-uploads/79714da7-0e4d-440e-af18-49a7fa3baf10.png',
    image: '/lovable-uploads/79714da7-0e4d-440e-af18-49a7fa3baf10.png'
  },
  {
    name: 'Pantera',
    logo: '/lovable-uploads/d2319606-4266-4c5a-b848-eb4d5db8eccf.png',
    image: '/lovable-uploads/d2319606-4266-4c5a-b848-eb4d5db8eccf.png'
  },
  {
    name: 'Saxo',
    logo: '/lovable-uploads/e0f2432b-6845-43e9-8717-328ef9e33332.png',
    image: '/lovable-uploads/e0f2432b-6845-43e9-8717-328ef9e33332.png'
  },
  {
    name: 'TradeStation Global',
    logo: '/lovable-uploads/8de63643-ea3e-40c3-b1a6-3c90d6d9506b.png',
    image: '/lovable-uploads/8de63643-ea3e-40c3-b1a6-3c90d6d9506b.png'
  },
  {
    name: 'Two Sigma',
    logo: '/lovable-uploads/374e5daf-0763-42b5-9d89-2f0a557b71d7.png',
    image: '/lovable-uploads/374e5daf-0763-42b5-9d89-2f0a557b71d7.png'
  },
  {
    name: 'Virtu Financial',
    logo: '/lovable-uploads/ca4ac2f3-50c5-40f6-b9c6-569e20dd83c8.png',
    image: '/lovable-uploads/ca4ac2f3-50c5-40f6-b9c6-569e20dd83c8.png'
  },
  {
    name: 'Webull',
    logo: '/lovable-uploads/ab9aae2a-2c6b-45b4-8673-6e217444a3c6.png',
    image: '/lovable-uploads/ab9aae2a-2c6b-45b4-8673-6e217444a3c6.png'
  }
];

export const PartnersSection = () => {
  const { t } = useTranslations();
  
  return (
    <section className="py-12 bg-[#0a0e1a] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex animate-[scroll_20s_linear_infinite] gap-[15px]">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 h-16 flex items-center justify-center bg-[#1A1F35] rounded-lg hover:opacity-80 transition-opacity" 
                style={{ 
                  minWidth: '200px',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  paddingLeft: '0.85rem',
                  paddingRight: '0.85rem'
                }}
              >
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" 
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
