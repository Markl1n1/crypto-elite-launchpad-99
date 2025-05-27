
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RiskDisclosure = () => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-[#00d4aa] hover:text-[#00d4aa]/80">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-[#00d4aa]">Risk Disclosure</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Investment Risk</h2>
              <p>All investments involve risk, including the potential loss of principal. Past performance does not guarantee future results.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Market Volatility</h2>
              <p>Financial markets can be highly volatile. Prices of securities can fluctuate widely and unpredictably.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">AI Trading Risks</h2>
              <p>AI-powered trading systems, while sophisticated, are not infallible and may experience technical failures or make incorrect predictions.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Leverage Risk</h2>
              <p>If leverage is used, it can amplify both gains and losses, potentially resulting in losses greater than your initial investment.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Regulatory Risk</h2>
              <p>Changes in regulations or laws may affect the availability or profitability of trading strategies.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Recommendation</h2>
              <p>You should carefully consider whether trading is appropriate for you in light of your experience, objectives, financial resources, and other relevant circumstances.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosure;
