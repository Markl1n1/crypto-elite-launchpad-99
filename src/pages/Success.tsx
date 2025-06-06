
import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

const Success = () => {
  const { t } = useTranslations();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center px-4">
      <Card className="bg-[#1a1f35] border-[#00d4aa] max-w-md w-full text-center p-8">
        <CardContent className="p-0">
          <div className="mb-6">
            <CheckCircle size={64} className="text-[#00d4aa] mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00d4aa] via-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent">
              {t('applicationSuccessful') || 'Application Successful!'}
            </h1>
            <p className="text-gray-300 text-lg">
              {t('managerWillContact') || 'Our manager will contact you at the shortest.'}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;
