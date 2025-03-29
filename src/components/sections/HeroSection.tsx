
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/lovable-uploads/7085d968-6b79-4a3b-bb21-63e520fe1316.png',
    '/lovable-uploads/7f3768c6-6248-4ddd-b8b6-bf4924a13f51.png',
    '/lovable-uploads/5cb212b8-06fa-400f-92b8-ae726204590b.png'
  ];

  useEffect(() => {
    // Verify images are loading by logging to console
    console.log("Hero images to load:", images);
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] bg-charity-dark flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      
      {/* Use background image fallback in case direct images don't load */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: 'background-image 1s ease-in-out'
        }}
      />
      
      {/* Original image elements */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000 ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl text-white">
          <h3 className="text-lg md:text-xl mb-3 font-medium">Ready to make a difference?</h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Together We Can <span className="text-charity-green">Change</span> Lives
          </h1>
          <p className="mb-8 text-lg opacity-90">
            Join us in our mission to provide education, clean water, and nutrition to children in need. 
            Every small act of kindness can make a huge difference in someone's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-charity text-lg py-3 px-8">Donate Now</Button>
            <Button variant="outline" className="btn-charity-outline text-lg py-3 px-8 border-white hover:border-charity-green">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
