"use client"

import React from 'react';
import type { TestimonialSectionProps } from '../../types/blocks';

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title,
  subtitle,
  testimonials = []
}) => (
  <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', textAlign: 'center', padding: '80px 0'}}>
    <div className="container mx-auto px-8 md:px-12 lg:px-16">
      <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700}}>{title}</h2>
      {subtitle && (
        <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>{subtitle}</p>
      )}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px'}}>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="hover-card" 
            style={{
              background: 'rgba(255, 255, 255, 0.3)', 
              backdropFilter: 'blur(10px)',
              color: '#fff', 
              padding: '30px', 
              borderRadius: '12px', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            <h4 style={{fontSize: '1.3rem', marginBottom: '15px', fontWeight: 600, color: '#98FF98'}}>
              {testimonial.organization}
            </h4>
            <p style={{marginBottom: '15px', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)'}}>"{testimonial.quote}"</p>
            <strong style={{color: 'rgba(255, 255, 255, 0.95)'}}>- {testimonial.author}</strong>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
export { TestimonialSection };