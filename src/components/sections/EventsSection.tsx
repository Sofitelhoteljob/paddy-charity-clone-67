
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, time, location, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar size={18} className="text-charity-green mr-2" />
          <span className="mr-4">{date}</span>
          <Clock size={18} className="text-charity-green mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={18} className="text-charity-green mr-2" />
          <span>{location}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button className="btn-charity">Register Now</Button>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const events = [
    {
      title: "Annual Charity Gala",
      date: "October 15, 2023",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Ballroom, Serena Hotel, Kampala",
      description: "Join us for an evening of inspiration, entertainment, and fundraising to support our educational programs across East Africa.",
      image: "/placeholder.svg"
    },
    {
      title: "Community Clean-up Day",
      date: "November 5, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Nakivubo Channel, Kampala",
      description: "Be part of our volunteer team working to clean up the Nakivubo Channel and surrounding areas to improve local water quality.",
      image: "/placeholder.svg"
    },
    {
      title: "Charity Run for Education",
      date: "December 3, 2023",
      time: "7:00 AM - 11:00 AM",
      location: "Kololo Airstrip, Kampala",
      description: "Run or walk to raise funds for our educational initiatives. Choose between 5K, 10K, or half marathon distances.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-charity-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">UPCOMING EVENTS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at these upcoming events to learn more about our work, support our cause, and become part of our community.
          </p>
        </div>
        
        <div className="space-y-8">
          {events.map((event, index) => (
            <EventCard 
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              image={event.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-charity-outline">View All Events</Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
