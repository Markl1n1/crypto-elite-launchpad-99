
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from '@/hooks/useTranslations';

interface HowItWorksSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HowItWorksSection = ({ scrollToSection }: HowItWorksSectionProps) => {
  const { t } = useTranslations();

  return (
    <section className="py-20 relative border-b-4 border-[#00d4aa]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/10 to-[#0066ff]/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Screenshot */}
          <div className="lg:col-span-2">
            <div className="relative">
              <img src="/lovable-uploads/12132be5-2229-43c7-93d9-43f5df5ca0a8.png" alt="Incite AI Simple Request Process" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
              <MessageCircle className="mr-2" size={16} />
              Simple Process
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simply How It Works
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Our AI processes your simple requests instantly, providing clear investment insights and actionable recommendations in seconds.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00d4aa] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ask Your Question</h3>
                  <p className="text-gray-400">Simply type your investment question or request in plain language</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#0066ff] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Processes Data</h3>
                  <p className="text-gray-400">Our advanced AI analyzes market data and provides personalized insights</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#00d4aa] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Clear Recommendations</h3>
                  <p className="text-gray-400">Receive actionable investment advice tailored to your needs</p>
                </div>
              </div>
            </div>

            <Button onClick={() => scrollToSection('apply')} className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-200">
              Try Incite AI Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
