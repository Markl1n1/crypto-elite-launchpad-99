
import { Star, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialsProps {
  scrollToSection: (sectionId: string) => void;
}

export const Testimonials = ({ scrollToSection }: TestimonialsProps) => {
  return (
    <section className="py-20 border-b-4 border-[#00d4aa]">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <Card className="bg-[#1a1f35] border-white/10 p-8 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Finally found something that helps me understand the market better! As someone who sells cars, I appreciate when things are explained simply. This AI actually makes investing feel less scary."
              </p>
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/98f528c7-6c3b-4fa4-907f-eeb151c5e95f.png" 
                  alt="Lodrino M." 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Lodrino M.</h4>
                  <p className="text-gray-400 text-sm">Automotive Retailer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="bg-[#1a1f35] border-white/10 p-8 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Love the clean interface design! As a designer myself, I appreciate good UX. But more importantly, it's helping me grow my savings alongside my creative work."
              </p>
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/e69dc72f-be50-48f4-907a-cbb10bbcfa3b.png" 
                  alt="Justin F." 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Justin F.</h4>
                  <p className="text-gray-400 text-sm">Designer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="bg-[#1a1f35] border-white/10 p-8 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Running my coffee shop keeps me busy, but this AI helps me check my investments quickly during breaks. It's like having a financial advisor that understands small business owners."
              </p>
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/a2dabffc-b0b6-4eb0-9751-60a6dae1cd48.png" 
                  alt="Loxton G." 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Loxton G.</h4>
                  <p className="text-gray-400 text-sm">Coffee Shop Owner</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 4 */}
          <Card className="bg-[#1a1f35] border-white/10 p-8 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The data processing capabilities are impressive! As a sysadmin, I appreciate how efficiently it handles market information. Great tool for automating investment research."
              </p>
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/d77102a6-0db1-4f68-9154-d76b9c8831b2.png" 
                  alt="Anton T." 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Anton T.</h4>
                  <p className="text-gray-400 text-sm">System Administrator</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
