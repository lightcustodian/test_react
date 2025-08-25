import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';

const AboutUsPageSimple: React.FC = () => {
  return (
    <div className="min-h-screen">
      <MegaNavigation />
      
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">About Us - Test Page</h1>
          <p className="text-center text-xl">This is a test to see if the route is working.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUsPageSimple;
export { AboutUsPageSimple };