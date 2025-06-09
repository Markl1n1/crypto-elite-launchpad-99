
export const NewsSection = () => {
  return (
    <section className="py-20 bg-[#0a0e1a] border-b-2 border-[#00d4aa]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">We are in the News</h2>
        </div>

        <div className="flex justify-center items-center space-x-12 md:space-x-16 flex-wrap gap-8">
          {/* Bloomberg */}
          <div className="flex items-center justify-center">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="40" fill="#00d4aa" opacity="0.1" rx="8"/>
              <text x="60" y="25" textAnchor="middle" fill="#00d4aa" fontSize="14" fontWeight="bold" fontFamily="Inter">Bloomberg</text>
            </svg>
          </div>

          {/* Reuters */}
          <div className="flex items-center justify-center">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="40" fill="#00d4aa" opacity="0.1" rx="8"/>
              <text x="60" y="25" textAnchor="middle" fill="#00d4aa" fontSize="14" fontWeight="bold" fontFamily="Inter">Reuters</text>
            </svg>
          </div>

          {/* Financial Times */}
          <div className="flex items-center justify-center">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="40" fill="#00d4aa" opacity="0.1" rx="8"/>
              <text x="60" y="25" textAnchor="middle" fill="#00d4aa" fontSize="12" fontWeight="bold" fontFamily="Inter">Financial Times</text>
            </svg>
          </div>

          {/* Wall Street Journal */}
          <div className="flex items-center justify-center">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="40" fill="#00d4aa" opacity="0.1" rx="8"/>
              <text x="60" y="22" textAnchor="middle" fill="#00d4aa" fontSize="11" fontWeight="bold" fontFamily="Inter">Wall Street</text>
              <text x="60" y="32" textAnchor="middle" fill="#00d4aa" fontSize="11" fontWeight="bold" fontFamily="Inter">Journal</text>
            </svg>
          </div>

          {/* CNBC */}
          <div className="flex items-center justify-center">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="40" fill="#00d4aa" opacity="0.1" rx="8"/>
              <text x="60" y="25" textAnchor="middle" fill="#00d4aa" fontSize="14" fontWeight="bold" fontFamily="Inter">CNBC</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
