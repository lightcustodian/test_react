import React from 'react';
import { cn } from '../../utils/cn';

interface NumberedBadgeProps {
  number: number;
  variant?: 'default' | 'primary' | 'success' | 'large';
  className?: string;
}

const NumberedBadge: React.FC<NumberedBadgeProps> = ({
  number,
  variant = 'default',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-300';
  
  const variants = {
    default: 'w-8 h-8 bg-gray-200 text-gray-700 text-sm',
    primary: 'w-10 h-10 bg-brand-blue text-white text-base hover:bg-brand-green',
    success: 'w-10 h-10 bg-brand-green text-white text-base hover:scale-110',
    large: 'w-16 h-16 bg-brand-blue text-white text-2xl hover:bg-brand-green hover:scale-105'
  };
  
  return (
    <div className={cn(baseClasses, variants[variant], className)}>
      {number}
    </div>
  );
};

export default NumberedBadge;
export { NumberedBadge };