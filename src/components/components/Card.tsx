import React from 'react';
import type { CardProps } from '../../types/components';
import { cn } from '../../utils/cn';

const Card: React.FC<CardProps> = ({ 
  variant = 'elevated',
  interactive = true,
  children,
  className = '',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl transition-all duration-300';
  
  const variants = {
    elevated: 'p-6 shadow-md',
    feature: 'p-6 border border-gray-200',
    value: 'p-6 bg-gradient-to-br from-brand-light-blue to-brand-light-green text-center',
    testimonial: 'p-8 bg-gray-50 relative'
  };
  
  const interactiveClasses = interactive 
    ? 'hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-pointer' 
    : '';
  
  return (
    <div 
      className={cn(
        baseClasses,
        variants[variant],
        interactiveClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
export { Card };