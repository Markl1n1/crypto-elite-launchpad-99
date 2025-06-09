
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, Send, Shield, Clock, Users } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { phoneCodes } from '@/data/phoneCodes';

export const ApplicationSection = () => {
  const { t, currentLanguage } = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '',
    phone: '',
    country: '',
    experience: '',
    investmentRange: '',
    goals: '',
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms || !formData.agreePrivacy) {
      toast.error(t('pleaseAgreeToTerms'));
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Store the current language in localStorage for the success page
      localStorage.setItem('applicationLanguage', currentLanguage);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to success page
      window.location.href = '/success';
    } catch (error) {
      toast.error(t('submitError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="apply" className="py-20 bg-[#1a1f35] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00d4aa] bg-clip-text text-transparent">
            {t('applyTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('applySubtitle')}
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center text-gray-300">
              <Shield className="w-5 h-5 text-[#00d4aa] mr-2" />
              <span className="text-sm">{t('secureApplication')}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock className="w-5 h-5 text-[#00d4aa] mr-2" />
              <span className="text-sm">{t('quickReview')}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Users className="w-5 h-5 text-[#00d4aa] mr-2" />
              <span className="text-sm">{t('exclusiveAccess')}</span>
            </div>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-to-b from-[#0a0e1a] to-[#1a1f35] border-[#00d4aa]/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">{t('applicationForm')}</CardTitle>
            <CardDescription className="text-gray-300">
              {t('applicationDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">{t('firstName')}</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="bg-[#1a1f35] border-white/20 text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">{t('lastName')}</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="bg-[#1a1f35] border-white/20 text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-[#1a1f35] border-white/20 text-white"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">{t('phoneCode')}</Label>
                  <Select value={formData.phoneCode} onValueChange={(value) => handleInputChange('phoneCode', value)}>
                    <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                      <SelectValue placeholder={t('selectCountryCode')} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1f35] border-white/20">
                      {phoneCodes.map((country) => (
                        <SelectItem key={country.code} value={country.dial_code} className="text-white hover:bg-[#00d4aa]/20">
                          {country.flag} {country.dial_code} - {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="phone" className="text-white">{t('phoneNumber')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-[#1a1f35] border-white/20 text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-white">{t('country')}</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="bg-[#1a1f35] border-white/20 text-white"
                  required
                />
              </div>

              {/* Investment Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white">{t('experience')}</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                      <SelectValue placeholder={t('selectExperience')} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1f35] border-white/20">
                      <SelectItem value="beginner" className="text-white hover:bg-[#00d4aa]/20">{t('beginner')}</SelectItem>
                      <SelectItem value="intermediate" className="text-white hover:bg-[#00d4aa]/20">{t('intermediate')}</SelectItem>
                      <SelectItem value="advanced" className="text-white hover:bg-[#00d4aa]/20">{t('advanced')}</SelectItem>
                      <SelectItem value="professional" className="text-white hover:bg-[#00d4aa]/20">{t('professional')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white">{t('investmentRange')}</Label>
                  <Select value={formData.investmentRange} onValueChange={(value) => handleInputChange('investmentRange', value)}>
                    <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white">
                      <SelectValue placeholder={t('selectRange')} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1f35] border-white/20">
                      <SelectItem value="1k-10k" className="text-white hover:bg-[#00d4aa]/20">$1,000 - $10,000</SelectItem>
                      <SelectItem value="10k-50k" className="text-white hover:bg-[#00d4aa]/20">$10,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k" className="text-white hover:bg-[#00d4aa]/20">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-500k" className="text-white hover:bg-[#00d4aa]/20">$100,000 - $500,000</SelectItem>
                      <SelectItem value="500k+" className="text-white hover:bg-[#00d4aa]/20">$500,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals" className="text-white">{t('goals')}</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange('goals', e.target.value)}
                  className="bg-[#1a1f35] border-white/20 text-white min-h-[100px]"
                  placeholder={t('goalsPlaceholder')}
                />
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                    className="border-white/20"
                  />
                  <Label htmlFor="agreeTerms" className="text-sm text-gray-300 leading-relaxed">
                    {t('agreeTerms')} <a href="/terms-of-service" className="text-[#00d4aa] hover:underline">{t('termsOfService')}</a> {t('and')} <a href="/privacy-policy" className="text-[#00d4aa] hover:underline">{t('privacyPolicy')}</a>
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onCheckedChange={(checked) => handleInputChange('agreePrivacy', checked as boolean)}
                    className="border-white/20"
                  />
                  <Label htmlFor="agreePrivacy" className="text-sm text-gray-300 leading-relaxed">
                    {t('agreePrivacy')}
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeMarketing"
                    checked={formData.agreeMarketing}
                    onCheckedChange={(checked) => handleInputChange('agreeMarketing', checked as boolean)}
                    className="border-white/20"
                  />
                  <Label htmlFor="agreeMarketing" className="text-sm text-gray-300 leading-relaxed">
                    {t('agreeMarketing')}
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold py-4 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t('submitting')}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {t('submitApplication')}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
