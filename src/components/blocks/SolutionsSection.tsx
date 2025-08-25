"use client"

import React from 'react';
import type { ServiceGridProps } from '../../types/blocks';

const SolutionsSection: React.FC<ServiceGridProps> = ({ 
  title,
  subtitle,
  services = []
}) => (
  <section style={{padding: '80px 0', background: 'white'}}>
    <div className="container mx-auto px-5">
      <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', color: '#125EAD', fontWeight: 700}}>
        {title}
      </h2>
      {subtitle && (
        <p style={{textAlign: 'center', marginBottom: '3rem', color: '#666', fontSize: '1.1rem'}}>
          {subtitle}
        </p>
      )}
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px'}}>
        {services.map((service, index) => (
          <div 
            key={index}
            className="hover-card" 
            style={{
              background: 'white', 
              padding: '30px', 
              borderRadius: '8px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
              const iconCircle = e.currentTarget.querySelector('.solution-icon-circle') as HTMLElement;
              const icon = e.currentTarget.querySelector('.solution-icon-circle i') as HTMLElement;
              if (iconCircle) iconCircle.style.backgroundColor = '#125EAD';
              if (icon) icon.style.color = '#4BB74E';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              const iconCircle = e.currentTarget.querySelector('.solution-icon-circle') as HTMLElement;
              const icon = e.currentTarget.querySelector('.solution-icon-circle i') as HTMLElement;
              if (iconCircle) iconCircle.style.backgroundColor = '#4BB74E';
              if (icon) icon.style.color = '#125EAD';
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
              <div 
                className="solution-icon-circle" 
                style={{
                  width: '50px',
                  height: '50px',
                  background: '#4BB74E',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease'
                }}
              >
                <i 
                  className={service.icon} 
                  style={{
                    color: '#125EAD',
                    fontSize: '20px',
                    transition: 'color 0.3s ease'
                  }}
                />
              </div>
              <h3 style={{color: '#125EAD', fontSize: '1.4rem', margin: 0, fontWeight: 600}}>
                {service.title}
              </h3>
            </div>
            <p style={{marginBottom: '20px', lineHeight: 1.6}}>{service.description}</p>
            {service.features && service.features.length > 0 && (
              <ul style={{listStyle: 'none', padding: 0}}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{marginBottom: '10px'}}>
                    <i className="fas fa-check" style={{color: '#4BB74E', marginRight: '10px'}} />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
export { SolutionsSection };