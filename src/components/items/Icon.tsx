import React from 'react';
import { cn } from '../../utils/cn';

interface IconProps {
  name: string;
  size?: 'small' | 'default' | 'large' | 'xlarge';
  color?: 'default' | 'primary' | 'secondary' | 'white' | 'muted';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name,
  size = 'default',
  color = 'default',
  className = ''
}) => {
  const sizes = {
    small: 'text-sm',
    default: 'text-base',
    large: 'text-2xl',
    xlarge: 'text-4xl'
  };
  
  const colors = {
    default: 'text-gray-700',
    primary: 'text-brand-blue',
    secondary: 'text-brand-green',
    white: 'text-white',
    muted: 'text-gray-400'
  };
  
  return (
    <i 
      className={cn(
        name,
        sizes[size],
        colors[color],
        className
      )}
    />
  );
};

export default Icon;
export { Icon };