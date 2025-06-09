
import { useTranslations } from '@/hooks/useTranslations';

const partners = [
  {
    name: 'eToro',
    logo: '/lovable-uploads/6e46df60-dfed-457a-b684-92df382ec7ad.png',
    image: '/lovable-uploads/6e46df60-dfed-457a-b684-92df382ec7ad.png'
  },
  {
    name: 'Goldman Sachs',
    logo: '/lovable-uploads/b70ca7dd-bfe9-4464-ab2f-958bfab2fd55.png',
    image: '/lovable-uploads/b70ca7dd-bfe9-4464-ab2f-958bfab2fd55.png'
  },
  {
    name: 'Interactive Brokers',
    logo: '/lovable-uploads/c4344058-f75f-4b83-9d70-38afc946a863.png',
    image: '/lovable-uploads/c4344058-f75f-4b83-9d70-38afc946a863.png'
  },
  {
    name: 'JB',
    logo: '/lovable-uploads/f1780432-ea56-4ea1-a7d5-d195c8a8ddd9.png',
    image: '/lovable-uploads/f1780432-ea56-4ea1-a7d5-d195c8a8ddd9.png'
  },
  {
    name: 'Pantera',
    logo: '/lovable-uploads/985e890a-6995-47af-a7c1-828e9c60f5b6.png',
    image: '/lovable-uploads/985e890a-6995-47af-a7c1-828e9c60f5b6.png'
  },
  {
    name: 'Saxo',
    logo: '/lovable-uploads/48384b57-86aa-4a9b-b502-06e7b6762bed.png',
    image: '/lovable-uploads/48384b57-86aa-4a9b-b502-06e7b6762bed.png'
  },
  {
    name: 'TradeStation Global',
    logo: '/lovable-uploads/0671e6fd-6112-4405-9c42-3d4fb4af4ff4.png',
    image: '/lovable-uploads/0671e6fd-6112-4405-9c42-3d4fb4af4ff4.png'
  },
  {
    name: 'Two Sigma',
    logo: '/lovable-uploads/aeafc517-3102-4bf2-a394-dea6d6a8f176.png',
    image: '/lovable-uploads/aeafc517-3102-4bf2-a394-dea6d6a8f176.png'
  },
  {
    name: 'Virtu Financial',
    logo: '/lovable-uploads/88ab3b01-cbbc-4bc2-b8ff-90681b165448.png',
    image: '/lovable-uploads/88ab3b01-cbbc-4bc2-b8ff-90681b165448.png'
  },
  {
    name: 'Webull',
    logo: '/lovable-uploads/239bb8f1-b021-4f4c-9f9c-e8c4957c0790.png',
    image: '/lovable-uploads/239bb8f1-b021-4f4c-9f9c-e8c4957c0790.png'
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
                className="flex-shrink-0 h-16 flex items-center justify-center bg-[#1A1F35] rounded-lg px-5 py-[15px] hover:opacity-80 transition-opacity" 
                style={{ minWidth: '200px' }}
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
