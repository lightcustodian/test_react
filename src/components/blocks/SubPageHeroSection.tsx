"use client"

import React from 'react';
import type { HeroSectionProps } from '../../types/blocks';
import { StatItem } from '../components/StatItem';
import { cn } from '../../utils/cn';

const SubPageHeroSection: React.FC<HeroSectionProps> = ({ 
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
      'relative flex items-center justify-center text-center text-white overflow-hidden',
      className
    )}
    style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: backgroundImage 
        ? `linear-gradient(135deg, rgba(10, 15, 28, 0.9), rgba(18, 94, 173, 0.8)), url(${backgroundImage})`
        : 'linear-gradient(135deg, rgba(18, 94, 173, 0.95) 0%, rgba(26, 108, 192, 0.9) 50%, rgba(75, 183, 78, 0.95) 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      ...style
    }}
  >
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-transparent to-brand-blue/10"></div>
      <div className="absolute inset-0 animate-subtle-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>
    
    <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10 flex flex-col items-center justify-center h-full">
      <h1 className="mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        {title}
      </h1>
      
      {subtitle && (
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed text-center">
          {subtitle}
        </p>
      )}

      {showStats && stats.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 mb-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      )}

      {(primaryCTA || secondaryCTA) && (
        <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
          {primaryCTA && (
            <a 
              href={primaryCTA.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 rounded-lg text-sm font-semibold transition-all hover:bg-gray-100 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              {primaryCTA.icon && <i className={primaryCTA.icon}></i>}
              {primaryCTA.text}
            </a>
          )}
          {secondaryCTA && (
            <a 
              href={secondaryCTA.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-white border-2 border-white rounded-lg text-sm font-semibold transition-all hover:bg-white hover:text-blue-600 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              {secondaryCTA.icon && <i className={secondaryCTA.icon}></i>}
              {secondaryCTA.text}
            </a>
          )}
        </div>
      )}
    </div>

    <style jsx>{`
      @keyframes subtle-pulse {
        0%, 100% {
          opacity: 0;
        }
        50% {
          opacity: 0.3;
        }
      }
      
      .animate-subtle-pulse {
        animation: subtle-pulse 6s ease-in-out infinite;
      }
    `}</style>
  </section>
);

export default SubPageHeroSection;
export { SubPageHeroSection };