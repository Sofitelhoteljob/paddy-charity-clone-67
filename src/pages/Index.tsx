
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeatureCards from '@/components/sections/FeatureCards';
import CausesSection from '@/components/sections/CausesSection';
import AboutSection from '@/components/sections/AboutSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import MissionSection from '@/components/sections/MissionSection';
import HelpSection from '@/components/sections/HelpSection';
import ShopSection from '@/components/sections/ShopSection';
import VolunteersSection from '@/components/sections/VolunteersSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureCards />
        <CausesSection />
        <AboutSection />
        <SponsorsSection />
        <MissionSection />
        <HelpSection />
        <ShopSection />
        <VolunteersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
