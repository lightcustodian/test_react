import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'default' | 'large';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full';
  
  const variants = {
    default: 'bg-gray-200 text-gray-700',
    primary: 'bg-brand-blue text-white',
    secondary: 'bg-brand-green text-white',
    success: 'bg-brand-green text-white',
    warning: 'bg-yellow-500 text-white',
    danger: 'bg-red-500 text-white'
  };
  
  const sizes = {
    small: 'px-2 py-0.5 text-xs',
    default: 'px-3 py-1 text-sm',
    large: 'px-4 py-1.5 text-base'
  };
  
  return (
    <span 
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
export { Badge };