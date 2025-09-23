"use client"

import React from 'react';
import type { ValuePropsSectionProps } from '../../types/blocks';

const ValuePropsSection: React.FC<ValuePropsSectionProps> = ({ 
  title,
  values = []
}) => {
  return (
    <section style={{background: 'white', padding: '80px 0'}}>
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
          {title}
        </h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px'}}>
          {values.map((value, index) => (
            <div 
              key={index}
              className="hover-card" 
              style={{
                textAlign: 'center', 
                padding: '30px', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                const icon = e.currentTarget.querySelector('.value-icon') as HTMLElement;
                if (icon) icon.style.color = '#125EAD';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                const icon = e.currentTarget.querySelector('.value-icon') as HTMLElement;
                if (icon) icon.style.color = '#4BB74E';
              }}
            >
              <div 
                className="value-icon" 
                style={{fontSize: '3rem', color: '#4BB74E', marginBottom: '20px', transition: 'color 0.3s ease'}}
              >
                <i className={value.icon}></i>
              </div>
              <h4 style={{marginBottom: '15px', fontWeight: 600, color: '#125EAD'}}>{value.title}</h4>
              <p style={{color: '#666', lineHeight: 1.6}}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
export { ValuePropsSection };