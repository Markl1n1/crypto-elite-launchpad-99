export const NewsSection = () => {
  return (
    <section className="py-12 bg-[#0a0e1a] border-t border-b" style={{ borderColor: 'rgba(0, 212, 170, 0.3)', borderTopWidth: '1px', borderBottomWidth: '1px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">We are in the News</h2>
        </div>

        <div className="flex justify-center items-center space-x-12 md:space-x-16 flex-wrap gap-8">
          {/* Malaysia */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/54783271-13c1-455d-b3d5-569074348364.png" 
              alt="Malaysia News" 
              className="h-12 object-contain filter brightness-200 contrast-150"
            />
          </div>

          {/* Check Mark */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/8951a6ee-d9c9-4bb0-ba61-dfc85fe8311a.png" 
              alt="Verified" 
              className="h-12 object-contain"
            />
          </div>

          {/* Reuters */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/2a51ebac-f33b-4a6f-b85c-567b1144db94.png" 
              alt="Reuters" 
              className="h-12 object-contain filter brightness-200 contrast-150"
            />
          </div>

          {/* Finance Magnates */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/6d54be53-aa67-4c52-9d3e-2ee6e44ee6af.png" 
              alt="Finance Magnates" 
              className="h-12 object-contain filter brightness-200 contrast-150"
            />
          </div>

          {/* Finance Feeds */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/da25e029-d867-4098-8110-b5c20e33d8b0.png" 
              alt="Finance Feeds" 
              className="h-12 object-contain filter brightness-200 contrast-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
