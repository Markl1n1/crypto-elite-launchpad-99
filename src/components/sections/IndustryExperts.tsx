
import { Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface IndustryExpertsProps {
  scrollToSection: (sectionId: string) => void;
}

const experts = [
  {
    id: "jill-malandrino",
    name: "Jill Malandrino",
    title: "Global Markets Reporter & Host, Nasdaq TradeTalks",
    image: "/lovable-uploads/859db36d-dbb9-4b46-ae09-80ae2675c512.png",
    quote: "Incite AI helped us identify market shifts faster than ever—our portfolio returns speak for it."
  },
  {
    id: "tarun-chitra",
    name: "Tarun Chitra",
    title: "CEO & Founder, Gauntlet",
    image: "/lovable-uploads/ffe495da-a680-4b06-bb34-b1178c165835.png",
    quote: "The predictive modeling of Incite AI is best-in-class—essential for DeFi risk analytics."
  },
  {
    id: "brian-strachan",
    name: "Brian Strachan",
    title: "Managing Director, Morgan Stanley Private Wealth Management",
    image: "/lovable-uploads/b0c3cff9-196a-4309-9e8b-3eb1eec736f1.png",
    quote: "Incite AI provides institutional-grade analysis that our high-net-worth clients expect and deserve."
  },
  {
    id: "raoul-pal",
    name: "Raoul Pal",
    title: "Co-Founder & CEO, Real Vision",
    image: "/lovable-uploads/e29d5dbc-e648-4b74-8f4f-bcff49ac07aa.png",
    quote: "What Incite AI is doing is really quite remarkable. We're talking about democratizing access to deep, institutional-level analytics. And that's the direction the entire macro landscape is going—towards systems that help individuals think in probabilities, not noise. It's fast, clean, and frankly, a game-changer for anyone trying to stay ahead of the curve."
  },
  {
    id: "cathie-wood",
    name: "Cathie Wood",
    title: "Founder, CEO & CIO, ARK Invest",
    image: "/lovable-uploads/c5ee083f-4283-41ad-9e88-19e16fa5a82b.png",
    quote: "Incite AI is exactly the kind of innovative tool that represents the convergence of AI, big data, and financial markets. It's empowering individuals to participate in the markets with a level of confidence and clarity that used to be limited to the big players. And when we look at where financial technology is going — this is it."
  }
];

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

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="jill-malandrino" className="w-full">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left side - Expert tabs */}
              <div className="lg:col-span-2">
                <TabsList className="flex flex-col h-auto w-full bg-[#0a0e1a] p-2 space-y-2">
                  {experts.map((expert) => (
                    <TabsTrigger
                      key={expert.id}
                      value={expert.id}
                      className="w-full p-4 justify-start data-[state=active]:bg-[#00d4aa]/20 data-[state=active]:text-[#00d4aa] hover:bg-[#00d4aa]/10"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={expert.image} alt={expert.name} />
                          <AvatarFallback className="bg-gradient-to-r from-[#00d4aa] to-[#0066ff] text-white font-bold">
                            {expert.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-semibold text-sm">{expert.name}</div>
                          <div className="text-xs text-gray-400">{expert.title}</div>
                        </div>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Right side - Expert comments */}
              <div className="lg:col-span-3">
                {experts.map((expert) => (
                  <TabsContent key={expert.id} value={expert.id} className="mt-0">
                    <Card className="bg-[#0a0e1a] border-[#00d4aa]/30 p-8 h-full">
                      <CardContent className="p-0">
                        <div className="mb-6">
                          <Avatar className="w-24 h-24 mx-auto mb-4">
                            <AvatarImage src={expert.image} alt={expert.name} />
                            <AvatarFallback className="bg-gradient-to-r from-[#00d4aa] to-[#0066ff] text-white font-bold text-2xl">
                              {expert.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <h4 className="font-semibold text-white text-xl text-center">{expert.name}</h4>
                          <p className="text-[#00d4aa] text-sm font-medium text-center">{expert.title}</p>
                        </div>
                        <p className="text-gray-300 italic text-lg leading-relaxed">
                          "{expert.quote}"
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
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
