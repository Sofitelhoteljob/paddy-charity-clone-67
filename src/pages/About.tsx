
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="relative h-80 bg-charity-dark flex items-center">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: `url(${'/placeholder.svg'})`,
            }}
          ></div>
          
          <div className="container mx-auto px-4 relative z-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-white text-xl max-w-2xl mx-auto">
              Learn more about our mission, history, and the impact we're making together.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Our Mission" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our mission is to create a world where every person has access to the basic necessities of life: clean water, nutritious food, quality education, and adequate healthcare. We believe that by addressing these fundamental needs, we can help communities thrive and build a more equitable world.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Our vision is a world where poverty and inequality are eliminated, where every child has the opportunity to reach their full potential, and where communities are empowered to create sustainable solutions to their most pressing challenges.
                </p>
                
                <Button className="btn-charity">Join Our Cause</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-20 bg-charity-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our History</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to global impact, our journey has been defined by compassion and commitment.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-charity-green text-white p-4 rounded-lg text-center">
                      <h3 className="font-bold text-xl">2010</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold mb-2">Foundation</h4>
                    <p className="text-gray-700">
                      Our organization was founded by a group of dedicated individuals who witnessed firsthand the challenges facing vulnerable communities and were determined to make a difference.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-charity-green text-white p-4 rounded-lg text-center">
                      <h3 className="font-bold text-xl">2015</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold mb-2">Expanding Our Reach</h4>
                    <p className="text-gray-700">
                      By 2015, we had expanded our operations to three countries, established partnerships with local organizations, and launched our first major fundraising campaign.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-charity-green text-white p-4 rounded-lg text-center">
                      <h3 className="font-bold text-xl">2020</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold mb-2">Global Impact</h4>
                    <p className="text-gray-700">
                      Today, we operate in over 10 countries, have helped thousands of individuals, and continue to grow our impact through innovative programs and dedicated volunteers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated individuals who guide our organization with passion and expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Team Member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">John Doe</h3>
                    <p className="text-charity-green mb-4">Executive Director</p>
                    <p className="text-gray-600 mb-4">
                      With over 15 years of experience in non-profit management, John brings vision and leadership to our organization.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
