
import { Star, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialsProps {
  scrollToSection: (sectionId: string) => void;
}

export const Testimonials = ({ scrollToSection }: TestimonialsProps) => {
  return (
    <section className="py-20 border-b-4" style={{ borderColor: 'rgb(0 212 170 / 0.5)' }}>
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
          {/* Testimonial 1 - Lorenzo */}
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
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

          {/* Testimonial 2 - Justin */}
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
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
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

          {/* Testimonial 3 - Loxon */}
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
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face" 
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

          {/* Testimonial 4 - Anton */}
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
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" 
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
