
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-[600px] bg-charity-dark flex items-center">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url(${'/lovable-uploads/771f1e92-6069-446f-b6af-def7f12fa4a8.png'})`,
          backgroundPosition: 'center 25%'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl text-white">
          <h3 className="text-lg md:text-xl mb-3 font-medium">Ready to make a difference?</h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Charity <span className="text-charity-green">Donate</span> Help
          </h1>
          <p className="mb-8 text-lg opacity-90">
            We are a non-profit organization working to help those in need around the world.
            Join us in making a difference in the lives of millions of people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-charity text-lg py-3 px-8">Donate Now</Button>
            <Button variant="outline" className="btn-charity-outline text-lg py-3 px-8 border-white hover:border-charity-green text-zinc-950">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
