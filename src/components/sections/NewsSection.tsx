
import { OptimizedImage } from '@/components/ui/optimized-image';
import { useTranslations } from '@/hooks/useTranslations';

export const NewsSection = () => {
  const { t } = useTranslations();

  const newsLogos = [
    {
      name: 'Malaysia',
      src: '/lovable-uploads/54783271-13c1-455d-b3d5-569074348364.png',
      alt: 'Malaysia News'
    },
    {
      name: 'Verified',
      src: '/lovable-uploads/8951a6ee-d9c9-4bb0-ba61-dfc85fe8311a.png',
      alt: 'Verified'
    },
    {
      name: 'Reuters',
      src: '/lovable-uploads/2a51ebac-f33b-4a6f-b85c-567b1144db94.png',
      alt: 'Reuters'
    },
    {
      name: 'Finance Magnates',
      src: '/lovable-uploads/6d54be53-aa67-4c52-9d3e-2ee6e44ee6af.png',
      alt: 'Finance Magnates'
    },
    {
      name: 'Finance Feeds',
      src: '/lovable-uploads/da25e029-d867-4098-8110-b5c20e33d8b0.png',
      alt: 'Finance Feeds'
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#1a1f35]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{t('weAreInTheNews')}</h2>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {newsLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <OptimizedImage 
                src={logo.src} 
                alt={logo.alt} 
                className={`h-8 sm:h-10 md:h-12 object-contain ${logo.name !== 'Verified' ? 'filter brightness-200 contrast-150' : ''} hover:opacity-80 transition-opacity`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
