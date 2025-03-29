
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CausesSection from '@/components/sections/CausesSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

const Causes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-charity-light">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Causes</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Help us make a difference in these critical areas where your support can transform lives and communities.
            </p>
          </div>
        </div>
        <CausesSection />
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">HOW YOUR DONATION HELPS</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your contributions directly support our efforts to create lasting change in communities around the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-charity-light rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">$25 Donation</h3>
                <p className="text-gray-600">Provides clean drinking water to a family for one month, preventing waterborne diseases.</p>
              </div>
              <div className="p-6 bg-charity-light rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">$50 Donation</h3>
                <p className="text-gray-600">Supplies educational materials for a classroom of children in underserved communities.</p>
              </div>
              <div className="p-6 bg-charity-light rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">$100 Donation</h3>
                <p className="text-gray-600">Funds medical supplies and services for refugees and displaced individuals.</p>
              </div>
            </div>
          </div>
        </div>
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Causes;
