"use client"

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
  className = '',
  style = {}
}) => (
  <section 
    className={cn(
      'relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden',
      className
    )}
    style={{
      backgroundImage: backgroundImage 
        ? `linear-gradient(135deg, rgba(10, 15, 28, 0.85), rgba(18, 94, 173, 0.7)), url(${backgroundImage})`
        : 'linear-gradient(135deg, #125EAD 0%, #1a6cc0 50%, #4BB74E 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      ...style
    }}
  >
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-brand-blue/15"></div>
      <div className="absolute inset-0 animate-slow-pulse bg-gradient-to-r from-transparent via-brand-green/5 to-transparent"></div>
    </div>
    
    <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10 -mt-8">
      <h1 className="mb-8 leading-tight text-5xl md:text-6xl lg:text-7xl font-bold text-transparent animate-gradient-shift" style={{
        backgroundImage: 'linear-gradient(90deg, #2563eb, #10b981, #2563eb, #10b981)',
        backgroundSize: '400% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text'
      }}>
        {title}
      </h1>
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes slow-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
        
        .animate-slow-pulse {
          animation: slow-pulse 4s ease-in-out infinite;
        }
      `}</style>
      <p className="text-xl md:text-2xl mb-32 max-w-5xl mx-auto leading-relaxed text-white/95 font-light">
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
            className="!px-6 !py-4"
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