import React from 'react';
import { cn } from '../../utils/cn';

interface DividerProps {
  variant?: 'default' | 'thick' | 'dashed' | 'dotted';
  color?: 'default' | 'primary' | 'light';
  spacing?: 'small' | 'default' | 'large';
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ 
  variant = 'default',
  color = 'default',
  spacing = 'default',
  className = ''
}) => {
  const baseClasses = 'w-full';
  
  const variants = {
    default: 'border-t',
    thick: 'border-t-2',
    dashed: 'border-t border-dashed',
    dotted: 'border-t border-dotted'
  };
  
  const colors = {
    default: 'border-gray-300',
    primary: 'border-brand-blue',
    light: 'border-gray-200'
  };
  
  const spacings = {
    small: 'my-2',
    default: 'my-4',
    large: 'my-8'
  };
  
  return (
    <hr 
      className={cn(
        baseClasses,
        variants[variant],
        colors[color],
        spacings[spacing],
        className
      )}
    />
  );
};

export default Divider;
export { Divider };