import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { phoneCodes } from '@/data/phoneCodes';
import { useTranslations } from '@/hooks/useTranslations';

export const ApplicationSection = () => {
  const navigate = useNavigate();
  const { t, currentLanguage } = useTranslations();
  const [phoneCode, setPhoneCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [userLanguage, setUserLanguage] = useState(navigator.language || navigator.languages[0]);

  useEffect(() => {
    setUserLanguage(navigator.language || navigator.languages[0]);
  }, []);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\d{6,15}$/.test(phone);

  const submitToGoogleSheets = async (data: any) => {
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzwJ-kDg_tIsVc_GJl1d0QYPnfvl3TqRogavwy5l_-vEWTIdU0lZ94fWXSsJXS6rtzd/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      console.log('Data submitted to Google Sheets');
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setPhoneError('');
    let hasErrors = false;

    if (!validateEmail(formData.email)) {
      setEmailError(t('validEmailRequired'));
      hasErrors = true;
    }

    if (!validatePhone(phoneNumber)) {
      setPhoneError(t('validPhoneRequired'));
      hasErrors = true;
    }

    if (hasErrors) return;

    const submissionData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: `${phoneCode}${phoneNumber}`,
      siteLanguage: currentLanguage,
      userLanguage: userLanguage
    };

    await submitToGoogleSheets(submissionData);
    localStorage.setItem('applicationLanguage', currentLanguage);
    navigate('/success');
  };

  return (
    <section id="apply" className="py-14 bg-[#1a1f35] border-b-2" style={{ borderColor: 'rgb(0 212 170 / 0.3)' }}>
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
            {t('beginJourney')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('applyNowTitle')}</h2>
        </div>
        <Card className="bg-[#0a0e1a] border-white/10 p-8">
          <CardContent className="p-0">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-white">
                    {t('firstName')} <span className="text-red-400">{t('required')}</span>
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-[#1a1f35] border-white/20 text-white"
                    placeholder={`${t('firstName')}...`}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white">
                    {t('lastName')} <span className="text-red-400">{t('required')}</span>
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-[#1a1f35] border-white/20 text-white"
                    placeholder={`${t('lastName')}...`}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  {t('emailAddress')} <span className="text-red-400">{t('required')}</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#1a1f35] border-white/20 text-white"
                  placeholder={`${t('emailAddress')}...`}
                  required
                />
                {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">
                  {t('phoneNumber')} <span className="text-red-400">{t('required')}</span>
                </Label>
                <div className="flex gap-2">
                  <Select value={phoneCode} onValueChange={setPhoneCode}>
                    <SelectTrigger className="bg-[#1a1f35] border-white/20 text-white w-32">
                      <SelectValue className="text-gray-400" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1f35] border-white/20 z-50 max-h-48">
                      {phoneCodes.map((phone, index) => (
                        <SelectItem key={index} value={phone.code} className="text-gray-400">
                          {phone.code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="bg-[#1a1f35] border-white/20 text-white flex-1"
                    placeholder="12-345-6789"
                    required
                  />
                </div>
                {phoneError && <p className="text-red-400 text-sm mt-1">{phoneError}</p>}
              </div>

              <Button type="submit" className="w-full bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold text-lg py-6">
                {t('applyNow')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};