
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeatureCards from '@/components/sections/FeatureCards';
import CausesSection from '@/components/sections/CausesSection';
import AboutSection from '@/components/sections/AboutSection';
import MissionSection from '@/components/sections/MissionSection';
import HelpSection from '@/components/sections/HelpSection';
import ShopSection from '@/components/sections/ShopSection';
import VolunteersSection from '@/components/sections/VolunteersSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ImpactCounterSection from '@/components/sections/ImpactCounterSection';
import EventsSection from '@/components/sections/EventsSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import DonationCalculatorSection from '@/components/sections/DonationCalculatorSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureCards />
        <CausesSection />
        <ImpactCounterSection />
        <AboutSection />
        <TestimonialsSection />
        <MissionSection />
        <DonationCalculatorSection />
        <EventsSection />
        <HelpSection />
        <BlogPreviewSection />
        <VolunteersSection />
        <ShopSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
