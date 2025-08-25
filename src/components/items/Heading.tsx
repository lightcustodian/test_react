import React from 'react';
import { cn } from '../../utils/cn';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'gradient' | 'white';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ 
  level = 2,
  children,
  variant = 'default',
  align = 'left',
  className = '',
  ...props
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseClasses = 'font-bold leading-tight';
  
  const sizeClasses = {
    1: 'text-5xl md:text-6xl lg:text-7xl mb-6',
    2: 'text-3xl md:text-4xl lg:text-5xl mb-4',
    3: 'text-2xl md:text-3xl mb-3',
    4: 'text-xl md:text-2xl mb-2',
    5: 'text-lg md:text-xl mb-2',
    6: 'text-base md:text-lg mb-1'
  };
  
  const variants = {
    default: 'text-gray-900',
    primary: 'text-brand-blue',
    gradient: 'bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent',
    white: 'text-white'
  };
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  return React.createElement(
    Tag,
    {
      className: cn(
        baseClasses,
        sizeClasses[level],
        variants[variant],
        alignClasses[align],
        className
      ),
      ...props
    },
    children
  );
};

export default Heading;
export { Heading };