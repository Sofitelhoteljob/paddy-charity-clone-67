
import React from 'react';
import { Heart, HandHelping, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FeatureCards = () => {
  const features = [
    {
      icon: <Heart className="w-10 h-10 text-white" />,
      title: 'Volunteer',
      description: 'Become a volunteer and join our mission to make a difference in people\'s lives.',
      buttonText: 'Read More',
      background: 'bg-charity-green'
    },
    {
      icon: <HandHelping className="w-10 h-10 text-white" />,
      title: 'Fundraise',
      description: 'Organize fundraising events or start your own campaign to support our cause.',
      buttonText: 'Read More',
      background: 'bg-charity-dark'
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-white" />,
      title: 'Donate',
      description: 'Your generous donations help us continue our work and reach those in need.',
      buttonText: 'Read More',
      background: 'bg-charity-green'
    },
  ];

  return (
    <div className="container mx-auto px-4 -mt-28 relative z-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className={`${feature.background} p-8 rounded-lg text-white shadow-lg`}>
            <div className="flex items-center mb-6">
              {feature.icon}
              <h3 className="text-xl font-bold ml-4">{feature.title}</h3>
            </div>
            <p className="mb-6">{feature.description}</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-colors font-medium">
              {feature.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
