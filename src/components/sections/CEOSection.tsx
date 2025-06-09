
import { Quote, Star, TrendingUp, Award } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

export const CEOSection = () => {
  const { t } = useTranslations();
  
  return (
    <section className="py-20 bg-[#1a1f35] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#00d4aa] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00d4aa] bg-clip-text text-transparent">
            {t('leadershipTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('leadershipSubtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* CEO Card */}
          <div className="bg-gradient-to-r from-[#0a0e1a] to-[#1a1f35] p-8 md:p-12 rounded-2xl border border-[#00d4aa]/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* CEO Image */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#00d4aa]/30 shadow-xl">
                  <img 
                    src="/lovable-uploads/6bb94be7-6750-4265-97cf-2e2b09c7b9e2.png" 
                    alt="Marcus Thompson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#00d4aa] rounded-full p-2">
                  <Award className="w-6 h-6 text-black" />
                </div>
              </div>

              {/* CEO Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-[#00d4aa] mx-auto lg:mx-0 mb-4" />
                  <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                    "{t('ceoQuote')}"
                  </blockquote>
                </div>

                <div className="border-t border-[#00d4aa]/20 pt-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Marcus Thompson</h3>
                  <p className="text-[#00d4aa] font-semibold mb-4">{t('ceoTitle')}</p>
                  
                  {/* Achievements */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <div className="flex items-center bg-[#00d4aa]/10 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-[#00d4aa] mr-2" />
                      <span className="text-sm text-gray-300">{t('achievement1')}</span>
                    </div>
                    <div className="flex items-center bg-[#00d4aa]/10 px-3 py-1 rounded-full">
                      <TrendingUp className="w-4 h-4 text-[#00d4aa] mr-2" />
                      <span className="text-sm text-gray-300">{t('achievement2')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-[#0a0e1a]/50 rounded-xl border border-[#00d4aa]/10">
              <div className="text-3xl font-bold text-[#00d4aa] mb-2">15+</div>
              <div className="text-gray-300 text-sm">{t('yearsExperience')}</div>
            </div>
            <div className="text-center p-6 bg-[#0a0e1a]/50 rounded-xl border border-[#00d4aa]/10">
              <div className="text-3xl font-bold text-[#00d4aa] mb-2">$500M+</div>
              <div className="text-gray-300 text-sm">{t('assetsManaged')}</div>
            </div>
            <div className="text-center p-6 bg-[#0a0e1a]/50 rounded-xl border border-[#00d4aa]/10">
              <div className="text-3xl font-bold text-[#00d4aa] mb-2">50+</div>
              <div className="text-gray-300 text-sm">{t('teamMembers')}</div>
            </div>
            <div className="text-center p-6 bg-[#0a0e1a]/50 rounded-xl border border-[#00d4aa]/10">
              <div className="text-3xl font-bold text-[#00d4aa] mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">{t('uptime')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
