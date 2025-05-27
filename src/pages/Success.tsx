
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Success = () => {
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
            <h1 className="text-3xl font-bold mb-4">Application Successful!</h1>
            <p className="text-gray-300 text-lg">
              You successfully applied for the Incite AI program. Our manager will call you during the next 20 minutes.
            </p>
          </div>
          
          <Link to="/">
            <Button className="bg-[#00d4aa] hover:bg-[#00d4aa]/90 text-black font-semibold">
              Return to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;
