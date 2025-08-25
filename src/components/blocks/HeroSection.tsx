import React from 'react';
import type { HeroSectionProps } from '../../types/blocks';
import { Button } from '../items/Button';
import { StatItem } from '../components/StatItem';
import { cn } from '../../utils/cn';

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title,
  subtitle,
  stats = [],
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  showStats = true,
  className = ''
}) => (
  <section 
    className={cn(
      'relative py-32 text-center text-white overflow-hidden',
      className
    )}
    style={{
      backgroundImage: `linear-gradient(135deg, rgba(10, 15, 28, 0.85), rgba(18, 94, 173, 0.7)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-brand-blue/15"></div>
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-brand-green/5 to-transparent"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <h1 className="mb-12 leading-tight text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent animate-title-glow">
        {title}
      </h1>
      <p className="text-xl md:text-2xl mb-16 max-w-5xl mx-auto leading-relaxed text-white/95 font-light">
        {subtitle}
      </p>
      
      {showStats && stats.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      )}
      
      <div className="flex flex-row gap-6 justify-center items-center">
        {primaryCTA && (
          <Button 
            variant="primary" 
            size="large" 
            icon={primaryCTA.icon} 
            className="min-w-80"
            onClick={primaryCTA.onClick}
          >
            {primaryCTA.text}
          </Button>
        )}
        {secondaryCTA && (
          <Button 
            variant="secondary" 
            size="large" 
            icon={secondaryCTA.icon} 
            className="min-w-72"
            onClick={secondaryCTA.onClick}
          >
            {secondaryCTA.text}
          </Button>
        )}
      </div>
    </div>
  </section>
);

export default HeroSection;
export { HeroSection };