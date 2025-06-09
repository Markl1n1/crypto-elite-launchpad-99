import { useState } from 'react';
import { Star, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialsProps {
  scrollToSection: (sectionId: string) => void;
}

const testimonials = [
  // English testimonials (4)
  {
    name: 'Michael R.',
    profession: 'Automotive Retailer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Finally found something that helps me understand the market better! As someone who sells cars, I appreciate when things are explained simply. This AI actually makes investing feel less scary.',
    language: 'en'
  },
  {
    name: 'Justin F.',
    profession: 'Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Love the clean interface design! As a designer myself, I appreciate good UX. But more importantly, it\'s helping me grow my savings alongside my creative work.',
    language: 'en'
  },
  {
    name: 'Sarah M.',
    profession: 'Coffee Shop Owner',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b217?w=150&h=150&fit=crop&crop=face',
    content: 'Running my coffee shop keeps me busy, but this AI helps me check my investments quickly during breaks. It\'s like having a financial advisor that understands small business owners.',
    language: 'en'
  },
  {
    name: 'David K.',
    profession: 'System Administrator',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    content: 'The data processing capabilities are impressive! As a sysadmin, I appreciate how efficiently it handles market information. Great tool for automating investment research.',
    language: 'en'
  },
  // Spanish testimonial (1)
  {
    name: 'Carlos M.',
    profession: 'Profesor de instituto',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    content: 'Nunca pensé que entendería las tendencias del mercado, pero Incite AI lo explica de una manera que incluso un principiante como yo puede seguir. Me ha ayudado a invertir con confianza.',
    language: 'es'
  },
  // French testimonial (1)
  {
    name: 'Marie D.',
    profession: 'Coiffeuse',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'J\'ai commencé à utiliser Incite AI par curiosité, mais maintenant je le consulte chaque matin avant le travail. C\'est comme une fiche de révision pour les marchés — fait pour les gens ordinaires.',
    language: 'fr'
  },
  // Russian testimonials (2)
  {
    name: 'Алексей П.',
    profession: 'Плотник',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Я строю мебель для жизни, а не портфели. Но с Incite AI я действительно делал умные инвестиции, не напрягаясь по этому поводу. Приятно наращивать свои деньги.',
    language: 'ru'
  },
  {
    name: 'Екатерина Р.',
    profession: 'Фоторедактор',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    content: 'Хотя я не из финансовой сферы, я всегда хотела заниматься торговлей. Incite AI дал мне структуру и уверенность, чтобы наконец сделать это — и с реальным успехом.',
    language: 'ru'
  },
  // German testimonial (1)
  {
    name: 'Hans M.',
    profession: 'Pizzeria-Manager',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop&crop=face',
    content: 'Zwischen Lieferungen und Kundenbestellungen habe ich kaum Zeit zum Nachdenken — aber Incite AI gibt mir klare Signale, auf die ich schnell reagieren kann. Super hilfreich.',
    language: 'de'
  },
  // Polish testimonial (1)
  {
    name: 'Tomasz B.',
    profession: 'Profesjonalny Broker',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Jako broker przetestowałem dziesiątki narzędzi. Incite AI dostarcza czyste spostrzeżenia i wykonalne sygnały — stał się niezbędny do wykrywania wejść na niestabilnych rynkach.',
    language: 'pl'
  }
];

export const Testimonials = ({ scrollToSection }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 4 >= testimonials.length ? 0 : prev + 4));
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 4 < 0 ? Math.max(0, testimonials.length - 4) : prev - 4));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 4);

  return (
    <section className="py-20 border-b-2" style={{ borderColor: 'rgb(0 212 170 / 0.3)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
            <Users className="mr-2" size={16} />
            Real User Experiences
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Incite AI has transformed the investment journey for thousands of users worldwide.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={`${currentIndex}-${index}`} className="bg-[#1a1f35] border-white/10 p-8 transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.profession}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonials}
              className="border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa] hover:text-black bg-[#1a1f35]"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * 4)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentIndex / 4) === i ? 'bg-[#00d4aa]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonials}
              className="border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa] hover:text-black bg-[#1a1f35]"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => scrollToSection('apply')} className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200">
            Get Early Access
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
