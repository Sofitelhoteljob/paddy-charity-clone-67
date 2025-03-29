
import React from 'react';
import { Droplet, BookOpen, Utensils, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MissionSection = () => {
  const missions = [
    {
      icon: <Droplet className="w-12 h-12 text-charity-green" />,
      title: 'Water Scarcity',
      description: 'Providing clean water to communities facing water scarcity around the world.',
      link: '#'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-charity-green" />,
      title: 'Education',
      description: 'Supporting education initiatives to help children access quality learning.',
      link: '#'
    },
    {
      icon: <Utensils className="w-12 h-12 text-charity-green" />,
      title: 'Meal Distribution',
      description: 'Distributing nutritious meals to hungry children and families in need.',
      link: '#'
    },
    {
      icon: <Heart className="w-12 h-12 text-charity-green" />,
      title: 'Partnerships',
      description: 'Working with local and global partners to maximize our impact.',
      link: '#'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is to create sustainable solutions to the most pressing challenges 
            facing vulnerable communities. We work across these key areas:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((mission, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                {mission.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
              <p className="text-gray-600 mb-4">{mission.description}</p>
              <Button variant="outline" className="btn-charity-outline">
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
