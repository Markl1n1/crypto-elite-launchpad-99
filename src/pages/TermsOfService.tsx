
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-[#00d4aa]">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
              <p>By using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Trading Services</h2>
              <p>Our AI-powered trading platform provides investment opportunities. All trading involves risk, and past performance does not guarantee future results.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">User Responsibilities</h2>
              <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Limitation of Liability</h2>
              <p>We shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of our services.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Modifications</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
