
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

interface VolunteerCardProps {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  }
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ name, role, image, socialLinks }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-charity-green mb-4">{role}</p>
        
        <div className="flex justify-center space-x-4">
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} className="text-gray-600 hover:text-charity-green">
              <Facebook size={20} />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} className="text-gray-600 hover:text-charity-green">
              <Twitter size={20} />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} className="text-gray-600 hover:text-charity-green">
              <Instagram size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const VolunteersSection = () => {
  const volunteers = [
    {
      name: "James Smith",
      role: "Program Director",
      image: "/placeholder.svg",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Charlotte Mills",
      role: "Volunteer Coordinator",
      image: "/placeholder.svg",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Ethan Chambers",
      role: "Event Organizer",
      image: "/placeholder.svg",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sophia Rogers",
      role: "Community Liaison",
      image: "/placeholder.svg",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-charity-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">OUR VOLUNTEERS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated volunteers who make our work possible. Their commitment and passion 
            drive our mission forward every day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {volunteers.map((volunteer, index) => (
            <VolunteerCard 
              key={index}
              name={volunteer.name}
              role={volunteer.role}
              image={volunteer.image}
              socialLinks={volunteer.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteersSection;
