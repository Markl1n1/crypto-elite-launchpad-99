
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
                "Your AI stock app seems doing great so far. I tested asking last weekend what would be the best 5 NYSE stocks to buy last Monday, 100% of the 5, had price increases for that day, & 80% during the week. I am further testing it for this week including currency pairs. If it turns out consistent, thru further testing, I would likely recommend this to my clients & trading, investment groups. Wishing you best."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-lg">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Lodrino M.</h4>
                  <p className="text-gray-400 text-sm">Investment Advisor</p>
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
                "I think this is a game changer for me and lots of others who do not really understand how to navigate the money market. Good Job!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-lg">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Justin F.</h4>
                  <p className="text-gray-400 text-sm">Retail Investor</p>
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
                "As a full time trader, Incite can help me source some information regarding market trends/news quickly. I purchased out of curiosity for the future 'trader x' feature to see what that entails."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-lg">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Loxton G.</h4>
                  <p className="text-gray-400 text-sm">Full-Time Trader</p>
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
                "I think your product has an awesome concept, and I really like it. I've used it for a month. Enhancing its ability to crawl more real-time data could make it truly outstanding!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0066ff] flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Anton T.</h4>
                  <p className="text-gray-400 text-sm">Data Analyst</p>
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
