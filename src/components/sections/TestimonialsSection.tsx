
import React from 'react';
import { Button } from "@/components/ui/button";
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Paddy Demo helped build a water well in our village that has changed our lives. Our children now have access to clean water and can focus on education.",
      author: "Sarah Kamau",
      location: "Nairobi, Kenya",
      image: "/placeholder.svg"
    },
    {
      quote: "The educational resources provided by this charity have opened doors for our community. Now our children have a chance at a brighter future.",
      author: "Michael Okonkwo",
      location: "Lagos, Nigeria",
      image: "/placeholder.svg"
    },
    {
      quote: "After the floods destroyed our home, Paddy Demo was the first to offer aid. They didn't just provide temporary shelter, they helped us rebuild our lives.",
      author: "Aisha Rahman",
      location: "Dhaka, Bangladesh",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">TESTIMONIALS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from the people whose lives have been transformed through our work and your generous support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-charity-light rounded-lg shadow-md p-6 relative">
              <div className="absolute top-6 left-6 text-charity-green opacity-20">
                <Quote size={48} />
              </div>
              <div className="pt-8 px-4 pb-4 relative z-10">
                <p className="italic text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="btn-charity">Share Your Story</Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
