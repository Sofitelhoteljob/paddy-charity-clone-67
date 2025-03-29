
import React from 'react';
import { Heart, Users, HandHeart, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HelpSection = () => {
  const helpOptions = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Give to Charity',
      description: 'Make a one-time or recurring donation to support our programs',
      buttonText: 'DONATE NOW',
      link: '#'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Be An Ambassador',
      description: 'Spread awareness and advocate for our cause in your community',
      buttonText: 'JOIN US',
      link: '#'
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: 'Host An Event',
      description: 'Organize a fundraising event to help raise funds for our causes',
      buttonText: 'CONTACT US',
      link: '#'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Become Volunteer',
      description: 'Volunteer your time and skills to help with our various programs',
      buttonText: 'JOIN US',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-charity-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4 text-white">HOW CAN YOU HELP US</h2>
          <p className="text-white opacity-90 max-w-2xl mx-auto">
            There are many ways you can contribute to our mission and help make a difference.
            Choose the option that works best for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpOptions.map((option, index) => (
            <div key={index} className="bg-charity-dark p-8 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{option.title}</h3>
              <p className="opacity-80 mb-6">{option.description}</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black font-medium">
                {option.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
