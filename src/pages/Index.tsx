import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Shield, Zap, BarChart3, Users, Star, ChevronDown, Instagram, Twitter } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "@/hooks/useTranslations";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Index = () => {
  const { t } = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    // Handle form submission here
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application submitted successfully!");
    }, 1000);
  };

  const features = [
    {
      icon: <TrendingUp className="h-12 w-12 text-[#0c9467]" />,
      title: "AI-Powered Analytics",
      description: "Advanced AI algorithms analyze market trends and provide actionable insights in real-time."
    },
    {
      icon: <Shield className="h-12 w-12 text-[#0c9467]" />,
      title: "Risk Management",
      description: "Intelligent risk assessment tools help you make informed investment decisions with confidence."
    },
    {
      icon: <Zap className="h-12 w-12 text-[#0c9467]" />,
      title: "Precision Trading",
      description: "Execute trades with algorithmic precision and maximize your investment potential."
    }
  ];

  const stats = [
    { value: "94%", label: "Accuracy Rate" },
    { value: "10M+", label: "Assets Analyzed" },
    { value: "50K+", label: "Active Traders" },
    { value: "24/7", label: "Market Coverage" }
  ];

  const plans = [
    {
      name: "Basic Plan",
      price: "$99",
      period: "per month",
      features: [
        "Basic Analytics",
        "Email Support",
        "Mobile App",
        "Basic Reports"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$299",
      period: "per month",
      features: [
        "Advanced Analytics",
        "Priority Support",
        "Custom Alerts",
        "Advanced Reports",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Enterprise Plan",
      price: "Custom Pricing",
      period: "",
      features: [
        "Enterprise Analytics",
        "Dedicated Support",
        "White Label",
        "Custom Integration",
        "On-Premise"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Tarun Chitra",
      role: "Managing Partner at Haun Ventures",
      content: "Incite AI has revolutionized our investment strategy. The precision and insights are unmatched.",
      rating: 5,
      avatar: "/lovable-uploads/56d38ce7-8f1e-4893-8651-5591dea78890.png"
    },
    {
      name: "Jill Malandrino", 
      role: "Global Markets Reporter at Nasdaq",
      content: "The real-time analytics have given us a significant edge in fast-moving markets.",
      rating: 5,
      avatar: "/lovable-uploads/98f528c7-6c3b-4fa4-907f-eeb151c5e95f.png"
    },
    {
      name: "Rebecca Lynn",
      role: "Co-Founder and General Partner at Canvas Ventures", 
      content: "Incite AI's risk management tools have helped us navigate volatile markets with confidence.",
      rating: 5,
      avatar: "/lovable-uploads/a2dabffc-b0b6-4eb0-9751-60a6dae1cd48.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center">
            <Badge className="mb-6 bg-[#0c9467]/20 text-[#0c9467] border-[#0c9467]/30">
              {t('eliteInvestmentOpportunities')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-[#0c9467] bg-clip-text text-transparent animate-float">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-[#0c9467] hover:bg-[#0c9467]/90 text-white px-8 py-4 text-lg font-semibold cta-button cta-primary transform hover:scale-105 transition-all duration-300"
              >
                Start Your Journey Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold cta-button cta-secondary transform hover:scale-105 transition-all duration-300"
              >
                Try Incite AI
              </Button>
            </div>
          </div>
        </div>

        {/* Exclusive Program CTA */}
        <div className="bg-gradient-to-r from-[#0c9467] to-blue-600 py-6">
          <div className="container mx-auto px-6 text-center">
            <p className="text-lg font-semibold mb-2">Join Our Exclusive Investment Program</p>
            <p className="text-sm opacity-90">Limited spots available - Apply now for priority access</p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Apply Now</CardTitle>
                <CardDescription>Join our exclusive investment program</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#0c9467] hover:bg-[#0c9467]/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Apply Now"}
                    </Button>
                  </form>
                </Form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-4">Follow us on social media</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-[#0c9467] transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#0c9467] transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('investorsTrustUs')}</h2>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <img src="/lovable-uploads/d77102a6-0db1-4f68-9154-d76b9c8831b2.png" alt="Partner 1" className="h-12" />
              <img src="/lovable-uploads/d77102a6-0db1-4f68-9154-d76b9c8831b2.png" alt="Partner 2" className="h-12" />
              <img src="/lovable-uploads/d77102a6-0db1-4f68-9154-d76b9c8831b2.png" alt="Partner 3" className="h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('advancedTechnology')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leverage cutting-edge AI technology to make smarter investment decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-[#0c9467] mb-2">{stat.value}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your investment needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-[#0c9467] shadow-lg scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0c9467] text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-[#0c9467]">
                    {plan.price}
                    {plan.period && <span className="text-sm text-gray-500 font-normal">/{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#0c9467] mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-[#0c9467] hover:bg-[#0c9467]/90 text-white cta-button cta-primary' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by leading investors and institutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('faq')}</h2>
            <p className="text-xl text-gray-600">Get answers to commonly asked questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">What is Incite AI and how does it work?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">Incite AI is an advanced investment platform that uses artificial intelligence to analyze market data, identify trends, and provide actionable insights for smarter investment decisions.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">How accurate are the AI predictions?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">Our AI models have demonstrated a 94% accuracy rate in market predictions, backed by continuous learning and real-time data analysis across global markets.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Is my investment data secure?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">Yes, we employ bank-grade security measures including end-to-end encryption, multi-factor authentication, and compliance with industry standards to protect your data.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Incite AI</h3>
              <p className="text-gray-400">Empowering investors with AI-driven insights and precision trading tools.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">support@inciteai.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/risk-disclosure" className="hover:text-white transition-colors">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Incite AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Bar */}
      <div className="mobile-cta-bar">
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="flex-1 bg-[#0c9467] hover:bg-[#0c9467]/90 text-white cta-button cta-primary"
          >
            Start Your Journey Now
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1 cta-button cta-secondary"
          >
            Try Incite AI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
