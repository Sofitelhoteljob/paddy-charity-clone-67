
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const stats = [
    { amount: '$50,000', label: 'Donations' },
    { amount: '$150,000', label: 'Fundraised' },
    { amount: '$245,000', label: 'Charity' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/placeholder.svg" 
              alt="About Us" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">WHO WE ARE?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are a dedicated team of professionals and volunteers committed to making a positive 
              impact in the lives of those in need. Our organization focuses on providing humanitarian 
              aid, education, healthcare, and sustainable development programs in underserved communities 
              around the world.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Founded in 2010, our charity has grown to reach thousands of beneficiaries across multiple 
              countries. We believe in transparency, accountability, and the power of collective action 
              to create lasting change.
            </p>
            
            <Button className="btn-charity mb-10">Learn More</Button>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-charity-dark text-white p-4 rounded-lg text-center">
                  <div className="text-xl font-bold">{stat.amount}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
