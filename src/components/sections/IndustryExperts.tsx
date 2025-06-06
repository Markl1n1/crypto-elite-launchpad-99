
import { Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface IndustryExpertsProps {
  scrollToSection: (sectionId: string) => void;
}

export const IndustryExperts = ({ scrollToSection }: IndustryExpertsProps) => {
  return (
    <section className="py-20 bg-[#1a1f35] border-b-2" style={{ borderColor: 'rgb(0 212 170 / 0.3)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
            <Award className="mr-2" size={16} />
            Industry Recognition
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Industry Experts Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading financial experts and industry veterans recognize the power of Incite AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Expert 1 - Jill Malandrino */}
          <Card className="bg-[#0a0e1a] border-[#00d4aa]/30 p-8 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/lovable-uploads/859db36d-dbb9-4b46-ae09-80ae2675c512.png" alt="Jill Malandrino" />
                  <AvatarFallback className="bg-gradient-to-r from-[#00d4aa] to-[#0066ff] text-white font-bold text-2xl">
                    JM
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-white text-lg">Jill Malandrino</h4>
                <p className="text-[#00d4aa] text-sm font-medium">Global Markets Reporter & Host, Nasdaq TradeTalks</p>
              </div>
              <p className="text-gray-300 italic text-center">
                "Incite AI helped us identify market shifts faster than ever—our portfolio returns speak for it."
              </p>
            </CardContent>
          </Card>

          {/* Expert 2 - Tarun Chitra */}
          <Card className="bg-[#0a0e1a] border-[#00d4aa]/30 p-8 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/lovable-uploads/ffe495da-a680-4b06-bb34-b1178c165835.png" alt="Tarun Chitra" />
                  <AvatarFallback className="bg-gradient-to-r from-[#00d4aa] to-[#0066ff] text-white font-bold text-2xl">
                    TC
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-white text-lg">Tarun Chitra</h4>
                <p className="text-[#00d4aa] text-sm font-medium">CEO & Founder, Gauntlet</p>
              </div>
              <p className="text-gray-300 italic text-center">
                "The predictive modeling of Incite AI is best-in-class—essential for DeFi risk analytics."
              </p>
            </CardContent>
          </Card>

          {/* Expert 3 - Brian Strachan */}
          <Card className="bg-[#0a0e1a] border-[#00d4aa]/30 p-8 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/lovable-uploads/b0c3cff9-196a-4309-9e8b-3eb1eec736f1.png" alt="Brian Strachan" />
                  <AvatarFallback className="bg-gradient-to-r from-[#00d4aa] to-[#0066ff] text-white font-bold text-2xl">
                    BS
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-white text-lg">Brian Strachan</h4>
                <p className="text-[#00d4aa] text-sm font-medium">Managing Director, Morgan Stanley Private Wealth Management</p>
              </div>
              <p className="text-gray-300 italic text-center">
                "Incite AI provides institutional-grade analysis that our high-net-worth clients expect and deserve."
              </p>
            </CardContent>
          </Card>

          {/* Expert 4 - Raoul Pal */}
          <Card className="bg-[#0a0e1a] border-[#00d4aa]/30 p-8 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-r from-[#00d4aa] to-[#0066ff] text-white font-bold text-2xl">
                    RP
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-white text-lg">Raoul Pal</h4>
                <p className="text-[#00d4aa] text-sm font-medium">Co-Founder & CEO, Real Vision</p>
              </div>
              <p className="text-gray-300 italic text-center">
                "What Incite AI is doing is really quite remarkable. We're talking about democratizing access to deep, institutional-level analytics. And that's the direction the entire macro landscape is going—towards systems that help individuals think in probabilities, not noise. It's fast, clean, and frankly, a game-changer for anyone trying to stay ahead of the curve."
              </p>
            </CardContent>
          </Card>

          {/* Expert 5 - Cathie Wood */}
          <Card className="bg-[#0a0e1a] border-[#00d4aa]/30 p-8 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-r from-[#00d4aa] to-[#0066ff] text-white font-bold text-2xl">
                    CW
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-white text-lg">Cathie Wood</h4>
                <p className="text-[#00d4aa] text-sm font-medium">Founder, CEO & CIO, ARK Invest</p>
              </div>
              <p className="text-gray-300 italic text-center">
                "Incite AI is exactly the kind of innovative tool that represents the convergence of AI, big data, and financial markets. It's empowering individuals to participate in the markets with a level of confidence and clarity that used to be limited to the big players. And when we look at where financial technology is going — this is it."
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => scrollToSection('apply')} className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200">
            Join the Experts
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
