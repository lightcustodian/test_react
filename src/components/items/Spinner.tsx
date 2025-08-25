import React from 'react';
import { cn } from '../../utils/cn';

interface SpinnerProps {
  size?: 'small' | 'default' | 'large';
  color?: 'default' | 'primary' | 'white';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'default',
  color = 'default',
  className = ''
}) => {
  const sizes = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };
  
  const colors = {
    default: 'text-gray-400',
    primary: 'text-brand-blue',
    white: 'text-white'
  };
  
  return (
    <div className={cn('inline-block', className)}>
      <div 
        className={cn(
          'animate-spin rounded-full border-2 border-solid border-current border-r-transparent',
          sizes[size],
          colors[color]
        )}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
export { Spinner };