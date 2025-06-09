
import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/hooks/useTranslations';

export const CEOSection = () => {
  const { t } = useTranslations();

  return (
    <section className="py-20 bg-[#1a1f35] border-t border-b" style={{ borderColor: 'rgba(0, 212, 170, 0.3)', borderTopWidth: '1px', borderBottomWidth: '1px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10">
            <Award className="mr-2" size={16} />
            {t('leadership')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('leadershipTitle')}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#0a0e1a] border-[#00d4aa]/30 p-8">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/b005b85b-a7e5-4e05-8fc6-92758fe1784a.png" 
                    alt="Nicolli Massachi - CEO of Incite AI" 
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Nicolli Massachi</h3>
                  <p className="text-[#00d4aa] text-lg font-medium mb-4">{t('founderCEO')}</p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('ceoDescription')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
