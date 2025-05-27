
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Compliance = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-[#00d4aa]">Compliance</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Regulatory Compliance</h2>
              <p>Incite AI operates in compliance with applicable financial regulations and maintains appropriate licenses where required.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Anti-Money Laundering (AML)</h2>
              <p>We have implemented comprehensive AML policies and procedures to prevent money laundering and terrorist financing.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Know Your Customer (KYC)</h2>
              <p>All clients must complete our KYC process, which includes identity verification and suitability assessments.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Data Protection</h2>
              <p>We comply with applicable data protection laws, including GDPR, and maintain strict data security standards.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Client Fund Protection</h2>
              <p>Client funds are held in segregated accounts with reputable financial institutions to ensure maximum protection.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Reporting and Monitoring</h2>
              <p>We maintain comprehensive records and reporting systems to ensure full transparency and regulatory compliance.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
