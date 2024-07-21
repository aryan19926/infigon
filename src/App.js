// App.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import SoftwareSection from './components/SoftwareSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Analysis from './components/Analysis';
import Explore from './components/Explore';

const App = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <Analysis/>
      <FeaturesSection />
      <SoftwareSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Explore/>
      <Footer />
    </div>
  );
};

export default App;
