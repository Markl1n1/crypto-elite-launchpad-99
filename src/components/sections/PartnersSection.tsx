import { useTranslations } from '@/hooks/useTranslations';
const partners = [{
  name: 'BlackRock',
  logo: 'https://logo.clearbit.com/blackrock.com'
}, {
  name: 'Two Sigma',
  logo: '/lovable-uploads/45dda7d1-3fda-4b64-8cce-43971e7d5555.png'
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
  logo: '/lovable-uploads/cf43e08d-c15e-4d10-89d3-df60aeffaf73.png'
}, {
  name: 'TD Ameritrade',
  logo: 'https://logo.clearbit.com/tdameritrade.com'
}, {
  name: 'E*TRADE',
  logo: '/lovable-uploads/907b4126-5457-4b23-95d7-80b80af3f7f2.png'
}, {
  name: 'Robinhood',
  logo: 'https://logo.clearbit.com/robinhood.com'
}, {
  name: 'Interactive Brokers',
  logo: '/lovable-uploads/da3a7c59-1495-46c4-801a-75f84b2e9d91.png'
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
  logo: '/lovable-uploads/cc72d12e-2e59-48cd-b6e8-69939c5909bf.png'
}, {
  name: 'Virtu Financial',
  logo: '/lovable-uploads/d023fa60-dcdc-4885-8b61-d918341857ff.png'
}, {
  name: 'Webull',
  logo: '/lovable-uploads/a8ab74ff-364a-46f6-8e26-0669271ceb2b.png'
}, {
  name: 'TradeStation',
  logo: '/lovable-uploads/feff8e9a-70c1-4be7-bb4c-89a461f275a0.png'
}, {
  name: 'Goldman Sachs',
  logo: '/lovable-uploads/72abe75f-33aa-4c9d-91fb-f35082cc876d.png'
}];
export const PartnersSection = () => {
  const {
    t
  } = useTranslations();
  return <section className="py-20 bg-[#1a1f35] overflow-hidden border-b-2" style={{
    borderColor: 'rgb(0 212 170 / 0.3)'
  }}>
      <div className="container mx-auto px-4">
        
        
        {/* Auto-scrolling carousel */}
        <div className="relative">
          <div className="flex animate-[scroll_20s_linear_infinite]">
            {[...partners, ...partners].map((partner, index) => <div key={index} className="flex-shrink-0 mx-8 h-16 flex items-center justify-center bg-white/5 rounded-lg px-6 hover:bg-white/10 transition-colors" style={{
            minWidth: '200px'
          }}>
                <img src={partner.logo} alt={partner.name} className="h-8 w-auto object-contain filter brightness-0 invert opacity-70" loading="eager" onError={e => {
              const target = e.currentTarget as HTMLImageElement;
              const textSpan = target.nextElementSibling as HTMLElement;
              target.style.display = 'none';
              if (textSpan) {
                textSpan.style.display = 'block';
                textSpan.className = 'text-gray-300 font-semibold text-sm';
              }
            }} />
                <span className="text-gray-300 font-semibold text-sm hidden">{partner.name}</span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};