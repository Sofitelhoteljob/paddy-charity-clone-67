
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "CMA CGM",
      logo: "/lovable-uploads/c8737198-458f-489f-a934-2cffce15baa2.png",
    },
    {
      name: "Orange",
      logo: "/lovable-uploads/37e4d3a0-fd55-4823-97d8-5862a044b6ff.png",
    },
    {
      name: "Snowflake",
      logo: "/lovable-uploads/28481528-8d17-4074-a489-58090f7f6769.png",
    },
    {
      name: "IBM",
      logo: "/lovable-uploads/24667a68-48f2-4e10-bf6f-919244aba26d.png",
    },
    {
      name: "MongoDB",
      logo: "/lovable-uploads/2eef9939-1f9b-4862-8132-0157aee6af0c.png",
    },
    {
      name: "MARS",
      logo: "/lovable-uploads/61478e6a-e900-41e1-a7fd-122fa51c1023.png",
    },
    {
      name: "Helsing",
      logo: "/lovable-uploads/c892a3cb-69da-4560-a00d-cd1efaa88f44.png",
    },
    {
      name: "France Travail",
      logo: "/lovable-uploads/d5f0b1e8-d26b-4f6d-9a83-005d9a563e0a.png",
    },
  ];

  return (
    <section className="py-16 bg-charity-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">OUR CORPORATE SPONSORS</h2>
          <p className="text-gray-600">We're grateful for the support of these organizations</p>
        </div>
        
        <div className="relative">
          <Carousel className="w-full py-6" opts={{ loop: true }}>
            <CarouselContent className="-ml-1">
              {sponsors.map((sponsor, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
                  <div className="p-4 flex flex-col items-center justify-center">
                    <div className="h-24 flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} logo`} 
                        className="max-h-16 max-w-[160px] object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 rounded-full" />
              <CarouselNext className="relative static right-0 translate-y-0 rounded-full" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
