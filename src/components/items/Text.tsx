import React from 'react';
import { cn } from '../../utils/cn';

interface TextProps {
  children: React.ReactNode;
  variant?: 'default' | 'lead' | 'small' | 'muted' | 'white';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

const Text: React.FC<TextProps> = ({ 
  children,
  variant = 'default',
  align = 'left',
  className = '',
  as = 'p',
  ...props
}) => {
  const Tag = as;
  
  const baseClasses = 'leading-relaxed';
  
  const variants = {
    default: 'text-gray-700 text-base',
    lead: 'text-gray-600 text-lg md:text-xl font-light',
    small: 'text-gray-600 text-sm',
    muted: 'text-gray-500 text-base',
    white: 'text-white text-base'
  };
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };
  
  return (
    <Tag 
      className={cn(
        baseClasses,
        variants[variant],
        alignClasses[align],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;
export { Text };