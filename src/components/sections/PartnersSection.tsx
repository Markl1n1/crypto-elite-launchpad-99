
import { useTranslations } from '@/hooks/useTranslations';

const partners = [{
  name: 'BlackRock',
  logo: 'https://logo.clearbit.com/blackrock.com'
}, {
  name: 'Goldman Sachs',
  logo: '/lovable-uploads/8e537a70-a7f3-41a2-bffd-09d279977760.png'
}, {
  name: 'JPMorgan',
  logo: 'https://logo.clearbit.com/jpmorgan.com'
}, {
  name: 'Wells Fargo',
  logo: 'https://logo.clearbit.com/wellsfargo.com'
}, {
  name: 'PayPal',
  logo: 'https://logo.clearbit.com/paypal.com'
}, {
  name: 'Visa',
  logo: 'https://logo.clearbit.com/visa.com'
}, {
  name: 'Mastercard',
  logo: 'https://logo.clearbit.com/mastercard.com'
}, {
  name: 'Stripe',
  logo: 'https://logo.clearbit.com/stripe.com'
}, {
  name: 'Square',
  logo: 'https://logo.clearbit.com/squareup.com'
}, {
  name: 'American Express',
  logo: 'https://logo.clearbit.com/americanexpress.com'
}, {
  name: 'Binance',
  logo: 'https://logo.clearbit.com/binance.com'
}, {
  name: 'Coinbase',
  logo: 'https://logo.clearbit.com/coinbase.com'
}, {
  name: 'Fidelity',
  logo: 'https://logo.clearbit.com/fidelity.com'
}, {
  name: 'Charles Schwab',
  logo: '/lovable-uploads/34bd4338-931b-4466-ac18-b6e371dba259.png'
}, {
  name: 'TD Ameritrade',
  logo: 'https://logo.clearbit.com/tdameritrade.com'
}, {
  name: 'E*TRADE',
  logo: 'https://logo.clearbit.com/etrade.com'
}, {
  name: 'Robinhood',
  logo: 'https://logo.clearbit.com/robinhood.com'
}, {
  name: 'Interactive Brokers',
  logo: '/lovable-uploads/cd33a977-b5cf-49c1-813d-9d0375e2fffd.png'
}, {
  name: 'Morgan Stanley',
  logo: 'https://logo.clearbit.com/morganstanley.com'
}, {
  name: 'Credit Suisse',
  logo: 'https://logo.clearbit.com/credit-suisse.com'
}, {
  name: 'Deutsche Bank',
  logo: 'https://logo.clearbit.com/db.com'
}, {
  name: 'Barclays',
  logo: 'https://logo.clearbit.com/barclays.com'
}, {
  name: 'UBS',
  logo: 'https://logo.clearbit.com/ubs.com'
}, {
  name: 'HSBC',
  logo: 'https://logo.clearbit.com/hsbc.com'
}, {
  name: 'Citigroup',
  logo: 'https://logo.clearbit.com/citigroup.com'
}, {
  name: 'Vanguard',
  logo: 'https://logo.clearbit.com/vanguard.com'
}, {
  name: 'State Street',
  logo: 'https://logo.clearbit.com/statestreet.com'
}, {
  name: 'T. Rowe Price',
  logo: 'https://logo.clearbit.com/troweprice.com'
}, {
  name: 'Franklin Templeton',
  logo: 'https://logo.clearbit.com/franklintempleton.com'
}, {
  name: 'Northern Trust',
  logo: 'https://logo.clearbit.com/northerntrust.com'
}, {
  name: 'BNY Mellon',
  logo: 'https://logo.clearbit.com/bnymellon.com'
}, {
  name: 'Invesco',
  logo: 'https://logo.clearbit.com/invesco.com'
}, {
  name: 'Prudential',
  logo: 'https://logo.clearbit.com/prudential.com'
}, {
  name: 'MetLife',
  logo: 'https://logo.clearbit.com/metlife.com'
}, {
  name: 'Allianz',
  logo: 'https://logo.clearbit.com/allianz.com'
}, {
  name: 'AIG',
  logo: 'https://logo.clearbit.com/aig.com'
}, {
  name: 'Berkshire Hathaway',
  logo: 'https://logo.clearbit.com/berkshirehathaway.com'
}, {
  name: 'KKR',
  logo: 'https://logo.clearbit.com/kkr.com'
}, {
  name: 'Blackstone',
  logo: 'https://logo.clearbit.com/blackstone.com'
}, {
  name: 'Apollo',
  logo: 'https://logo.clearbit.com/apollo.com'
}, {
  name: 'Carlyle',
  logo: 'https://logo.clearbit.com/carlyle.com'
}, {
  name: 'TPG',
  logo: 'https://logo.clearbit.com/tpg.com'
}, {
  name: 'Bain Capital',
  logo: 'https://logo.clearbit.com/baincapital.com'
}, {
  name: 'Bridgewater Associates',
  logo: 'https://logo.clearbit.com/bridgewater.com'
}, {
  name: 'Renaissance Technologies',
  logo: 'https://logo.clearbit.com/rentec.com'
}, {
  name: 'Two Sigma',
  logo: '/lovable-uploads/8c4ad041-b32f-4b99-ab5e-ef240932986b.png'
}, {
  name: 'Citadel',
  logo: 'https://logo.clearbit.com/citadel.com'
}, {
  name: 'DE Shaw',
  logo: 'https://logo.clearbit.com/deshaw.com'
}, {
  name: 'AQR Capital',
  logo: 'https://logo.clearbit.com/aqr.com'
}, {
  name: 'Millennium Management',
  logo: 'https://logo.clearbit.com/mlp.com'
}, {
  name: 'Point72',
  logo: 'https://logo.clearbit.com/point72.com'
}, {
  name: 'Susquehanna',
  logo: 'https://logo.clearbit.com/sig.com'
}, {
  name: 'Microsoft',
  logo: 'https://logo.clearbit.com/microsoft.com'
}, {
  name: 'Apple',
  logo: 'https://logo.clearbit.com/apple.com'
}, {
  name: 'Grok',
  logo: '/lovable-uploads/b77e48d1-9712-4790-9824-9d5cf0570058.png'
}, {
  name: 'Pantera',
  logo: '/lovable-uploads/4042221c-cf7e-4e66-b589-48adaa5326a1.png'
}, {
  name: 'Virtu Financial',
  logo: '/lovable-uploads/11ce648a-63c3-45f8-b742-85fc1e8ee724.png'
}, {
  name: 'Webull',
  logo: '/lovable-uploads/547358b7-1d87-4edb-8377-aa78f39b1ca4.png'
}];

export const PartnersSection = () => {
  const { t } = useTranslations();

  return (
    <section className="py-20 bg-[#1a1f35] overflow-hidden border-b-4 border-[#00d4aa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('ourPartners')}
        </h2>
        
        {/* Auto-scrolling carousel */}
        <div className="relative">
          <div className="flex animate-[scroll_20s_linear_infinite]">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-8 h-16 flex items-center justify-center bg-white/5 rounded-lg px-6 hover:bg-white/10 transition-colors" 
                style={{ minWidth: '200px' }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-8 object-contain filter brightness-0 invert opacity-70" 
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    const fallback = target.nextElementSibling as HTMLElement;
                    target.style.display = 'none';
                    if (fallback) fallback.style.display = 'block';
                  }} 
                />
                <span className="text-gray-300 font-semibold hidden">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
