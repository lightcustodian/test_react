import React from 'react';
import type { IconCircleProps } from '../../types/components';
import { cn } from '../../utils/cn';

const IconCircle: React.FC<IconCircleProps> = ({ 
  icon, 
  variant = 'trust',
  size = 'default',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full transition-all duration-300';
  
  const variants = {
    trust: 'bg-brand-green text-white hover:-translate-y-1',
    expertise: 'bg-brand-blue text-white hover:-translate-y-1', 
    innovation: 'bg-brand-green text-brand-blue hover:-translate-y-1',
    growth: 'bg-brand-blue text-brand-green hover:-translate-y-1'
  };
  
  const sizes = {
    small: 'w-8 h-8 text-sm',
    default: 'w-12 h-12 text-lg',
    large: 'w-16 h-16 text-xl'
  };
  
  return (
    <div 
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
    >
      <i className={icon}></i>
    </div>
  );
};

export default IconCircle;
export { IconCircle };