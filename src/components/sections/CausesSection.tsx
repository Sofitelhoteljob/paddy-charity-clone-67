
import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface CauseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  raised: number;
  goal: number;
}

const CauseCard: React.FC<CauseCardProps> = ({ title, description, imageSrc, raised, goal }) => {
  const progress = (raised / goal) * 100;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <Progress value={progress} className="h-2 bg-gray-200" />
          <div className="flex justify-between text-sm mt-2">
            <span className="font-semibold">Raised: ${raised.toLocaleString()}</span>
            <span className="text-gray-600">Goal: ${goal.toLocaleString()}</span>
          </div>
        </div>
        
        <Button className="btn-charity w-full">Donate Now</Button>
      </div>
    </div>
  );
};

const CausesSection = () => {
  const causes = [
    {
      title: "Refugees Are Suffering",
      description: "Help provide shelter, food, and medical aid to refugees fleeing conflict zones.",
      imageSrc: "/placeholder.svg",
      raised: 12500,
      goal: 25000
    },
    {
      title: "Need A Little Help",
      description: "Support children's education in underprivileged communities around the world.",
      imageSrc: "/placeholder.svg",
      raised: 35000,
      goal: 50000
    },
    {
      title: "Don't Waste Away",
      description: "Combat food waste and hunger by supporting our food distribution programs.",
      imageSrc: "/placeholder.svg",
      raised: 18000,
      goal: 30000
    }
  ];

  return (
    <section className="py-20 bg-charity-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">OUR CAUSE</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We focus on addressing the most pressing challenges facing communities worldwide.
            Your support helps us make a meaningful impact in these critical areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <CauseCard 
              key={index}
              title={cause.title}
              description={cause.description}
              imageSrc={cause.imageSrc}
              raised={cause.raised}
              goal={cause.goal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
