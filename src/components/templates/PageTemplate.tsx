import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import type { HeroSectionProps } from '../../types/blocks';

interface PageTemplateProps {
  heroData?: HeroSectionProps;
  children: React.ReactNode;
  showHero?: boolean;
  showFooter?: boolean;
  showNavigation?: boolean;
  className?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ 
  heroData,
  children, 
  showHero = true,
  showFooter = true,
  showNavigation = true,
  className = ''
}) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      {showNavigation && <MegaNavigation />}
      
      <div>
        {showHero && heroData && (
          <HeroSection {...heroData} className="pt-20 pb-32" />
        )}
        
        {children}
      </div>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default PageTemplate;
export { PageTemplate };