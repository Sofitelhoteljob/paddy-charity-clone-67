
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventsSection from '@/components/sections/EventsSection';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import NewsletterSection from '@/components/sections/NewsletterSection';

const Events = () => {
  const pastEvents = [
    {
      title: "Charity Run 2022",
      date: "December 5, 2022",
      location: "Kololo Airstrip, Kampala",
      attendees: 245,
      description: "Our annual charity run raised over $15,000 for educational programs.",
      image: "/placeholder.svg"
    },
    {
      title: "Community Health Workshop",
      date: "September 18, 2022",
      location: "Makerere University, Kampala",
      attendees: 120,
      description: "Health professionals volunteered to provide free check-ups and health education.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-charity-light">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Events</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us at our events to connect with our community, support our mission, and make a difference together.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <EventsSection />
            </TabsContent>
            <TabsContent value="past">
              <div className="space-y-8">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar size={18} className="text-charity-green mr-2" />
                          <span className="mr-4">{event.date}</span>
                          <MapPin size={18} className="text-charity-green mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Users size={18} className="text-charity-green mr-2" />
                          <span>{event.attendees} attendees</span>
                        </div>
                        <p className="text-gray-600 mb-6">{event.description}</p>
                        <Button variant="outline" className="btn-charity-outline">View Photos</Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">HOST AN EVENT</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Want to organize a fundraiser or awareness event for our cause? Get in touch with our team to learn how we can support your initiative.
              </p>
            </div>
            <div className="text-center">
              <Button className="btn-charity">Contact Our Events Team</Button>
            </div>
          </div>
        </div>
        
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Events;
